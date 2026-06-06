import {useMemo, useState} from "react";
import {
	knowledgeLibrary,
	knowledgeNotes,
	knowledgeTopics,
} from "../../data/knowledgeData";

function KnowledgeLibraryPage() {
	const [query, setQuery] = useState("");
	const [topicSlug, setTopicSlug] = useState("All");

	const visibleNotes = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase();

		return knowledgeNotes.filter((note) => {
			const matchesCategory = topicSlug === "All" || note.topicSlug === topicSlug;
			const searchableText = [note.title, note.summary, note.category, ...note.tags].join(" ").toLowerCase();
			return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
		});
	}, [topicSlug, query]);

	return (
		<div className="knowledge-page">
			<header className="knowledge-header">
				<div>
					<a className="knowledge-back-link" href="#top">Portfolio</a>
					<p className="eyebrow">Learn, Practice, Share</p>
					<h1>{knowledgeLibrary.title}</h1>
					<p>{knowledgeLibrary.summary}</p>
				</div>
				<div className="knowledge-stats" aria-label="Knowledge library summary">
					<div><strong>{knowledgeNotes.length}</strong><span>Notes</span></div>
					<div><strong>{knowledgeTopics.length}</strong><span>Topics</span></div>
					<div><strong>{knowledgeNotes.filter((note) => note.status === "Draft").length}</strong><span>In Progress</span></div>
				</div>
			</header>

			<section className="knowledge-topic-index">
				<div className="knowledge-section-heading">
					<p className="eyebrow">Topic Index</p>
					<h2>Browse learning material by topic.</h2>
				</div>
				<div className="knowledge-topic-grid">
					{knowledgeTopics.map((topic, index) => (
						<a href={`#/knowledge/topics/${topic.slug}`} key={topic.slug}>
							<span>{String(index + 1).padStart(2, "0")}</span>
							<h3>{topic.title}</h3>
							<p>{topic.summary}</p>
							<strong>{topic.articleCount} {topic.articleCount === 1 ? "article" : "articles"}</strong>
						</a>
					))}
				</div>
			</section>

			<div className="knowledge-controls">
				<label>
					<span>Search notes</span>
					<input
						type="search"
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Search by topic, category, or tag"
					/>
				</label>
				<div className="knowledge-category-tabs" aria-label="Filter by topic">
					<button className={topicSlug === "All" ? "active" : ""} type="button" onClick={() => setTopicSlug("All")}>
						All
					</button>
					{knowledgeTopics.map((item) => (
						<button
							className={topicSlug === item.slug ? "active" : ""}
							type="button"
							onClick={() => setTopicSlug(item.slug)}
							key={item.slug}
						>
							{item.title} <span>{item.articleCount}</span>
						</button>
					))}
				</div>
			</div>

			<div className="knowledge-section-heading article-index-heading">
				<p className="eyebrow">Article Index</p>
				<h2>Notes and learning material.</h2>
			</div>
			<main className="knowledge-note-grid">
				{visibleNotes.map((note) => (
					<a className="knowledge-note-card" href={`#/knowledge/${note.slug}`} key={note.slug}>
						<div className="knowledge-note-meta">
							<span>{note.category}</span>
							<span className={`knowledge-status ${note.status.toLowerCase()}`}>{note.status}</span>
						</div>
						<h2>{note.title}</h2>
						<p>{note.summary}</p>
						<div className="knowledge-note-tags">
							{note.tags.map((tag) => <span key={tag}>{tag}</span>)}
						</div>
						<footer>
							<span>{note.readingMinutes} min read</span>
							<span>{note.updated}</span>
						</footer>
					</a>
				))}
				{!visibleNotes.length && (
					<p className="knowledge-empty">No notes match this search yet.</p>
				)}
			</main>
		</div>
	);
}

export default KnowledgeLibraryPage;
