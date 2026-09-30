# Capstone Architecture

```text
                          USERS
                            |
                         Route 53
                            |
                           ACM
                            |
                           ALB
                            |
                         Ingress
                            |
                         Service
                            |
              +-------------+-------------+
              |             |             |
             Pod           Pod           Pod
              +-------------+-------------+
                            |
                           HPA

                     Amazon EKS
              private multi-AZ nodes

 GitHub
   |
   +-- PR --> lint/test/build/security
   |
   +-- merge --> OIDC --> ECR
   |                       |
   |                       +-- SHA image
   |
   +-- desired-state change
              |
              v
           Argo CD
              |
              v
             EKS

 Terraform --> AWS infrastructure

 Prometheus --> Grafana
```

## Ownership boundaries

Terraform:
AWS infrastructure and durable platform primitives.

Helm:
Reusable Kubernetes application packaging.

GitOps:
Environment-specific desired application state.

GitHub Actions:
Build, test, scan, publish, and initiate controlled promotion.

Argo CD:
Reconcile desired application state into Kubernetes.
