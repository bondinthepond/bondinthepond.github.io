import "./styles.css";
import {useEffect, useState} from "react";
import KnowledgeLibraryPage from "./components/knowledge/KnowledgeLibraryPage";
import KnowledgeNotePage from "./components/knowledge/KnowledgeNotePage";
import KnowledgeTopicPage from "./components/knowledge/KnowledgeTopicPage";
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
	const knowledgeTopicMatch = route.match(/^knowledge\/topics\/(.+)$/);
	const knowledgeNoteMatch = route.match(/^knowledge\/(.+)$/);

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

	if (knowledgeTopicMatch) {
		return (
			<div className="site-shell">
				<KnowledgeTopicPage slug={knowledgeTopicMatch[1]}/>
			</div>
		);
	}

	if (knowledgeNoteMatch) {
		return (
			<div className="site-shell">
				<KnowledgeNotePage slug={knowledgeNoteMatch[1]}/>
			</div>
		);
	}

	if (route === "knowledge") {
		return (
			<div className="site-shell">
				<KnowledgeLibraryPage/>
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
