# razo-demo

A tiny checkout page tested with [razo](https://github.com/razohq/razo) narrated
Playwright controls, wired to the [razo.ar](https://razo.ar) dashboard:

- Every CI run uploads its structured results (`razo-upload`).
- Failures get a step-by-step narrated story plus an AI analysis in the dashboard.
- With the razo GitHub App installed, the analysis is posted right on the pull request.

## Run locally

```bash
npm install
npx playwright install chromium
npm test
```

## The demo flow

`main` is green. Open a pull request that changes `tests/checkout-page.ts`
(the "app") in a way that breaks behavior — CI fails, the run appears in
razo.ar with the narrated failure and AI diagnosis, and `razohq[bot]` comments
the analysis on the PR.

Setup (once): add the `RAZO_INGEST_TOKEN` secret (from your razo.ar project's
Settings) and install the [razo GitHub App](https://github.com/apps/razohq) on
this repo, linking it from the same project's Settings.
