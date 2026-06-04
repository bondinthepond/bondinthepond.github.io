import {leadershipStrengths} from "../../data/portfolioData";

function LeadershipSection() {
	return (
		<section className="section two-column">
			<div>
				<p className="eyebrow">Leadership snapshot</p>
				<h2>What I bring to engineering teams</h2>
			</div>
			<div className="tag-list">
				{leadershipStrengths.map((item) => (
					<span key={item}>{item}</span>
				))}
			</div>
		</section>
	);
}

export default LeadershipSection;
