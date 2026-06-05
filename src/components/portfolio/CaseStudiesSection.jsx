import {caseStudies} from "../../data/portfolioData";

function renderSectionText(section) {
	if (section.bullets.length) {
		return null;
	}

	return section.text
		.split(/\n+/)
		.filter(Boolean)
		.map((paragraph) => <p key={paragraph}>{paragraph}</p>);
}

function CaseStudiesSection({slug}) {
	const visibleCaseStudies = slug
		? caseStudies.filter((caseStudy) => caseStudy.slug === slug)
		: caseStudies;

	if (!visibleCaseStudies.length) {
		return null;
	}

	return (
		<section className="case-study-section" aria-label="Case studies">
			{visibleCaseStudies.map((caseStudy) => (
				<article className="case-study-article" id={`case-study-${caseStudy.slug}`} key={caseStudy.slug}>
					<div className="case-study-header">
						<a className="case-study-back-link" href="#top">Back to portfolio</a>
						<p className="eyebrow">Case Study</p>
						<h2>{caseStudy.title}</h2>
						<p>{caseStudy.summary}</p>
						<div className="case-study-tags">
							{caseStudy.tags.map((tag) => (
								<span key={tag}>{tag}</span>
							))}
						</div>
					</div>

					<div className="case-study-body">
						{caseStudy.sections.map((section) => (
							<section className="case-study-block" key={section.title}>
								<h3>{section.title}</h3>
								{renderSectionText(section)}
								{!!section.bullets.length && (
									<ul>
										{section.bullets.map((bullet) => (
											<li key={bullet}>{bullet}</li>
										))}
									</ul>
								)}
							</section>
						))}
					</div>
				</article>
			))}
		</section>
	);
}

export default CaseStudiesSection;
