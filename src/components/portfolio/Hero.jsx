import {profile} from "../../data/portfolioData";

function Hero() {
	return (
		<header className="hero" id="top">
			<div className="hero-content">
				<p className="eyebrow">{profile.heroEyebrow}</p>
				<h1>{profile.title}</h1>
				{profile.heroFocusLine && <p className="hero-focus-line">{profile.heroFocusLine}</p>}
				<p className="hero-text">
					{profile.subheadline}
				</p>
				<div className="hero-actions">
					<a className="button button-primary" href={profile.resumePath} target="_blank" rel="noreferrer">
						Resume
					</a>
					<a className="button button-secondary" href="#transformation">
						Transformation Portfolio
					</a>
					<a className="button button-secondary" href="#experience">
						Career Journey
					</a>
					<a className="button button-ghost" href="#technology">
						Technical Depth
					</a>
				</div>
			</div>
			<aside className="hero-card" aria-label="Profile summary">
				<p className="card-title">Current position</p>
				<h2>{profile.currentPositionTitle}</h2>
				{profile.currentPositionCompany && (
					<p className="hero-card-company">{profile.currentPositionCompany}</p>
				)}
				{profile.currentPositionFocusLine && (
					<p className="hero-card-focus">{profile.currentPositionFocusLine}</p>
				)}
				<p>
					{profile.currentPositionSummary}
				</p>
			</aside>
		</header>
	);
}

export default Hero;
