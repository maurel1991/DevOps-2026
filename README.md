# Project 5 — Production DevOps Capstone

## Goal

Build an end-to-end production-style DevOps platform for a **Node.js + TypeScript** application.

This capstone combines the major skills practiced in the previous projects:

- AWS
- Terraform
- Docker
- Amazon ECR
- Amazon EKS
- Kubernetes
- Helm
- GitHub Actions
- GitHub OIDC
- Argo CD / GitOps
- Prometheus + Grafana
- autoscaling
- security scanning
- deployment validation
- rollback
- troubleshooting

The application is provided. The DevOps implementation is intentionally **not** provided.

## Application build

This project introduces another CI build toolchain:

```text
npm ci
   ↓
npm run lint
   ↓
npm test
   ↓
npm run build
   ↓
dist/
   ↓
Docker
```

Compare the projects:

```text
Python: pip / pytest
Java:   Maven / JAR
Node:   npm / TypeScript / dist
```

## Target delivery model

```text
Developer
   |
   | Pull Request
   v
GitHub
   |
   +--> CI
   |     npm ci
   |     lint
   |     test
   |     TypeScript build
   |     security checks
   |     Docker build
   |     image scan
   |
   | merge
   v
GitHub Actions
   |
   | OIDC
   v
AWS IAM ---> ECR
                |
                | immutable image
                v
        GitOps configuration repo/path
                |
                v
             Argo CD
                |
                v
               EKS
        +-------+-------+
        |               |
      Helm          Kubernetes
        |               |
        +------Pods-----+
                |
             Service
                |
          ALB Ingress
                |
          Route 53 / TLS
                |
              Users

Terraform --> VPC / EKS / ECR / IAM / platform prerequisites
Prometheus --> Grafana
```

## Important design rule

GitHub Actions builds and publishes the artifact.

**Argo CD performs the application deployment from Git.**

Do not make both GitHub Actions and Argo CD independently deploy the same workload.

## Progression

1. Build and test the TypeScript application.
2. Create a production Docker image.
3. Provision AWS infrastructure with Terraform.
4. Build EKS platform prerequisites.
5. Create Helm packaging.
6. Install/configure Argo CD.
7. Create dev and prod GitOps configuration.
8. Build GitHub Actions CI.
9. Authenticate to AWS using OIDC.
10. Push immutable images to ECR.
11. Update the GitOps desired state.
12. Let Argo CD reconcile EKS.
13. Configure ingress, TLS and DNS.
14. Configure autoscaling and availability controls.
15. Add Prometheus/Grafana.
16. Add security gates.
17. Validate rollback and disaster scenarios.
18. Complete troubleshooting exercises.
19. Prepare the project for interview presentation.
