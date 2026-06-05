import {experience} from "../../data/portfolioData";

function ExperienceSection() {
	const latestExperienceFirst = [...experience].reverse();

	return (
		<section className="section career-section" id="experience">
			<div className="section-heading career-heading">
				<p className="eyebrow">Career Journey</p>
				<h2>Where strategy, transformation, and engineering leadership came together.</h2>
				<p>
					A journey across FinTech, E-Commerce, Supply Chain, and large-scale digital platforms,
					focused on building quality engineering capabilities and enabling confident delivery.
				</p>
			</div>
			<div className="career-timeline">
				{latestExperienceFirst.map((job, index) => {
					const hasImpactAreas = job.impactAreas.length > 0;
					const hasHighlights = job.highlights.length > 0;
					const hasAreasOfImpact = job.areasOfImpact.length > 0;
					const hasAccomplishments = job.accomplishments.length > 0;
					const hasApplications = job.applications.length > 0;
					const hasTechnologyGroups = job.technologyGroups.length > 0;

					return (
						<details className="career-card" key={`${job.company}-${job.period}`} open={index === 0}>
							<summary>
								<div className="career-marker">
									<span>{String(index + 1).padStart(2, "0")}</span>
								</div>
								<div className="career-summary">
									<div className="career-title-row">
										<div>
											<p className="role">{job.role}</p>
											<h3>{job.company}</h3>
										</div>
										<p className="period">{job.period}</p>
									</div>
									{job.domain && <p className="career-domain">{job.domain}</p>}
									{hasImpactAreas && (
										<div className="impact-tags" aria-label={`${job.company} areas of impact`}>
											{job.impactAreas.map((area) => (
												<span key={area}>{area}</span>
											))}
										</div>
									)}
								</div>
							</summary>
							<div className="career-details">
								{job.companyContext && (
									<div className="company-context">
										<p className="label">Company Context</p>
										<p>{job.companyContext}</p>
									</div>
								)}
								<div>
									<p className="label">Key Summary</p>
									<p>{job.summary}</p>
								</div>
								{hasHighlights && (
									<div>
										<p className="label">Highlights</p>
										<ul>
											{job.highlights.map((highlight) => (
												<li key={highlight}>{highlight}</li>
											))}
										</ul>
									</div>
								)}
								{hasApplications && (
									<div>
										<p className="label">Applications & Products Supported</p>
										<div className="product-chip-list">
											{job.applications.map((application) => (
												<span key={application}>{application}</span>
											))}
										</div>
									</div>
								)}
								{hasAreasOfImpact && (
									<details className="detail-disclosure impact-disclosure">
										<summary>
											<p className="label">Areas of Impact</p>
											<span className="disclosure-action">
												<span>Explore areas</span>
												<b aria-hidden="true">+</b>
											</span>
										</summary>
										<div className="impact-area-grid">
											{job.areasOfImpact.map((area) => (
												<details className="impact-area-card" key={area.title}>
													<summary>
														<h4>{area.title}</h4>
														<span aria-hidden="true">+</span>
													</summary>
													<ul>
														{area.items.map((item) => (
															<li key={item}>{item}</li>
														))}
													</ul>
												</details>
											))}
										</div>
									</details>
								)}
								{hasAccomplishments && (
									<div>
										<p className="label">Major Accomplishments</p>
										<ul>
											{job.accomplishments.map((highlight) => (
												<li key={highlight}>{highlight}</li>
											))}
										</ul>
									</div>
								)}
								{hasTechnologyGroups && (
									<details className="detail-disclosure technology-landscape">
										<summary>
											<p className="label">Technology Landscape</p>
											<span className="disclosure-action">
												<span>View stack</span>
												<b aria-hidden="true">+</b>
											</span>
										</summary>
										<div className="technology-group-grid">
											{job.technologyGroups.map((group) => (
												<details className="technology-group" key={group.title}>
													<summary>
														<strong>{group.title}</strong>
														<span aria-hidden="true">+</span>
													</summary>
													<p>{group.items}</p>
												</details>
											))}
										</div>
									</details>
								)}
								{job.technology && !hasTechnologyGroups && (
									<div>
										<p className="label">Technology Landscape</p>
										<p>{job.technology}</p>
									</div>
								)}
							</div>
						</details>
					);
				})}
			</div>
		</section>
	);
}

export default ExperienceSection;
