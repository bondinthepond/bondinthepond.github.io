import React, {useState} from "react";

function Accenture() {
	
	const [visible, setVisible] = useState({accentureExperience: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	return (
		
		<section id = "accenture" class = "skills">
			<h4 className = "expandable" onClick = {() => toggleVisibility("accentureExperience")}>
				Senior Software Engineer | Accenture | Aug 2011 - Jul 2015 {" "}
				<span className = "icon">{visible.accentureExperience ? "🔼" : "🔽"}</span></h4>
			{
				visible.accentureExperience && <ul>
					<li className = "experience">Delivered end to end testing for Salesforce-based payment applications coordinating with external stakeholders for
					                             seamless integration and delivery.
					</li>
					<li className = "experience">Designed and developed Java-Selenium based regression test automation framework to reduce regression test time and
					                             efforts.
					</li>
				</ul>
			}
		
		</section>
	);
}

export default Accenture;