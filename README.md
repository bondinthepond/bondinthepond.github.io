# M S Aditya Portfolio

Professional portfolio site for M S Aditya, focused on Quality Engineering leadership, Platform Quality Engineering, automation strategy, quality transformation, and FinTech platform quality.

## Project Structure

```text
content/
  career-master.md                Reusable skills and playbook themes
  profile.md                      Hero, contact, stats, leadership snapshot
  experience/                     One Markdown file per career stop
  case-studies/                   Transformation stories for the website
  resume/                         Resume inputs and generated resume output
scripts/
  generatePortfolioData.mjs       Builds website data from content
  generateResume.mjs              Builds a Markdown resume from content
src/
  App.jsx                         Page assembly
  main.jsx                        React entry point
  styles.css                      Site styling
  data/
    portfolioData.js              Generated website data
  components/
    portfolio/                    Current site sections
public/
  resume/
    Aditya_Resume.pdf             Resume served by the View Resume button
```

## Updating Content

Most text now lives in `content/`.

Use these files to update:

- `content/profile.md` for hero, contact, stats, and leadership snapshot
- `content/career-master.md` for skills and future playbooks
- `content/experience/*.md` for career timeline entries
- `content/case-studies/*.md` for transformation stories

After editing content, regenerate the website data:

```bash
npm run generate:portfolio
```

## Resume Generation

Generate the default Markdown resume:

```bash
npm run generate:resume
```

Generate a focused resume:

```bash
npm run generate:resume -- --focus "Platform Quality Engineering automation strategy FinTech leadership"
```

Generate a resume from a job description:

```bash
npm run generate:resume -- --job content/resume/job-description.example.txt --output content/resume/generated/targeted-resume.md
```

The resume generator currently creates Markdown. The next natural step is adding DOCX/PDF export after the content is finalized.

Generated resumes are written under `content/resume/generated/`, which is ignored by git so tailored resumes do not accidentally get committed.

## Regenerate Everything

```bash
npm run generate
```

## Local Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

The site is built with React and Vite.
