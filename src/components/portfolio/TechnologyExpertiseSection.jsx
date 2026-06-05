import {skillGroups} from "../../data/portfolioData";

const technologyGroups = [
	"Platform Quality Engineering",
	"Test Automation & Quality Engineering",
	"Distributed Systems & Integration Testing",
	"Engineering Platforms & Internal Tools",
	"Cloud, CI/CD & Release Engineering",
	"Observability, Performance & Production Quality",
	"AI-Assisted Quality Engineering",
];

const capabilityLayers = ["Strategy", "Architecture", "Automation", "Platforms", "Operations"];

const blueprintSteps = [
	{
		title: "Define Standards",
		description: "Governance, maturity models, quality gates, and reusable engineering expectations.",
	},
	{
		title: "Enable Teams",
		description: "Framework direction, tooling, coaching, and practical automation enablement.",
	},
	{
		title: "Measure Quality",
		description: "Dashboards, release readiness, test maturity, automation health, and trend visibility.",
	},
	{
		title: "Improve Delivery",
		description: "Shift-left practices, AI-assisted workflows, and faster feedback across teams.",
	},
];

function TechnologyExpertiseSection() {
	const groups = skillGroups.filter((group) => technologyGroups.includes(group.title));
	const [featuredGroup, ...supportingGroups] = groups;

	return (
		<section className="technology-section" id="technology">
			<div className="technology-section-header">
				<div>
					<p className="eyebrow technology-eyebrow">Technology & Platform Expertise</p>
					<h2>Engineering depth behind scalable quality transformation.</h2>
				</div>
				<p>
					Hands-on and leadership-level experience across automation, distributed systems,
					cloud platforms, CI/CD, observability, internal tooling, and AI-assisted
					quality engineering.
				</p>
			</div>

			<div className="technology-layer-row" aria-label="Technology capability layers">
				{capabilityLayers.map((layer) => (
					<span key={layer}>{layer}</span>
				))}
			</div>

			<div className="technology-architecture">
				{featuredGroup && (
					<article className="technology-core-card">
						<div className="technology-core-intro">
							<div className="technology-card-kicker">
								<span>Platform Blueprint</span>
								<strong>01</strong>
							</div>
							<h3>{featuredGroup.title}</h3>
							{featuredGroup.summary && <p>{featuredGroup.summary}</p>}
						</div>
						<div className="technology-blueprint-flow">
							{blueprintSteps.map((step, index) => (
								<div className="technology-blueprint-step" key={step.title}>
									<span>{String(index + 1).padStart(2, "0")}</span>
									<div>
										<strong>{step.title}</strong>
										<p>{step.description}</p>
									</div>
								</div>
							))}
						</div>
					</article>
				)}

				<div className="technology-node-grid">
					{supportingGroups.map((group, index) => (
						<article className="technology-node-card" key={group.title}>
							<div className="technology-node-index">
								<span>{String(index + 2).padStart(2, "0")}</span>
							</div>
							<h3>{group.title}</h3>
							{group.summary && <p>{group.summary}</p>}
							<ul className="technology-capability-list">
								{group.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default TechnologyExpertiseSection;
