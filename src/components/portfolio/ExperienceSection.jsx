import {experience} from "../../data/portfolioData";

function ExperienceSection() {
	return (
		<section className="section" id="experience">
			<div className="section-heading">
				<p className="eyebrow">Experience</p>
				<h2>Career timeline</h2>
			</div>
			<div className="experience-list">
				{experience.map((job) => (
					<article className="experience-item" key={`${job.company}-${job.period}`}>
						<div className="experience-meta">
							<p className="role">{job.role}</p>
							<h3>{job.company}</h3>
							{job.team && <p className="team">{job.team}</p>}
							<p className="period">{job.period}</p>
						</div>
						<div>
							<p>{job.summary}</p>
							<ul>
								{job.highlights.map((highlight) => (
									<li key={highlight}>{highlight}</li>
								))}
							</ul>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default ExperienceSection;
