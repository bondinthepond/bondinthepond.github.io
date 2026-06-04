import {stats} from "../../data/portfolioData";

function StatsSection() {
	return (
		<section className="stats-grid" id="impact" aria-label="Impact snapshot">
			{stats.map((stat) => (
				<div className="stat-card" key={stat.label}>
					<strong>{stat.value}</strong>
					<span>{stat.label}</span>
				</div>
			))}
		</section>
	);
}

export default StatsSection;
