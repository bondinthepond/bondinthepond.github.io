import React, {useState} from "react";
import CareerBreak from "../Experience/CareerBreak.jsx";
import Quotient from "../Experience/Quotient.jsx";
import Redmart from "../Experience/Redmart.jsx";
import Flipkart from "../Experience/Flipkart.jsx";
import Accenture from "../Experience/Accenture.jsx";


function Experience() {
	
	const [visible, setVisible] = useState({experience: false});
	
	const toggleVisibility = (section) => {
		setVisible((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};
	return (
		<section id = "experience" className = "skills">
			<h2 className = "expandable" onClick = {() => toggleVisibility("experience")}>
				Experience{" "}
				<span className = "icon">{visible.experience ? "▼" : "▶"}</span>
			</h2>
			
			{visible.experience && <CareerBreak/>}
			{visible.experience && <Quotient/>}
			{visible.experience && <Redmart/>}
			{visible.experience && <Flipkart/>}
			{visible.experience && <Accenture/>}
		</section>
	);
}

export default Experience;