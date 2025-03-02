import React, {useState} from "react";

function Languages() {
	
	const [visible, setVisible] = useState({language: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	const skills = [
		{name: "Java", level: 75},
		{name: "JavaScript", level: 50},
		{name: "Python", level: 50},
	];
	
	return (
		<section id = "languagea" className = "skills">
			
			<h3 className = "expandable" onClick = {() => toggleVisibility("language")}>
				Languages{" "}
				<span className = "icon">{visible.language ? "▼" : "▶"}</span>
			</h3>
			
			
			{visible.language && <div className = "content">
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

export default Languages;