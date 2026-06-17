&#123;/*
---
linkTitle: "Pod templates"
weight: 409
---
*/&#125;

# Pod templates

A Pod template defines a portion of a [`PodSpec`](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#pod-v1-core)
configuration that Tekton can use as "boilerplate" for a Pod that runs your `Tasks` and `Pipelines`.

You can specify a Pod template for `TaskRuns` and `PipelineRuns`. In the template, you can specify custom values for fields governing
the execution of individual `Tasks` or for all `Tasks` executed by a given `PipelineRun`.

You also have the option to define a global Pod template [in your Tekton config](./additional-configs.md#customizing-basic-execution-parameters) using the key `default-pod-template`.
However, this global template is going to be merged with any templates you specify in your `TaskRuns` and `PipelineRuns`.&lt;br>
Except for the `env` and `volumes` fields, other fields that exist in both the global template and the `TaskRun`'s or
`PipelineRun`'s template will be taken from the `TaskRun` or `PipelineRun`.
The `env` and `volumes` fields are merged by the `name` value in the array elements. If the item's `name` is the same, the item from `TaskRun` or `PipelineRun` will be used.

See the following for examples of specifying a Pod template:
- [Specifying a Pod template for a `TaskRun`](./taskruns.md#specifying-a-pod-template)
- [Specifying a Pod template for a `PipelineRun`](./pipelineruns.md#specifying-a-pod-template)

## Parameter Substitution in Pod Templates

When using Pod templates within `PipelineRun` [`taskRunSpecs`](./pipelineruns.md#specifying-taskrunspecs), you can use parameter substitution to dynamically configure Pod template fields based on pipeline parameters. This is particularly useful when working with [`Matrix`](./matrix.md) tasks that fan out with different parameter values.

Parameter substitution uses the standard Tekton syntax `$(params.paramName)` and is supported in all Pod template fields that accept string values.

Example with parameter substitution:
```yaml
taskRunSpecs:
  - pipelineTaskName: build-task
    podTemplate:
      nodeSelector:
        kubernetes.io/arch: $(params.arch)
        environment: $(params.env)
      tolerations:
        - key: "workload-type"
          operator: "Equal"
          value: "$(params.workload)"
          effect: "NoSchedule"
```

When used with Matrix tasks, each matrix combination will create a separate `TaskRun` with the parameter values substituted appropriately in the Pod template. For more information and examples, see [Matrix Support with taskRunSpecs](./pipelineruns.md#matrix-support-with-taskrunspecs).

## Supported fields

Pod templates support fields listed in the table below.

&lt;table>
	&lt;thead>
		&lt;th>Field&lt;/th>
		&lt;th>Description&lt;/th>
	&lt;/thead>
	&lt;tbody>
		&lt;tr>
			&lt;td>&lt;code>env&lt;/code>&lt;/td>
			&lt;td>Environment variables defined in the Pod template at &lt;code>TaskRun&lt;/code> and &lt;code>PipelineRun&lt;/code> level take precedence over the ones defined in &lt;code>steps&lt;/code> and &lt;code>stepTemplate&lt;/code>&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>nodeSelector&lt;/code>&lt;/td>
			&lt;td>Must be true for &lt;a href=https://kubernetes.io/docs/concepts/configuration/assign-pod-node/>the Pod to fit on a node&lt;/a>.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>tolerations&lt;/code>&lt;/td>
			&lt;td>Allows (but does not require) the Pods to schedule onto nodes with matching taints.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>affinity&lt;/code>&lt;/td>
			&lt;td>Allows constraining the set of nodes for which the Pod can be scheduled based on the labels present on the node.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>securityContext&lt;/code>&lt;/td>
			&lt;td>Specifies Pod-level security attributes and common container settings such as &lt;code>runAsUser&lt;/code> and &lt;code>selinux&lt;/code>.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>volumes&lt;/code>&lt;/td>
			&lt;td>Specifies a list of volumes that containers within the Pod can mount. This allows you to specify a volume type for each &lt;code>volumeMount&lt;/code> in a &lt;code>Task&lt;/code>.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>runtimeClassName&lt;/code>&lt;/td>
			&lt;td>Specifies the &lt;a href=https://kubernetes.io/docs/concepts/containers/runtime-class/>runtime class&lt;/a> for the Pod.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>automountServiceAccountToken&lt;/code>&lt;/td>
			&lt;td>&lt;b>Default:&lt;/b> &lt;code>true&lt;/code>. Determines whether Tekton automatically provides the token for the service account used by the Pod inside containers at a predefined path.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>dnsPolicy&lt;/code>&lt;/td>
			&lt;td>&lt;b>Default:&lt;/b> &lt;code>ClusterFirst&lt;/code>. Specifies the &lt;a href=https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy>DNS policy&lt;/a>
                for the Pod. Legal values are &lt;code>ClusterFirst&lt;/code>, &lt;code>Default&lt;/code>, and &lt;code>None&lt;/code>. Does &lt;b>not&lt;/b> support &lt;code>ClusterFirstWithHostNet&lt;/code>
                because Tekton Pods cannot run with host networking.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>dnsConfig&lt;/code>&lt;/td>
			&lt;td>Specifies &lt;a href=https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-config>additional DNS configuration for the Pod&lt;/a>, such as name servers and search domains.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>enableServiceLinks&lt;/code>&lt;/td>
			&lt;td>&lt;b>Default:&lt;/b> &lt;code>true&lt;/code>. Determines whether services in the Pod's namespace are exposed as environment variables to the Pod, similarly to Docker service links.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>priorityClassName&lt;/code>&lt;/td>
			&lt;td>Specifies the &lt;a href=https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/>priority class&lt;/a> for the Pod. Allows you to selectively enable preemption on lower-priority workloads.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>schedulerName&lt;/code>&lt;/td>
			&lt;td>Specifies the &lt;a href=https://kubernetes.io/docs/tasks/administer-cluster/configure-multiple-schedulers/>scheduler&lt;/a> to use when dispatching the Pod. You can specify different schedulers for different types of
                workloads, such as &lt;code>volcano.sh&lt;/code> for machine learning workloads.&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;code>imagePullSecrets&lt;/code>&lt;/td>
			&lt;td>Specifies the &lt;a href=https://kubernetes.io/docs/concepts/configuration/secret/>secret&lt;/a> to use when &lt;a href=https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/>
                pulling a container image&lt;/a>.&lt;/td>
		&lt;/tr>
		&lt;tr>
            &lt;td>&lt;code>hostNetwork&lt;/code>&lt;/td>
            &lt;td>&lt;b>Default:&lt;/b> &lt;code>false&lt;/code>. Determines whether to use the host network namespace.&lt;/td>
        &lt;/tr>
        &lt;tr>
            &lt;td>&lt;code>hostUsers&lt;/code>&lt;/td>
            &lt;td>&lt;b>Default:&lt;/b> &lt;code>true&lt;/code>. Determines whether to use the host's user namespace. When set to &lt;code>false&lt;/code>, a new user namespace is created for the pod, providing better security isolation. This is useful for mitigating container breakout vulnerabilities. This field is alpha-level and requires the &lt;code>UserNamespacesSupport&lt;/code> feature gate to be enabled on the Kubernetes cluster (available in Kubernetes 1.25+).&lt;/td>
        &lt;/tr>
        &lt;tr>
            &lt;td>&lt;code>hostAliases&lt;/code>&lt;/td>
            &lt;td>Adds entries to a Pod's `/etc/hosts` to provide Pod-level overrides of hostnames. For further info see [Kubernetes' docs for this field](https://kubernetes.io/docs/tasks/network/customize-hosts-file-for-pods/).&lt;/td>
		&lt;/tr>
        &lt;tr>
            &lt;td>&lt;code>topologySpreadConstraints&lt;/code>&lt;/td>
            &lt;td>Specify how Pods are spread across your cluster among topology domains.&lt;/td>
        &lt;/tr>
	&lt;/tbody>
&lt;/table>

## Use `imagePullSecrets` to lookup entrypoint

If no command is configured in `task` and `imagePullSecrets` is configured in `podTemplate`, the Tekton Controller will look up the entrypoint of image with `imagePullSecrets`. The Tekton controller's service account is given access to secrets by default. See [this](https://github.com/tektoncd/pipeline/blob/main/config/200-clusterrole.yaml) for reference. If the Tekton controller's service account is not granted the access to secrets in different namespace, you need to grant the access via `RoleBinding`:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: creds-getter
  namespace: my-ns
rules:
- apiGroups: [""]
  resources: ["secrets"]
  resourceNames: ["creds"]
  verbs: ["get"]
```

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: creds-getter-binding
  namespace: my-ns
subjects:
- kind: ServiceAccount
  name: tekton-pipelines-controller
  namespace: tekton-pipelines
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: creds-getter
  apiGroup: rbac.authorization.k8s.io
```

# Affinity Assistant Pod templates

The Pod templates specified in the `TaskRuns` and `PipelineRuns `also apply to
the [affinity assistant Pods](#./workspaces.md#specifying-workspace-order-in-a-pipeline-and-affinity-assistants)
that are created when using Workspaces, but only on selected fields.

The supported fields for affinity assistant pods are: `tolerations`, `nodeSelector`, `securityContext`, 
`priorityClassName` and `imagePullSecrets` (see the table above for more details about the fields).

Similarly to global Pod Template, you have the option to define a global affinity
assistant Pod template [in your Tekton config](./additional-configs.md#customizing-basic-execution-parameters)
using the key `default-affinity-assistant-pod-template`. The merge strategy is
the same as the one described above for the supported fields.

---

Except as otherwise noted, the content of this page is licensed under the
[Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/),
and code samples are licensed under the
[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).
