import React, {useState} from "react";

function UITestingSkills() {
	const [visible, setVisible] = useState({uiTesting: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	const skills = [
		{name: "Selenium + Java + TestNG + Selenium Grid", level: 100},
		{name: "Cypress + Mocha + Chai", level: 75},
		{name: "Selenium + Python + Pytest", level: 100},
		{name: "Playwright + JavaScript", level: 50}
	];
	
	return (
		<section id = "ui-testing-skills" className = "skills">
			<h4 className = "expandable" onClick = {() => toggleVisibility("uiTesting")}>
				UI Testing Frameworks{" "}
				<span className = "icon">{visible.uiTesting ? "▼" : "▶"}</span>
			</h4>
			
			{visible.uiTesting && <div className = "content">
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

export default UITestingSkills;

