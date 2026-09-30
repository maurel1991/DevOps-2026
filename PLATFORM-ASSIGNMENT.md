# Tasks 15–18 — Production Platform Capabilities

## Ingress / DNS / TLS

Configure:

- AWS Load Balancer Controller;
- ALB Ingress;
- ACM certificate;
- HTTPS;
- Route 53 record when a domain is available;
- HTTP to HTTPS redirect.

## Autoscaling

Configure application HPA.

Add a cluster/node scaling strategy appropriate to the EKS design.

Be able to explain the difference between:

- HPA;
- VPA conceptually;
- node/cluster autoscaling.

## Observability

Install Prometheus and Grafana with Helm.

Observe:

- CPU;
- memory;
- replicas;
- restarts;
- node capacity;
- deployment availability.

Create a useful dashboard and at least two meaningful alert rules.

## Security

Include security checks across multiple layers:

```text
source/dependencies
      ↓
container image
      ↓
Terraform/IaC
      ↓
Kubernetes configuration
```

Choose tools and define which findings fail the pipeline versus generate warnings.

Document exceptions rather than disabling scanners globally.
