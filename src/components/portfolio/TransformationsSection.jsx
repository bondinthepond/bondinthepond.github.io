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
			<div className="transformation-carousel" aria-label="Transformation portfolio carousel">
				{transformations.map((item, index) => (
					<a
						className="portfolio-card"
						href={item.href || "#transformation"}
						key={item.title}
						aria-label={`Read more about ${item.title}`}
					>
						<span className="portfolio-number">{String(index + 1).padStart(2, "0")}</span>
						<h3>{item.title}</h3>
						<p>{item.summary}</p>
						{item.impact && (
							<p className="story-impact">
								<strong>Impact:</strong> {item.impact}
							</p>
						)}
						<div className="story-tags" aria-label={`${item.title} focus areas`}>
							{item.tags.map((tag) => (
								<span key={tag}>{tag}</span>
							))}
						</div>
						<span className="story-link">Click to read more</span>
					</a>
				))}
			</div>
		</section>
	);
}

export default TransformationsSection;
