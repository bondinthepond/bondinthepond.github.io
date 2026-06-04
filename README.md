# M S Aditya Portfolio

Professional portfolio site for M S Aditya, focused on Quality Engineering leadership, Platform Quality Engineering, automation strategy, quality transformation, and FinTech platform quality.

## Project Structure

```text
src/
  App.jsx                         Page assembly
  main.jsx                        React entry point
  styles.css                      Site styling
  data/
    portfolioData.js              All editable portfolio content
  components/
    portfolio/                    Current site sections
public/
  resume/
    Aditya_Resume.pdf             Resume served by the View Resume button
```

## Updating Content

Most text lives in `src/data/portfolioData.js`.

Use that file to update:

- impact stats
- skills
- transformation stories
- experience timeline
- playbook ideas
- contact links

Use `src/components/portfolio/Hero.jsx` for the hero headline and summary card.

## Local Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

The site is built with React and Vite.
