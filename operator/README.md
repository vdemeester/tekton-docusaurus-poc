&#123;/*
---
title: "Operator"
linkTitle: "Operator"
weight: 8
description: >
  Manage Tekton CI/CD Building Blocks
cascade:
  github_project_repo: https://github.com/tektoncd/operator
---
*/&#125;
# Tekton Operator

Tekton Operator is a Kubernetes extension that to install, upgrade and
manage TektonCD [Pipelines](https://github.com/tektoncd/pipeline),
[Dashboard](https://github.com/tektoncd/dashboard),
[Triggers](https://github.com/tektoncd/triggers) (and other
components) on any Kubernetes Cluster.

## Tekton Operator entities

Tekton Operator defines the following entities:

&lt;table>
  &lt;tr>
    &lt;th>Entity&lt;/th>
    &lt;th>Description&lt;/th>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>TektonConfig&lt;/code>&lt;/td>
    &lt;td>Configure Tekton components to be installed and managed.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>TektonPipeline&lt;/code>&lt;/td>
    &lt;td>Configure the &lt;a HREF="https://github.com/tektoncd/pipeline">Tekton Pipeline&lt;/a> component to be installed and managed.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>TektonTrigger&lt;/code>&lt;/td>
    &lt;td>Configure the &lt;a HREF="https://github.com/tektoncd/triggers">Tekton Trigger&lt;/a> component to be installed and managed.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>TektonDashboard&lt;/code>&lt;/td>
    &lt;td>Configure the &lt;a HREF="https://github.com/tektoncd/dashboard">Tekton Dashboard&lt;/a> component to be installed and managed.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>TektonResult&lt;/code>&lt;/td>
    &lt;td>Configure the &lt;a HREF="https://github.com/tektoncd/results">Tekton Result&lt;/a> component to be installed and managed.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>TektonChain&lt;/code>&lt;/td>
    &lt;td>Configure the &lt;a HREF="https://github.com/tektoncd/chains">Tekton Chain&lt;/a> component to be installed and managed.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>OpenShiftPipelinesAsCode&lt;/code>&lt;/td>
    &lt;td>Configure the &lt;a HREF="https://github.com/openshift-pipelines/pipelines-as-code">Pipelines as Code&lt;/a> component to be installed and managed.&lt;/td>
  &lt;/tr>
  &lt;tr>
    &lt;td>&lt;code>TektonAddon&lt;/code>&lt;/td>
    &lt;td>Configure addons to be installed and managed.&lt;/td>
  &lt;/tr>
&lt;/table>

## Getting started

To install Operator there are multiple ways

- Install from Operator Hub 
  
  You can find the instruction [here](https://operatorhub.io/operator/tektoncd-operator). The lifecycle will be managed by Operator Lifecycle Manager (OLM).

- Install using release file
  
  You can find the release file for latest version [here](https://github.com/tektoncd/operator/releases). In this case, you will have to manage the lifecycle for the Operator.

- Install from code

  You can clone and repository and install the Operator. You can find the instruction in [here](../DEVELOPMENT.md)

After installing the Operator, to install the required Tekton Component such as Tekton Pipeline, Tekton Triggers.

Create an instance of `TektonConfig` which will create the required components. You can find more details and the available configuration in [TektonConfig](TektonConfig.md).

NOTE: `TektonResult` and `TektonChain` are optional components and are not installed through `TektonConfig` currently. You can find the installation steps in their docs.


## Understanding Tekton Operator

Each Tekton Component has a Custom Resource which installs the component and manages it. 

`TektonConfig` is a top level Custom Resource which creates other components.

So, the user just need to create TektonConfig with the required configurations, and it will handle the installation of required components.

You can find more about the Resources and its available configurations in their docs 

- [TektonConfig](./TektonConfig.md)
- [TektonPipeline](./TektonPipeline.md)
- [TektonTrigger](./TektonTrigger.md)
- [TektonDashboard](./TektonDashboard.md)
- [TektonResult](./TektonResult.md)
- [TektonChain](./TektonChain.md)
- [TektonAddon](./TektonAddon.md)
- [OpenShiftPipelinesAsCode](./OpenShiftPipelinesAsCode.md)

To understand how Tekton Operator works, you can find the details [here](TektonOperator.md)

## Tektoncd Operator Releases

  [Tektoncd Releases](./release/README.md)

## Contributing to Tekton Operator

If you'd like to contribute to the Tekton Operator project, see the [Tekton Operator Contributor's Guide](https://github.com/tektoncd/operator/blob/main/CONTRIBUTING.md).

---

Except as otherwise noted, the content of this page is licensed under the
[Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/),
and code samples are licensed under the
[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).
