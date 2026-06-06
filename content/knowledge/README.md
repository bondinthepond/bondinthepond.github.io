# Knowledge Library Maintenance

The Knowledge Library is generated from Markdown files inside this folder.

## Structure

```text
knowledge/
├── index.md
├── _note-template.md
├── quality-engineering/
│   ├── index.md
│   ├── platform-quality-engineering.md
│   └── shift-left-quality.md
├── system-design/
│   ├── index.md
│   └── event-driven-systems.md
├── automation/
│   ├── index.md
│   └── test-automation-strategy.md
└── ai-engineering/
    ├── index.md
    └── ai-assisted-quality-engineering.md
```

Each topic folder owns:

- An `index.md` defining the topic page, summary, and learning goals.
- Article Markdown files containing notes and training material for that topic.

## Add A Note

1. Copy `_note-template.md` into the most relevant category folder.
2. Rename the file using lowercase words separated by hyphens.
3. Fill in the frontmatter and note sections.
4. Regenerate the knowledge data:

```powershell
npm run generate:knowledge
```

5. Start or refresh the website:

```powershell
npm run dev
```

## Routes

- Library index: `#/knowledge`
- Topic page: `#/knowledge/topics/<topic-folder>`
- Note page: `#/knowledge/<slug>`

## Add A Topic

1. Create a new folder under `content/knowledge`.
2. Add an `index.md` containing `title`, `slug`, `summary`, and `order`.
3. Add a `## Learning Goals` section.
4. Add article Markdown files in the same folder.
5. Run `npm run generate:knowledge`.

## Guidelines

- Use `Draft` while developing a note and `Published` when ready to share.
- Keep company-confidential information, internal architecture, credentials, and proprietary metrics out of public notes.
- Prefer short, useful notes that can grow over time.
- Use the same `slug` permanently after publishing so links remain stable.
