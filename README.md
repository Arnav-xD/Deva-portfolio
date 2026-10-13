# Arnav Deva — Portfolio

A personal portfolio built with **React, TypeScript, and Vite**, with animated visuals and sidebar navigation.

[View portfolio](https://deva-arnav.vercel.app)

## What's included

The page presents About, Projects, Experience, Skills, Education, and Contact sections. Sidebar clicks scroll to a section, while an `IntersectionObserver` updates the active navigation item as the page scrolls.

## Run locally

From the repository directory:

```bash
npm ci
npm run dev
```

Use the local URL printed by Vite.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run Oxlint |
| `npm run build` | Run TypeScript checks and create the Vite production build |
| `npm run preview` | Preview the production build locally |

## Read the code

| Location | Role |
| --- | --- |
| [src/main.tsx](src/main.tsx) | React entry point |
| [src/App.tsx](src/App.tsx) | Section composition, scroll navigation, and active-section tracking |
| [src/sections/](src/sections/) | Portfolio content and section styles |
| [src/components/LineSidebar/](src/components/LineSidebar/) | Interactive sidebar |
| [src/components/LightRays/](src/components/LightRays/) | Animated background |
| [src/components/SplitText/](src/components/SplitText/) | Text animation component |
| [src/index.css](src/index.css) and [src/App.css](src/App.css) | Shared styles and page layout |
| [public/](public/) | Static assets |

`ClickSpark` remains in the component directory but is not used by the current `App.tsx`.

## Updating the portfolio

Edit the relevant component in `src/sections/` and its accompanying CSS. The section names in `src/App.tsx` are mapped to lowercase element IDs for navigation; keep those names and IDs aligned when changing sections.
