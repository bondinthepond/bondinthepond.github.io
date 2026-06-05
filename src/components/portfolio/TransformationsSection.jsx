import {transformations} from "../../data/portfolioData";
import {useState} from "react";

function TransformationsSection() {
	const [openCard, setOpenCard] = useState(0);

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
				{transformations.map((item, index) => {
					const isOpen = openCard === index;

					return (
						<article className={`portfolio-card ${isOpen ? "is-open" : ""}`} key={item.title}>
							<button
								className="portfolio-card-trigger"
								type="button"
								aria-expanded={isOpen}
								aria-controls={`transformation-detail-${index}`}
								onClick={() => setOpenCard(isOpen ? -1 : index)}
							>
								<span className="portfolio-number">{String(index + 1).padStart(2, "0")}</span>
								<span className="portfolio-card-title">
									<strong>{item.title}</strong>
								</span>
								<span className="portfolio-toggle" aria-hidden="true">
									+
								</span>
							</button>
							<div className="story-tags" aria-label={`${item.title} focus areas`}>
								{item.tags.map((tag) => (
									<span key={tag}>{tag}</span>
								))}
							</div>
							{isOpen && (
								<div className="portfolio-card-detail" id={`transformation-detail-${index}`}>
									<p>{item.summary}</p>
									{item.impact && (
										<p className="story-impact">
											<strong>Impact:</strong> {item.impact}
										</p>
									)}
									<a className="story-link" href={item.href || "#transformation"}>
										Read more
									</a>
								</div>
							)}
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default TransformationsSection;
