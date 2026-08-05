# DOLLY · Book 1A Learning Hub

A bilingual Book 1A learning hub that connects the supplied 1A0–1A3/4 learning and practice sites into one route.

- `index.html` — navigation page; each chapter has a matching **Learn → Practice** pair.
- `study.html` — course workspace with persistent FUMI AI and bilingual glossary.
- `report.html` — automatically updated learning map, stage report and mind map.
- `orid.html` — editable, auto-filled ORID reflection with JSON/PDF export.
- `assets/hub.js` — shared local progress, glossary, export and FUMI UI.
- `assets/course-bridge.js` — synchronizes the local 1A3–4 course and practice-bank records to the hub and adds the chapter glossary.
- `Algebra_Linear_Equations_Interactive_Learning.html` — 1A3–4 concepts, labs and lesson checks.
- `Algebra_Linear_Equations_Practice_Bank.html` — 1A3–4 48-question bank, wrong-question review, favourites and timed exams.
- `netlify/functions/ai-tutor.mjs` — secure FUMI AI backend for Alibaba Cloud Model Studio (Qwen).

## Progress-data boundary

The 1A0–1A2 source sites are hosted on other Netlify domains. Browser same-origin rules prevent this hub from reading their answers, scores or local progress. The workspace records entry automatically and asks the learner to explicitly confirm stage completion; its report therefore shows **completion activity, not accuracy or mastery**. The local 1A3–4 pages sync their own completion/attempt count automatically.

The shared glossary contains English terms, Chinese definitions, search, chapter filters and a learner-controlled “Mark known” status. FUMI AI is available on every hub page and on the local 1A3–4 pages.

## Netlify setup

Connect this repository to Netlify. No build command is required; `netlify.toml` publishes the repository root.

Add these environment variables in **Site configuration → Environment variables**:

- `DASHSCOPE_API_KEY` — required. Keep it in Netlify only; never put it in either HTML file.
- `QWEN_MODEL` — optional, defaults to `qwen3.7-plus`.
- `ALLOW_FILE_ORIGIN=true` — optional, only if downloaded `file://` copies should use the deployed function.
- `ALLOWED_ORIGINS` — optional comma-separated extra website origins.

Check `https://YOUR-SITE.netlify.app/.netlify/functions/ai-tutor`. A configured deployment returns `{"status":"ok","configured":true,...}`.

## Answer-safety rule

Before a question is submitted, the browser excludes answer options and solutions from the AI context. The server prompt and response filter independently prohibit the correct option, final value or final expression. After submission, FUMI AI may explain the complete solution. Timed exams stay protected until the exam is finished.

Progress and AI chat history are stored only in the student's browser. The AI interprets deterministic local progress data; it does not recalculate or overwrite scores.
