import React, {useState} from "react";

function APITestingSkills() {
	const [visible, setVisible] = useState({apiTesting: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	const skills = [
		{name: "REST Assured + Java", level: 100},
		{name: "POSTMAN", level: 100},
	];
	
	return (
		<section id = "api-testing-skills" className = "skills">
			<h4 className = "expandable" onClick = {() => toggleVisibility("apiTesting")}>
				API Testing Frameworks{" "}
				<span className = "icon">{visible.apiTesting ? "▼" : "▶"}</span>
			</h4>
			
			{visible.apiTesting && <div className = "content">
				<ul>
					{skills.map((skill, index) => (
						<li key = {index}>{skill.name}
							<div className = "filled" style = {{width: `${skill.level}%`}}>
								{skill.level}
							</div>
						</li>
					))}
				</ul>
			</div>
			}
		</section>
	);
}

export default APITestingSkills;
