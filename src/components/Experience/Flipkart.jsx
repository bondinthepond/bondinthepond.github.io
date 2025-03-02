import React, {useState} from "react";

function Flipkart() {
	const [visible, setVisible] = useState({flipkartExperience: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	return (
		<section id = "flipkart" class = "skills">
			<h4 className = "expandable" onClick = {() => toggleVisibility("flipkartExperience")}>
				SDET | TekSystems(Flipkart) | Apr 2017 - Oct 2017 {" "}
				<span className = "icon">{visible.flipkartExperience ? "🔼" : "🔽"}</span></h4>
			{
				visible.flipkartExperience && <ul>
					<li className = "experience">Established Quality Assurance processes and standards, ensuring comprehensive testing across multiple platforms.
					</li>
					<li className = "experience">Collaborated with cross-functional teams to identify and address quality issues</li>
					<li className = "experience">Set up CI/CD pipelines, improving deployment cycles and release efficiency.</li>
					<li className = "experience">Developed adapter layer that enabled third-party vendors to integrate with EKART's delivery system, expanding
					                             platform usage using Java-MapStruct.
					</li>
					<li className = "experience">Developed adapter layer that enabled third-party vendors to integrate with EKART's delivery system, expanding
					                             platform usage using Java-MapStruct.
					</li>
				</ul>
			}
		
		</section>
	);
}

export default Flipkart;