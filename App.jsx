import React from "react";
import "./styles.css";
import Header from "./src/components/CoreComponents/1-Header.jsx";
import About from "./src/components/CoreComponents/2-About.jsx";
import Experience from "./src/components/CoreComponents/5-Experience.jsx";
import Contact from "./src/components/CoreComponents/6-Contact.jsx";
import Download from "./src/components/CoreComponents/7-Download.jsx";
import ManagementSkills from "./src/components/CoreComponents/4-ManagementSkills.jsx";
import TechnicalSkills from "./src/components/CoreComponents/3-TechnicalSkills.jsx";

function App() {
	return (
		<div>
			<Header/>
			<div className = "container">
				<About/>
				<TechnicalSkills/>
				<ManagementSkills/>
				<Experience/>
				<Contact/>
				<Download/>
			</div>
		</div>
	);
}

export default App;