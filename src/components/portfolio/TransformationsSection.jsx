import {transformations} from "../../data/portfolioData";

function TransformationsSection() {
	return (
		<section className="section">
			<div className="section-heading">
				<p className="eyebrow">Transformation stories</p>
				<h2>Representative work</h2>
			</div>
			<div className="transformation-grid">
				{transformations.map((item) => (
					<article className="transformation-card" key={item.title}>
						<h3>{item.title}</h3>
						<p className="label">Context</p>
						<p>{item.context}</p>
						<p className="label">Impact</p>
						<p>{item.impact}</p>
					</article>
				))}
			</div>
		</section>
	);
}

export default TransformationsSection;
