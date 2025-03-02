import React from "react";
import "./styles.css";
import Header from "./components/CoreComponents/1-Header.jsx";
import About from "./components/CoreComponents/2-About.jsx";
import Experience from "./components/CoreComponents/5-Experience.jsx";
import Contact from "./components/CoreComponents/6-Contact.jsx";
import Download from "./components/CoreComponents/7-Download.jsx";
import ManagementSkills from "./components/CoreComponents/4-ManagementSkills.jsx";
import TechnicalSkills from "./components/CoreComponents/3-TechnicalSkills.jsx";

function App() {
	return (
		<div>
			<Header/>
			<div className = "container">
				<About/>
			</div>
			<div className = "container">
				<TechnicalSkills/>
				<ManagementSkills/>
				<Experience/>
			</div>
			<div className = "container">
				<Contact/>
			</div>
			<div className = "container">
				<Download/>
			</div>
		</div>
	);
}

export default App;