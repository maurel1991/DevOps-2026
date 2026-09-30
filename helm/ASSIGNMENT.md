# Task 8 — Helm Application Package

Create:

```text
helm/capstone-api/
├── Chart.yaml
├── values.yaml
└── templates/
```

Templates should cover:

- Deployment;
- Service;
- ConfigMap;
- Ingress;
- HPA;
- PodDisruptionBudget;
- ServiceAccount when required.

## Workload requirements

Use:

- multiple replicas;
- immutable image tags;
- resource requests/limits;
- readiness probe;
- liveness probe;
- rolling update;
- topology/availability considerations;
- security context;
- non-root container;
- autoscaling.

Values must allow environment-specific configuration without duplicating the chart.

Validate:

```bash
helm lint helm/capstone-api
helm template capstone-api helm/capstone-api
```
