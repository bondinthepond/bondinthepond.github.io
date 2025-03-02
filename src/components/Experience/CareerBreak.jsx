import React, {useState} from "react";

function CareerBreak() {
	
	const [visible, setVisible] = useState({careerBreak: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	return (
		<section id = "career-break" className = "skills">
			<h4 className = "expandable" onClick = {() => toggleVisibility("careerBreak")}>
				Career Break | Apr 2024 - Current {" "}
				<span className = "icon">{visible.careerBreak ? "🔼" : "🔽"}</span></h4>
			{
				visible.careerBreak && <ul>
					<li className = "experience">Dedicated time to childcare, personal well-being, and fitness.
					</li>
					<li className = "experience">Expanded expertise in Distributed systems, JavaScript based technologies and foundational AI concepts.</li>
					<li className = "experience">Set up CI/CD pipelines, improving deployment cycles and release efficiency.</li>
					<li className = "experience">Assisted a stealth mode AI startup to implement end-to-end testing processes, tools, and best practices for their
					                             emerging AI-based product.
					</li>
				</ul>
			}
		
		</section>
	);
}

export default CareerBreak;