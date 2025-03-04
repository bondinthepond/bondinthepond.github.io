import React from "react";

function Download() {
	return (
		<section id = "download" class = "download">
			<h2>Resume</h2>
			<p class = "download">Click to {" "}
				<a href = "src/resume/Aditya_Resume.pdf" download class = "download-btn">download my resume</a></p>
		</section>
	);
}

export default Download;