import {useEffect, useState} from "react";
import {navLinks} from "../../data/portfolioData";

const railLinks = [
	{href: "#top", label: "Hero"},
	...navLinks,
];

function SectionRail() {
	const [activeSection, setActiveSection] = useState("top");

	useEffect(() => {
		const sections = railLinks
			.map((link) => document.querySelector(link.href))
			.filter(Boolean);

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntry = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

				if (visibleEntry?.target.id) {
					setActiveSection(visibleEntry.target.id);
				}
			},
			{
				rootMargin: "-25% 0px -55% 0px",
				threshold: [0.1, 0.25, 0.5],
			},
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (
		<nav className="chapter-rail" aria-label="Section navigation">
			{railLinks.map((link, index) => {
				const sectionId = link.href.replace("#", "");
				const isActive = sectionId === activeSection;

				return (
					<a
						className={isActive ? "chapter-rail-link active" : "chapter-rail-link"}
						href={link.href}
						key={link.href}
						aria-current={isActive ? "true" : undefined}
					>
						<span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
						<strong>{link.label}</strong>
					</a>
				);
			})}
		</nav>
	);
}

export default SectionRail;
