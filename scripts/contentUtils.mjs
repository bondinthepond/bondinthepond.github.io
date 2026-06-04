import {readdir, readFile, writeFile, mkdir} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";

export const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export function resolveFromRoot(...parts) {
	return path.join(rootDir, ...parts);
}

export async function readMarkdownFile(filePath) {
	const raw = await readFile(filePath, "utf8");
	return parseMarkdown(raw);
}

export async function readMarkdownFolder(folderPath) {
	const files = await readdir(folderPath);
	const markdownFiles = files.filter((file) => file.endsWith(".md"));
	const entries = await Promise.all(
		markdownFiles.map(async (file) => ({
			file,
			...(await readMarkdownFile(path.join(folderPath, file))),
		})),
	);

	return entries.sort((a, b) => Number(a.frontmatter.order ?? 999) - Number(b.frontmatter.order ?? 999));
}

export function parseMarkdown(raw) {
	const {frontmatter, body} = splitFrontmatter(raw);
	return {
		frontmatter: parseFrontmatter(frontmatter),
		sections: parseSections(body),
		body,
	};
}

function splitFrontmatter(raw) {
	if (!raw.startsWith("---")) {
		return {frontmatter: "", body: raw};
	}

	const end = raw.indexOf("\n---", 3);
	if (end === -1) {
		return {frontmatter: "", body: raw};
	}

	return {
		frontmatter: raw.slice(3, end).trim(),
		body: raw.slice(end + 4).trim(),
	};
}

function parseFrontmatter(frontmatter) {
	const data = {};

	for (const line of frontmatter.split(/\r?\n/)) {
		const separator = line.indexOf(":");
		if (separator === -1) {
			continue;
		}

		const key = line.slice(0, separator).trim();
		const value = line.slice(separator + 1).trim();
		data[key] = parseValue(value);
	}

	return data;
}

function parseValue(value) {
	if (value.startsWith("[") && value.endsWith("]")) {
		return value
			.slice(1, -1)
			.split(",")
			.map((item) => item.trim())
			.filter(Boolean);
	}

	if (/^\d+$/.test(value)) {
		return Number(value);
	}

	return value.replace(/^["']|["']$/g, "");
}

function parseSections(body) {
	const sections = {};
	let currentTitle = "Intro";
	let currentLines = [];

	for (const line of body.split(/\r?\n/)) {
		const heading = line.match(/^##\s+(.+)$/);
		if (heading) {
			sections[currentTitle] = parseSectionLines(currentLines);
			currentTitle = heading[1].trim();
			currentLines = [];
		} else {
			currentLines.push(line);
		}
	}

	sections[currentTitle] = parseSectionLines(currentLines);
	return sections;
}

function parseSectionLines(lines) {
	const text = lines.join("\n").trim();
	const bullets = lines
		.map((line) => line.match(/^-\s+(.+)$/)?.[1]?.trim())
		.filter(Boolean);

	return {text, bullets};
}

export function sectionBullets(markdown, title) {
	return markdown.sections[title]?.bullets ?? [];
}

export function pipeListToObjects(items, keys) {
	return items.map((item) => {
		const parts = item.split("|").map((part) => part.trim());
		return Object.fromEntries(keys.map((key, index) => [key, parts[index] ?? ""]));
	});
}

export async function writeGeneratedFile(filePath, content) {
	await mkdir(path.dirname(filePath), {recursive: true});
	await writeFile(filePath, content);
}

export function keywordSet(text) {
	return new Set(
		text
			.toLowerCase()
			.split(/[^a-z0-9+#.]+/)
			.map((word) => word.trim())
			.filter((word) => word.length > 2),
	);
}

export function scoreText(text, keywords) {
	const words = keywordSet(text);
	let score = 0;

	for (const keyword of keywords) {
		if (words.has(keyword)) {
			score += 1;
		}
	}

	return score;
}
