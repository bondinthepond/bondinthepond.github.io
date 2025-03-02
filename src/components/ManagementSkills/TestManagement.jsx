import React, {useState} from "react";

function TestManagement() {
	
	const [visible, setVisible] = useState({testManagement: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	const testManagement = ["Test Case Writing", "Test Plan and Strategy", "Test Environment Setup", "Test Data Management", "Defect creation and Triage",
		"Feature Prioritization for Automation", "Test Automation Planning and Strategy"];
	return (
		<section id = "test-management" className = "skills">
			<h3 className = "expandable" onClick = {() => toggleVisibility("managementSkills")}>
				Test Management{" "}
				<span className = "icon">{visible.managementSkills ? "▼" : "▶"}</span>
			</h3>
			{visible.managementSkills && <div className = "content">
				<ul>
					{testManagement.map((item, index) => (
						<li key = {index}>{item}</li>
					))}
				
				</ul>
			</div>}
		
		</section>
	);
}

export default TestManagement;