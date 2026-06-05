import "./styles.css";
import {useEffect, useState} from "react";
import CaseStudiesSection from "./components/portfolio/CaseStudiesSection";
import ContactSection from "./components/portfolio/ContactSection";
import CurrentFocusSection from "./components/portfolio/CurrentFocusSection";
import DomainExpertiseSection from "./components/portfolio/DomainExpertiseSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import Hero from "./components/portfolio/Hero";
import NavBar from "./components/portfolio/NavBar";
import SectionRail from "./components/portfolio/SectionRail";
import StatsSection from "./components/portfolio/StatsSection";
import TechnologyExpertiseSection from "./components/portfolio/TechnologyExpertiseSection";
import TransformationsSection from "./components/portfolio/TransformationsSection";

function getRoute() {
	return window.location.hash.replace(/^#\/?/, "");
}

function App() {
	const [route, setRoute] = useState(getRoute);
	const caseStudyMatch = route.match(/^case-studies\/(.+)$/);

	useEffect(() => {
		const handleHashChange = () => setRoute(getRoute());
		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	if (caseStudyMatch) {
		return (
			<div className="site-shell">
				<CaseStudiesSection slug={caseStudyMatch[1]}/>
			</div>
		);
	}

	return (
		<div className="site-shell">
			<NavBar/>
			<SectionRail/>
			<Hero/>
			<main>
				<StatsSection/>
				<CurrentFocusSection/>
				<TransformationsSection/>
				<ExperienceSection/>
				<DomainExpertiseSection/>
				<TechnologyExpertiseSection/>
				<ContactSection/>
			</main>
		</div>
	);
}

export default App;
