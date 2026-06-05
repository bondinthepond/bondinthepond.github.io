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

function sectionSummary(section) {
	if (!section?.text) {
		return "";
	}

	return section.text
		.split(/\r?\n/)
		.map((line) => line.trim())
		.find((line) => line && !line.startsWith("- ") && !line.startsWith("### ")) ?? "";
}

const skillGroups = Object.entries(careerMaster.sections)
	.filter(([title]) => title.startsWith("Skill Group: "))
	.map(([title, section]) => ({
		title: title.replace("Skill Group: ", ""),
		items: section.bullets,
	}));

function sectionSubsections(section) {
	if (!section?.text) {
		return [];
	}

	const subsections = [];
	let current = null;

	for (const line of section.text.split(/\r?\n/)) {
		const heading = line.match(/^###\s+(.+)$/);
		const bullet = line.match(/^-\s+(.+)$/);

		if (heading) {
			current = {title: heading[1].trim(), items: []};
			subsections.push(current);
			continue;
		}

		if (bullet && current) {
			current.items.push(bullet[1].trim());
		}
	}

	return subsections.filter((item) => item.items.length > 0);
}

const portfolioData = {
	profile: profileData,
	navLinks: [
		{href: "#leadership", label: "Leadership"},
		{href: "#focus", label: "Focus"},
		{href: "#transformation", label: "Transformation"},
		{href: "#experience", label: "Experience"},
		{href: "#domain", label: "Domain"},
		{href: "#technology", label: "Technology"},
		{href: "#contact", label: "Contact"},
	],
	stats: pipeListToObjects(sectionBullets(profile, "Stats"), ["value", "label", "detail"]),
	leadershipStrengths: sectionBullets(profile, "Leadership Strengths"),
	currentFocus: pipeListToObjects(sectionBullets(profile, "Current Focus"), ["title", "description"]),
	domainExpertise: pipeListToObjects(sectionBullets(careerMaster, "Domain Expertise"), ["title", "description", "tags"])
		.map((domain) => ({
			...domain,
			tags: domain.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
		})),
	skillGroups,
	transformations: caseStudyFiles.map(({frontmatter}) => ({
		title: frontmatter.title,
		summary: frontmatter.summary,
		impact: frontmatter.impact,
		tags: frontmatter.tags ?? [],
		href: frontmatter.href,
	})),
	caseStudies: caseStudyFiles
		.filter(({frontmatter, sections}) => frontmatter.slug && Object.keys(sections).length > 1)
		.map(({frontmatter, sections}) => ({
			title: frontmatter.title,
			slug: frontmatter.slug,
			summary: frontmatter.summary,
			impact: frontmatter.impact,
			tags: frontmatter.tags ?? [],
			sections: Object.entries(sections)
				.filter(([title, section]) => title !== "Intro" && (section.text || section.bullets.length))
				.map(([title, section]) => ({
					title,
					text: section.text,
					bullets: section.bullets,
				})),
		})),
	experience: experienceFiles.map(({frontmatter, sections}) => ({
		company: frontmatter.company,
		role: frontmatter.role,
		team: frontmatter.team,
		period: frontmatter.period,
		domain: frontmatter.domain,
		companyContext: frontmatter.companyContext,
		technology: frontmatter.technology,
		technologyGroups: pipeListToObjects(sections["Technology Landscape"]?.bullets ?? [], ["title", "items"]),
		applications: sections["Applications & Products Supported"]?.bullets ?? [],
		impactAreas: frontmatter.impactAreas ?? frontmatter.tags ?? [],
		summary: frontmatter.summary,
		highlights: sections.Highlights?.bullets ?? [],
		areasOfImpact: sectionSubsections(sections["Areas of Impact"]),
		accomplishments: sections.Contributions?.bullets ?? [],
	})),
	playbooks: sectionBullets(careerMaster, "Playbooks"),
	contactLinks: [
		{href: `mailto:${profileData.email}`, label: profileData.email},
		...(profileData.phone ? [{href: `tel:${profileData.phone.replaceAll(" ", "")}`, label: profileData.phone}] : []),
		{href: profileData.linkedin, label: "LinkedIn"},
		{href: profileData.github, label: "GitHub"},
	],
};

const output = `// Generated from content/*.md. Run npm run generate:portfolio after editing content.\n\n${Object.entries(portfolioData)
	.map(([key, value]) => `export const ${key} = ${JSON.stringify(value, null, "\t")};`)
	.join("\n\n")}\n`;

await writeGeneratedFile(resolveFromRoot("src", "data", "portfolioData.js"), output);
console.log("Generated src/data/portfolioData.js");
