import TestingSkills from "../TechnicalSkills/TestingSkills.jsx";
import Languages from "../TechnicalSkills/Languages.jsx";
import CICDSkills from "../TechnicalSkills/CICDSkills.jsx";
import OtherSkills from "../TechnicalSkills/OtherSkills.jsx";
import React, {useState} from "react";
import DevelopmentSkills from "../TechnicalSkills/DevelopmentSkills.jsx";


function TechnicalSkills() {
	
	const [visible, setVisible] = useState({technicalSkills: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	return (
		
		<section id = "technical-skills" className = "skills">
			<h2 className = "expandable" onClick = {() => toggleVisibility("technicalSkills")}>
				Technical Skills{" "}
				<span className = "icon">{visible.technicalSkills ? "▼" : "▶"}</span>
			</h2>
			{visible.technicalSkills && <TestingSkills/>}
			{visible.technicalSkills && <Languages/>}
			{visible.technicalSkills && <CICDSkills/>}
			{visible.technicalSkills && <DevelopmentSkills/>}
			{visible.technicalSkills && <OtherSkills/>}
		
		
		</section>
	);
}

export default TechnicalSkills;