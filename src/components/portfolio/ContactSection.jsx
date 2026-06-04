import {contactLinks} from "../../data/portfolioData";

function ContactSection() {
	return (
		<section className="contact-section" id="contact">
			<div>
				<p className="eyebrow">Contact</p>
				<h2>Let us connect</h2>
				<p>
					Open to quality leadership, platform quality engineering, and transformation-focused conversations.
				</p>
			</div>
			<div className="contact-links">
				{contactLinks.map((link) => (
					<a href={link.href} key={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
						{link.label}
					</a>
				))}
			</div>
		</section>
	);
}

export default ContactSection;
