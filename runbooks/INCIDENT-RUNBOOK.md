# Incident Runbook Template

## Incident

Date/time:

Service/environment:

Impact:

## Initial symptoms

What is failing?

What still works?

When did it start?

## Recent changes

- deployment?
- infrastructure change?
- configuration change?
- dependency change?

## Investigation

### Application

```bash
kubectl get pods -A
kubectl logs <pod> -n <namespace>
kubectl describe pod <pod> -n <namespace>
```

### Deployment

```bash
kubectl rollout status deployment/<name> -n <namespace>
kubectl rollout history deployment/<name> -n <namespace>
```

### Service / ingress

```bash
kubectl get svc,endpoints,ingress -n <namespace>
```

### GitOps

Check desired Git revision, Argo CD sync/health, and deployed image.

### Infrastructure

Review recent Terraform plan/apply and relevant AWS service state.

### Observability

Check latency, errors, saturation, restarts, replicas and node capacity.

## Root cause

Document evidence, not only the final configuration change.

## Resolution

What was changed?

## Validation

How was recovery proven?

## Prevention

What change reduces recurrence?
