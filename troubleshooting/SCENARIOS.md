# Capstone Troubleshooting Scenarios

For every incident capture:

1. symptom;
2. impact;
3. hypothesis;
4. evidence;
5. commands/logs/metrics used;
6. root cause;
7. remediation;
8. validation;
9. prevention.

## 1 — TypeScript passes locally but fails in CI

Investigate runtime version, lock file, deterministic install, environment, case-sensitive paths, generated files and test assumptions.

## 2 — npm dependency vulnerability blocks CI

Decide whether the issue requires upgrade, replacement, documented exception, or another mitigation.

## 3 — GitHub OIDC authentication fails

Trace workflow permission, token claims, provider, audience, subject condition and IAM role ARN.

## 4 — Image exists in ECR but Argo CD deploys an old version

Trace artifact version through ECR, Git desired state, Argo Application, Helm values and running pod image.

## 5 — Argo CD reports OutOfSync

Determine whether the cause is a legitimate Git change, manual drift, mutating controller or incorrectly templated resource.

## 6 — Argo CD reports Degraded

Use Kubernetes events, pod status, probes and logs to find the workload failure.

## 7 — GitHub Actions and Argo CD keep overwriting each other

Identify the architecture mistake and establish a single deployment owner.

## 8 — ImagePullBackOff

Investigate image reference, tag existence, ECR/network/IAM path and pod events.

## 9 — CrashLoopBackOff after release

Investigate logs, command, environment, runtime configuration, resources and probes.

## 10 — ALB returns 503

Trace ALB -> target group -> Ingress -> Service -> endpoints -> Pods.

## 11 — Certificate/DNS is configured but HTTPS fails

Investigate certificate region/status, DNS record, Ingress annotations, listener and hostname.

## 12 — HPA reaches maximum replicas but latency remains high

Determine whether the bottleneck is CPU, memory, dependency, node capacity, load balancer, application behavior or another constraint.

## 13 — HPA wants more pods but pods stay Pending

Connect workload autoscaling with node capacity and node autoscaling.

## 14 — One AZ fails

Demonstrate how workload placement, replica count, PDB and node topology affect availability.

## 15 — Terraform plans unexpected EKS replacement

Stop. Identify the force-replacement attribute and propose a safe migration/review plan.

## 16 — Manual kubectl fix disappears

Explain GitOps reconciliation and where the durable fix belongs.

## 17 — Bad production image

Use Git/Argo/Helm history and immutable tags to return to a known-good version.

## 18 — Prometheus shows repeated pod restarts

Correlate restart count with logs, exit code, OOM events, probes and deployment history.

## 19 — AWS AccessDenied from a controller/workload

Trace Kubernetes identity to IAM role/policy and verify least privilege.

## 20 — Secrets accidentally committed

Describe immediate containment, credential rotation, Git history considerations, prevention and secret-scanning controls.

## 21 — Production promotion races

Two workflows attempt to update desired state at nearly the same time. Design concurrency and review controls.

## 22 — AWS bill increases unexpectedly

Investigate node count/type, NAT, ALBs, logs/metrics retention, storage, idle environments and scaling configuration.
