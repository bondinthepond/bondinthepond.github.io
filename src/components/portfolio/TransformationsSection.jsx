import {transformations} from "../../data/portfolioData";

function TransformationsSection() {
	return (
		<section className="section transformation-section" id="transformation">
			<div className="section-heading transformation-heading">
				<p className="eyebrow">Transformation Portfolio</p>
				<h2>Building quality engineering capabilities at scale.</h2>
				<p>
					I solve organizational quality challenges through platform engineering, governance,
					automation strategy, and transformation initiatives. These are key areas where I have driven change and delivered impact.
				</p>
			</div>
			<div className="transformation-journey">
				{transformations.map((item, index) => (
					<article className="transformation-story" key={item.title}>
						<div className="journey-marker">
							<span>{String(index + 1).padStart(2, "0")}</span>
						</div>
						<div className="story-content">
							<h3>{item.title}</h3>
							<p>{item.summary}</p>
							<div className="story-tags" aria-label={`${item.title} focus areas`}>
								{item.tags.map((tag) => (
									<span key={tag}>{tag}</span>
								))}
							</div>
							{item.href ? (
								<a className="story-link" href={item.href}>Learn More</a>
							) : (
								<span className="story-link muted">Case study coming soon</span>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default TransformationsSection;
