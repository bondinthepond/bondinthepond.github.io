import {contactLinks, profile} from "../../data/portfolioData";

function getContactType(link) {
	if (link.href.startsWith("mailto:")) {
		return "Email";
	}

	if (link.href.startsWith("tel:")) {
		return "Phone";
	}

	return link.label;
}

function ContactSection() {
	return (
		<section className="contact-section" id="contact">
			<div className="contact-copy">
				<p className="eyebrow">Resume & Contact</p>
				<h2>Let us connect</h2>
				<p>
					Open to quality leadership, Platform Quality Engineering, automation strategy,
					and transformation-focused conversations.
				</p>
				<a className="contact-resume-link" href={profile.resumePath} target="_blank" rel="noreferrer">
					View Resume
				</a>
			</div>
			<div className="contact-card-grid">
				{contactLinks.map((link) => (
					<a
						className="contact-card"
						href={link.href}
						key={link.href}
						target={link.href.startsWith("http") ? "_blank" : undefined}
						rel="noreferrer"
					>
						<span>{getContactType(link)}</span>
						<strong>{link.label}</strong>
					</a>
				))}
			</div>
		</section>
	);
}

export default ContactSection;
