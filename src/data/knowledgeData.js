// Generated from content/knowledge/**/*.md. Run npm run generate:knowledge after editing notes.

export const knowledgeLibrary = {
	"title": "Knowledge Library",
	"summary": "Notes, learning material, interview preparation, and reusable engineering frameworks."
};

export const knowledgeTopics = [
	{
		"title": "Quality Engineering",
		"slug": "quality-engineering",
		"summary": "Strategy, operating models, governance, maturity, shift-left practices, and engineering-led quality.",
		"order": 1,
		"articleCount": 2,
		"learningGoals": [
			"Understand modern Quality Engineering operating models.",
			"Connect quality strategy with practical delivery practices.",
			"Build reusable approaches for governance, maturity, and enablement."
		]
	},
	{
		"title": "System Design",
		"slug": "system-design",
		"summary": "Architecture concepts, distributed systems, messaging, reliability, and designing for testability.",
		"order": 2,
		"articleCount": 1,
		"learningGoals": [
			"Strengthen architecture and distributed-systems understanding.",
			"Connect system design decisions with quality risks.",
			"Practice explaining complex systems clearly."
		]
	},
	{
		"title": "Automation",
		"slug": "automation",
		"summary": "Automation strategy, framework architecture, test layers, maintainability, and delivery integration.",
		"order": 3,
		"articleCount": 1,
		"learningGoals": [
			"Design maintainable automation ecosystems.",
			"Choose appropriate testing layers based on architecture and risk.",
			"Improve automation feedback, reliability, and ownership."
		]
	},
	{
		"title": "AI Engineering",
		"slug": "ai-engineering",
		"summary": "Practical AI-assisted engineering workflows, governance, evaluation, and responsible adoption.",
		"order": 4,
		"articleCount": 1,
		"learningGoals": [
			"Explore practical AI-assisted engineering workflows.",
			"Understand responsible adoption and governance concerns.",
			"Evaluate AI tools based on measurable engineering outcomes."
		]
	}
];

export const knowledgeNotes = [
	{
		"title": "Platform Quality Engineering",
		"slug": "platform-quality-engineering",
		"topicSlug": "quality-engineering",
		"category": "Quality Engineering",
		"summary": "A practical introduction to centralized quality enablement, governance, maturity, and federated QE.",
		"tags": [
			"Platform QE",
			"Governance",
			"Quality Strategy"
		],
		"status": "Draft",
		"updated": "2026-06-06",
		"order": 1,
		"readingMinutes": 1,
		"sections": [
			{
				"title": "Overview",
				"text": "Platform Quality Engineering creates shared capabilities that help product teams build quality consistently without moving delivery ownership away from those teams.",
				"bullets": []
			},
			{
				"title": "Key Concepts",
				"text": "- Federated Quality Engineering\n- Shared standards and quality gates\n- Quality maturity assessment\n- Automation strategy and enablement\n- Metrics, dashboards, and release readiness",
				"bullets": [
					"Federated Quality Engineering",
					"Shared standards and quality gates",
					"Quality maturity assessment",
					"Automation strategy and enablement",
					"Metrics, dashboards, and release readiness"
				]
			},
			{
				"title": "Questions to Explore",
				"text": "- Which capabilities should be centralized?\n- How should embedded QEs and Platform QE divide responsibilities?\n- Which metrics encourage useful quality conversations?",
				"bullets": [
					"Which capabilities should be centralized?",
					"How should embedded QEs and Platform QE divide responsibilities?",
					"Which metrics encourage useful quality conversations?"
				]
			},
			{
				"title": "Practical Notes",
				"text": "Add examples, operating-model decisions, diagrams, and lessons learned here as the material develops.",
				"bullets": []
			}
		]
	},
	{
		"title": "Shift-Left and Engineering-Led Quality",
		"slug": "shift-left-engineering-led-quality",
		"topicSlug": "quality-engineering",
		"category": "Quality Engineering",
		"summary": "Moving quality feedback earlier through architecture-aware testing and engineering ownership.",
		"tags": [
			"Shift-left",
			"Test Pyramid",
			"Engineering Quality"
		],
		"status": "Draft",
		"updated": "2026-06-06",
		"order": 2,
		"readingMinutes": 1,
		"sections": [
			{
				"title": "Overview",
				"text": "Shift-left is not simply testing earlier. It is designing delivery practices so quality feedback arrives before defects become expensive.",
				"bullets": []
			},
			{
				"title": "Benefits",
				"text": "- Reduced QA bottlenecks\n- Faster feedback\n- Better engineering ownership\n- Earlier validation of APIs, queues, databases, and integrations",
				"bullets": [
					"Reduced QA bottlenecks",
					"Faster feedback",
					"Better engineering ownership",
					"Earlier validation of APIs, queues, databases, and integrations"
				]
			},
			{
				"title": "Questions to Explore",
				"text": "- What should be validated before UI readiness?\n- How can teams make quality part of design discussions?\n- Which checks belong in CI/CD?",
				"bullets": [
					"What should be validated before UI readiness?",
					"How can teams make quality part of design discussions?",
					"Which checks belong in CI/CD?"
				]
			}
		]
	},
	{
		"title": "Testing Event-Driven Systems",
		"slug": "testing-event-driven-systems",
		"topicSlug": "system-design",
		"category": "System Design",
		"summary": "A working guide to validating message-driven workflows across queues, services, and data stores.",
		"tags": [
			"Kafka",
			"Messaging",
			"Distributed Systems"
		],
		"status": "Published",
		"updated": "2026-06-06",
		"order": 3,
		"readingMinutes": 1,
		"sections": [
			{
				"title": "Overview",
				"text": "Event-driven systems require testing beyond request-and-response APIs. Reliable validation must account for asynchronous processing, message contracts, retries, ordering, and eventual consistency.",
				"bullets": []
			},
			{
				"title": "Key Concepts",
				"text": "- Producers, consumers, topics, and queues\n- Message contracts and schema evolution\n- Retry, replay, and dead-letter handling\n- Idempotency and duplicate processing\n- Eventual consistency and observability",
				"bullets": [
					"Producers, consumers, topics, and queues",
					"Message contracts and schema evolution",
					"Retry, replay, and dead-letter handling",
					"Idempotency and duplicate processing",
					"Eventual consistency and observability"
				]
			},
			{
				"title": "Testing Layers",
				"text": "- Component-level producer and consumer validation\n- Contract testing\n- Integration testing across queues and databases\n- End-to-end business workflow validation",
				"bullets": [
					"Component-level producer and consumer validation",
					"Contract testing",
					"Integration testing across queues and databases",
					"End-to-end business workflow validation"
				]
			}
		]
	},
	{
		"title": "Test Automation Strategy",
		"slug": "test-automation-strategy",
		"topicSlug": "automation",
		"category": "Automation",
		"summary": "How to choose automation layers, prioritize coverage, and build maintainable testing ecosystems.",
		"tags": [
			"Automation",
			"Architecture",
			"Test Pyramid"
		],
		"status": "Draft",
		"updated": "2026-06-06",
		"order": 4,
		"readingMinutes": 1,
		"sections": [
			{
				"title": "Overview",
				"text": "A useful automation strategy connects business risk, system architecture, delivery speed, and maintainability instead of chasing a single coverage percentage.",
				"bullets": []
			},
			{
				"title": "Strategy Questions",
				"text": "- Which risks require automation?\n- At which layer should each scenario be validated?\n- What belongs in pull-request, integration, and regression suites?\n- How will flaky tests and maintenance cost be managed?",
				"bullets": [
					"Which risks require automation?",
					"At which layer should each scenario be validated?",
					"What belongs in pull-request, integration, and regression suites?",
					"How will flaky tests and maintenance cost be managed?"
				]
			},
			{
				"title": "Working Principles",
				"text": "- Prefer the lowest reliable testing layer.\n- Keep feedback fast and actionable.\n- Treat test code as production-quality engineering.\n- Measure confidence and maintainability, not only test count.",
				"bullets": [
					"Prefer the lowest reliable testing layer.",
					"Keep feedback fast and actionable.",
					"Treat test code as production-quality engineering.",
					"Measure confidence and maintainability, not only test count."
				]
			}
		]
	},
	{
		"title": "AI-Assisted Quality Engineering",
		"slug": "ai-assisted-quality-engineering",
		"topicSlug": "ai-engineering",
		"category": "AI Engineering",
		"summary": "Practical AI applications for test design, analysis, reporting, documentation, and QE productivity.",
		"tags": [
			"AI",
			"Quality Engineering",
			"Productivity"
		],
		"status": "Draft",
		"updated": "2026-06-06",
		"order": 5,
		"readingMinutes": 1,
		"sections": [
			{
				"title": "Overview",
				"text": "AI can improve Quality Engineering productivity when it is applied to clear workflows with appropriate review, security, privacy, and governance.",
				"bullets": []
			},
			{
				"title": "Practical Use Cases",
				"text": "- Test scenario generation and review\n- Log analysis and failure summarization\n- Defect analysis and reporting\n- Documentation and knowledge management\n- Automation code assistance",
				"bullets": [
					"Test scenario generation and review",
					"Log analysis and failure summarization",
					"Defect analysis and reporting",
					"Documentation and knowledge management",
					"Automation code assistance"
				]
			},
			{
				"title": "Governance Questions",
				"text": "- What data can be shared with AI tools?\n- Which outputs require human review?\n- How should productivity and quality improvements be measured?\n- Which risks require organizational controls?",
				"bullets": [
					"What data can be shared with AI tools?",
					"Which outputs require human review?",
					"How should productivity and quality improvements be measured?",
					"Which risks require organizational controls?"
				]
			}
		]
	}
];
