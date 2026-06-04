import React from "react";
import "./styles.css";

const stats = [
	{value: "15+", label: "Years in software and quality engineering"},
	{value: "PQE", label: "Platform Quality Engineering team at EquiLend"},
	{value: "FinTech", label: "Securities lending, post-trade, settlements, and rerates"},
	{value: "90%", label: "Automation target reached from an 80% manual base"},
];

const leadershipStrengths = [
	"Building and scaling India QE capability",
	"Quality transformation strategy",
	"Platform Quality Engineering",
	"Federated QE operating model",
	"Automation roadmap and governance",
	"Quality metrics and dashboarding",
	"Release readiness and quality gates",
	"Hiring, mentoring, reviews, and 1:1s",
];

const skillGroups = [
	{
		title: "Quality Engineering",
		items: [
			"Test strategy and planning",
			"Xray / Jira-based test management",
			"Defect triage and quality governance",
			"Test data and environment management",
			"Traceability, quality baselines, and maturity assessment",
			"Shift-left, risk-based testing, and test pyramid thinking",
		],
	},
	{
		title: "Automation and Tools",
		items: [
			"Java, Selenium, Cucumber, TestNG, Gradle",
			"REST Assured, API, database, and end-to-end automation",
			"Kafka, IBM MQ, AWS SQS, and queue validation",
			"Jenkins, CI/CD automation, and regression health",
			"JMeter, Locust, Lighthouse",
		],
	},
	{
		title: "Engineering Platforms",
		items: [
			"Distributed, event-driven systems",
			"Hybrid cloud and on-prem infrastructure",
			"Oracle DB, APIs, messaging, and data integration",
			"Microservices, Spring Boot, React, and Node.js",
			"Azure, AWS, GCP, Kafka, Redis, Solr, Elasticsearch",
		],
	},
	{
		title: "Product and Delivery",
		items: [
			"Team building, hiring, onboarding, and interview rubrics",
			"Roadmap planning and estimation",
			"QE capability-building plans",
			"Scrum and Kanban delivery",
			"Leadership reporting and dashboarding",
			"Manual QA to automation-first coaching",
		],
	},
	{
		title: "FinTech Domain",
		items: [
			"Securities lending and post-trade workflows",
			"Trading, settlements, rerates, and regulatory flows",
			"NGT, ECS, 1Source, PTS, and related platforms",
			"Message-heavy validation across Kafka, MQ, SQS, APIs, and databases",
			"Quality engineering for complex business-critical workflows",
		],
	},
];

const transformations = [
	{
		title: "Platform QE Function at EquiLend",
		context: "EquiLend is forming a Platform Quality Engineering model to support standards, governance, maturity, and enablement across application teams.",
		impact: "Helping define the PQE charter, operating model, responsibilities, governance structure, and federated QE model.",
	},
	{
		title: "India QE Capability Building",
		context: "The organization is scaling quality engineering capability in India with stronger automation ownership and engineering discipline.",
		impact: "Building the team through hiring, mentoring, onboarding practices, interview rubrics, and capability-building plans.",
	},
	{
		title: "Quality Metrics and Dashboarding",
		context: "Leadership needs clearer visibility into automation coverage, release readiness, execution health, flaky tests, and quality trends.",
		impact: "Contributing to the Platform QE Dashboard vision and data-driven reporting across applications.",
	},
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
		company: "EquiLend",
		role: "Associate Director, Quality Engineering Manager",
		team: "Platform Quality Engineering Team",
		period: "Apr 2025 - Current",
		summary:
			"Building and operationalizing Platform Quality Engineering capability for securities lending and post-trade FinTech platforms.",
		highlights: [
			"Building and scaling the India Quality Engineering capability through hiring, mentoring, onboarding, interview rubrics, and QE capability plans.",
			"Playing a key role in forming the Platform Quality Engineering function, including charter, operating model, responsibilities, standards, and governance.",
			"Supporting a federated QE model where QEs are embedded in scrum teams while PQE provides standards, maturity models, enablement, and governance.",
			"Driving quality transformation across test management, automation, release readiness, reporting, and engineering practices.",
			"Helping define automation strategy across UI, API, database, queues, Kafka, AWS SQS, IBM MQ, and end-to-end business flows.",
			"Supporting quality engineering for securities lending, post-trade, rerates, settlements, NGT, ECS, 1Source, PTS, and related platforms.",
		],
	},
	{
		company: "Career Break",
		role: "Child care break",
		period: "Apr 2024 - Apr 2025",
		summary:
			"Took an intentional child care break while continuing to stay close to modern quality engineering, distributed systems, JavaScript technologies, and foundational AI concepts.",
		highlights: [
			"Assisted a stealth-mode AI startup with end-to-end testing processes, tools, and quality best practices.",
			"Continued hands-on exploration of CI/CD, AI product quality, prompt engineering, chatbots, and agents.",
		],
	},
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
				<a className="brand" href="#top">Aditya M S</a>
				<div className="nav-links">
					<a href="#impact">Impact</a>
					<a href="#skills">Skills</a>
					<a href="#experience">Experience</a>
					<a href="#contact">Contact</a>
				</div>
			</nav>

			<header className="hero" id="top">
				<div className="hero-content">
					<p className="eyebrow">M S Aditya</p>
					<h1>Quality Engineering Transformation Leader</h1>
					<p className="hero-text">
						Building modern Quality Engineering organizations through Platform QE,
						automation strategy, governance, metrics, and engineering excellence.
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
					<h2>Associate Director, Quality Engineering Manager</h2>
					<p>
						Leading within the Platform Quality Engineering team at EquiLend, focused on
						QE capability building, federated quality governance, automation strategy,
						metrics, and FinTech platform quality.
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
									{job.team && <p className="team">{job.team}</p>}
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
