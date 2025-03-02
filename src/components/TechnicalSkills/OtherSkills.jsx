import React, {useState} from "react";

function OtherSkills() {
	
	const [visible, setVisible] = useState({otherSkills: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	return (
		<section id = "other-skills" className = "skills">
			
			<h3 className = "expandable" onClick = {() => toggleVisibility("otherSkills")}>
				Other Skills{" "}
				<span className = "icon">{visible.otherSkills ? "▼" : "▶"}</span>
			</h3>
			
			
			{visible.otherSkills && <div className = "content">
				<ul>
					<li>Cloud - Azure, GCP</li>
					<li>SEO Tools - Google Search Console, Page Speed Insights, Screaming Frog, SEM Rush</li>
					<li>Foundations of Gen AI based systems, Prompt Engineering, Chatbots, Agents</li>
				</ul>
			</div>
			}
		</section>
	);
}

export default OtherSkills;