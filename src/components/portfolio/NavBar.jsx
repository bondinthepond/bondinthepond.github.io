import {navLinks, profile} from "../../data/portfolioData";

function NavBar() {
	return (
		<nav className="top-nav" aria-label="Primary navigation">
			<a className="brand" href="#top">{profile.navName}</a>
			<div className="nav-links">
				{navLinks.map((link) => (
					<a href={link.href} key={link.href}>{link.label}</a>
				))}
			</div>
		</nav>
	);
}

export default NavBar;
