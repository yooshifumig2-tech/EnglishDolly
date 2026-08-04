# FUMI AI Algebra Learning

Two bilingual, self-contained learning pages for Junior Secondary Mathematics 1A, Chapters 3–4:

- `Algebra_Linear_Equations_Interactive_Learning.html` — concepts, worked examples, interactive labs and lesson checks.
- `Algebra_Linear_Equations_Practice_Bank.html` — 48-question practice bank, wrong-question review, favourites and timed exams.
- `netlify/functions/ai-tutor.mjs` — secure FUMI AI backend for Alibaba Cloud Model Studio (Qwen).

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

