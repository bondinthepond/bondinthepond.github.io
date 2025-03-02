import React, {useState} from "react";

function MobileTestingSkills() {
	const [visible, setVisible] = useState({mobileTesting: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	const skills = [
		{name: "Appium + Java", level: 75},
		{name: "Maestro", level: 75},
	];
	
	return (
		<section id = "mobile-testing-skills" className = "skills">
			<h4 className = "expandable" onClick = {() => toggleVisibility("mobileTesting")}>
				Mobile Testing Frameworks{" "}
				<span className = "icon">{visible.mobileTesting ? "▼" : "▶"}</span>
			</h4>
			
			{visible.mobileTesting && <div className = "content">
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

export default MobileTestingSkills;