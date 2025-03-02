import React, {useState} from "react";

function CICDSkills() {
	
	const [visible, setVisible] = useState({ciCdSkills: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	return (
		<section id = "languagea" className = "skills">
			
			<h3 className = "expandable" onClick = {() => toggleVisibility("ciCdSkills")}>
				CI/CD Skills{" "}
				<span className = "icon">{visible.ciCdSkills ? "▼" : "▶"}</span>
			</h3>
			
			
			{visible.ciCdSkills && <div className = "content">
				<ul>
					<li>For Version Control - GitHub</li>
					<li>Pipelines - Jenkins, GitHub Actions, Azure DevOps</li>
					<li>Selenium Grid</li>
					<li>IBM UCD</li>
					<li>Artifactory</li>
					<li>Monitoring Tools - Splunk, Pingdom, Datadog</li>
				</ul>
			</div>
			}
		</section>
	);
}

export default CICDSkills;