// components/Section.oldStuff
import {useState} from "react";

const Section = ({title, children}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<h3 className = "expandable" onClick = {() => setIsOpen(!isOpen)}>
				{title} <span className = "icon">{isOpen ? "▼" : "▶"}</span>
			</h3>
			{isOpen && <div className = "content">{children}</div>}
		</div>
	);
};

export default Section;
