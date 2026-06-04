import React from "react";
import "./styles.css";

const leadershipPoints = [
	"14+ years in quality engineering and software delivery",
	"Consumer internet, fintech, and global product teams",
	"Led automation, quality governance, and release readiness",
	"Built and coached high-performing QA / QE teams",
];

const focusAreas = [
	"Quality transformation",
	"Platform quality engineering",
	"Automation strategy",
	"Engineering excellence",
	"Quality governance",
	"AI in quality engineering",
];

const caseStudies = [
	{
		title: "Platform Quality Engineering at Quotient",
		summary: "Shifted the team from manual-heavy testing to a more automated, release-friendly operating model.",
	},
	{
		title: "Release and Quality Standardization",
		summary: "Defined clearer quality checks, release practices, and cross-functional ways of working.",
	},
	{
		title: "Cloud and Performance Improvements",
		summary: "Helped identify bottlenecks across frontend and backend systems to improve reliability and search performance.",
	},
];

const experience = [
	{
		company: "Quotient Technology",
		role: "Engineering Manager QA",
		period: "Nov 2017 - Apr 2024",
		detail: "Led a 12-person team across Coupons.com, Brandcaster, and Coupon Codes & Cash Back. Drove automation growth, release quality, and cloud adoption.",
	},
	{
		company: "Flipkart",
		role: "SDET",
		period: "Apr 2017 - Oct 2017",
		detail: "Established QA processes and covered testing across multiple platforms.",
	},
	{
		company: "RedMart",
		role: "Quality Engineer 2",
		period: "Apr 2017 - Oct 2017",
		detail: "Supported quality engineering across product delivery and testing workflows.",
	},
	{
		company: "Accenture",
		role: "Senior Software Engineer",
		period: "Aug 2011 - Jul 2015",
		detail: "Built a software engineering foundation before moving deeper into quality leadership.",
	},
];

function App() {
	return (
		<div className="page-shell">
			<header className="hero">
				<div className="hero-copy">
					<p className="eyebrow">Aditya Mallela</p>
					<h1>Quality Engineering Transformation Leader</h1>
					<p className="hero-text">
						Building modern Quality Engineering organizations through platform thinking,
						automation strategy, governance, metrics, and practical engineering leadership.
					</p>
					<div className="hero-actions">
						<a className="button button-primary" href="/resume/Aditya_Resume.pdf" target="_blank" rel="noreferrer">
							View Resume
						</a>
						<a className="button button-secondary" href="#case-studies">
							Explore Case Studies
						</a>
						<a className="button button-ghost" href="#contact">
							Connect
						</a>
					</div>
				</div>
				<div className="hero-panel">
					<p className="panel-label">Leadership snapshot</p>
					<ul className="stat-list">
						{leadershipPoints.map((point) => (
							<li key={point}>{point}</li>
						))}
					</ul>
				</div>
			</header>

			<main>
				<section className="section">
					<div className="section-heading">
						<p className="eyebrow">Core focus</p>
						<h2>What I lead</h2>
					</div>
					<div className="pill-grid">
						{focusAreas.map((item) => (
							<div className="pill" key={item}>{item}</div>
						))}
					</div>
				</section>

				<section className="section" id="case-studies">
					<div className="section-heading">
						<p className="eyebrow">Selected transformations</p>
						<h2>Case studies</h2>
					</div>
					<div className="card-grid">
						{caseStudies.map((study) => (
							<article className="card" key={study.title}>
								<h3>{study.title}</h3>
								<p>{study.summary}</p>
							</article>
						))}
					</div>
				</section>

				<section className="section">
					<div className="section-heading">
						<p className="eyebrow">Experience</p>
						<h2>Career timeline</h2>
					</div>
					<div className="timeline">
						{experience.map((job) => (
							<article className="timeline-item" key={`${job.company}-${job.period}`}>
								<div className="timeline-meta">
									<p className="timeline-role">{job.role}</p>
									<p className="timeline-company">{job.company}</p>
									<p className="timeline-period">{job.period}</p>
								</div>
								<p>{job.detail}</p>
							</article>
						))}
					</div>
				</section>

				<section className="section contact-section" id="contact">
					<div className="section-heading">
						<p className="eyebrow">Contact</p>
						<h2>Reach out</h2>
					</div>
					<div className="contact-links">
						<a href="mailto:adityamallela.1988@gmail.com">adityamallela.1988@gmail.com</a>
						<a href="https://www.linkedin.com/in/aditya-mallela-b61aa84a/" target="_blank" rel="noreferrer">LinkedIn</a>
						<a href="https://github.com/bondinthepond" target="_blank" rel="noreferrer">GitHub</a>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
