# Tasks 12–14 — CI/CD

Create the workflows.

## Pull request CI

Required flow:

```text
checkout
  ↓
setup Node
  ↓
npm ci
  ↓
npm run lint
  ↓
npm test
  ↓
npm run build
  ↓
dependency/security checks
  ↓
Docker build
  ↓
image scan
```

A failed required gate must fail CI.

## Main branch artifact pipeline

After merge:

```text
test/build
  ↓
AWS OIDC
  ↓
ECR login
  ↓
Docker build
  ↓
tag with commit SHA
  ↓
push image
```

## GitOps promotion

After a successful image push, design a controlled method that changes the GitOps desired image tag.

For production, include an approval/promotion strategy rather than silently deploying every commit.

Possible designs may include:

- pull request updating production values;
- protected GitHub environment;
- release/tag-based promotion.

Choose one and document why.

## Concurrency

Prevent two production promotions from racing each other.

## Supply-chain traceability

Given a running pod, it must be possible to determine which Git commit produced its image.
