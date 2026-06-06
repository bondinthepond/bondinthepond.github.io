import {knowledgeNotes} from "../../data/knowledgeData";

function idFor(title) {
	return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function sectionParagraphs(text) {
	return text
		.split(/\r?\n/)
		.map((line) => line.trim())
		.filter((line) => line && !line.startsWith("- ") && !line.startsWith("### "));
}

function KnowledgeNotePage({slug}) {
	const note = knowledgeNotes.find((item) => item.slug === slug);

	if (!note) {
		return (
			<div className="knowledge-page">
				<a className="knowledge-back-link" href="#/knowledge">Back to Knowledge Library</a>
				<h1>Note not found</h1>
			</div>
		);
	}

	const relatedNotes = knowledgeNotes
		.filter((item) => item.slug !== note.slug && (item.category === note.category || item.tags.some((tag) => note.tags.includes(tag))))
		.slice(0, 3);

	return (
		<div className="knowledge-page">
			<header className="knowledge-note-header">
				<a className="knowledge-back-link" href="#/knowledge">Back to Knowledge Library</a>
				<p className="eyebrow">{note.category}</p>
				<h1>{note.title}</h1>
				<p>{note.summary}</p>
				<div className="knowledge-note-byline">
					<span className={`knowledge-status ${note.status.toLowerCase()}`}>{note.status}</span>
					<span>{note.readingMinutes} min read</span>
					<span>Updated {note.updated}</span>
				</div>
			</header>

			<div className="knowledge-reading-layout">
				<aside className="knowledge-toc">
					<p className="label">On this page</p>
					{note.sections.map((section) => (
						<button
							type="button"
							onClick={() => document.getElementById(idFor(section.title))?.scrollIntoView({behavior: "smooth"})}
							key={section.title}
						>
							{section.title}
						</button>
					))}
				</aside>

				<main className="knowledge-note-content">
					{note.sections.map((section) => (
						<section id={idFor(section.title)} key={section.title}>
							<h2>{section.title}</h2>
							{sectionParagraphs(section.text).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
							{!!section.bullets.length && (
								<ul>
									{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
								</ul>
							)}
						</section>
					))}
				</main>
			</div>

			{!!relatedNotes.length && (
				<section className="knowledge-related">
					<p className="eyebrow">Continue Learning</p>
					<h2>Related notes</h2>
					<div>
						{relatedNotes.map((item) => (
							<a href={`#/knowledge/${item.slug}`} key={item.slug}>
								<span>{item.category}</span>
								<strong>{item.title}</strong>
							</a>
						))}
					</div>
				</section>
			)}
		</div>
	);
}

export default KnowledgeNotePage;
