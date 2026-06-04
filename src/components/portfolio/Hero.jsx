import {profile} from "../../data/portfolioData";

function Hero() {
	return (
		<header className="hero" id="top">
			<div className="hero-content">
				<p className="eyebrow">{profile.heroEyebrow}</p>
				<h1>{profile.title}</h1>
				<p className="hero-text">
					{profile.subheadline}
				</p>
				<div className="hero-actions">
					<a className="button button-primary" href={profile.resumePath} target="_blank" rel="noreferrer">
						View Resume
					</a>
					<a className="button button-secondary" href="#experience">
						Experience
					</a>
					<a className="button button-ghost" href="#skills">
						Skills
					</a>
				</div>
			</div>
			<aside className="hero-card" aria-label="Profile summary">
				<p className="card-title">Current positioning</p>
				<h2>{profile.currentPositionTitle}</h2>
				<p>
					{profile.currentPositionSummary}
				</p>
			</aside>
		</header>
	);
}

export default Hero;
