import React from "react";

function Contact() {
	return (
		<section id = "contact" className = "contact">
			<h2>Contact</h2>
			<p>Phone: <span className = "phone-number">+91 7259984105</span></p>
			<p>Email: <a href = "mailto:adityamallela.1988@gmail.com">adityamallela.1988@gmail.com</a></p>
			<p>LinkedIn: <a href = "https://www.linkedin.com/in/aditya-mallela-b61aa84a/" target = "_blank"
			                rel = "noopener noreferrer">linkedin.com/in/aditya-mallela</a></p>
			<p>GitHub: <a href = "https://github.com/bondinthepond" target = "_blank" rel = "noopener noreferrer">github.com/bondinthepond</a></p>
		</section>
	);
}

export default Contact;