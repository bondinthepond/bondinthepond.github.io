import React, {useState} from "react";

function Skills1() {
	const [visible, setVisible] = useState({
		                                       testing: false,
		                                       uiTesting: false, apiTesting: false, mobileTesting: false, performanceTesting: false
	                                       });
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	
	return (
		
		<section id = "skills" className = "skills">
			<h2>Skills</h2>
			
			<h3 className = "expandable" onClick = {() => toggleVisibility("testing")}>
				Testing Frameworks{" "}
				<span className = "icon">{visible.testing ? "▼" : "▶"}</span>
			</h3>
			
			{visible.testing && (
				<div className = "content">
					<h4 className = "expandable" onClick = {() => toggleVisibility("uiTesting")}>
						UI Testing{" "}
						<span className = "icon">{visible.uiTesting ? "▼" : "▶"}</span>
					</h4>
					
					{visible.uiTesting && (
						<ul className = "content">
							<li>Selenium + Java + TestNG + Selenium Grid</li>
							<li>Cypress + Mocha + Chai</li>
							<li>Selenium + Python + Pytest</li>
							<li>Playwright + JavaScript</li>
						</ul>
					)}
				</div>
			)}
		</section>
	);
}

export default Skills1;
