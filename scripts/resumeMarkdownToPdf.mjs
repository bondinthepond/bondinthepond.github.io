import {access, mkdir, readFile, writeFile} from "node:fs/promises";
import {constants} from "node:fs";
import {execFile} from "node:child_process";
import path from "node:path";
import {fileURLToPath} from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = parseArgs(process.argv.slice(2));
const inputPath = path.resolve(rootDir, args.input ?? "content/resume/generated/resume.md");
const outputPath = path.resolve(rootDir, args.output ?? "content/resume/generated/resume.pdf");
const htmlPath = outputPath.replace(/\.pdf$/i, ".html");

const markdown = await readFile(inputPath, "utf8");
await mkdir(path.dirname(outputPath), {recursive: true});
await writeFile(htmlPath, renderHtml(markdown), "utf8");

const browserPath = await findBrowser();
await printPdf(browserPath, htmlPath, outputPath);

console.log(`Generated ${path.relative(rootDir, htmlPath)}`);
console.log(`Generated ${path.relative(rootDir, outputPath)}`);

function renderHtml(markdownText) {
	const body = markdownText
		.split(/\r?\n/)
		.reduce((state, line) => {
			const trimmed = line.trim();
			if (!trimmed) {
				state.closeList();
				return state;
			}

			if (trimmed.startsWith("# ")) {
				state.closeList();
				state.lines.push(`<h1>${escapeHtml(trimmed.slice(2))}</h1>`);
				return state;
			}

			if (trimmed.startsWith("## ")) {
				state.closeList();
				state.lines.push(`<h2>${escapeHtml(trimmed.slice(3))}</h2>`);
				return state;
			}

			if (trimmed.startsWith("### ")) {
				state.closeList();
				state.lines.push(`<h3>${formatInline(trimmed.slice(4))}</h3>`);
				return state;
			}

			if (trimmed.startsWith("- ")) {
				if (!state.inList) {
					state.lines.push("<ul>");
					state.inList = true;
				}
				state.lines.push(`<li>${formatInline(trimmed.slice(2))}</li>`);
				return state;
			}

			state.closeList();
			state.lines.push(`<p>${formatInline(trimmed)}</p>`);
			return state;
		}, createHtmlState());

	body.closeList();

	return `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Resume</title>
	<style>
		@page {
			size: A4;
			margin: 14mm 15mm;
		}

		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			color: #111827;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 10.5pt;
			line-height: 1.42;
		}

		h1 {
			margin: 0 0 4px;
			color: #0b243b;
			font-size: 22pt;
			line-height: 1.1;
		}

		h2 {
			margin: 18px 0 8px;
			padding-bottom: 4px;
			border-bottom: 1px solid #cfd8e3;
			color: #0b243b;
			font-size: 12.5pt;
			text-transform: uppercase;
		}

		h3 {
			margin: 13px 0 3px;
			color: #1f5f8f;
			font-size: 11.5pt;
		}

		p {
			margin: 0 0 7px;
		}

		ul {
			margin: 5px 0 10px;
			padding-left: 17px;
		}

		li {
			margin-bottom: 4px;
		}

		strong {
			color: #0b243b;
		}

		em {
			color: #5f6f80;
			font-style: normal;
		}
	</style>
</head>
<body>
	${body.lines.join("\n\t")}
</body>
</html>`;
}

function createHtmlState() {
	return {
		inList: false,
		lines: [],
		closeList() {
			if (this.inList) {
				this.lines.push("</ul>");
				this.inList = false;
			}
		},
	};
}

function formatInline(value) {
	return escapeHtml(value)
		.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
		.replace(/_(.+?)_/g, "<em>$1</em>");
}

function escapeHtml(value) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

async function findBrowser() {
	const candidates = [
		process.env.CHROME_PATH,
		"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
		"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
		"C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
	].filter(Boolean);

	for (const candidate of candidates) {
		try {
			await access(candidate, constants.X_OK);
			return candidate;
		} catch {
			// Try the next browser path.
		}
	}

	throw new Error("Could not find Chrome or Edge. Set CHROME_PATH to your browser executable.");
}

function printPdf(browserPath, sourceHtmlPath, targetPdfPath) {
	return new Promise((resolve, reject) => {
		execFile(
			browserPath,
			[
				"--headless=new",
				"--disable-gpu",
				`--print-to-pdf=${targetPdfPath}`,
				`file://${sourceHtmlPath.replaceAll("\\", "/")}`,
			],
			(error) => {
				if (error) {
					reject(error);
					return;
				}
				resolve();
			},
		);
	});
}

function parseArgs(rawArgs) {
	const parsed = {};

	for (let index = 0; index < rawArgs.length; index += 1) {
		if (rawArgs[index] === "--input") {
			parsed.input = rawArgs[index + 1];
			index += 1;
		}
		if (rawArgs[index] === "--output") {
			parsed.output = rawArgs[index + 1];
			index += 1;
		}
	}

	return parsed;
}
