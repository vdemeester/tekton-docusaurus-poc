&#123;/*
---
linkTitle: "Labels and Annotations"
weight: 305
---
*/&#125;

# Labels and Annotations

Tekton allows you to use custom [Kubernetes Labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)
to easily mark Tekton entities belonging to the same conceptual execution chain. Tekton also automatically adds select labels
to more easily identify resource relationships. This document describes the label propagation scheme, automatic labeling, and
provides usage examples.

---

- [Label propagation](#label-propagation)
- [Automatic labeling](#automatic-labeling)
- [Usage examples](#usage-examples)

---

## Label propagation

Labels propagate among Tekton entities as follows:

- For `Pipelines` instantiated using a `PipelineRun`, labels propagate
automatically from `Pipelines` to `PipelineRuns` to `TaskRuns`, and then to
the associated `Pods`. If a label is present in both `Pipeline` and
`PipelineRun`, the label in `PipelineRun` takes precedence.

- Labels from `Tasks` referenced by `TaskRuns` within a `PipelineRun` propagate to the corresponding `TaskRuns`,
and then to the associated `Pods`. As for `Pipeline` and `PipelineRun`, if a label is present in both `Task` and
`TaskRun`, the label in `TaskRun` takes precedence.

- For standalone `TaskRuns` (that is, ones not executing as part of a `Pipeline`), labels
propagate from the [referenced `Task`](taskruns.md#specifying-the-target-task), if one exists, to
the corresponding `TaskRun`, and then to the associated `Pod`. The same as above applies.

## Automatic labeling

Tekton automatically adds labels to Tekton entities as described in the following table.

**Note:** `*.tekton.dev` labels are reserved for Tekton's internal use only. Do not add or remove them manually.

&lt;table >
	&lt;tbody>
		&lt;tr>
			&lt;td>&lt;b>Label&lt;/b>&lt;/td>
			&lt;td>&lt;b>Added To&lt;/b>&lt;/td>
			&lt;td>&lt;b>Propagates To&lt;/b>&lt;/td>
			&lt;td>&lt;b>Contains&lt;/b>&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>tekton.dev/pipeline&lt;/code>&lt;/td>
			&lt;td>&lt;code>PipelineRuns&lt;/code>&lt;/td>
			&lt;td>&lt;code>TaskRuns, Pods&lt;/code>&lt;/td>
			&lt;td>Name of the &lt;code>Pipeline&lt;/code> that the &lt;code>PipelineRun&lt;/code> references.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>tekton.dev/pipelineRun&lt;/code>&lt;/td>
			&lt;td>&lt;code>TaskRuns&lt;/code> that are created automatically during the execution of a &lt;code>PipelineRun&lt;/code>.&lt;/td>
			&lt;td>&lt;code>TaskRuns, Pods&lt;/code>&lt;/td>
			&lt;td>Name of the &lt;code>PipelineRun&lt;/code> that triggered the creation of the &lt;code>TaskRun&lt;/code>.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>tekton.dev/task&lt;/code>&lt;/td>
			&lt;td>&lt;code>TaskRuns&lt;/code> that &lt;a href="taskruns.md#specifying-the-target-task">reference an existing &lt;/code>Task&lt;/code>&lt;/a>.&lt;/td>
			&lt;td>&lt;code>Pods&lt;/code>&lt;/td>
			&lt;td>Name of the &lt;code>Task&lt;/code> that the &lt;code>TaskRun&lt;/code> references.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>tekton.dev/taskRun&lt;/code>&lt;/td>
			&lt;td>&lt;code>Pods&lt;/code>&lt;/td>
			&lt;td>No propagation.&lt;/td>
			&lt;td>Name of the &lt;code>TaskRun&lt;/code> that created the &lt;code>Pod&lt;/code>.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>tekton.dev/memberOf&lt;/code>&lt;/td>
			&lt;td>&lt;code>TaskRuns&lt;/code> that are created automatically during the execution of a &lt;code>PipelineRun&lt;/code>.&lt;/td>
			&lt;td>&lt;code>TaskRuns, Pods&lt;/code>&lt;/td>
			&lt;td>&lt;code>tasks&lt;/code> or &lt;code>finally&lt;/code> depending on the &lt;code>PipelineTask&lt;/code>'s membership in the &lt;code>Pipeline&lt;/code>.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>app.kubernetes.io/instance&lt;/code>, &lt;code>app.kubernetes.io/component&lt;/code>&lt;/td>
			&lt;td>&lt;code>Pods&lt;/code>, &lt;code>StatefulSets&lt;/code> (Affinity Assistant)&lt;/td>
			&lt;td>No propagation.&lt;/td>
			&lt;td>&lt;code>Pod&lt;/code> affinity values for &lt;code>TaskRuns&lt;/code>.&lt;/td>
		&lt;/tr>
	&lt;/tbody>
&lt;/table>

## Usage examples

Below are some examples of using labels:

The following command finds all `Pods` created by a `PipelineRun` named `test-pipelinerun`:

```shell
kubectl get pods --all-namespaces -l tekton.dev/pipelineRun=test-pipelinerun
```

The following command finds all `TaskRuns` that reference a `Task` named `test-task`:

```shell
kubectl get taskruns --all-namespaces -l tekton.dev/task=test-task
```

## Annotations propagation

Annotation propagate among Tekton entities as follows (similar to Labels):

- For `Pipelines` instantiated using a `PipelineRun`, annotations propagate
automatically from `Pipelines` to `PipelineRuns` to `TaskRuns`, and then to
the associated `Pods`. If a annotation is present in both `Pipeline` and
`PipelineRun`, the annotation in `PipelineRun` takes precedence.

- Annotations from `Tasks` referenced by `TaskRuns` within a `PipelineRun` propagate to the corresponding `TaskRuns`,
and then to the associated `Pods`. As for `Pipeline` and `PipelineRun`, if a annotation is present in both `Task` and
`TaskRun`, the annotation in `TaskRun` takes precedence.

- For standalone `TaskRuns` (that is, ones not executing as part of a `Pipeline`), annotations
propagate from the [referenced `Task`](taskruns.md#specifying-the-target-task), if one exists, to
the corresponding `TaskRun`, and then to the associated `Pod`. The same as above applies.
