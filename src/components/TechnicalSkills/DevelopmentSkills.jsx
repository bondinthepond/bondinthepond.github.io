import React, {useState} from "react";

function developmentSkills() {
	
	const [visible, setVisible] = useState({developmentFrameworks: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	const developmentFrameworks = [
		{name: "SpringBoot", level: 60},
		{name: "REACT JS", level: 60},
		{name: "Node JS", level: 60},
	];
	
	return (
		<section id = "development-frameworks" className = "skills">
			
			<h3 className = "expandable" onClick = {() => toggleVisibility("developmentFrameworks")}>
				Development Frameworks{" "}
				<span className = "icon">{visible.developmentFrameworks ? "▼" : "▶"}</span>
			</h3>
			
			
			{visible.developmentFrameworks && <div className = "content">
				<ul>
					{developmentFrameworks.map((skill, index) => (
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

export default developmentSkills;