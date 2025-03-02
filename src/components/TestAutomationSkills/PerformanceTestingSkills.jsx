import React, {useState} from "react";

function PerformanceTestingSkills() {
	const [visible, setVisible] = useState({performanceTesting: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	const skills = [
		{name: "JMeter", level: 75},
		{name: "Locust", level: 50},
	];
	
	return (
		<section id = "performance-testing-skills" className = "skills">
			<h4 className = "expandable" onClick = {() => toggleVisibility("performanceTesting")}>
				Performance Testing Frameworks{" "}
				<span className = "icon">{visible.performanceTesting ? "▼" : "▶"}</span>
			</h4>
			
			{visible.performanceTesting && <div className = "content">
				<ul>
					{skills.map((skill, index) => (
						<li key = {index}>{skill.name}
							<div className = "rating">
								<div className = "filled" style = {{width: `${skill.level}%`}}>
									{skill.level}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
			}
		</section>
	);
}

export default PerformanceTestingSkills;