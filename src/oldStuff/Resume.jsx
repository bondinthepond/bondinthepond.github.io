// components/Resume.jsx
import Section from "../components/section.jsx";
import "../styles/Resume.css";

export default function Resume() {
	return (
		<div className = "container">
			<header>
				<h1>M S Aditya</h1>
				<p>Tester | Software Engineer | Tech Enthusiast</p>
			</header>
			
			<section id = "about">
				<h2>About Me</h2>
				<p>A passionate developer with expertise in modern web technologies.</p>
			</section>
			
			<section id = "skills" className = "skills">
				<h2>Skills</h2>
				<Section title = "Testing Frameworks">
					<Section title = "UI Testing">
						<ul>
							<li>Selenium + Java + TestNG + Selenium Grid</li>
							<li>Cypress + Mocha + Chai</li>
							<li>Selenium + Python + Pytest</li>
							<li>Playwright + JavaScript</li>
						</ul>
					</Section>
					<Section title = "API Testing">
						<ul>
							<li>Java + RESTAssured</li>
							<li>POSTMAN</li>
						</ul>
					</Section>
					<Section title = "Mobile Testing">
						<ul>
							<li>Java + Appium</li>
							<li>Maestro</li>
						</ul>
					</Section>
					<Section title = "Performance Testing">
						<ul>
							<li>JMeter</li>
							<li>Locust + Python</li>
						</ul>
					</Section>
				</Section>
				<Section title = "Languages">
					<ul>
						<li>Java</li>
						<li>JavaScript</li>
						<li>Python</li>
					</ul>
				</Section>
				<Section title = "CI/CD Tools">
					<ul>
						<li>GitHub</li>
						<li>Jenkins, GitHub Actions, Azure DevOps</li>
						<li>IBM UCD</li>
						<li>Artifactory</li>
						<li>Monitoring Tools - Splunk, Pingdom, Datadog</li>
					</ul>
				</Section>
			</section>
			
			<section id = "experience" className = "experience">
				<h2>Experience</h2>
				<ul>
					<li><strong>Software Engineer</strong> - Company Name (2022 - Present)</li>
					<li><strong>Web Developer</strong> - Startup XYZ (2019 - 2022)</li>
				</ul>
			</section>
			
			<section id = "contact" className = "contact">
				<h2>Contact</h2>
				<p>Phone: <span className = "phone-number">+91 7259984105</span></p>
				<p>Email: <a href = "mailto:adityamallela.1988@gmail.com">adityamallela.1988@gmail.com</a></p>
				<p>LinkedIn: <a href = "https://www.linkedin.com/in/aditya-mallela-b61aa84a/" target = "_blank">linkedin.com/in/aditya-mallela</a></p>
				<p>GitHub: <a href = "https://github.com/bondinthepond" target = "_blank">github.com/bondinthepond</a></p>
			</section>
			
			<section id = "download" className = "download">
				<h2>Download Resume</h2>
				<p>Click to download my resume:</p>
				<a href = "../resume/Aditya_Resume.pdf" download className = "download-btn">Download Resume</a>
			</section>
		</div>
	);
}
