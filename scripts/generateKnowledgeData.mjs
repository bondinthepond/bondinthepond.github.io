import {
	readMarkdownFile,
	readMarkdownTree,
	resolveFromRoot,
	writeGeneratedFile,
} from "./contentUtils.mjs";

const knowledgeRoot = resolveFromRoot("content", "knowledge");
const libraryIndex = await readMarkdownFile(resolveFromRoot("content", "knowledge", "index.md"));
const knowledgeFiles = await readMarkdownTree(knowledgeRoot);

function readingMinutes(text) {
	const words = text.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / 220));
}

const topicFiles = knowledgeFiles.filter(({file, path, frontmatter}) =>
	file === "index.md" && path !== "index.md" && frontmatter.slug
);

const notes = knowledgeFiles
	.filter(({frontmatter, file}) => file !== "index.md" && frontmatter.slug)
	.map(({frontmatter, sections, body, path}) => ({
		title: frontmatter.title,
		slug: frontmatter.slug,
		topicSlug: path.split(/[\\/]/)[0],
		category: frontmatter.category || "General",
		summary: frontmatter.summary || "",
		tags: frontmatter.tags ?? [],
		status: frontmatter.status || "Draft",
		updated: frontmatter.updated || "",
		order: frontmatter.order ?? 999,
		readingMinutes: readingMinutes(body),
		sections: Object.entries(sections)
			.filter(([title, section]) => title !== "Intro" && (section.text || section.bullets.length))
			.map(([title, section]) => ({
				title,
				text: section.text,
				bullets: section.bullets,
			})),
	}))
	.sort((a, b) => a.order - b.order);

const topics = topicFiles
	.map(({frontmatter, sections}) => ({
		title: frontmatter.title,
		slug: frontmatter.slug,
		summary: frontmatter.summary || "",
		order: frontmatter.order ?? 999,
		articleCount: notes.filter((note) => note.topicSlug === frontmatter.slug).length,
		learningGoals: sections["Learning Goals"]?.bullets ?? [],
	}))
	.sort((a, b) => a.order - b.order);

const knowledgeData = {
	knowledgeLibrary: {
		title: libraryIndex.frontmatter.title || "Knowledge Library",
		summary: libraryIndex.frontmatter.summary || "",
	},
	knowledgeTopics: topics,
	knowledgeNotes: notes,
};

const output = `// Generated from content/knowledge/**/*.md. Run npm run generate:knowledge after editing notes.\n\n${Object.entries(knowledgeData)
	.map(([key, value]) => `export const ${key} = ${JSON.stringify(value, null, "\t")};`)
	.join("\n\n")}\n`;

await writeGeneratedFile(resolveFromRoot("src", "data", "knowledgeData.js"), output);
console.log("Generated src/data/knowledgeData.js");
