import "./styles.css";
import ContactSection from "./components/portfolio/ContactSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import Hero from "./components/portfolio/Hero";
import LeadershipSection from "./components/portfolio/LeadershipSection";
import NavBar from "./components/portfolio/NavBar";
import PlaybooksSection from "./components/portfolio/PlaybooksSection";
import SkillsSection from "./components/portfolio/SkillsSection";
import StatsSection from "./components/portfolio/StatsSection";
import TransformationsSection from "./components/portfolio/TransformationsSection";

function App() {
	return (
		<div className="site-shell">
			<NavBar/>
			<Hero/>
			<main>
				<StatsSection/>
				<LeadershipSection/>
				<SkillsSection/>
				<TransformationsSection/>
				<ExperienceSection/>
				<PlaybooksSection/>
				<ContactSection/>
			</main>
		</div>
	);
}

export default App;
