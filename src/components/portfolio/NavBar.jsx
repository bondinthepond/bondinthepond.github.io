import {navLinks, profile} from "../../data/portfolioData";

function NavBar() {
	return (
		<nav className="top-nav" aria-label="Primary navigation">
			<a className="brand" href="#top">{profile.navName}</a>
			<div className="nav-links">
				{navLinks.map((link) => (
					<a href={link.href} key={link.href}>{link.label}</a>
				))}
				<a className="knowledge-nav-link" href="#/knowledge">Knowledge</a>
			</div>
			<a className="knowledge-nav-mobile" href="#/knowledge">Knowledge</a>
		</nav>
	);
}

export default NavBar;
