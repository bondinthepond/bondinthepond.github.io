import "./styles.css";
import ContactSection from "./components/portfolio/ContactSection";
import CurrentFocusSection from "./components/portfolio/CurrentFocusSection";
import DomainExpertiseSection from "./components/portfolio/DomainExpertiseSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import Hero from "./components/portfolio/Hero";
import NavBar from "./components/portfolio/NavBar";
import PlaybooksSection from "./components/portfolio/PlaybooksSection";
import SectionRail from "./components/portfolio/SectionRail";
import StatsSection from "./components/portfolio/StatsSection";
import TechnologyExpertiseSection from "./components/portfolio/TechnologyExpertiseSection";
import TransformationsSection from "./components/portfolio/TransformationsSection";

function App() {
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
				<PlaybooksSection/>
				<ContactSection/>
			</main>
		</div>
	);
}

export default App;
