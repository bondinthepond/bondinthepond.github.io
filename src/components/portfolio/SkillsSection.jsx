import {skillGroups} from "../../data/portfolioData";

function SkillsSection() {
	return (
		<section className="section" id="skills">
			<div className="section-heading">
				<p className="eyebrow">Skills</p>
				<h2>Leadership, automation, and platform depth</h2>
				<p>
					The goal is not just test execution. It is building systems, teams, and operating models
					that make quality visible and repeatable.
				</p>
			</div>
			<div className="skill-grid">
				{skillGroups.map((group) => (
					<article className="skill-card" key={group.title}>
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

export default SkillsSection;
