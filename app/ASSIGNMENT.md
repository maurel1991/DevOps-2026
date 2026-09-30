# Task 1 — Node.js / TypeScript Build

Install a current supported Node.js LTS release and npm.

Run:

```bash
node --version
npm --version
npm ci
npm run lint
npm test
npm run build
npm start
```

Verify:

```bash
curl http://localhost:3000/health
curl http://localhost:3000/api/products
curl http://localhost:3000/api/info
```

## Checkpoint

Explain:

- `npm install` vs `npm ci`;
- `package.json` vs lock file;
- what TypeScript compilation produces;
- why `dist/` is a build artifact;
- why CI should use deterministic dependency installation;
- how this build differs from Maven and Python.
