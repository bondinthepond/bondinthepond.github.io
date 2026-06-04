import {playbooks} from "../../data/portfolioData";

function PlaybooksSection() {
	return (
		<section className="section two-column">
			<div>
				<p className="eyebrow">Thought Leadership</p>
				<h2>Playbooks and working models</h2>
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
