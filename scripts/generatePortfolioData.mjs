import {
	pipeListToObjects,
	readMarkdownFile,
	readMarkdownFolder,
	resolveFromRoot,
	sectionBullets,
	writeGeneratedFile,
} from "./contentUtils.mjs";

const profile = await readMarkdownFile(resolveFromRoot("content", "profile.md"));
const careerMaster = await readMarkdownFile(resolveFromRoot("content", "career-master.md"));
const experienceFiles = await readMarkdownFolder(resolveFromRoot("content", "experience"));
const caseStudyFiles = await readMarkdownFolder(resolveFromRoot("content", "case-studies"));

const profileData = profile.frontmatter;
const skillGroups = Object.entries(careerMaster.sections)
	.filter(([title]) => title.startsWith("Skill Group: "))
	.map(([title, section]) => ({
		title: title.replace("Skill Group: ", ""),
		items: section.bullets,
	}));

const portfolioData = {
	profile: profileData,
	navLinks: [
		{href: "#impact", label: "Impact"},
		{href: "#skills", label: "Skills"},
		{href: "#experience", label: "Experience"},
		{href: "#contact", label: "Contact"},
	],
	stats: pipeListToObjects(sectionBullets(profile, "Stats"), ["value", "label"]),
	leadershipStrengths: sectionBullets(profile, "Leadership Strengths"),
	skillGroups,
	transformations: caseStudyFiles.map(({frontmatter}) => ({
		title: frontmatter.title,
		context: frontmatter.context,
		impact: frontmatter.impact,
	})),
	experience: experienceFiles.map(({frontmatter, sections}) => ({
		company: frontmatter.company,
		role: frontmatter.role,
		team: frontmatter.team,
		period: frontmatter.period,
		summary: frontmatter.summary,
		highlights: sections.Highlights?.bullets ?? [],
	})),
	playbooks: sectionBullets(careerMaster, "Playbooks"),
	contactLinks: [
		{href: `mailto:${profileData.email}`, label: profileData.email},
		{href: profileData.linkedin, label: "LinkedIn"},
		{href: profileData.github, label: "GitHub"},
	],
};

const output = `// Generated from content/*.md. Run npm run generate:portfolio after editing content.\n\n${Object.entries(portfolioData)
	.map(([key, value]) => `export const ${key} = ${JSON.stringify(value, null, "\t")};`)
	.join("\n\n")}\n`;

await writeGeneratedFile(resolveFromRoot("src", "data", "portfolioData.js"), output);
console.log("Generated src/data/portfolioData.js");
