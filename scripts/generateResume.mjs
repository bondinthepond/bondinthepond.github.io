import {readFile} from "node:fs/promises";
import {
	keywordSet,
	readMarkdownFile,
	readMarkdownFolder,
	resolveFromRoot,
	scoreText,
	sectionBullets,
	writeGeneratedFile,
} from "./contentUtils.mjs";

const args = parseArgs(process.argv.slice(2));
const profile = await readMarkdownFile(resolveFromRoot("content", "profile.md"));
const careerMaster = await readMarkdownFile(resolveFromRoot("content", "career-master.md"));
const experienceFiles = await readMarkdownFolder(resolveFromRoot("content", "experience"));

const focusText = await resolveFocusText(args);
const focusKeywords = keywordSet(focusText);
const outputPath = args.output ?? "content/resume/generated/resume.md";
const resume = buildResume({
	profile: profile.frontmatter,
	skillGroups: readSkillGroups(careerMaster),
	experience: experienceFiles,
	focusKeywords,
	focusText,
});

await writeGeneratedFile(resolveFromRoot(outputPath), resume);
console.log(`Generated ${outputPath}`);

function buildResume({profile, skillGroups, experience, focusKeywords, focusText}) {
	const lines = [
		`# ${profile.name}`,
		"",
		`${profile.title}`,
		"",
		`${profile.email} | ${profile.linkedin} | ${profile.github}`,
		"",
		"## Executive Summary",
		"",
		profile.subheadline,
		"",
	];

	if (focusText) {
		lines.push(`Resume focus: ${focusText.slice(0, 180).trim()}${focusText.length > 180 ? "..." : ""}`, "");
	}

	lines.push("## Core Skills", "");
	for (const group of skillGroups) {
		lines.push(`**${group.title}:** ${group.items.join("; ")}`);
	}

	lines.push("", "## Professional Experience", "");
	for (const entry of experience) {
		const {frontmatter, sections} = entry;
		const highlights = chooseHighlights(frontmatter, sections, focusKeywords);

		lines.push(`### ${frontmatter.role} | ${frontmatter.company}`);
		if (frontmatter.team) {
			lines.push(`_${frontmatter.team}_`);
		}
		lines.push(`_${frontmatter.period}_`, "", frontmatter.summary, "");

		for (const highlight of highlights) {
			lines.push(`- ${highlight}`);
		}
		lines.push("");
	}

	return `${lines.join("\n").trim()}\n`;
}

function chooseHighlights(frontmatter, sections, focusKeywords) {
	const allHighlights = [
		...(sections.Highlights?.bullets ?? []),
		...(sections.Contributions?.bullets ?? []),
	];

	if (focusKeywords.size === 0) {
		return allHighlights.slice(0, 6);
	}

	const tags = Array.isArray(frontmatter.tags) ? frontmatter.tags.join(" ") : "";
	return allHighlights
		.map((highlight, index) => ({
			highlight,
			index,
			score: scoreText(`${tags} ${frontmatter.summary} ${highlight}`, focusKeywords),
		}))
		.sort((a, b) => b.score - a.score || a.index - b.index)
		.slice(0, 5)
		.map((item) => item.highlight);
}

function readSkillGroups(careerMaster) {
	return Object.entries(careerMaster.sections)
		.filter(([title]) => title.startsWith("Skill Group: "))
		.map(([title, section]) => ({
			title: title.replace("Skill Group: ", ""),
			items: section.bullets,
		}));
}

async function resolveFocusText(args) {
	if (args.job) {
		return readFile(resolveFromRoot(args.job), "utf8");
	}

	return args.focus ?? "";
}

function parseArgs(rawArgs) {
	const args = {};

	for (let index = 0; index < rawArgs.length; index += 1) {
		const arg = rawArgs[index];
		if (arg === "--focus") {
			args.focus = rawArgs[index + 1] ?? "";
			index += 1;
		}
		if (arg === "--job") {
			args.job = rawArgs[index + 1] ?? "";
			index += 1;
		}
		if (arg === "--output") {
			args.output = rawArgs[index + 1] ?? "";
			index += 1;
		}
	}

	return args;
}
