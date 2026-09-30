# Tasks 9–11 — Argo CD and GitOps

## Task 9 — Install Argo CD

Install Argo CD into EKS.

Secure its access appropriately.

Understand the Argo CD Application object before automating everything.

## Task 10 — Desired state

Create Git-managed desired state for:

```text
gitops/
├── dev/
└── prod/
```

Each environment must identify the exact application image version it should run.

Do not use `latest`.

## Task 11 — Reconciliation

Configure Argo CD to deploy the Helm application from Git.

Expected flow:

```text
CI builds image
   ↓
CI pushes SHA tag to ECR
   ↓
Git desired state changes
   ↓
Argo CD detects Git change
   ↓
Argo CD reconciles EKS
```

## Critical checkpoint

Explain why this is preferable to:

```text
GitHub Actions kubectl apply
AND
Argo CD managing the same Deployment
```

There must be one clear owner of application deployment state.

## Drift exercise

Manually change a managed Deployment.

Observe Argo CD.

Document what happens and why.
