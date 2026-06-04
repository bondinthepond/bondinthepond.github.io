import React from "react";
import "./styles.css";

const stats = [
	{value: "14+", label: "Years in software and quality engineering"},
	{value: "12", label: "Member QA / QE team led at Quotient"},
	{value: "90%", label: "Automation target reached from an 80% manual base"},
	{value: "84", label: "Releases coordinated in four months"},
];

const leadershipStrengths = [
	"Quality transformation strategy",
	"Platform Quality Engineering",
	"Automation roadmap and governance",
	"Release readiness and quality gates",
	"Cross-functional engineering leadership",
	"Hiring, mentoring, reviews, and 1:1s",
];

const skillGroups = [
	{
		title: "Quality Engineering",
		items: [
			"Test strategy and planning",
			"Test automation strategy",
			"Defect triage and quality governance",
			"Test data and environment management",
			"Feature prioritization for automation",
		],
	},
	{
		title: "Automation and Tools",
		items: [
			"Selenium, TestNG, Selenium Grid",
			"REST Assured, Appium",
			"Playwright, Pytest",
			"JMeter, Locust, Lighthouse",
			"Splunk, Pingdom, Datadog",
		],
	},
	{
		title: "Engineering Platforms",
		items: [
			"Java, Spring Boot, React, Node.js",
			"Microservices and distributed systems",
			"Azure, AWS, GCP",
			"Jenkins, GitHub Actions, Azure DevOps",
			"Kafka, Redis, Solr, Elasticsearch",
		],
	},
	{
		title: "Product and Delivery",
		items: [
			"Roadmap planning and estimation",
			"Risk assessment and budgeting",
			"Scrum and Kanban delivery",
			"SEO quality analysis",
			"Stakeholder communication",
		],
	},
];

const transformations = [
	{
		title: "Automation Transformation",
		context: "A manual-heavy testing model was slowing coverage and release confidence.",
		impact: "Moved testing from 80% manual to 90% automation in six months, improving coverage and release velocity.",
	},
	{
		title: "Release Readiness Model",
		context: "Frontend, backend, and mobile releases needed tighter coordination and clearer success criteria.",
		impact: "Orchestrated 84 releases in four months with a 98% success rate and reduced rollback risk.",
	},
	{
		title: "Performance and SEO Quality",
		context: "Product performance bottlenecks were affecting user experience and search outcomes.",
		impact: "Used Locust, JMeter, and Lighthouse to identify issues and contribute to an 8+ position search ranking improvement.",
	},
	{
		title: "Cloud and Platform Modernization",
		context: "Legacy and fragmented infrastructure created cost, scale, and maintainability pressure.",
		impact: "Supported Azure, AWS, and on-prem consolidation work that produced roughly $15K monthly operational savings.",
	},
];

const experience = [
	{
		company: "Quotient Technology",
		role: "Engineering Manager QA",
		period: "Nov 2017 - Apr 2024",
		summary:
			"Led quality engineering for Coupons.com, Brandcaster, Coupon Codes & Cash Back, and National Rebates across B2C and B2B product surfaces.",
		highlights: [
			"Led a cross-functional team of 12 across quality engineering, automation, release delivery, and operational quality.",
			"Established product-line quality standards and frameworks for frontend, backend, and mobile testing.",
			"Drove shift-left collaboration across developers, designers, product owners, and quality engineers.",
			"Architected and developed Coupon Codes using Java Spring Boot microservices and React.",
			"Mentored engineers, set goals, supported OKRs, and partnered with HR and senior leadership on hiring and planning.",
		],
	},
	{
		company: "Career Break",
		role: "Learning, family, and advisory work",
		period: "Apr 2024 - Current",
		summary:
			"Used the break intentionally for childcare, personal well-being, and focused learning in distributed systems, JavaScript technologies, and foundational AI concepts.",
		highlights: [
			"Assisted a stealth-mode AI startup with end-to-end testing processes, tools, and quality best practices.",
			"Continued hands-on exploration of CI/CD, AI product quality, prompt engineering, chatbots, and agents.",
		],
	},
	{
		company: "Flipkart / TekSystems",
		role: "SDET",
		period: "Apr 2017 - Oct 2017",
		summary:
			"Worked on quality processes, CI/CD practices, and integration development for Ekart delivery systems.",
		highlights: [
			"Established quality assurance processes and standards across multiple platforms.",
			"Set up CI/CD practices to improve deployment cycles and release efficiency.",
			"Developed an adapter layer for third-party vendor integration using Java and MapStruct.",
		],
	},
	{
		company: "RedMart",
		role: "Quality Engineer 2",
		period: "Apr 2017 - Oct 2017",
		summary:
			"Led testing for transport operations tooling used by delivery personnel.",
		highlights: [
			"Implemented automation strategy using Calabash, JavaScript, Mocha, Chai, Java, and REST Assured.",
			"Focused on improving quality coverage and delivery workflow reliability.",
		],
	},
	{
		company: "Accenture",
		role: "Senior Software Engineer",
		period: "Aug 2011 - Jul 2015",
		summary:
			"Built a foundation in software engineering and enterprise testing across Salesforce-based payment applications.",
		highlights: [
			"Delivered end-to-end testing with external stakeholder coordination.",
			"Designed and developed a Java Selenium regression automation framework to reduce regression effort.",
		],
	},
];

const playbooks = [
	"Quality maturity assessment",
	"Automation strategy",
	"Release readiness",
	"Quality metrics",
	"AI-assisted testing",
	"Platform QE operating model",
];

function App() {
	return (
		<div className="site-shell">
			<nav className="top-nav" aria-label="Primary navigation">
				<a className="brand" href="#top">Aditya Mallela</a>
				<div className="nav-links">
					<a href="#impact">Impact</a>
					<a href="#skills">Skills</a>
					<a href="#experience">Experience</a>
					<a href="#contact">Contact</a>
				</div>
			</nav>

			<header className="hero" id="top">
				<div className="hero-content">
					<p className="eyebrow">Quality Engineering Leader</p>
					<h1>Building quality organizations that improve how products ship.</h1>
					<p className="hero-text">
						I lead quality transformation across product engineering teams, combining automation,
						platform thinking, release governance, metrics, and hands-on engineering depth.
					</p>
					<div className="hero-actions">
						<a className="button button-primary" href="/resume/Aditya_Resume.pdf" target="_blank" rel="noreferrer">
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
					<h2>Director / Head of QA track</h2>
					<p>
						Focused on Platform Quality Engineering, automation strategy, release maturity,
						and practical leadership for consumer internet and fintech product teams.
					</p>
				</aside>
			</header>

			<main>
				<section className="stats-grid" id="impact" aria-label="Impact snapshot">
					{stats.map((stat) => (
						<div className="stat-card" key={stat.label}>
							<strong>{stat.value}</strong>
							<span>{stat.label}</span>
						</div>
					))}
				</section>

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

				<section className="section" id="skills">
					<div className="section-heading">
						<p className="eyebrow">Skills</p>
						<h2>Leadership, automation, and platform depth</h2>
						<p>
							The goal is not just test execution. It is building systems, teams, and operating models
							that make quality visible and repeatable.
						</p>
					</div>
					<div className="skill-grid">
						{skillGroups.map((group) => (
							<article className="skill-card" key={group.title}>
								<h3>{group.title}</h3>
								<ul>
									{group.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

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

				<section className="section" id="experience">
					<div className="section-heading">
						<p className="eyebrow">Experience</p>
						<h2>Career timeline</h2>
					</div>
					<div className="experience-list">
						{experience.map((job) => (
							<article className="experience-item" key={`${job.company}-${job.period}`}>
								<div className="experience-meta">
									<p className="role">{job.role}</p>
									<h3>{job.company}</h3>
									<p className="period">{job.period}</p>
								</div>
								<div>
									<p>{job.summary}</p>
									<ul>
										{job.highlights.map((highlight) => (
											<li key={highlight}>{highlight}</li>
										))}
									</ul>
								</div>
							</article>
						))}
					</div>
				</section>

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

				<section className="contact-section" id="contact">
					<div>
						<p className="eyebrow">Contact</p>
						<h2>Let us connect</h2>
						<p>
							Open to quality leadership, platform quality engineering, and transformation-focused conversations.
						</p>
					</div>
					<div className="contact-links">
						<a href="mailto:adityamallela.1988@gmail.com">adityamallela.1988@gmail.com</a>
						<a href="https://www.linkedin.com/in/aditya-mallela-b61aa84a/" target="_blank" rel="noreferrer">
							LinkedIn
						</a>
						<a href="https://github.com/bondinthepond" target="_blank" rel="noreferrer">
							GitHub
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
