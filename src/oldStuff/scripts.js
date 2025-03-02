document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".expandable").forEach(header => {
		const icon = header.querySelector(".icon");
		header.style.cursor = "pointer";
		header.addEventListener("click", function () {
			const content = this.nextElementSibling;
			if (content.style.display === "none" || content.style.display === "") {
				content.style.display = "block";
				icon.textContent = "▼"; // Expanded state
			} else {
				content.style.display = "none";
				icon.textContent = "▶"; // Collapsed state
			}
		});
	});
});
