&#123;/*
---
title: "Tasks and Pipelines"
linkTitle: "Tasks and Pipelines"
weight: 2
description: >
  Building Blocks of Tekton CI/CD Workflow
cascade:
  github_project_repo: https://github.com/tektoncd/pipeline
---
*/&#125;
# Tekton Pipelines

Tekton Pipelines is a Kubernetes extension that installs and runs on your Kubernetes cluster.
It defines a set of Kubernetes [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) that act as building blocks from which you can assemble CI/CD pipelines. Once installed,
Tekton Pipelines becomes available via the Kubernetes CLI (kubectl) and via API calls, just
like pods and other resources. Tekton is open-source and part of the [CD Foundation](https://cd.foundation/),
a [Linux Foundation](https://www.linuxfoundation.org/projects/) project.

## Tekton Pipelines entities

Tekton Pipelines defines the following entities:

&lt;table>
  &lt;tr>
    &lt;th>Entity&lt;/th>
    &lt;th>Description&lt;/th>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>Task&lt;/code>&lt;/td>
    &lt;td>Defines a series of steps which launch specific build or delivery tools that ingest specific inputs and produce specific outputs.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>TaskRun&lt;/code>&lt;/td>
    &lt;td>Instantiates a &lt;code>Task&lt;/code> for execution with specific inputs, outputs, and execution parameters. Can be invoked on its own or as part of a &lt;code>Pipeline&lt;/code>.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>Pipeline&lt;/code>&lt;/td>
    &lt;td>Defines a series of &lt;code>Tasks&lt;/code> that accomplish a specific build or delivery goal. Can be triggered by an event or invoked from a &lt;code>PipelineRun&lt;/code>.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>PipelineRun&lt;/code>&lt;/td>
    &lt;td>Instantiates a &lt;code>Pipeline&lt;/code> for execution with specific inputs, outputs, and execution parameters.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>PipelineResource (Deprecated)&lt;/code>&lt;/td>
    &lt;td>Defines locations for inputs ingested and outputs produced by the steps in &lt;code>Tasks&lt;/code>.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;Code>Run&lt;/code> (alpha)&lt;/td>
    &lt;td>Instantiates a Custom Task for execution when specific inputs.&lt;/td>
  &lt;/tr>
&lt;/table>

## Getting started

To get started, complete the [Tekton Pipelines Tutorial](https://tekton.dev/docs/getting-started) and go through our
[examples](https://github.com/tektoncd/pipeline/tree/main/examples).

## Understanding Tekton Pipelines

See the following topics to learn how to use Tekton Pipelines in your project:

- [Creating a Task](tasks.md)
- [Running a standalone Task](taskruns.md)
- [Creating a Pipeline](pipelines.md)
- [Running a Pipeline](pipelineruns.md)
- [Defining Workspaces](workspaces.md)
- [Configuring authentication](auth.md)
- [Using labels](labels.md)
- [Viewing logs](logs.md)
- [Pipelines metrics](metrics.md)
- [Variable Substitutions](tasks.md#using-variable-substitution)
- [Running a Custom Task](customruns.md)
- [Remote resolution of Pipelines and Tasks](resolution.md)
- [Trusted Resources](trusted-resources.md)

## Contributing to Tekton Pipelines

If you'd like to contribute to the Tekton Pipelines project, see the [Tekton Pipeline Contributor's Guide](https://github.com/tektoncd/pipeline/blob/main/CONTRIBUTING.md).

---

Except as otherwise noted, the content of this page is licensed under the
[Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/),
and code samples are licensed under the
[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).
