---
id: signing-pipelines
title: Signing & verifying a Pipeline end to end
sidebar_position: 2
---

# Signing & verifying a Pipeline end to end

A guide that references **Pipelines**, **Chains**, and the **CLI** together.

1. Author a `Pipeline` (Tekton Pipelines).
2. Run it; **Tekton Chains** observes the `PipelineRun` and signs the result.
3. Verify the attestation with `tkn` (Tekton CLI).

See the versioned component docs:
- Pipelines: [/pipelines/](/pipelines/)
- Operator: [/operator/](/operator/)
