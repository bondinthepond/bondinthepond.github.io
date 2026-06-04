import {playbooks} from "../../data/portfolioData";

function PlaybooksSection() {
	return (
		<section className="section two-column">
			<div>
				<p className="eyebrow">Future platform content</p>
				<h2>Playbooks to add next</h2>
			</div>
			<div className="playbook-grid">
				{playbooks.map((item) => (
					<span key={item}>{item}</span>
				))}
			</div>
		</section>
	);
}

export default PlaybooksSection;
