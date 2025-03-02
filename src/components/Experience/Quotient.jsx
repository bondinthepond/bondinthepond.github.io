import React, {useState} from "react";

function Quotient() {
	
	const [visible, setVisible] = useState({quotientExperience: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	return (
		<section id = "quotient" class = "skills">
			<h4 className = "expandable" onClick = {() => toggleVisibility("quotientExperience")}>
				Engineering Manager QA | Quotient Technology (Formerly Coupons.com) | Nov 2017 – Apr 2024 {" "}
				<span className = "icon">{visible.quotientExperience ? "🔼" : "🔽"}</span></h4>
			{visible.quotientExperience && <ul>
				<li class = "experience">Led cross-functional team of 12, to manage key products such as Coupons.com, Brandcaster, and Coupon Codes & Cash Back,
				                         serving millions of
				                         users, which had B2B and B2C flavours.
				</li>
				<li class = "experience">Established Quality Standards for the entire product line, ensuring comprehensive testing across various aspects and
				                         creating test
				                         frameworks for frontend, backend and mobile.
				</li>
				<li class = "experience">Implemented a shift-left approach to quality engineering, fostering collaboration among developers, designers, product
				                         owners, and quality
				                         engineers
				</li>
				<li class = "experience">Transformed testing strategy from 80% manual to 90% automation within a time frame of 6 months, boosting test coverage
				                         and release
				                         velocity.
				</li>
				<li class = "experience">Enhanced SEO by identifying and resolving front-end and back-end performance bottlenecks using Locust, JMeter, and
				                         Lighthouse, resulting in
				                         an
				                         8+ position increase in search rankings.
				</li>
				<li class = "experience">Orchestrated the release process for frontend, backend and mobile applications, achieving 84 successful releases in
				                         four months with a 98%
				                         success rate and reducing rollbacks.
				</li>
				<li class = "experience">Drove Agile practices (Scrum & Kanban), increasing sprint velocity by 15%, reducing critical incident count & reducing
				                         employee burnout
				                         through improved workflow processes and ticket pipelines.
				</li>
				<li class = "experience">Managed cloud migrations and infrastructure consolidations on Azure, AWS and On-Prem, resulting in monthly operational
				                         cost savings of
				                         $15K.
				</li>
				<li class = "experience">Led the modernization and cloud adoption strategy for the National Rebates product across multiple applications,
				                         transforming its
				                         architecture
				                         to enhance scalability, performance, and resilience.
				</li>
				<li class = "experience">Architected and Developed the Coupon Codes platform using a microservices architecture, leveraging Java (Spring Boot)
				                         for backend services
				                         and
				                         ReactJS for the frontend.
				</li>
				<li class = "experience">Spearheaded the re-architecture and re-write of legacy systems in Brandcaster to enhance maintainability and
				                         performance of the system.
				</li>
				<li class = "experience">Set clear goals and developed strategic roadmaps for team members, offering ongoing guidance and support to ensure
				                         achievement of key
				                         objectives and alignment with OKRs.
				</li>
				<li class = "experience">Collaborated with HR and senior management in defining hiring strategies, mentoring engineers, and resource planning to
				                         align with business
				                         goals.
				</li>
			</ul>
			}
		</section>
	);
}

export default Quotient;