import {knowledgeNotes, knowledgeTopics} from "../../data/knowledgeData";

function KnowledgeTopicPage({slug}) {
	const topic = knowledgeTopics.find((item) => item.slug === slug);
	const notes = knowledgeNotes.filter((note) => note.topicSlug === slug);

	if (!topic) {
		return (
			<div className="knowledge-page">
				<a className="knowledge-back-link" href="#/knowledge">Back to Knowledge Library</a>
				<h1>Topic not found</h1>
			</div>
		);
	}

	return (
		<div className="knowledge-page">
			<header className="knowledge-topic-header">
				<a className="knowledge-back-link" href="#/knowledge">Back to Knowledge Library</a>
				<p className="eyebrow">Knowledge Topic</p>
				<h1>{topic.title}</h1>
				<p>{topic.summary}</p>
				<strong>{notes.length} {notes.length === 1 ? "article" : "articles"}</strong>
			</header>

			<div className="knowledge-topic-layout">
				<aside className="knowledge-topic-goals">
					<p className="label">Learning Goals</p>
					<ul>
						{topic.learningGoals.map((goal) => <li key={goal}>{goal}</li>)}
					</ul>
				</aside>

				<main className="knowledge-topic-articles">
					{notes.map((note, index) => (
						<a href={`#/knowledge/${note.slug}`} key={note.slug}>
							<span>{String(index + 1).padStart(2, "0")}</span>
							<div>
								<div className="knowledge-note-meta">
									<span>{note.status}</span>
									<span>{note.readingMinutes} min read</span>
								</div>
								<h2>{note.title}</h2>
								<p>{note.summary}</p>
								<div className="knowledge-note-tags">
									{note.tags.map((tag) => <span key={tag}>{tag}</span>)}
								</div>
							</div>
						</a>
					))}
				</main>
			</div>
		</div>
	);
}

export default KnowledgeTopicPage;

