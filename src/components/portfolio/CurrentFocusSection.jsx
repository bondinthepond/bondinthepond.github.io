import {currentFocus} from "../../data/portfolioData";

function CurrentFocusSection() {
	const operatingModel = [
		{title: "Govern", subtitle: "Standards, quality gates, maturity"},
		{title: "Enable", subtitle: "Automation strategy, frameworks, platforms"},
		{title: "Measure", subtitle: "Metrics, dashboards, release readiness"},
		{title: "Accelerate", subtitle: "AI-assisted QE and productivity workflows"},
	];

	return (
		<section className="section" id="focus" aria-label="Current focus">
			<div className="section-heading current-focus-heading">
				<p className="eyebrow">Current Focus</p>
				<h2>Modernizing Quality Engineering through platforms, governance, automation, and AI.</h2>
			</div>

			<div className="operating-model-band">
				{operatingModel.map((item, index) => (
					<div className="model-step" key={item.title}>
						<div className="model-step-title">
							<span>{index + 1}</span>
							<strong>{item.title}</strong>
						</div>
						<small>{item.subtitle}</small>
					</div>
				))}
			</div>
			<div className="model-support-grid">
				{currentFocus.map((item) => (
					<article className="model-support-item" key={item.title}>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</article>
				))}
			</div>
		</section>
	);
}

export default CurrentFocusSection;
