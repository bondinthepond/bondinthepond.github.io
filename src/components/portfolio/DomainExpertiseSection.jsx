import {domainExpertise} from "../../data/portfolioData";

function DomainExpertiseSection() {
	return (
		<section className="section" id="domain">
			<div className="section-heading domain-heading">
				<p className="eyebrow">Domain Expertise</p>
				<h2>Quality leadership across complex business domains.</h2>
				<p>
					Experience across domains where quality depends on workflow complexity,
					integrations, data accuracy, and reliable outcomes.
				</p>
			</div>
			<div className="domain-card-grid">
				{domainExpertise.map((domain) => (
					<article className="domain-card" key={domain.title}>
						<h3>{domain.title}</h3>
						<p>{domain.description}</p>
						<div className="domain-tags" aria-label={`${domain.title} tags`}>
							{domain.tags.map((tag) => (
								<span key={tag}>{tag}</span>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default DomainExpertiseSection;
