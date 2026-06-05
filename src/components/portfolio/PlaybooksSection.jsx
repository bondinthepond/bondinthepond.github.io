import {playbooks} from "../../data/portfolioData";

const playbookDetails = {
	"Quality maturity assessment": {
		description:
			"Assess test assets, automation coverage, CI/CD adoption, reporting health, and QE maturity.",
		tags: ["Maturity", "Governance", "Metrics"],
		status: "Framework",
	},
	"Automation strategy": {
		description:
			"Define what to automate across UI, API, data, messaging, and integration layers.",
		tags: ["Automation", "Architecture", "Shift-left"],
		status: "Framework",
	},
	"Release readiness": {
		description:
			"Create release confidence through regression health, risk visibility, quality gates, and rollback awareness.",
		tags: ["Release", "Risk", "Quality Gates"],
		status: "Model",
	},
	"Quality metrics": {
		description:
			"Turn quality signals into dashboards, trends, leadership visibility, and better delivery conversations.",
		tags: ["Dashboards", "Reporting", "Insights"],
		status: "Model",
	},
	"AI-assisted testing": {
		description:
			"Apply AI to test design, log analysis, documentation, defect triage, and engineering productivity.",
		tags: ["AI", "Productivity", "QE"],
		status: "Evolving",
	},
	"Platform QE operating model": {
		description:
			"Shape centralized QE standards, governance, enablement, and federated execution across teams.",
		tags: ["PQE", "Governance", "Enablement"],
		status: "Signature",
	},
};

function PlaybooksSection() {
	return (
		<section className="playbook-section" id="thought-leadership">
			<div className="playbook-intro">
				<p className="eyebrow">Thought Leadership</p>
				<h2>Quality engineering playbooks and working models.</h2>
				<p>
					Reusable frameworks for assessing quality maturity, improving release confidence,
					scaling automation, and bringing platform thinking into quality engineering.
				</p>
			</div>
			<div className="playbook-library">
				{playbooks.map((item, index) => {
					const detail = playbookDetails[item] ?? {
						description: "A reusable quality engineering working model.",
						tags: ["Quality Engineering"],
						status: "Draft",
					};

					return (
						<article className="playbook-row" key={item}>
							<div className="playbook-number">{String(index + 1).padStart(2, "0")}</div>
							<div className="playbook-content">
								<div className="playbook-title-row">
									<h3>{item}</h3>
									<span>{detail.status}</span>
								</div>
								<p>{detail.description}</p>
								<div className="playbook-tags">
									{detail.tags.map((tag) => (
										<span key={tag}>{tag}</span>
									))}
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default PlaybooksSection;
