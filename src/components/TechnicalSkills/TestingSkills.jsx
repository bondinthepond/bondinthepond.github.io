import React, {useState} from "react";
import APITestingSkills from "../TestAutomationSkills/APITestingSkills";
import MobileTestingSkills from "../TestAutomationSkills/MobileTestingSkills";
import PerformanceTestingSkills from "../TestAutomationSkills/PerformanceTestingSkills";
import UITestingSkills from "../TestAutomationSkills/UITestingSkills";

function TestingSkills() {
	
	const [visible, setVisible] = useState({testing: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	return (
		<section id = "testing" className = "skills">
			
			<h3 className = "expandable" onClick = {() => toggleVisibility("testing")}>
				Testing Frameworks{" "}
				<span className = "icon">{visible.testing ? "▼" : "▶"}</span>
			</h3>
			
			{visible.testing && <UITestingSkills/>}
			{visible.testing && <APITestingSkills/>}
			{visible.testing && <MobileTestingSkills/>}
			{visible.testing && <PerformanceTestingSkills/>}
		</section>
	);
}

export default TestingSkills;