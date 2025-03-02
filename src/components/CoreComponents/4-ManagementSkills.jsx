// import React, {useState} from "react";
import ProjectManagement from "../ManagementSkills/ProjectManagement.jsx";
import TeamManagement from "../ManagementSkills/TeamManagement.jsx";
import TestManagement from "../ManagementSkills/TestManagement.jsx";
import React, {useState} from "react";


function ManagementSkills() {
	
	const [visible, setVisible] = useState({managementSkills: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	return (
		<section id = "management-skills" className = "skills">
			<h2 className = "expandable" onClick = {() => toggleVisibility("managementSkills")}>
				Management Skills{" "}
				<span className = "icon">{visible.managementSkills ? "▼" : "▶"}</span>
			</h2>
			
			{visible.managementSkills && <TestManagement/>}
			{visible.managementSkills && <ProjectManagement/>}
			{visible.managementSkills && <TeamManagement/>}
		</section>
	);
}

export default ManagementSkills;