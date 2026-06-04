import {stats} from "../../data/portfolioData";

function StatsSection() {
	return (
		<section className="stats-section" id="leadership" aria-label="Leadership snapshot">
			<div className="section-heading stats-heading">
				<p className="eyebrow">Leadership Snapshot</p>
				<h2>Leading quality transformation across products, platforms, and teams.</h2>
			</div>
			<div className="stats-grid">
				{stats.map((stat) => (
					<div className="stat-card" key={stat.label}>
						<strong>{stat.value}</strong>
						<span>{stat.label}</span>
						{stat.detail && <p>{stat.detail}</p>}
					</div>
				))}
			</div>
		</section>
	);
}

export default StatsSection;
