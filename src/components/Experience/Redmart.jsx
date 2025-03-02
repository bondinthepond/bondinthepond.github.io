import React, {useState} from "react";

function Redmart() {
	
	const [visible, setVisible] = useState({redmartExperience: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	return (
		<section id = "redmart" class = "skills">
			<h4 className = "expandable" onClick = {() => toggleVisibility("redmartExperience")}>
				Quality Engineer 2 | RedMart | Apr 2017 - Oct 2017 {" "}
				<span className = "icon">{visible.redmartExperience ? "🔼" : "🔽"}</span></h4>
			
			{
				visible.redmartExperience && <ul>
					<li className = "experience">Led the testing efforts for the transport operations app for delivery personnel.</li>
					<li className = "experience">Implemented automation frameworks and testing strategies to streamline quality assurance processes and improve
					                             efficiency – using Calabash-Javascript-Mocha-Chai and Java- Rest Assured
					</li>
				</ul>
			}
		
		
		</section>
	);
}

export default Redmart;