import {useState} from "react";

function ProjectManagement() {
	
	const [visible, setVisible] = useState({projectManagement: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	const projectManagementSkills = ["JIRA", "Road Map Planning", "Project Estimations", "Risk Assessment", "Budgeting"];
	
	return (
		
		<section id = "project-management" className = "skills">
			<h3 className = "expandable" onClick = {() => toggleVisibility("projectManagement")}>
				Project Management{" "}
				<span className = "icon">{visible.projectManagement ? "▼" : "▶"}</span>
			</h3>
			{visible.projectManagement && <div className = "content">
				<ul>
					{projectManagementSkills.map((item, index) => (
						<li key = {index}>{item}</li>
					))}
				
				</ul>
			</div>}
		
		</section>
	);
}

export default ProjectManagement;