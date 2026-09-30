# Capstone Interview Preparation

## Architecture

1. Walk me through the platform from `git push` to a user request.
2. Why did you choose EKS?
3. Why are nodes private?
4. How does traffic reach the application?
5. How does the design tolerate an AZ failure?
6. What does Terraform own?
7. What does Helm own?
8. What does Argo CD own?
9. What does GitHub Actions own?

## Node.js CI

10. Why `npm ci` instead of `npm install` in CI?
11. What does the TypeScript build produce?
12. How do you cache dependencies safely?
13. How do you handle a failed dependency vulnerability check?
14. How is this pipeline different from Maven?
15. How is it different from Python?

## CI/CD / GitOps

16. Explain the full pipeline.
17. Why use immutable image tags?
18. Why not deploy only `latest`?
19. How do you know which commit is running?
20. Why use Argo CD if GitHub Actions already exists?
21. Why should GitHub Actions and Argo CD not both manage the same Deployment?
22. How do you promote dev to production?
23. How do you rollback?
24. What happens when someone manually changes a GitOps-managed Deployment?
25. How do you prevent simultaneous production deployments?

## AWS / Security

26. Explain GitHub OIDC to AWS.
27. What are `aud` and `sub`?
28. How do workloads/controllers receive AWS permissions?
29. Where are secrets stored?
30. How do you enforce least privilege?
31. What would you do after a leaked secret?
32. What security scans exist in the pipeline?

## Kubernetes

33. Readiness vs liveness?
34. Requests vs limits?
35. HPA vs node autoscaling?
36. What causes Pending pods?
37. What causes CrashLoopBackOff?
38. What causes ImagePullBackOff?
39. What is a PDB?
40. How does rolling deployment work?
41. How would you investigate an ALB 503?
42. What happens during an AZ outage?

## Terraform

43. Why remote state?
44. How do you protect state?
45. How do you structure dev and prod?
46. When would you use modules?
47. What do you do with an unexpectedly destructive plan?
48. How do you prevent infrastructure drift?

## Observability / Operations

49. What do you monitor?
50. What alerts matter?
51. How do you investigate high latency?
52. How do you investigate repeated restarts?
53. What would you check if HPA is maxed out?
54. How would you investigate an unexpected AWS cost increase?

## Behavioral / scenario preparation

Prepare concise STAR stories for:

55. failed deployment;
56. pipeline failure;
57. Kubernetes production incident;
58. IAM/OIDC issue;
59. Terraform risk caught before apply;
60. scaling/capacity problem;
61. security finding;
62. cost optimization;
63. cross-team troubleshooting;
64. rollback/recovery.

Each story should explain the observations and reasoning, not just the final fix.
