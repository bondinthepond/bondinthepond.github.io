import React from "react";

function Contact() {
	return (
		<section id = "contact" className = "contact">
			<h2>Contact</h2>
			<div className = "contact-1">
				<div>Phone: <span className = "phone-number">+91 7259984105</span></div>
				<div>Email: <a href = "mailto:adityamallela.1988@gmail.com">adityamallela.1988@gmail.com</a></div>
				<div>LinkedIn: <a href = "https://www.linkedin.com/in/aditya-mallela-b61aa84a/" target = "_blank"
				                  rel = "noopener noreferrer">linkedin.com/in/aditya-mallela</a></div>
				<div>GitHub: <a href = "https://github.com/bondinthepond" target = "_blank" rel = "noopener noreferrer">github.com/bondinthepond</a></div>
			</div>
		</section>
	);
}

export default Contact;