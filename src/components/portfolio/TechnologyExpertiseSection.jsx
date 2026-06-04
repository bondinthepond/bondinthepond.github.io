import {skillGroups} from "../../data/portfolioData";

const technologyGroups = [
	"Quality Engineering",
	"Engineering Platforms",
	"Automation and Tools",
	"Product and Delivery",
];

function TechnologyExpertiseSection() {
	const groups = skillGroups.filter((group) => technologyGroups.includes(group.title));

	return (
		<section className="section" id="technology">
			<div className="section-heading">
				<p className="eyebrow">Technology & Platform Expertise</p>
				<h2>Engineering depth behind the quality strategy.</h2>
			</div>
			<div className="expertise-grid">
				{groups.map((group) => (
					<article className="expertise-card" key={group.title}>
						<h3>{group.title}</h3>
						<ul>
							{group.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
}

export default TechnologyExpertiseSection;
