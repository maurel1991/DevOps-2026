# Tasks 3–7 — AWS Platform with Terraform

Write the Terraform implementation.

## Platform requirements

Provision:

- remote Terraform state;
- VPC across multiple Availability Zones;
- public subnets for ALB;
- private subnets for EKS nodes;
- NAT connectivity;
- ECR;
- EKS;
- managed node group;
- IAM roles/policies;
- GitHub OIDC trust;
- workload identity for AWS-integrated controllers;
- platform security groups where applicable;
- useful outputs.

Use modules where they improve clarity, but be able to explain every module.

## Availability

Design for an AZ failure.

EKS workloads must be able to run across multiple AZs.

## Security

Do not:

- commit AWS keys;
- place worker nodes directly on the public internet;
- grant GitHub administrator access;
- use unrestricted IAM trust;
- put secrets in Terraform source.

## Environment design

Create a strategy for `dev` and `prod`.

Choose and justify one approach:

- separate root configurations;
- reusable modules with environment roots;
- carefully designed workspaces where appropriate.

Avoid copy/paste infrastructure with uncontrolled drift.

## Checkpoints

Demonstrate:

```bash
terraform fmt -check -recursive
terraform validate
terraform plan
kubectl get nodes
aws ecr describe-repositories
```

Explain what would happen if the Terraform state were lost.
