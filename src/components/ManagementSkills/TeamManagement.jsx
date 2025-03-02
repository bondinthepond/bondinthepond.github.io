import React, {useState} from "react";

function TeamManagement() {
	
	const [visible, setVisible] = useState({teamManagement: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	const teamManagementSkills = ["Hiring", "Conducting Annual Reviews", "Mentoring and Coaching", "Periodic 1:1s"];
	
	return (
		
		<section id = "team-management" className = "skills">
			<h3 className = "expandable" onClick = {() => toggleVisibility("teamManagement")}>
				Team Management{" "}
				<span className = "icon">{visible.teamManagement ? "▼" : "▶"}</span>
			</h3>
			{visible.teamManagement && <div className = "content">
				<ul>
					{teamManagementSkills.map((item, index) => (
						<li key = {index}>{item}</li>
					))}
				
				</ul>
			</div>}
		
		</section>
	);
}

export default TeamManagement;