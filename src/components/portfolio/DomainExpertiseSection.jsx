import {skillGroups} from "../../data/portfolioData";

function DomainExpertiseSection() {
	const domainGroup = skillGroups.find((group) => group.title === "Domain Experience");

	if (!domainGroup) {
		return null;
	}

	return (
		<section className="section" id="domain">
			<div className="section-heading">
				<p className="eyebrow">Domain Expertise</p>
				<h2>Business context across complex product ecosystems.</h2>
			</div>
			<article className="expertise-card">
				<h3>{domainGroup.title}</h3>
				<ul>
					{domainGroup.items.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</article>
		</section>
	);
}

export default DomainExpertiseSection;
