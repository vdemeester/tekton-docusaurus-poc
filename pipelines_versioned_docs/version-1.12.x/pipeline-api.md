&#123;/*
---
title: Pipeline API
linkTitle: Pipeline API
weight: 404
---
*/&#125;

&lt;p>Packages:&lt;/p>
&lt;ul>
&lt;li>
&lt;a href="#resolution.tekton.dev%2fv1alpha1">resolution.tekton.dev/v1alpha1&lt;/a>
&lt;/li>
&lt;li>
&lt;a href="#resolution.tekton.dev%2fv1beta1">resolution.tekton.dev/v1beta1&lt;/a>
&lt;/li>
&lt;li>
&lt;a href="#tekton.dev%2fv1">tekton.dev/v1&lt;/a>
&lt;/li>
&lt;li>
&lt;a href="#tekton.dev%2fv1alpha1">tekton.dev/v1alpha1&lt;/a>
&lt;/li>
&lt;li>
&lt;a href="#tekton.dev%2fv1beta1">tekton.dev/v1beta1&lt;/a>
&lt;/li>
&lt;/ul>
&lt;h2 id="resolution.tekton.dev/v1alpha1">resolution.tekton.dev/v1alpha1&lt;/h2>
&lt;div>
&lt;/div>
Resource Types:
&lt;ul>&lt;/ul>
&lt;h3 id="resolution.tekton.dev/v1alpha1.ResolutionRequest">ResolutionRequest
&lt;/h3>
&lt;div>
&lt;p>ResolutionRequest is an object for requesting the content of
a Tekton resource like a pipeline.yaml.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#resolution.tekton.dev/v1alpha1.ResolutionRequestSpec">
ResolutionRequestSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec holds the information for the request part of the resource request.&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Parameters are the runtime attributes passed to
the resolver to help it figure out how to resolve the
resource being requested. For example: repo URL, commit SHA,
path to file, the kind of authentication to leverage, etc.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#resolution.tekton.dev/v1alpha1.ResolutionRequestStatus">
ResolutionRequestStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status communicates the state of the request and, ultimately,
the content of the resolved resource.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="resolution.tekton.dev/v1alpha1.ResolutionRequestSpec">ResolutionRequestSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#resolution.tekton.dev/v1alpha1.ResolutionRequest">ResolutionRequest&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResolutionRequestSpec are all the fields in the spec of the
ResolutionRequest CRD.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Parameters are the runtime attributes passed to
the resolver to help it figure out how to resolve the
resource being requested. For example: repo URL, commit SHA,
path to file, the kind of authentication to leverage, etc.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="resolution.tekton.dev/v1alpha1.ResolutionRequestStatus">ResolutionRequestStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#resolution.tekton.dev/v1alpha1.ResolutionRequest">ResolutionRequest&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResolutionRequestStatus are all the fields in a ResolutionRequest&rsquo;s
status subresource.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>Status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/knative.dev/pkg/apis/duck/v1#Status">
knative.dev/pkg/apis/duck/v1.Status
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>Status&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ResolutionRequestStatusFields&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#resolution.tekton.dev/v1alpha1.ResolutionRequestStatusFields">
ResolutionRequestStatusFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>ResolutionRequestStatusFields&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="resolution.tekton.dev/v1alpha1.ResolutionRequestStatusFields">ResolutionRequestStatusFields
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#resolution.tekton.dev/v1alpha1.ResolutionRequestStatus">ResolutionRequestStatus&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResolutionRequestStatusFields are the ResolutionRequest-specific fields
for the status subresource.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>data&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Data is a string representation of the resolved content
of the requested resource in-lined into the ResolutionRequest
object.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>refSource&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.RefSource">
RefSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>RefSource is the source reference of the remote data that records where the remote
file came from including the url, digest and the entrypoint.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;hr/>
&lt;h2 id="resolution.tekton.dev/v1beta1">resolution.tekton.dev/v1beta1&lt;/h2>
&lt;div>
&lt;/div>
Resource Types:
&lt;ul>&lt;/ul>
&lt;h3 id="resolution.tekton.dev/v1beta1.ResolutionRequest">ResolutionRequest
&lt;/h3>
&lt;div>
&lt;p>ResolutionRequest is an object for requesting the content of
a Tekton resource like a pipeline.yaml.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#resolution.tekton.dev/v1beta1.ResolutionRequestSpec">
ResolutionRequestSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec holds the information for the request part of the resource request.&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Param">
[]Param
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Parameters are the runtime attributes passed to
the resolver to help it figure out how to resolve the
resource being requested. For example: repo URL, commit SHA,
path to file, the kind of authentication to leverage, etc.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>url&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>URL is the runtime url passed to the resolver
to help it figure out how to resolver the resource being
requested.
This is currently at an ALPHA stability level and subject to
alpha API compatibility policies.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#resolution.tekton.dev/v1beta1.ResolutionRequestStatus">
ResolutionRequestStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status communicates the state of the request and, ultimately,
the content of the resolved resource.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="resolution.tekton.dev/v1beta1.ResolutionRequestSpec">ResolutionRequestSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#resolution.tekton.dev/v1beta1.ResolutionRequest">ResolutionRequest&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResolutionRequestSpec are all the fields in the spec of the
ResolutionRequest CRD.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Param">
[]Param
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Parameters are the runtime attributes passed to
the resolver to help it figure out how to resolve the
resource being requested. For example: repo URL, commit SHA,
path to file, the kind of authentication to leverage, etc.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>url&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>URL is the runtime url passed to the resolver
to help it figure out how to resolver the resource being
requested.
This is currently at an ALPHA stability level and subject to
alpha API compatibility policies.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="resolution.tekton.dev/v1beta1.ResolutionRequestStatus">ResolutionRequestStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#resolution.tekton.dev/v1beta1.ResolutionRequest">ResolutionRequest&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResolutionRequestStatus are all the fields in a ResolutionRequest&rsquo;s
status subresource.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>Status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/knative.dev/pkg/apis/duck/v1#Status">
knative.dev/pkg/apis/duck/v1.Status
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>Status&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ResolutionRequestStatusFields&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#resolution.tekton.dev/v1beta1.ResolutionRequestStatusFields">
ResolutionRequestStatusFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>ResolutionRequestStatusFields&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="resolution.tekton.dev/v1beta1.ResolutionRequestStatusFields">ResolutionRequestStatusFields
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#resolution.tekton.dev/v1beta1.ResolutionRequestStatus">ResolutionRequestStatus&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResolutionRequestStatusFields are the ResolutionRequest-specific fields
for the status subresource.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>data&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Data is a string representation of the resolved content
of the requested resource in-lined into the ResolutionRequest
object.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>source&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.RefSource">
RefSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Deprecated: Use RefSource instead&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>refSource&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.RefSource">
RefSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>RefSource is the source reference of the remote data that records the url, digest
and the entrypoint.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;hr/>
&lt;h2 id="tekton.dev/v1">tekton.dev/v1&lt;/h2>
&lt;div>
&lt;p>Package v1 contains API Schema definitions for the pipeline v1 API group&lt;/p>
&lt;/div>
Resource Types:
&lt;ul>&lt;li>
&lt;a href="#tekton.dev/v1.Pipeline">Pipeline&lt;/a>
&lt;/li>&lt;li>
&lt;a href="#tekton.dev/v1.PipelineRun">PipelineRun&lt;/a>
&lt;/li>&lt;li>
&lt;a href="#tekton.dev/v1.Task">Task&lt;/a>
&lt;/li>&lt;li>
&lt;a href="#tekton.dev/v1.TaskRun">TaskRun&lt;/a>
&lt;/li>&lt;/ul>
&lt;h3 id="tekton.dev/v1.Pipeline">Pipeline
&lt;/h3>
&lt;div>
&lt;p>Pipeline describes a list of Tasks to execute. It expresses how outputs
of tasks feed into inputs of subsequent tasks.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>Pipeline&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineSpec">
PipelineSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec holds the desired state of the Pipeline from the client&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is a user-facing name of the pipeline that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the pipeline that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>tasks&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineTask">
[]PipelineTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Tasks declares the graph of Tasks that execute when this Pipeline is run.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params declares a list of input parameters that must be supplied when
this Pipeline is run.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineWorkspaceDeclaration">
[]PipelineWorkspaceDeclaration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces declares a set of named workspaces that are expected to be
provided by a PipelineRun.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineResult">
[]PipelineResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results are values that this pipeline can output once run&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>finally&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineTask">
[]PipelineTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Finally declares the list of Tasks that execute just before leaving the Pipeline
i.e. either after all Tasks are finished executing successfully
or after a failure which would result in ending the Pipeline&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineRun">PipelineRun
&lt;/h3>
&lt;div>
&lt;p>PipelineRun represents a single execution of a Pipeline. PipelineRuns are how
the graph of Tasks declared in a Pipeline are executed; they specify inputs
to Pipelines such as parameter values and capture operational aspects of the
Tasks execution such as service account and tolerations. Creating a
PipelineRun creates TaskRuns for Tasks in the referenced Pipeline.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>PipelineRun&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineRunSpec">
PipelineRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>pipelineRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineRef">
PipelineRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineSpec">
PipelineSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specifying PipelineSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Pipeline.spec (API version: tekton.dev/v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params is a list of parameter names and values.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineRunSpecStatus">
PipelineRunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a pipelinerun (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeouts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TimeoutFields">
TimeoutFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which the Pipeline times out.
Currently three keys are accepted in the map
pipeline, tasks and finally
with Timeouts.pipeline &gt;= Timeouts.tasks + Timeouts.finally&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRunTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineTaskRunTemplate">
PipelineTaskRunTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskRunTemplate represent template of taskrun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces holds a set of workspace bindings that must match names
with those declared in the pipeline.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRunSpecs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineTaskRunSpec">
[]PipelineTaskRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskRunSpecs holds a set of runtime specs&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>managedBy&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ManagedBy indicates which controller is responsible for reconciling
this resource. If unset or set to &ldquo;tekton.dev/pipeline&rdquo;, the default
Tekton controller will manage this resource.
This field is immutable.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineRunStatus">
PipelineRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.Task">Task
&lt;/h3>
&lt;div>
&lt;p>Task represents a collection of sequential steps that are run as part of a
Pipeline using a set of inputs and producing a set of outputs. Tasks execute
when TaskRuns are created that provide the input parameters and resources and
output resources the Task requires.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>Task&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskSpec">
TaskSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec holds the desired state of the Task from the client&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params is a list of input parameters required to run the task. Params
must be supplied as inputs in TaskRuns unless they declare a default
value.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is a user-facing name of the task that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the task that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>steps&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Step">
[]Step
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Steps are the steps of the build; each step is run sequentially with the
source mounted into /workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumes&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Volumes">
Volumes
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Volumes is a collection of volumes that are available to mount into the
steps of the build.
See Pod.spec.volumes (API version: v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stepTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepTemplate">
StepTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>StepTemplate can be used as the basis for all step containers within the
Task, so that the steps inherit settings on the base container.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecars&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Sidecar">
[]Sidecar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Sidecars are run alongside the Task&rsquo;s step containers. They begin before
the steps start and end after the steps complete.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WorkspaceDeclaration">
[]WorkspaceDeclaration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Workspaces are the volumes that this Task requires.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskResult">
[]TaskResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Results are values that this Task can output&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRun">TaskRun
&lt;/h3>
&lt;div>
&lt;p>TaskRun represents a single execution of a Task. TaskRuns are how the steps
specified in a Task are executed; they specify the parameters and resources
used to run the steps in a Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>TaskRun&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunSpec">
TaskRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>debug&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunDebug">
TaskRunDebug
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRef">
TaskRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>no more than one of the TaskRef and TaskSpec may be specified.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskSpec">
TaskSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specifying TaskSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Task.spec (API version: tekton.dev/v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunSpecStatus">
TaskRunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a TaskRun (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>statusMessage&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunSpecStatusMessage">
TaskRunSpecStatusMessage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status message for cancellation.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retries&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Retries represents how many times this TaskRun should be retried in the event of task failure.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which one retry attempt times out. Defaults to 1 hour.
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>podTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/unversioned.PodTemplate">
PodTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PodTemplate holds pod specific configuration&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces is a list of WorkspaceBindings from volumes to workspaces.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stepSpecs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunStepSpec">
[]TaskRunStepSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specs to apply to Steps in this TaskRun.
If a field is specified in both a Step and a StepSpec,
the value from the StepSpec will be used.
This field is only supported when the alpha feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecarSpecs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunSidecarSpec">
[]TaskRunSidecarSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specs to apply to Sidecars in this TaskRun.
If a field is specified in both a Sidecar and a SidecarSpec,
the value from the SidecarSpec will be used.
This field is only supported when the alpha feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>computeResources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Compute resources to use for this TaskRun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>managedBy&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ManagedBy indicates which controller is responsible for reconciling
this resource. If unset or set to &ldquo;tekton.dev/pipeline&rdquo;, the default
Tekton controller will manage this resource.
This field is immutable.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunStatus">
TaskRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.Algorithm">Algorithm
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>Algorithm Standard cryptographic hash algorithm&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.Artifact">Artifact
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Artifacts">Artifacts&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Artifact represents an artifact within a system, potentially containing multiple values
associated with it.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The artifact&rsquo;s identifying category name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>values&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ArtifactValue">
[]ArtifactValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>A collection of values related to the artifact&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>buildOutput&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Indicate if the artifact is a build output or a by-product&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.ArtifactValue">ArtifactValue
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Artifact">Artifact&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ArtifactValue represents a specific value or data element within an Artifact.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>digest&lt;/code>&lt;br/>
&lt;em>
map[github.com/tektoncd/pipeline/pkg/apis/pipeline/v1.Algorithm]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>uri&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Algorithm-specific digests for verifying the content (e.g., SHA256)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.Artifacts">Artifacts
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Artifacts represents the collection of input and output artifacts associated with
a task run or a similar process. Artifacts in this context are units of data or resources
that the process either consumes as input or produces as output.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>inputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Artifact">
[]Artifact
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>outputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Artifact">
[]Artifact
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.ChildStatusReference">ChildStatusReference
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ChildStatusReference is used to point to the statuses of individual TaskRuns and Runs within this PipelineRun.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of the TaskRun or Run this is referencing.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>DisplayName is a user-facing name of the pipelineTask that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineTaskName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PipelineTaskName is the name of the PipelineTask this is referencing.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>whenExpressions&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WhenExpression">
[]WhenExpression
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>WhenExpressions is the list of checks guarding the execution of the PipelineTask&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.Combination">Combination
(&lt;code>map[string]string&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>Combination is a map, mainly defined to hold a single combination from a Matrix with key as param.Name and value as param.Value&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.Combinations">Combinations
(&lt;code>[]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1.Combination&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>Combinations is a Combination list&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.EmbeddedTask">EmbeddedTask
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>EmbeddedTask is used to define a Task inline within a Pipeline&rsquo;s PipelineTasks.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/runtime#RawExtension">
k8s.io/apimachinery/pkg/runtime.RawExtension
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec is a specification of a custom task&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>-&lt;/code>&lt;br/>
&lt;em>
[]byte
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Raw is the underlying serialization of this object.&lt;/p>
&lt;p>TODO: Determine how to detect ContentType and ContentEncoding of &lsquo;Raw&rsquo; data.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>-&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/runtime#Object">
k8s.io/apimachinery/pkg/runtime.Object
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Object can hold a representation of this extension - useful for working with versioned
structs.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineTaskMetadata">
PipelineTaskMetadata
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>TaskSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskSpec">
TaskSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>TaskSpec&lt;/code> are embedded into this type.)
&lt;/p>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskSpec is a specification of a task&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.IncludeParams">IncludeParams
&lt;/h3>
&lt;div>
&lt;p>IncludeParams allows passing in a specific combinations of Parameters into the Matrix.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name the specified combination&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params takes only &lt;code>Parameters&lt;/code> of type &lt;code>&quot;string&quot;&lt;/code>
The names of the &lt;code>params&lt;/code> must match the names of the &lt;code>params&lt;/code> in the underlying &lt;code>Task&lt;/code>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.Matrix">Matrix
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Matrix is used to fan out Tasks in a Pipeline&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params is a list of parameters used to fan out the pipelineTask
Params takes only &lt;code>Parameters&lt;/code> of type &lt;code>&quot;array&quot;&lt;/code>
Each array element is supplied to the &lt;code>PipelineTask&lt;/code> by substituting &lt;code>params&lt;/code> of type &lt;code>&quot;string&quot;&lt;/code> in the underlying &lt;code>Task&lt;/code>.
The names of the &lt;code>params&lt;/code> in the &lt;code>Matrix&lt;/code> must match the names of the &lt;code>params&lt;/code> in the underlying &lt;code>Task&lt;/code> that they will be substituting.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>include&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.IncludeParamsList">
IncludeParamsList
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Include is a list of IncludeParams which allows passing in specific combinations of Parameters into the Matrix.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.OnErrorType">OnErrorType
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Step">Step&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>OnErrorType defines a list of supported exiting behavior of a container on error&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Value&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>&lt;tr>&lt;td>&lt;p>&#34;continue&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>Continue indicates continue executing the rest of the steps irrespective of the container exit code&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;stopAndFail&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>StopAndFail indicates exit the taskRun if the container exits with non-zero exit code&lt;/p>
&lt;/td>
&lt;/tr>&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.Param">Param
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#resolution.tekton.dev/v1beta1.ResolutionRequestSpec">ResolutionRequestSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Param declares an ParamValues to use for the parameter called name.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamValue">
ParamValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.ParamSpec">ParamSpec
&lt;/h3>
&lt;div>
&lt;p>ParamSpec defines arbitrary parameters needed beyond typed inputs (such as
resources). Parameter values are provided by users as inputs on a TaskRun
or PipelineRun.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name declares the name by which a parameter is referenced.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamType">
ParamType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Type is the user-specified type of the parameter. The possible types
are currently &ldquo;string&rdquo;, &ldquo;array&rdquo; and &ldquo;object&rdquo;, and &ldquo;string&rdquo; is the default.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the parameter that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>properties&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PropertySpec">
map[string]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1.PropertySpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Properties is the JSON Schema properties to support key-value pairs parameter.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>default&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamValue">
ParamValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Default is the value a parameter takes if no input value is supplied. If
default is set, a Task may be executed without a supplied value for the
parameter.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>enum&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Enum declares a set of allowed param input values for tasks/pipelines that can be validated.
If Enum is not set, no input validation is performed for the param.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.ParamSpecs">ParamSpecs
(&lt;code>[]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1.ParamSpec&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineSpec">PipelineSpec&lt;/a>, &lt;a href="#tekton.dev/v1.TaskSpec">TaskSpec&lt;/a>, &lt;a href="#tekton.dev/v1alpha1.StepActionSpec">StepActionSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.StepActionSpec">StepActionSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ParamSpecs is a list of ParamSpec&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.ParamType">ParamType
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.ParamSpec">ParamSpec&lt;/a>, &lt;a href="#tekton.dev/v1.ParamValue">ParamValue&lt;/a>, &lt;a href="#tekton.dev/v1.PropertySpec">PropertySpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ParamType indicates the type of an input parameter;
Used to distinguish between a single string and an array of strings.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Value&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>&lt;tr>&lt;td>&lt;p>&#34;array&#34;&lt;/p>&lt;/td>
&lt;td>&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;object&#34;&lt;/p>&lt;/td>
&lt;td>&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;string&#34;&lt;/p>&lt;/td>
&lt;td>&lt;/td>
&lt;/tr>&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.ParamValue">ParamValue
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Param">Param&lt;/a>, &lt;a href="#tekton.dev/v1.ParamSpec">ParamSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ParamValue is a type that can hold a single string, string array, or string map.
Used in JSON unmarshalling so that a single JSON field can accept
either an individual string or an array of strings.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>Type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamType">
ParamType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>StringVal&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Represents the stored type of ParamValues.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ArrayVal&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ObjectVal&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.Params">Params
(&lt;code>[]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1.Param&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.IncludeParams">IncludeParams&lt;/a>, &lt;a href="#tekton.dev/v1.Matrix">Matrix&lt;/a>, &lt;a href="#tekton.dev/v1.PipelineRunSpec">PipelineRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1.PipelineTask">PipelineTask&lt;/a>, &lt;a href="#tekton.dev/v1.ResolverRef">ResolverRef&lt;/a>, &lt;a href="#tekton.dev/v1.Step">Step&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRunInputs">TaskRunInputs&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Params is a list of Param&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.PipelineRef">PipelineRef
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunSpec">PipelineRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRef can be used to refer to a specific instance of a Pipeline.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name of the referent; More info: &lt;a href="http://kubernetes.io/docs/user-guide/identifiers#names">http://kubernetes.io/docs/user-guide/identifiers#names&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>API version of the referent&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ResolverRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResolverRef">
ResolverRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ResolverRef allows referencing a Pipeline in a remote location
like a git repo. This field is only supported when the alpha
feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineResult">PipelineResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineSpec">PipelineSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineResult used to describe the results of a pipeline&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name the given name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResultsType">
ResultsType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Type is the user-specified type of the result.
The possible types are &lsquo;string&rsquo;, &lsquo;array&rsquo;, and &lsquo;object&rsquo;, with &lsquo;string&rsquo; as the default.
&lsquo;array&rsquo; and &lsquo;object&rsquo; types are alpha features.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a human-readable description of the result&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResultValue">
ResultValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Value the expression used to retrieve the value&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineRunReason">PipelineRunReason
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>PipelineRunReason represents a reason for the pipeline run &ldquo;Succeeded&rdquo; condition&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Value&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>&lt;tr>&lt;td>&lt;p>&#34;CELEvaluationFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonCELEvaluationFailed indicates the pipeline fails the CEL evaluation&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Cancelled&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonCancelled is the reason set when the PipelineRun cancelled by the user
This reason may be found with a corev1.ConditionFalse status, if the cancellation was processed successfully
This reason may be found with a corev1.ConditionUnknown status, if the cancellation is being processed or failed&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;CancelledRunningFinally&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonCancelledRunningFinally indicates that pipeline has been gracefully cancelled
and no new Tasks will be scheduled by the controller, but final tasks are now running&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Completed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonCompleted is the reason set when the PipelineRun completed successfully with one or more skipped Tasks&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineRunCouldntCancel&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonCouldntCancel indicates that a PipelineRun was cancelled but attempting to update
all of the running TaskRuns as cancelled failed.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;CouldntGetPipeline&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonCouldntGetPipeline indicates that the reason for the failure status is that the
associated Pipeline couldn&rsquo;t be retrieved&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;CouldntGetPipelineResult&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonCouldntGetPipelineResult indicates that the pipeline fails to retrieve the
referenced result. This could be due to failed TaskRuns or Runs that were supposed to produce
the results&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;CouldntGetTask&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonCouldntGetTask indicates that the reason for the failure status is that the
associated Pipeline&rsquo;s Tasks couldn&rsquo;t all be retrieved&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineRunCouldntTimeOut&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonCouldntTimeOut indicates that a PipelineRun was timed out but attempting to update
all of the running TaskRuns as timed out failed.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;CreateRunFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonCreateRunFailed indicates that the pipeline fails to create the taskrun or other run resources&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Failed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonFailed is the reason set when the PipelineRun completed with a failure&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineValidationFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonFailedValidation indicates that the reason for failure status is
that pipelinerun failed runtime validation&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;InvalidPipelineResourceBindings&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonInvalidBindings indicates that the reason for the failure status is that the
PipelineResources bound in the PipelineRun didn&rsquo;t match those declared in the Pipeline&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineInvalidGraph&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonInvalidGraph indicates that the reason for the failure status is that the
associated Pipeline is an invalid graph (a.k.a wrong order, cycle, …)&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;InvalidMatrixParameterTypes&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonInvalidMatrixParameterTypes indicates a matrix contains invalid parameter types&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;InvalidParamValue&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonInvalidParamValue indicates that the PipelineRun Param input value is not allowed.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;InvalidPipelineResultReference&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonInvalidPipelineResultReference indicates a pipeline result was declared
by the pipeline but not initialized in the pipelineTask&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;InvalidTaskResultReference&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonInvalidTaskResultReference indicates a task result was declared
but was not initialized by that task&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;InvalidTaskRunSpecs&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonInvalidTaskRunSpec indicates that PipelineRun.Spec.TaskRunSpecs[].PipelineTaskName is defined with
a not exist taskName in pipelineSpec.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;InvalidWorkspaceBindings&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonInvalidWorkspaceBinding indicates that a Pipeline expects a workspace but a
PipelineRun has provided an invalid binding.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;ObjectParameterMissKeys&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonObjectParameterMissKeys indicates that the object param value provided from PipelineRun spec
misses some keys required for the object param declared in Pipeline spec.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;ParamArrayIndexingInvalid&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonParamArrayIndexingInvalid indicates that the use of param array indexing is out of bound.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;ParameterMissing&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonParameterMissing indicates that the reason for the failure status is that the
associated PipelineRun didn&rsquo;t provide all the required parameters&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;ParameterTypeMismatch&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonParameterTypeMismatch indicates that the reason for the failure status is that
parameter(s) declared in the PipelineRun do not have the some declared type as the
parameters(s) declared in the Pipeline that they are supposed to override.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineRunPending&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonPending is the reason set when the PipelineRun is in the pending state&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;RequiredWorkspaceMarkedOptional&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonRequiredWorkspaceMarkedOptional indicates an optional workspace
has been passed to a Task that is expecting a non-optional workspace&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;ResolvingPipelineRef&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonResolvingPipelineRef indicates that the PipelineRun is waiting for
its pipelineRef to be asynchronously resolved.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;ResourceVerificationFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ReasonResourceVerificationFailed indicates that the pipeline fails the trusted resource verification,
it could be the content has changed, signature is invalid or public key is invalid&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Running&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonRunning is the reason set when the PipelineRun is running&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Started&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonStarted is the reason set when the PipelineRun has just started&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;StoppedRunningFinally&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonStoppedRunningFinally indicates that pipeline has been gracefully stopped
and no new Tasks will be scheduled by the controller, but final tasks are now running&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineRunStopping&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonStopping indicates that no new Tasks will be scheduled by the controller, and the
pipeline will stop once all running tasks complete their work&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Succeeded&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonSuccessful is the reason set when the PipelineRun completed successfully&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineRunTimeout&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineRunReasonTimedOut is the reason set when the PipelineRun has timed out&lt;/p>
&lt;/td>
&lt;/tr>&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineRunResult">PipelineRunResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunResult used to describe the results of a pipeline&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the result&rsquo;s name as declared by the Pipeline&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResultValue">
ResultValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Value is the result returned from the execution of this PipelineRun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineRunRunStatus">PipelineRunRunStatus
&lt;/h3>
&lt;div>
&lt;p>PipelineRunRunStatus contains the name of the PipelineTask for this Run and the Run&rsquo;s Status&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipelineTaskName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PipelineTaskName is the name of the PipelineTask.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CustomRunStatus">
CustomRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status is the RunStatus for the corresponding Run&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>whenExpressions&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WhenExpression">
[]WhenExpression
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>WhenExpressions is the list of checks guarding the execution of the PipelineTask&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineRunSpec">PipelineRunSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRun">PipelineRun&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunSpec defines the desired state of PipelineRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipelineRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineRef">
PipelineRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineSpec">
PipelineSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specifying PipelineSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Pipeline.spec (API version: tekton.dev/v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params is a list of parameter names and values.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineRunSpecStatus">
PipelineRunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a pipelinerun (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeouts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TimeoutFields">
TimeoutFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which the Pipeline times out.
Currently three keys are accepted in the map
pipeline, tasks and finally
with Timeouts.pipeline &gt;= Timeouts.tasks + Timeouts.finally&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRunTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineTaskRunTemplate">
PipelineTaskRunTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskRunTemplate represent template of taskrun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces holds a set of workspace bindings that must match names
with those declared in the pipeline.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRunSpecs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineTaskRunSpec">
[]PipelineTaskRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskRunSpecs holds a set of runtime specs&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>managedBy&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ManagedBy indicates which controller is responsible for reconciling
this resource. If unset or set to &ldquo;tekton.dev/pipeline&rdquo;, the default
Tekton controller will manage this resource.
This field is immutable.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineRunSpecStatus">PipelineRunSpecStatus
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunSpec">PipelineRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunSpecStatus defines the pipelinerun spec status the user can provide&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.PipelineRunStatus">PipelineRunStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRun">PipelineRun&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunStatus defines the observed state of PipelineRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>Status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/knative.dev/pkg/apis/duck/v1#Status">
knative.dev/pkg/apis/duck/v1.Status
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>Status&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>PipelineRunStatusFields&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineRunStatusFields">
PipelineRunStatusFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>PipelineRunStatusFields&lt;/code> are embedded into this type.)
&lt;/p>
&lt;p>PipelineRunStatusFields inlines the status fields.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineRunStatusFields">PipelineRunStatusFields
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunStatus">PipelineRunStatus&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunStatusFields holds the fields of PipelineRunStatus&rsquo; status.
This is defined separately and inlined so that other types can readily
consume these fields via duck typing.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>startTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>StartTime is the time the PipelineRun is actually started.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>completionTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>CompletionTime is the time the PipelineRun completed.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineRunResult">
[]PipelineRunResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results are the list of results written out by the pipeline task&rsquo;s containers&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineSpec">
PipelineSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PipelineSpec contains the exact spec used to instantiate the run.
See Pipeline.spec (API version: tekton.dev/v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>skippedTasks&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.SkippedTask">
[]SkippedTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>list of tasks that were skipped due to when expressions evaluating to false&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>childReferences&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ChildStatusReference">
[]ChildStatusReference
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>list of TaskRun and Run names, PipelineTask names, and API versions/kinds for children of this PipelineRun.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>finallyStartTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>FinallyStartTime is when all non-finally tasks have been completed and only finally tasks are being executed.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>provenance&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Provenance">
Provenance
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Provenance contains some key authenticated metadata about how a software artifact was built (what sources, what inputs/outputs, etc.).&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spanContext&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>SpanContext contains tracing span context fields&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineRunTaskRunStatus">PipelineRunTaskRunStatus
&lt;/h3>
&lt;div>
&lt;p>PipelineRunTaskRunStatus contains the name of the PipelineTask for this TaskRun and the TaskRun&rsquo;s Status&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipelineTaskName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PipelineTaskName is the name of the PipelineTask.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunStatus">
TaskRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status is the TaskRunStatus for the corresponding TaskRun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>whenExpressions&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WhenExpression">
[]WhenExpression
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>WhenExpressions is the list of checks guarding the execution of the PipelineTask&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineSpec">PipelineSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Pipeline">Pipeline&lt;/a>, &lt;a href="#tekton.dev/v1.PipelineRunSpec">PipelineRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>, &lt;a href="#tekton.dev/v1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineSpec defines the desired state of Pipeline.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is a user-facing name of the pipeline that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the pipeline that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>tasks&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineTask">
[]PipelineTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Tasks declares the graph of Tasks that execute when this Pipeline is run.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params declares a list of input parameters that must be supplied when
this Pipeline is run.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineWorkspaceDeclaration">
[]PipelineWorkspaceDeclaration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces declares a set of named workspaces that are expected to be
provided by a PipelineRun.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineResult">
[]PipelineResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results are values that this pipeline can output once run&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>finally&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineTask">
[]PipelineTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Finally declares the list of Tasks that execute just before leaving the Pipeline
i.e. either after all Tasks are finished executing successfully
or after a failure which would result in ending the Pipeline&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineTask">PipelineTask
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineSpec">PipelineSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTask defines a task in a Pipeline, passing inputs from both
Params and from the output of previous tasks.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of this task within the context of a Pipeline. Name is
used as a coordinate with the &lt;code>from&lt;/code> and &lt;code>runAfter&lt;/code> fields to establish
the execution order of tasks relative to one another.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is the display name of this task within the context of a Pipeline.
This display name may be used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is the description of this task within the context of a Pipeline.
This description may be used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRef">
TaskRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskRef is a reference to a task definition.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.EmbeddedTask">
EmbeddedTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskSpec is a specification of a task
Specifying TaskSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Task.spec (API version: tekton.dev/v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>when&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WhenExpressions">
WhenExpressions
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>When is a list of when expressions that need to be true for the task to run&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retries&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Retries represents how many times this task should be retried in case of task failure: ConditionSucceeded set to False&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>runAfter&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>RunAfter is the list of PipelineTask names that should be executed before
this Task executes. (Used to force a specific ordering in graph execution.)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Parameters declares parameters passed to this task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>matrix&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Matrix">
Matrix
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Matrix declares parameters used to fan out this task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WorkspacePipelineTaskBinding">
[]WorkspacePipelineTaskBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces maps workspaces from the pipeline spec to the workspaces
declared in the Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Duration after which the TaskRun times out. Defaults to 1 hour.
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineRef">
PipelineRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>PipelineRef is a reference to a pipeline definition
Note: PipelineRef is in preview mode and not yet supported&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineSpec">
PipelineSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>PipelineSpec is a specification of a pipeline
Note: PipelineSpec is in preview mode and not yet supported
Specifying PipelineSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Pipeline.spec (API version: tekton.dev/v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>onError&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineTaskOnErrorType">
PipelineTaskOnErrorType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>OnError defines the exiting behavior of a PipelineRun on error
can be set to [ continue | stopAndFail ]&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineTaskMetadata">PipelineTaskMetadata
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.EmbeddedTask">EmbeddedTask&lt;/a>, &lt;a href="#tekton.dev/v1.PipelineTaskRunSpec">PipelineTaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTaskMetadata contains the labels or annotations for an EmbeddedTask&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>labels&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>annotations&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineTaskOnErrorType">PipelineTaskOnErrorType
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTaskOnErrorType defines a list of supported failure handling behaviors of a PipelineTask on error&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Value&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>&lt;tr>&lt;td>&lt;p>&#34;continue&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineTaskContinue indicates to continue executing the rest of the DAG when the PipelineTask fails&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;stopAndFail&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineTaskStopAndFail indicates to stop and fail the PipelineRun if the PipelineTask fails&lt;/p>
&lt;/td>
&lt;/tr>&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineTaskParam">PipelineTaskParam
&lt;/h3>
&lt;div>
&lt;p>PipelineTaskParam is used to provide arbitrary string parameters to a Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineTaskRun">PipelineTaskRun
&lt;/h3>
&lt;div>
&lt;p>PipelineTaskRun reports the results of running a step in the Task. Each
task has the potential to succeed or fail (based on the exit code)
and produces logs.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineTaskRunSpec">PipelineTaskRunSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunSpec">PipelineRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTaskRunSpec  can be used to configure specific
specs for a concrete Task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipelineTaskName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>podTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/unversioned.PodTemplate">
PodTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stepSpecs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunStepSpec">
[]TaskRunStepSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecarSpecs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunSidecarSpec">
[]TaskRunSidecarSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PipelineTaskMetadata">
PipelineTaskMetadata
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>computeResources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Compute resources to use for this TaskRun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Duration after which the TaskRun times out. Overrides the timeout specified
on the Task&rsquo;s spec if specified. Takes lower precedence to PipelineRun&rsquo;s
&lt;code>spec.timeouts.tasks&lt;/code>
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineTaskRunTemplate">PipelineTaskRunTemplate
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunSpec">PipelineRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTaskRunTemplate is used to specify run specifications for all Task in pipelinerun.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>podTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/unversioned.PodTemplate">
PodTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PipelineWorkspaceDeclaration">PipelineWorkspaceDeclaration
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineSpec">PipelineSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineWorkspaceDeclaration creates a named slot in a Pipeline that a PipelineRun
is expected to populate with a workspace binding.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of a workspace to be provided by a PipelineRun.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a human readable string describing how the workspace will be
used in the Pipeline. It can be useful to include a bit of detail about which
tasks are intended to have access to the data on the workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>optional&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Optional marks a Workspace as not being required in PipelineRuns. By default
this field is false and so declared workspaces are required.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.PropertySpec">PropertySpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.ParamSpec">ParamSpec&lt;/a>, &lt;a href="#tekton.dev/v1.StepResult">StepResult&lt;/a>, &lt;a href="#tekton.dev/v1.TaskResult">TaskResult&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PropertySpec defines the struct for object keys&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamType">
ParamType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.Provenance">Provenance
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>, &lt;a href="#tekton.dev/v1.StepState">StepState&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Provenance contains metadata about resources used in the TaskRun/PipelineRun
such as the source from where a remote build definition was fetched.
This field aims to carry minimum amoumt of metadata in *Run status so that
Tekton Chains can capture them in the provenance.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>refSource&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.RefSource">
RefSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>RefSource identifies the source where a remote task/pipeline came from.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>featureFlags&lt;/code>&lt;br/>
&lt;em>
github.com/tektoncd/pipeline/pkg/apis/config.FeatureFlags
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>FeatureFlags identifies the feature flags that were used during the task/pipeline run&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.Ref">Ref
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Step">Step&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Ref can be used to refer to a specific instance of a StepAction.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name of the referenced step&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ResolverRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResolverRef">
ResolverRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ResolverRef allows referencing a StepAction in a remote location
like a git repo.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.RefSource">RefSource
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Provenance">Provenance&lt;/a>, &lt;a href="#resolution.tekton.dev/v1alpha1.ResolutionRequestStatusFields">ResolutionRequestStatusFields&lt;/a>, &lt;a href="#resolution.tekton.dev/v1beta1.ResolutionRequestStatusFields">ResolutionRequestStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>RefSource contains the information that can uniquely identify where a remote
built definition came from i.e. Git repositories, Tekton Bundles in OCI registry
and hub.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>uri&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>URI indicates the identity of the source of the build definition.
Example: &ldquo;&lt;a href="https://github.com/tektoncd/catalog&quot;">https://github.com/tektoncd/catalog&rdquo;&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>digest&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Digest is a collection of cryptographic digests for the contents of the artifact specified by URI.
Example: &#123;&ldquo;sha1&rdquo;: &ldquo;f99d13e554ffcb696dee719fa85b695cb5b0f428&rdquo;&#125;&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>entryPoint&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>EntryPoint identifies the entry point into the build. This is often a path to a
build definition file and/or a target label within that file.
Example: &ldquo;task/git-clone/0.10/git-clone.yaml&rdquo;&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.ResolverName">ResolverName
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.ResolverRef">ResolverRef&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResolverName is the name of a resolver from which a resource can be
requested.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.ResolverRef">ResolverRef
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRef">PipelineRef&lt;/a>, &lt;a href="#tekton.dev/v1.Ref">Ref&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRef">TaskRef&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResolverRef can be used to refer to a Pipeline or Task in a remote
location like a git repo. This feature is in beta and these fields
are only available when the beta feature gate is enabled.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>resolver&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResolverName">
ResolverName
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Resolver is the name of the resolver that should perform
resolution of the referenced Tekton resource, such as &ldquo;git&rdquo;.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params contains the parameters used to identify the
referenced Tekton resource. Example entries might include
&ldquo;repo&rdquo; or &ldquo;path&rdquo; but the set of params ultimately depends on
the chosen resolver.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.ResultRef">ResultRef
&lt;/h3>
&lt;div>
&lt;p>ResultRef is a type that represents a reference to a task run result&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipelineTask&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>result&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resultsIndex&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>property&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.ResultValue">ResultValue
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineResult">PipelineResult&lt;/a>, &lt;a href="#tekton.dev/v1.PipelineRunResult">PipelineRunResult&lt;/a>, &lt;a href="#tekton.dev/v1.TaskResult">TaskResult&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRunResult">TaskRunResult&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResultValue is a type alias of ParamValue&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.ResultsType">ResultsType
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineResult">PipelineResult&lt;/a>, &lt;a href="#tekton.dev/v1.StepResult">StepResult&lt;/a>, &lt;a href="#tekton.dev/v1.TaskResult">TaskResult&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRunResult">TaskRunResult&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResultsType indicates the type of a result;
Used to distinguish between a single string and an array of strings.
Note that there is ResultType used to find out whether a
RunResult is from a task result or not, which is different from
this ResultsType.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Value&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>&lt;tr>&lt;td>&lt;p>&#34;array&#34;&lt;/p>&lt;/td>
&lt;td>&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;object&#34;&lt;/p>&lt;/td>
&lt;td>&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;string&#34;&lt;/p>&lt;/td>
&lt;td>&lt;/td>
&lt;/tr>&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.RetriesStatus">RetriesStatus
(&lt;code>[]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1.TaskRunStatus&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;/div>
&lt;h3 id="tekton.dev/v1.Sidecar">Sidecar
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Sidecar has nearly the same data structure as Step but does not have the ability to timeout.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name of the Sidecar specified as a DNS_LABEL.
Each Sidecar in a Task must have a unique name (DNS_LABEL).
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>image&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image reference name.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images">https://kubernetes.io/docs/concepts/containers/images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>command&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Entrypoint array. Not executed within a shell.
The image&rsquo;s ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the Sidecar&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>args&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Arguments to the entrypoint.
The image&rsquo;s CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the Sidecar&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workingDir&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Sidecar&rsquo;s working directory.
If not specified, the container runtime&rsquo;s default will be used, which
might be configured in the container image.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ports&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#containerport-v1-core">
[]Kubernetes core/v1.ContainerPort
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of ports to expose from the Sidecar. Exposing a port here gives
the system additional information about the network connections a
container uses, but is primarily informational. Not specifying a port here
DOES NOT prevent that port from being exposed. Any port which is
listening on the default &ldquo;0.0.0.0&rdquo; address inside a container will be
accessible from the network.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>envFrom&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envfromsource-v1-core">
[]Kubernetes core/v1.EnvFromSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of sources to populate environment variables in the Sidecar.
The keys defined within a source must be a C_IDENTIFIER. All invalid keys
will be reported as an event when the container is starting. When a key exists in multiple
sources, the value associated with the last source will take precedence.
Values defined by an Env with a duplicate key will take precedence.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>env&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envvar-v1-core">
[]Kubernetes core/v1.EnvVar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of environment variables to set in the Sidecar.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>computeResources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ComputeResources required by this Sidecar.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeMounts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumemount-v1-core">
[]Kubernetes core/v1.VolumeMount
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Volumes to mount into the Sidecar&rsquo;s filesystem.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeDevices&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumedevice-v1-core">
[]Kubernetes core/v1.VolumeDevice
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>volumeDevices is the list of block devices to be used by the Sidecar.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>livenessProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Periodic probe of Sidecar liveness.
Container will be restarted if the probe fails.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>readinessProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Periodic probe of Sidecar service readiness.
Container will be removed from service endpoints if the probe fails.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>startupProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>StartupProbe indicates that the Pod the Sidecar is running in has successfully initialized.
If specified, no other probes are executed until this completes successfully.
If this probe fails, the Pod will be restarted, just as if the livenessProbe failed.
This can be used to provide different probe parameters at the beginning of a Pod&rsquo;s lifecycle,
when it might take a long time to load data or warm a cache, than during steady-state operation.
This cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>lifecycle&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#lifecycle-v1-core">
Kubernetes core/v1.Lifecycle
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Actions that the management system should take in response to Sidecar lifecycle events.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>terminationMessagePath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Optional: Path at which the file to which the Sidecar&rsquo;s termination message
will be written is mounted into the Sidecar&rsquo;s filesystem.
Message written is intended to be brief final status, such as an assertion failure message.
Will be truncated by the node if greater than 4096 bytes. The total message length across
all containers will be limited to 12kb.
Defaults to /dev/termination-log.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>terminationMessagePolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#terminationmessagepolicy-v1-core">
Kubernetes core/v1.TerminationMessagePolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Indicate how the termination message should be populated. File will use the contents of
terminationMessagePath to populate the Sidecar status message on both success and failure.
FallbackToLogsOnError will use the last chunk of Sidecar log output if the termination
message file is empty and the Sidecar exited with an error.
The log output is limited to 2048 bytes or 80 lines, whichever is smaller.
Defaults to File.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>imagePullPolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#pullpolicy-v1-core">
Kubernetes core/v1.PullPolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image pull policy.
One of Always, Never, IfNotPresent.
Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images#updating-images">https://kubernetes.io/docs/concepts/containers/images#updating-images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>securityContext&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#securitycontext-v1-core">
Kubernetes core/v1.SecurityContext
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SecurityContext defines the security options the Sidecar should be run with.
If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
More info: &lt;a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">https://kubernetes.io/docs/tasks/configure-pod-container/security-context/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stdin&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether this Sidecar should allocate a buffer for stdin in the container runtime. If this
is not set, reads from stdin in the Sidecar will always result in EOF.
Default is false.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stdinOnce&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether the container runtime should close the stdin channel after it has been opened by
a single attach. When stdin is true the stdin stream will remain open across multiple attach
sessions. If stdinOnce is set to true, stdin is opened on Sidecar start, is empty until the
first client attaches to stdin, and then remains open and accepts data until the client disconnects,
at which time stdin is closed and remains closed until the Sidecar is restarted. If this
flag is false, a container processes that reads from stdin will never receive an EOF.
Default is false&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>tty&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether this Sidecar should allocate a TTY for itself, also requires &lsquo;stdin&rsquo; to be true.
Default is false.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>script&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Script is the contents of an executable file to execute.&lt;/p>
&lt;p>If Script is not empty, the Step cannot have an Command or Args.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WorkspaceUsage">
[]WorkspaceUsage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>This is an alpha field. You must set the &ldquo;enable-api-fields&rdquo; feature flag to &ldquo;alpha&rdquo;
for this field to be supported.&lt;/p>
&lt;p>Workspaces is a list of workspaces from the Task that this Sidecar wants
exclusive access to. Adding a workspace to this list means that any
other Step or Sidecar that does not also request this Workspace will
not have access to it.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>restartPolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#containerrestartpolicy-v1-core">
Kubernetes core/v1.ContainerRestartPolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>RestartPolicy refers to kubernetes RestartPolicy. It can only be set for an
initContainer and must have it&rsquo;s policy set to &ldquo;Always&rdquo;. It is currently
left optional to help support Kubernetes versions prior to 1.29 when this feature
was introduced.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.SidecarState">SidecarState
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>SidecarState reports the results of running a sidecar in a Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>ContainerState&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#containerstate-v1-core">
Kubernetes core/v1.ContainerState
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>ContainerState&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>container&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>imageID&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.SkippedTask">SkippedTask
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>SkippedTask is used to describe the Tasks that were skipped due to their When Expressions
evaluating to False. This is a struct because we are looking into including more details
about the When Expressions that caused this Task to be skipped.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the Pipeline Task name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>reason&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.SkippingReason">
SkippingReason
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Reason is the cause of the PipelineTask being skipped.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>whenExpressions&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WhenExpression">
[]WhenExpression
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>WhenExpressions is the list of checks guarding the execution of the PipelineTask&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.SkippingReason">SkippingReason
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.SkippedTask">SkippedTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>SkippingReason explains why a PipelineTask was skipped.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Value&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>&lt;tr>&lt;td>&lt;p>&#34;Matrix Parameters have an empty array&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>EmptyArrayInMatrixParams means the task was skipped because Matrix parameters contain empty array.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineRun Finally timeout has been reached&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>FinallyTimedOutSkip means the task was skipped because the PipelineRun has passed its Timeouts.Finally.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineRun was gracefully cancelled&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>GracefullyCancelledSkip means the task was skipped because the pipeline run has been gracefully cancelled&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineRun was gracefully stopped&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>GracefullyStoppedSkip means the task was skipped because the pipeline run has been gracefully stopped&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Results were missing&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>MissingResultsSkip means the task was skipped because it&rsquo;s missing necessary results&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;None&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>None means the task was not skipped&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Parent Tasks were skipped&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>ParentTasksSkip means the task was skipped because its parent was skipped&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineRun timeout has been reached&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>PipelineTimedOutSkip means the task was skipped because the PipelineRun has passed its overall timeout.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineRun was stopping&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>StoppingSkip means the task was skipped because the pipeline run is stopping&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PipelineRun Tasks timeout has been reached&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TasksTimedOutSkip means the task was skipped because the PipelineRun has passed its Timeouts.Tasks.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;When Expressions evaluated to false&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>WhenExpressionsSkip means the task was skipped due to at least one of its when expressions evaluating to false&lt;/p>
&lt;/td>
&lt;/tr>&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.Step">Step
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Step runs a subcomponent of a Task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name of the Step specified as a DNS_LABEL.
Each Step in a Task must have a unique name.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is a user-facing name of the step that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>image&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Docker image name.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images">https://kubernetes.io/docs/concepts/containers/images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>command&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Entrypoint array. Not executed within a shell.
The image&rsquo;s ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>args&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Arguments to the entrypoint.
The image&rsquo;s CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workingDir&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Step&rsquo;s working directory.
If not specified, the container runtime&rsquo;s default will be used, which
might be configured in the container image.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>envFrom&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envfromsource-v1-core">
[]Kubernetes core/v1.EnvFromSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of sources to populate environment variables in the Step.
The keys defined within a source must be a C_IDENTIFIER. All invalid keys
will be reported as an event when the Step is starting. When a key exists in multiple
sources, the value associated with the last source will take precedence.
Values defined by an Env with a duplicate key will take precedence.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>env&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envvar-v1-core">
[]Kubernetes core/v1.EnvVar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of environment variables to set in the Step.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>computeResources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ComputeResources required by this Step.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeMounts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumemount-v1-core">
[]Kubernetes core/v1.VolumeMount
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Volumes to mount into the Step&rsquo;s filesystem.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeDevices&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumedevice-v1-core">
[]Kubernetes core/v1.VolumeDevice
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>volumeDevices is the list of block devices to be used by the Step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>imagePullPolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#pullpolicy-v1-core">
Kubernetes core/v1.PullPolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image pull policy.
One of Always, Never, IfNotPresent.
Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images#updating-images">https://kubernetes.io/docs/concepts/containers/images#updating-images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>securityContext&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#securitycontext-v1-core">
Kubernetes core/v1.SecurityContext
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SecurityContext defines the security options the Step should be run with.
If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
More info: &lt;a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">https://kubernetes.io/docs/tasks/configure-pod-container/security-context/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>script&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Script is the contents of an executable file to execute.&lt;/p>
&lt;p>If Script is not empty, the Step cannot have an Command and the Args will be passed to the Script.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Timeout is the time after which the step times out. Defaults to never.
Refer to Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WorkspaceUsage">
[]WorkspaceUsage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>This is an alpha field. You must set the &ldquo;enable-api-fields&rdquo; feature flag to &ldquo;alpha&rdquo;
for this field to be supported.&lt;/p>
&lt;p>Workspaces is a list of workspaces from the Task that this Step wants
exclusive access to. Adding a workspace to this list means that any
other Step or Sidecar that does not also request this Workspace will
not have access to it.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>onError&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.OnErrorType">
OnErrorType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>OnError defines the exiting behavior of a container on error
can be set to [ continue | stopAndFail ]&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stdoutConfig&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepOutputConfig">
StepOutputConfig
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Stores configuration for the stdout stream of the step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stderrConfig&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepOutputConfig">
StepOutputConfig
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Stores configuration for the stderr stream of the step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ref&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Ref">
Ref
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Contains the reference to an existing StepAction.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params declares parameters passed to this step action.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepResult">
[]StepResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results declares StepResults produced by the Step.&lt;/p>
&lt;p>It can be used in an inlined Step when used to store Results to $(step.results.resultName.path).
It cannot be used when referencing StepActions using [v1.Step.Ref].
The Results declared by the StepActions will be stored here instead.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>when&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepWhenExpressions">
StepWhenExpressions
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>When is a list of when expressions that need to be true for the task to run&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.StepOutputConfig">StepOutputConfig
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Step">Step&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>StepOutputConfig stores configuration for a step output stream.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>path&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Path to duplicate stdout stream to on container&rsquo;s local filesystem.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.StepResult">StepResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Step">Step&lt;/a>, &lt;a href="#tekton.dev/v1alpha1.StepActionSpec">StepActionSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.Step">Step&lt;/a>, &lt;a href="#tekton.dev/v1beta1.StepActionSpec">StepActionSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>StepResult used to describe the Results of a Step.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name the given name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResultsType">
ResultsType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>The possible types are &lsquo;string&rsquo;, &lsquo;array&rsquo;, and &lsquo;object&rsquo;, with &lsquo;string&rsquo; as the default.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>properties&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PropertySpec">
map[string]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1.PropertySpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Properties is the JSON Schema properties to support key-value pairs results.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a human-readable description of the result&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.StepState">StepState
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>StepState reports the results of running a step in a Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>ContainerState&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#containerstate-v1-core">
Kubernetes core/v1.ContainerState
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>ContainerState&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>container&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>imageID&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunStepResult">
[]TaskRunStepResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>provenance&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Provenance">
Provenance
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>terminationReason&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>inputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunStepArtifact">
[]TaskRunStepArtifact
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>outputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunStepArtifact">
[]TaskRunStepArtifact
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.StepTemplate">StepTemplate
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>StepTemplate is a template for a Step&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>image&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image reference name.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images">https://kubernetes.io/docs/concepts/containers/images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>command&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Entrypoint array. Not executed within a shell.
The image&rsquo;s ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the Step&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>args&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Arguments to the entrypoint.
The image&rsquo;s CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the Step&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workingDir&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Step&rsquo;s working directory.
If not specified, the container runtime&rsquo;s default will be used, which
might be configured in the container image.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>envFrom&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envfromsource-v1-core">
[]Kubernetes core/v1.EnvFromSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of sources to populate environment variables in the Step.
The keys defined within a source must be a C_IDENTIFIER. All invalid keys
will be reported as an event when the Step is starting. When a key exists in multiple
sources, the value associated with the last source will take precedence.
Values defined by an Env with a duplicate key will take precedence.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>env&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envvar-v1-core">
[]Kubernetes core/v1.EnvVar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of environment variables to set in the Step.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>computeResources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ComputeResources required by this Step.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeMounts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumemount-v1-core">
[]Kubernetes core/v1.VolumeMount
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Volumes to mount into the Step&rsquo;s filesystem.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeDevices&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumedevice-v1-core">
[]Kubernetes core/v1.VolumeDevice
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>volumeDevices is the list of block devices to be used by the Step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>imagePullPolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#pullpolicy-v1-core">
Kubernetes core/v1.PullPolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image pull policy.
One of Always, Never, IfNotPresent.
Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images#updating-images">https://kubernetes.io/docs/concepts/containers/images#updating-images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>securityContext&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#securitycontext-v1-core">
Kubernetes core/v1.SecurityContext
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SecurityContext defines the security options the Step should be run with.
If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
More info: &lt;a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">https://kubernetes.io/docs/tasks/configure-pod-container/security-context/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.StepWhenExpressions">StepWhenExpressions
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Step">Step&lt;/a>)
&lt;/p>
&lt;div>
&lt;/div>
&lt;h3 id="tekton.dev/v1.TaskBreakpoints">TaskBreakpoints
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRunDebug">TaskRunDebug&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskBreakpoints defines the breakpoint config for a particular Task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>onFailure&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>if enabled, pause TaskRun on failure of a step
failed step will not exit&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>beforeSteps&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskKind">TaskKind
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRef">TaskRef&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskKind defines the type of Task used by the pipeline.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Value&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>&lt;tr>&lt;td>&lt;p>&#34;Task&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>NamespacedTaskKind indicates that the task type has a namespaced scope.&lt;/p>
&lt;/td>
&lt;/tr>&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRef">TaskRef
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineTask">PipelineTask&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRef can be used to refer to a specific instance of a task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name of the referent; More info: &lt;a href="http://kubernetes.io/docs/user-guide/identifiers#names">http://kubernetes.io/docs/user-guide/identifiers#names&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskKind">
TaskKind
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>TaskKind indicates the Kind of the Task:
1. Namespaced Task when Kind is set to &ldquo;Task&rdquo;. If Kind is &ldquo;&rdquo;, it defaults to &ldquo;Task&rdquo;.
2. Custom Task when Kind is non-empty and APIVersion is non-empty&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>API version of the referent
Note: A Task with non-empty APIVersion and Kind is considered a Custom Task&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ResolverRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResolverRef">
ResolverRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ResolverRef allows referencing a Task in a remote location
like a git repo. This field is only supported when the alpha
feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskResult">TaskResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskResult used to describe the results of a task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name the given name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResultsType">
ResultsType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Type is the user-specified type of the result. The possible type
is currently &ldquo;string&rdquo; and will support &ldquo;array&rdquo; in following work.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>properties&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.PropertySpec">
map[string]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1.PropertySpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Properties is the JSON Schema properties to support key-value pairs results.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a human-readable description of the result&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResultValue">
ResultValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Value the expression used to retrieve the value of the result from an underlying Step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRunDebug">TaskRunDebug
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunDebug defines the breakpoint config for a particular TaskRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>breakpoints&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskBreakpoints">
TaskBreakpoints
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRunInputs">TaskRunInputs
&lt;/h3>
&lt;div>
&lt;p>TaskRunInputs holds the input values that this task was invoked with.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRunReason">TaskRunReason
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>TaskRunReason is an enum used to store all TaskRun reason for
the Succeeded condition that are controlled by the TaskRun itself. Failure
reasons that emerge from underlying resources are not included here&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Value&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>&lt;tr>&lt;td>&lt;p>&#34;TaskRunCancelled&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonCancelled is the reason set when the TaskRun is cancelled by the user&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;CreateContainerConfigError&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonCreateContainerConfigError is the reason set when the step of a task fails due to config error (e.g., missing ConfigMap or Secret)&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Failed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonFailed is the reason set when the TaskRun completed with a failure&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;TaskRunResolutionFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonFailedResolution indicated that the reason for failure status is
that references within the TaskRun could not be resolved&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;TaskRunValidationFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonFailedValidation indicated that the reason for failure status is
that taskrun failed runtime validation&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;FailureIgnored&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonFailureIgnored is the reason set when the Taskrun has failed due to pod execution error and the failure is ignored for the owning PipelineRun.
TaskRuns failed due to reconciler/validation error should not use this reason.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;TaskRunImagePullFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonImagePullFailed is the reason set when the step of a task fails due to image not being pulled&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;InitContainerFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonInitContainerFailed indicates an internal Tekton init
container (prepare, place-scripts, working-dir-initializer) failed
(non-OOM), e.g., due to node memory pressure or runtime errors.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;InitContainerOOM&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonInitContainerOOM indicates an internal Tekton init
container (prepare, place-scripts, working-dir-initializer) was
killed due to running out of memory (OOMKilled).&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;InvalidParamValue&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonInvalidParamValue indicates that the TaskRun Param input value is not allowed.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;TaskRunPending&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonPending is the reason set when the TaskRun is in the pending state&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PodCreationFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonPodCreationFailed is the reason set when the pod backing the TaskRun fails to be created (e.g., CreateContainerError)&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;PodEvicted&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonPodEvicted indicates that the TaskRun&rsquo;s pod was evicted
(e.g., due to exceeding ephemeral storage limits or node pressure).&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;ResourceVerificationFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonResourceVerificationFailed indicates that the task fails the trusted resource verification,
it could be the content has changed, signature is invalid or public key is invalid&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;TaskRunResultLargerThanAllowedLimit&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonResultLargerThanAllowedLimit is the reason set when one of the results exceeds its maximum allowed limit of 1 KB&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Running&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonRunning is the reason set when the TaskRun is running&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;SidecarFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonSidecarFailed indicates a sidecar container failed
(non-OOM), e.g., bad image or crash.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;SidecarOOM&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonSidecarOOM indicates a sidecar container was killed due
to running out of memory (OOMKilled).&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Started&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonStarted is the reason set when the TaskRun has just started&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;StepFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonStepFailed indicates a step container failed (non-OOM),
e.g., bad image, crash, or non-zero exit code.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;StepOOM&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonStepOOM indicates a step container was killed due to
running out of memory (OOMKilled).&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;TaskRunStopSidecarFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonStopSidecarFailed indicates that the sidecar is not properly stopped.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;Succeeded&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonSuccessful is the reason set when the TaskRun completed successfully&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;TaskValidationFailed&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonTaskFailedValidation indicated that the reason for failure status is
that task failed runtime validation&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;TaskRunTimeout&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonTimedOut is the reason set when one TaskRun execution has timed out&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;ToBeRetried&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunReasonToBeRetried is the reason set when the last TaskRun execution failed, and will be retried&lt;/p>
&lt;/td>
&lt;/tr>&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRunResult">TaskRunResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunResult used to describe the results of a task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name the given name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResultsType">
ResultsType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Type is the user-specified type of the result. The possible type
is currently &ldquo;string&rdquo; and will support &ldquo;array&rdquo; in following work.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ResultValue">
ResultValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Value the given value of the result&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRunSidecarSpec">TaskRunSidecarSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineTaskRunSpec">PipelineTaskRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunSidecarSpec is used to override the values of a Sidecar in the corresponding Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The name of the Sidecar to override.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>computeResources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The resource requirements to apply to the Sidecar.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRunSpec">TaskRunSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRun">TaskRun&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunSpec defines the desired state of TaskRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>debug&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunDebug">
TaskRunDebug
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRef">
TaskRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>no more than one of the TaskRef and TaskSpec may be specified.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskSpec">
TaskSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specifying TaskSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Task.spec (API version: tekton.dev/v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunSpecStatus">
TaskRunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a TaskRun (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>statusMessage&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunSpecStatusMessage">
TaskRunSpecStatusMessage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status message for cancellation.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retries&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Retries represents how many times this TaskRun should be retried in the event of task failure.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which one retry attempt times out. Defaults to 1 hour.
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>podTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/unversioned.PodTemplate">
PodTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PodTemplate holds pod specific configuration&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces is a list of WorkspaceBindings from volumes to workspaces.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stepSpecs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunStepSpec">
[]TaskRunStepSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specs to apply to Steps in this TaskRun.
If a field is specified in both a Step and a StepSpec,
the value from the StepSpec will be used.
This field is only supported when the alpha feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecarSpecs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunSidecarSpec">
[]TaskRunSidecarSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specs to apply to Sidecars in this TaskRun.
If a field is specified in both a Sidecar and a SidecarSpec,
the value from the SidecarSpec will be used.
This field is only supported when the alpha feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>computeResources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Compute resources to use for this TaskRun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>managedBy&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ManagedBy indicates which controller is responsible for reconciling
this resource. If unset or set to &ldquo;tekton.dev/pipeline&rdquo;, the default
Tekton controller will manage this resource.
This field is immutable.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRunSpecStatus">TaskRunSpecStatus
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunSpecStatus defines the TaskRun spec status the user can provide&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.TaskRunSpecStatusMessage">TaskRunSpecStatusMessage
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunSpecStatusMessage defines human readable status messages for the TaskRun.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Value&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>&lt;tr>&lt;td>&lt;p>&#34;TaskRun cancelled as the PipelineRun it belongs to has been cancelled.&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunCancelledByPipelineMsg indicates that the PipelineRun of which this
TaskRun was a part of has been cancelled.&lt;/p>
&lt;/td>
&lt;/tr>&lt;tr>&lt;td>&lt;p>&#34;TaskRun cancelled as the PipelineRun it belongs to has timed out.&#34;&lt;/p>&lt;/td>
&lt;td>&lt;p>TaskRunCancelledByPipelineTimeoutMsg indicates that the TaskRun was cancelled because the PipelineRun running it timed out.&lt;/p>
&lt;/td>
&lt;/tr>&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRunStatus">TaskRunStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRun">TaskRun&lt;/a>, &lt;a href="#tekton.dev/v1.PipelineRunTaskRunStatus">PipelineRunTaskRunStatus&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunStatus defines the observed state of TaskRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>Status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/knative.dev/pkg/apis/duck/v1#Status">
knative.dev/pkg/apis/duck/v1.Status
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>Status&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>TaskRunStatusFields&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunStatusFields">
TaskRunStatusFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>TaskRunStatusFields&lt;/code> are embedded into this type.)
&lt;/p>
&lt;p>TaskRunStatusFields inlines the status fields.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRunStatusFields">TaskRunStatusFields
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskRunStatus">TaskRunStatus&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunStatusFields holds the fields of TaskRun&rsquo;s status.  This is defined
separately and inlined so that other types can readily consume these fields
via duck typing.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>podName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PodName is the name of the pod responsible for executing this task&rsquo;s steps.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>startTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>StartTime is the time the build is actually started.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>completionTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>CompletionTime is the time the build completed.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>steps&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepState">
[]StepState
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Steps describes the state of each build step container.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retriesStatus&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.RetriesStatus">
RetriesStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>RetriesStatus contains the history of TaskRunStatus in case of a retry in order to keep record of failures.
All TaskRunStatus stored in RetriesStatus will have no date within the RetriesStatus as is redundant.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskRunResult">
[]TaskRunResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results are the list of results written out by the task&rsquo;s containers&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>artifacts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Artifacts">
Artifacts
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Artifacts are the list of artifacts written out by the task&rsquo;s containers&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecars&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.SidecarState">
[]SidecarState
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The list has one entry per sidecar in the manifest. Each entry is
represents the imageid of the corresponding sidecar.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskSpec">
TaskSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>TaskSpec contains the Spec from the dereferenced Task definition used to instantiate this TaskRun.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>provenance&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Provenance">
Provenance
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Provenance contains some key authenticated metadata about how a software artifact was built (what sources, what inputs/outputs, etc.).&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spanContext&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>SpanContext contains tracing span context fields&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskRunStepArtifact">TaskRunStepArtifact
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.StepState">StepState&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunStepArtifact represents an artifact produced or used by a step within a task run.
It directly uses the Artifact type for its structure.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.TaskRunStepResult">TaskRunStepResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.StepState">StepState&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunStepResult is a type alias of TaskRunResult&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.TaskRunStepSpec">TaskRunStepSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineTaskRunSpec">PipelineTaskRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunStepSpec is used to override the values of a Step in the corresponding Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The name of the Step to override.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>computeResources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The resource requirements to apply to the Step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TaskSpec">TaskSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Task">Task&lt;/a>, &lt;a href="#tekton.dev/v1.EmbeddedTask">EmbeddedTask&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRunSpec">TaskRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskSpec defines the desired state of Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params is a list of input parameters required to run the task. Params
must be supplied as inputs in TaskRuns unless they declare a default
value.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is a user-facing name of the task that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the task that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>steps&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Step">
[]Step
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Steps are the steps of the build; each step is run sequentially with the
source mounted into /workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumes&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Volumes">
Volumes
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Volumes is a collection of volumes that are available to mount into the
steps of the build.
See Pod.spec.volumes (API version: v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stepTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepTemplate">
StepTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>StepTemplate can be used as the basis for all step containers within the
Task, so that the steps inherit settings on the base container.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecars&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.Sidecar">
[]Sidecar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Sidecars are run alongside the Task&rsquo;s step containers. They begin before
the steps start and end after the steps complete.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.WorkspaceDeclaration">
[]WorkspaceDeclaration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Workspaces are the volumes that this Task requires.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.TaskResult">
[]TaskResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Results are values that this Task can output&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.TimeoutFields">TimeoutFields
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunSpec">PipelineRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TimeoutFields allows granular specification of pipeline, task, and finally timeouts&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipeline&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Pipeline sets the maximum allowed duration for execution of the entire pipeline. The sum of individual timeouts for tasks and finally must not exceed this value.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>tasks&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Tasks sets the maximum allowed duration of this pipeline&rsquo;s tasks&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>finally&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Finally sets the maximum allowed duration of this pipeline&rsquo;s finally&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.Volumes">Volumes
(&lt;code>[]k8s.io/api/core/v1.Volume&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;/div>
&lt;h3 id="tekton.dev/v1.WhenExpression">WhenExpression
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.ChildStatusReference">ChildStatusReference&lt;/a>, &lt;a href="#tekton.dev/v1.PipelineRunRunStatus">PipelineRunRunStatus&lt;/a>, &lt;a href="#tekton.dev/v1.PipelineRunTaskRunStatus">PipelineRunTaskRunStatus&lt;/a>, &lt;a href="#tekton.dev/v1.SkippedTask">SkippedTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WhenExpression allows a PipelineTask to declare expressions to be evaluated before the Task is run
to determine whether the Task should be executed or skipped&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>input&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Input is the string for guard checking which can be a static input or an output from a parent Task&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>operator&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/selection#Operator">
k8s.io/apimachinery/pkg/selection.Operator
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Operator that represents an Input&rsquo;s relationship to the values&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>values&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Values is an array of strings, which is compared against the input, for guard checking
It must be non-empty&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>cel&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>CEL is a string of Common Language Expression, which can be used to conditionally execute
the task based on the result of the expression evaluation
More info about CEL syntax: &lt;a href="https://github.com/google/cel-spec/blob/master/doc/langdef.md">https://github.com/google/cel-spec/blob/master/doc/langdef.md&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.WhenExpressions">WhenExpressions
(&lt;code>[]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1.WhenExpression&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WhenExpressions are used to specify whether a Task should be executed or skipped
All of them need to evaluate to True for a guarded Task to be executed.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.WorkspaceBinding">WorkspaceBinding
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunSpec">PipelineRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WorkspaceBinding maps a Task&rsquo;s declared workspace to a Volume.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of the workspace populated by the volume.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>subPath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SubPath is optionally a directory on the volume which should be used
for this binding (i.e. the volume will be mounted at this sub directory).&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeClaimTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#persistentvolumeclaim-v1-core">
Kubernetes core/v1.PersistentVolumeClaim
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>VolumeClaimTemplate is a template for a claim that will be created in the same namespace.
The PipelineRun controller is responsible for creating a unique claim for each instance of PipelineRun.
See PersistentVolumeClaim (API version: v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>persistentVolumeClaim&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#persistentvolumeclaimvolumesource-v1-core">
Kubernetes core/v1.PersistentVolumeClaimVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>PersistentVolumeClaimVolumeSource represents a reference to a
PersistentVolumeClaim in the same namespace. Either this OR EmptyDir can be used.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>emptyDir&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#emptydirvolumesource-v1-core">
Kubernetes core/v1.EmptyDirVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>EmptyDir represents a temporary directory that shares a Task&rsquo;s lifetime.
More info: &lt;a href="https://kubernetes.io/docs/concepts/storage/volumes#emptydir">https://kubernetes.io/docs/concepts/storage/volumes#emptydir&lt;/a>
Either this OR PersistentVolumeClaim can be used.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>configMap&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#configmapvolumesource-v1-core">
Kubernetes core/v1.ConfigMapVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ConfigMap represents a configMap that should populate this workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>secret&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#secretvolumesource-v1-core">
Kubernetes core/v1.SecretVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Secret represents a secret that should populate this workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>projected&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#projectedvolumesource-v1-core">
Kubernetes core/v1.ProjectedVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Projected represents a projected volume that should populate this workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>csi&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#csivolumesource-v1-core">
Kubernetes core/v1.CSIVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>CSI (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.WorkspaceDeclaration">WorkspaceDeclaration
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WorkspaceDeclaration is a declaration of a volume that a Task requires.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name by which you can bind the volume at runtime.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is an optional human readable description of this volume.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>mountPath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>MountPath overrides the directory that the volume will be made available at.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>readOnly&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>ReadOnly dictates whether a mounted volume is writable. By default this
field is false and so mounted volumes are writable.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>optional&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Optional marks a Workspace as not being required in TaskRuns. By default
this field is false and so declared workspaces are required.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.WorkspacePipelineDeclaration">WorkspacePipelineDeclaration
&lt;/h3>
&lt;div>
&lt;p>WorkspacePipelineDeclaration creates a named slot in a Pipeline that a PipelineRun
is expected to populate with a workspace binding.&lt;/p>
&lt;p>Deprecated: use PipelineWorkspaceDeclaration type instead&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1.WorkspacePipelineTaskBinding">WorkspacePipelineTaskBinding
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WorkspacePipelineTaskBinding describes how a workspace passed into the pipeline should be
mapped to a task&rsquo;s declared workspace.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of the workspace as declared by the task&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspace&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspace is the name of the workspace declared by the pipeline&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>subPath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SubPath is optionally a directory on the volume which should be used
for this binding (i.e. the volume will be mounted at this sub directory).&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1.WorkspaceUsage">WorkspaceUsage
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.Sidecar">Sidecar&lt;/a>, &lt;a href="#tekton.dev/v1.Step">Step&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WorkspaceUsage is used by a Step or Sidecar to declare that it wants isolated access
to a Workspace defined in a Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of the workspace this Step or Sidecar wants access to.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>mountPath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>MountPath is the path that the workspace should be mounted to inside the Step or Sidecar,
overriding any MountPath specified in the Task&rsquo;s WorkspaceDeclaration.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;hr/>
&lt;h2 id="tekton.dev/v1alpha1">tekton.dev/v1alpha1&lt;/h2>
&lt;div>
&lt;p>Package v1alpha1 contains API Schema definitions for the pipeline v1alpha1 API group&lt;/p>
&lt;/div>
Resource Types:
&lt;ul>&lt;li>
&lt;a href="#tekton.dev/v1alpha1.Run">Run&lt;/a>
&lt;/li>&lt;li>
&lt;a href="#tekton.dev/v1alpha1.StepAction">StepAction&lt;/a>
&lt;/li>&lt;li>
&lt;a href="#tekton.dev/v1alpha1.VerificationPolicy">VerificationPolicy&lt;/a>
&lt;/li>&lt;li>
&lt;a href="#tekton.dev/v1alpha1.PipelineResource">PipelineResource&lt;/a>
&lt;/li>&lt;/ul>
&lt;h3 id="tekton.dev/v1alpha1.Run">Run
&lt;/h3>
&lt;div>
&lt;p>Run represents a single execution of a Custom Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1alpha1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>Run&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.RunSpec">
RunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>ref&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRef">
TaskRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.EmbeddedRunSpec">
EmbeddedRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec is a specification of a custom task&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.RunSpecStatus">
RunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a run (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>statusMessage&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.RunSpecStatusMessage">
RunSpecStatusMessage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status message for cancellation.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retries&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for propagating retries count to custom tasks&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>podTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/unversioned.PodTemplate">
PodTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>PodTemplate holds pod specific configuration&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which the custom-task times out.
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces is a list of WorkspaceBindings from volumes to workspaces.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.RunStatus">
RunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.StepAction">StepAction
&lt;/h3>
&lt;div>
&lt;p>StepAction represents the actionable components of Step.
The Step can only reference it from the cluster or using remote resolution.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1alpha1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>StepAction&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.StepActionSpec">
StepActionSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec holds the desired state of the Step from the client&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the stepaction that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>image&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image reference name to run for this StepAction.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images">https://kubernetes.io/docs/concepts/containers/images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>command&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Entrypoint array. Not executed within a shell.
The image&rsquo;s ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>args&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Arguments to the entrypoint.
The image&rsquo;s CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>env&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envvar-v1-core">
[]Kubernetes core/v1.EnvVar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of environment variables to set in the container.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>script&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Script is the contents of an executable file to execute.&lt;/p>
&lt;p>If Script is not empty, the Step cannot have an Command and the Args will be passed to the Script.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workingDir&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Step&rsquo;s working directory.
If not specified, the container runtime&rsquo;s default will be used, which
might be configured in the container image.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params is a list of input parameters required to run the stepAction.
Params must be supplied as inputs in Steps unless they declare a defaultvalue.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepResult">
[]StepResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results are values that this StepAction can output&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>securityContext&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#securitycontext-v1-core">
Kubernetes core/v1.SecurityContext
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SecurityContext defines the security options the Step should be run with.
If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
More info: &lt;a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">https://kubernetes.io/docs/tasks/configure-pod-container/security-context/&lt;/a>
The value set in StepAction will take precedence over the value from Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeMounts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumemount-v1-core">
[]Kubernetes core/v1.VolumeMount
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Volumes to mount into the Step&rsquo;s filesystem.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.VerificationPolicy">VerificationPolicy
&lt;/h3>
&lt;div>
&lt;p>VerificationPolicy defines the rules to verify Tekton resources.
VerificationPolicy can config the mapping from resources to a list of public
keys, so when verifying the resources we can use the corresponding public keys.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1alpha1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>VerificationPolicy&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.VerificationPolicySpec">
VerificationPolicySpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Spec holds the desired state of the VerificationPolicy.&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.ResourcePattern">
[]ResourcePattern
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Resources defines the patterns of resources sources that should be subject to this policy.
For example, we may want to apply this Policy from a certain GitHub repo.
Then the ResourcesPattern should be valid regex. E.g. If using gitresolver, and we want to config keys from a certain git repo.
&lt;code>ResourcesPattern&lt;/code> can be &lt;code>https://github.com/tektoncd/catalog.git&lt;/code>, we will use regex to filter out those resources.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>authorities&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.Authority">
[]Authority
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Authorities defines the rules for validating signatures.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>mode&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.ModeType">
ModeType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Mode controls whether a failing policy will fail the taskrun/pipelinerun, or only log the warnings
enforce - fail the taskrun/pipelinerun if verification fails (default)
warn - don&rsquo;t fail the taskrun/pipelinerun if verification fails but log warnings&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.PipelineResource">PipelineResource
&lt;/h3>
&lt;div>
&lt;p>PipelineResource describes a resource that is an input to or output from a
Task.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1alpha1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>PipelineResource&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.PipelineResourceSpec">
PipelineResourceSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Spec holds the desired state of the PipelineResource from the client&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the resource that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.PipelineResourceType">
PipelineResourceType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.ResourceParam">
[]ResourceParam
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>secrets&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.SecretParam">
[]SecretParam
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Secrets to fetch to populate some of resource fields&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.PipelineResourceStatus">
PipelineResourceStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status is used to communicate the observed state of the PipelineResource from
the controller, but was unused as there is no controller for PipelineResource.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.Authority">Authority
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.VerificationPolicySpec">VerificationPolicySpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>The Authority block defines the keys for validating signatures.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name for this authority.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>key&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.KeyRef">
KeyRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Key contains the public key to validate the resource.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.EmbeddedRunSpec">EmbeddedRunSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.RunSpec">RunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>EmbeddedRunSpec allows custom task definitions to be embedded&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTaskMetadata">
PipelineTaskMetadata
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/runtime#RawExtension">
k8s.io/apimachinery/pkg/runtime.RawExtension
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec is a specification of a custom task&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>-&lt;/code>&lt;br/>
&lt;em>
[]byte
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Raw is the underlying serialization of this object.&lt;/p>
&lt;p>TODO: Determine how to detect ContentType and ContentEncoding of &lsquo;Raw&rsquo; data.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>-&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/runtime#Object">
k8s.io/apimachinery/pkg/runtime.Object
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Object can hold a representation of this extension - useful for working with versioned
structs.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.HashAlgorithm">HashAlgorithm
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.KeyRef">KeyRef&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>HashAlgorithm defines the hash algorithm used for the public key&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1alpha1.KeyRef">KeyRef
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.Authority">Authority&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>KeyRef defines the reference to a public key&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>secretRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#secretreference-v1-core">
Kubernetes core/v1.SecretReference
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SecretRef sets a reference to a secret with the key.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>data&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Data contains the inline public key.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kms&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>KMS contains the KMS url of the public key
Supported formats differ based on the KMS system used.
One example of a KMS url could be:
gcpkms://projects/[PROJECT]/locations/[LOCATION]&gt;/keyRings/[KEYRING]/cryptoKeys/[KEY]/cryptoKeyVersions/[KEY_VERSION]
For more examples please refer &lt;a href="https://docs.sigstore.dev/cosign/kms_support">https://docs.sigstore.dev/cosign/kms_support&lt;/a>.
Note that the KMS is not supported yet.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>hashAlgorithm&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.HashAlgorithm">
HashAlgorithm
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>HashAlgorithm always defaults to sha256 if the algorithm hasn&rsquo;t been explicitly set&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.ModeType">ModeType
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.VerificationPolicySpec">VerificationPolicySpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ModeType indicates the type of a mode for VerificationPolicy&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1alpha1.ResourcePattern">ResourcePattern
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.VerificationPolicySpec">VerificationPolicySpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResourcePattern defines the pattern of the resource source&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pattern&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Pattern defines a resource pattern. Regex is created to filter resources based on &lt;code>Pattern&lt;/code>
Example patterns:
GitHub resource: &lt;a href="https://github.com/tektoncd/catalog.git">https://github.com/tektoncd/catalog.git&lt;/a>, &lt;a href="https://github.com/tektoncd/*">https://github.com/tektoncd/*&lt;/a>
Bundle resource: gcr.io/tekton-releases/catalog/upstream/git-clone, gcr.io/tekton-releases/catalog/upstream/*
Hub resource: &lt;a href="https://artifacthub.io/*">https://artifacthub.io/*&lt;/a>,&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.RunReason">RunReason
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>RunReason is an enum used to store all Run reason for the Succeeded condition that are controlled by the Run itself.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1alpha1.RunResult">RunResult
&lt;/h3>
&lt;div>
&lt;p>RunResult used to describe the results of a task&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1alpha1.RunSpec">RunSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.Run">Run&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>RunSpec defines the desired state of Run&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>ref&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRef">
TaskRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.EmbeddedRunSpec">
EmbeddedRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec is a specification of a custom task&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.RunSpecStatus">
RunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a run (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>statusMessage&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.RunSpecStatusMessage">
RunSpecStatusMessage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status message for cancellation.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retries&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for propagating retries count to custom tasks&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>podTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/unversioned.PodTemplate">
PodTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>PodTemplate holds pod specific configuration&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which the custom-task times out.
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces is a list of WorkspaceBindings from volumes to workspaces.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.RunSpecStatus">RunSpecStatus
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.RunSpec">RunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>RunSpecStatus defines the taskrun spec status the user can provide&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1alpha1.RunSpecStatusMessage">RunSpecStatusMessage
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.RunSpec">RunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>RunSpecStatusMessage defines human readable status messages for the TaskRun.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1alpha1.RunStatus">RunStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.Run">Run&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>RunStatus defines the observed state of Run.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1alpha1.RunStatusFields">RunStatusFields
&lt;/h3>
&lt;div>
&lt;p>RunStatusFields holds the fields of Run&rsquo;s status.  This is defined
separately and inlined so that other types can readily consume these fields
via duck typing.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1alpha1.StepActionObject">StepActionObject
&lt;/h3>
&lt;div>
&lt;p>StepActionObject is implemented by StepAction&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1alpha1.StepActionSpec">StepActionSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.StepAction">StepAction&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>StepActionSpec contains the actionable components of a step.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the stepaction that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>image&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image reference name to run for this StepAction.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images">https://kubernetes.io/docs/concepts/containers/images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>command&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Entrypoint array. Not executed within a shell.
The image&rsquo;s ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>args&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Arguments to the entrypoint.
The image&rsquo;s CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>env&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envvar-v1-core">
[]Kubernetes core/v1.EnvVar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of environment variables to set in the container.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>script&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Script is the contents of an executable file to execute.&lt;/p>
&lt;p>If Script is not empty, the Step cannot have an Command and the Args will be passed to the Script.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workingDir&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Step&rsquo;s working directory.
If not specified, the container runtime&rsquo;s default will be used, which
might be configured in the container image.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params is a list of input parameters required to run the stepAction.
Params must be supplied as inputs in Steps unless they declare a defaultvalue.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepResult">
[]StepResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results are values that this StepAction can output&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>securityContext&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#securitycontext-v1-core">
Kubernetes core/v1.SecurityContext
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SecurityContext defines the security options the Step should be run with.
If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
More info: &lt;a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">https://kubernetes.io/docs/tasks/configure-pod-container/security-context/&lt;/a>
The value set in StepAction will take precedence over the value from Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeMounts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumemount-v1-core">
[]Kubernetes core/v1.VolumeMount
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Volumes to mount into the Step&rsquo;s filesystem.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.VerificationPolicySpec">VerificationPolicySpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.VerificationPolicy">VerificationPolicy&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>VerificationPolicySpec defines the patterns and authorities.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.ResourcePattern">
[]ResourcePattern
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Resources defines the patterns of resources sources that should be subject to this policy.
For example, we may want to apply this Policy from a certain GitHub repo.
Then the ResourcesPattern should be valid regex. E.g. If using gitresolver, and we want to config keys from a certain git repo.
&lt;code>ResourcesPattern&lt;/code> can be &lt;code>https://github.com/tektoncd/catalog.git&lt;/code>, we will use regex to filter out those resources.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>authorities&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.Authority">
[]Authority
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Authorities defines the rules for validating signatures.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>mode&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.ModeType">
ModeType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Mode controls whether a failing policy will fail the taskrun/pipelinerun, or only log the warnings
enforce - fail the taskrun/pipelinerun if verification fails (default)
warn - don&rsquo;t fail the taskrun/pipelinerun if verification fails but log warnings&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.PipelineResourceSpec">PipelineResourceSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.PipelineResource">PipelineResource&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineResourceBinding">PipelineResourceBinding&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineResourceSpec defines an individual resources used in the pipeline.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the resource that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.PipelineResourceType">
PipelineResourceType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.ResourceParam">
[]ResourceParam
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>secrets&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.SecretParam">
[]SecretParam
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Secrets to fetch to populate some of resource fields&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.PipelineResourceStatus">PipelineResourceStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.PipelineResource">PipelineResource&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineResourceStatus does not contain anything because PipelineResources on their own
do not have a status&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1alpha1.PipelineResourceType">PipelineResourceType
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.PipelineResourceSpec">PipelineResourceSpec&lt;/a>, &lt;a href="#tekton.dev/v1alpha1.ResourceDeclaration">ResourceDeclaration&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineResourceType represents the type of endpoint the pipelineResource is, so that the
controller will know this pipelineResource shouldx be fetched and optionally what
additional metatdata should be provided for it.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1alpha1.ResourceDeclaration">ResourceDeclaration
&lt;/h3>
&lt;div>
&lt;p>ResourceDeclaration defines an input or output PipelineResource declared as a requirement
by another type such as a Task or Condition. The Name field will be used to refer to these
PipelineResources within the type&rsquo;s definition, and when provided as an Input, the Name will be the
path to the volume mounted containing this PipelineResource as an input (e.g.
an input Resource named &lt;code>workspace&lt;/code> will be mounted at &lt;code>/workspace&lt;/code>).&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name declares the name by which a resource is referenced in the
definition. Resources may be referenced by name in the definition of a
Task&rsquo;s steps.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.PipelineResourceType">
PipelineResourceType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Type is the type of this resource;&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the declared resource that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>targetPath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TargetPath is the path in workspace directory where the resource
will be copied.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>optional&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Optional declares the resource as optional.
By default optional is set to false which makes a resource required.
optional: true - the resource is considered optional
optional: false - the resource is considered required (equivalent of not specifying it)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.ResourceParam">ResourceParam
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.PipelineResourceSpec">PipelineResourceSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResourceParam declares a string value to use for the parameter called Name, and is used in
the specific context of PipelineResources.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.SecretParam">SecretParam
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.PipelineResourceSpec">PipelineResourceSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>SecretParam indicates which secret can be used to populate a field of the resource&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>fieldName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>secretKey&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>secretName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.RunResult">RunResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.RunStatusFields">RunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>RunResult used to describe the results of a task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name the given name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Value the given value of the result&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.RunStatus">RunStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.RunStatusFields">RunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>RunStatus defines the observed state of Run&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>Status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/knative.dev/pkg/apis/duck/v1#Status">
knative.dev/pkg/apis/duck/v1.Status
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>Status&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>RunStatusFields&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.RunStatusFields">
RunStatusFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>RunStatusFields&lt;/code> are embedded into this type.)
&lt;/p>
&lt;p>RunStatusFields inlines the status fields.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1alpha1.RunStatusFields">RunStatusFields
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.RunStatus">RunStatus&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>RunStatusFields holds the fields of Run&rsquo;s status.  This is defined
separately and inlined so that other types can readily consume these fields
via duck typing.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>startTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>StartTime is the time the build is actually started.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>completionTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>CompletionTime is the time the build completed.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.RunResult">
[]RunResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results reports any output result values to be consumed by later
tasks in a pipeline.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retriesStatus&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.RunStatus">
[]RunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>RetriesStatus contains the history of RunStatus, in case of a retry.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>extraFields&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/runtime#RawExtension">
k8s.io/apimachinery/pkg/runtime.RawExtension
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>ExtraFields holds arbitrary fields provided by the custom task
controller.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;hr/>
&lt;h2 id="tekton.dev/v1beta1">tekton.dev/v1beta1&lt;/h2>
&lt;div>
&lt;p>Package v1beta1 contains API Schema definitions for the pipeline v1beta1 API group&lt;/p>
&lt;/div>
Resource Types:
&lt;ul>&lt;li>
&lt;a href="#tekton.dev/v1beta1.CustomRun">CustomRun&lt;/a>
&lt;/li>&lt;li>
&lt;a href="#tekton.dev/v1beta1.Pipeline">Pipeline&lt;/a>
&lt;/li>&lt;li>
&lt;a href="#tekton.dev/v1beta1.PipelineRun">PipelineRun&lt;/a>
&lt;/li>&lt;li>
&lt;a href="#tekton.dev/v1beta1.StepAction">StepAction&lt;/a>
&lt;/li>&lt;li>
&lt;a href="#tekton.dev/v1beta1.Task">Task&lt;/a>
&lt;/li>&lt;li>
&lt;a href="#tekton.dev/v1beta1.TaskRun">TaskRun&lt;/a>
&lt;/li>&lt;/ul>
&lt;h3 id="tekton.dev/v1beta1.CustomRun">CustomRun
&lt;/h3>
&lt;div>
&lt;p>CustomRun represents a single execution of a Custom Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1beta1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>CustomRun&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CustomRunSpec">
CustomRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>customRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRef">
TaskRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>customSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.EmbeddedCustomRunSpec">
EmbeddedCustomRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec is a specification of a custom task&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CustomRunSpecStatus">
CustomRunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a customrun (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>statusMessage&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CustomRunSpecStatusMessage">
CustomRunSpecStatusMessage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status message for cancellation.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retries&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for propagating retries count to custom tasks&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which the custom-task times out.
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces is a list of WorkspaceBindings from volumes to workspaces.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CustomRunStatus">
CustomRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.Pipeline">Pipeline
&lt;/h3>
&lt;div>
&lt;p>Pipeline describes a list of Tasks to execute. It expresses how outputs
of tasks feed into inputs of subsequent tasks.&lt;/p>
&lt;p>Deprecated: Please use v1.Pipeline instead.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1beta1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>Pipeline&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineSpec">
PipelineSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec holds the desired state of the Pipeline from the client&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is a user-facing name of the pipeline that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the pipeline that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineDeclaredResource">
[]PipelineDeclaredResource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>tasks&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTask">
[]PipelineTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Tasks declares the graph of Tasks that execute when this Pipeline is run.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params declares a list of input parameters that must be supplied when
this Pipeline is run.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineWorkspaceDeclaration">
[]PipelineWorkspaceDeclaration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces declares a set of named workspaces that are expected to be
provided by a PipelineRun.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineResult">
[]PipelineResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results are values that this pipeline can output once run&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>finally&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTask">
[]PipelineTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Finally declares the list of Tasks that execute just before leaving the Pipeline
i.e. either after all Tasks are finished executing successfully
or after a failure which would result in ending the Pipeline&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineRun">PipelineRun
&lt;/h3>
&lt;div>
&lt;p>PipelineRun represents a single execution of a Pipeline. PipelineRuns are how
the graph of Tasks declared in a Pipeline are executed; they specify inputs
to Pipelines such as parameter values and capture operational aspects of the
Tasks execution such as service account and tolerations. Creating a
PipelineRun creates TaskRuns for Tasks in the referenced Pipeline.&lt;/p>
&lt;p>Deprecated: Please use v1.PipelineRun instead.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1beta1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>PipelineRun&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineRunSpec">
PipelineRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>pipelineRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineRef">
PipelineRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineSpec">
PipelineSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specifying PipelineSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Pipeline.spec (API version: tekton.dev/v1beta1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineResourceBinding">
[]PipelineResourceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Resources is a list of bindings specifying which actual instances of
PipelineResources to use for the resources the Pipeline has declared
it needs.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params is a list of parameter names and values.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineRunSpecStatus">
PipelineRunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a pipelinerun (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeouts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TimeoutFields">
TimeoutFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which the Pipeline times out.
Currently three keys are accepted in the map
pipeline, tasks and finally
with Timeouts.pipeline &gt;= Timeouts.tasks + Timeouts.finally&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Timeout is the Time after which the Pipeline times out.
Defaults to never.
Refer to Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;p>Deprecated: use pipelineRunSpec.Timeouts.Pipeline instead&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>podTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/unversioned.PodTemplate">
PodTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PodTemplate holds pod specific configuration&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces holds a set of workspace bindings that must match names
with those declared in the pipeline.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRunSpecs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTaskRunSpec">
[]PipelineTaskRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskRunSpecs holds a set of runtime specs&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>managedBy&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ManagedBy indicates which controller is responsible for reconciling
this resource. If unset or set to &ldquo;tekton.dev/pipeline&rdquo;, the default
Tekton controller will manage this resource.
This field is immutable.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineRunStatus">
PipelineRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.StepAction">StepAction
&lt;/h3>
&lt;div>
&lt;p>StepAction represents the actionable components of Step.
The Step can only reference it from the cluster or using remote resolution.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1beta1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>StepAction&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.StepActionSpec">
StepActionSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec holds the desired state of the Step from the client&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the stepaction that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>image&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image reference name to run for this StepAction.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images">https://kubernetes.io/docs/concepts/containers/images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>command&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Entrypoint array. Not executed within a shell.
The image&rsquo;s ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>args&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Args">
Args
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Arguments to the entrypoint.
The image&rsquo;s CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>env&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envvar-v1-core">
[]Kubernetes core/v1.EnvVar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of environment variables to set in the container.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>script&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Script is the contents of an executable file to execute.&lt;/p>
&lt;p>If Script is not empty, the Step cannot have an Command and the Args will be passed to the Script.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workingDir&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Step&rsquo;s working directory.
If not specified, the container runtime&rsquo;s default will be used, which
might be configured in the container image.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params is a list of input parameters required to run the stepAction.
Params must be supplied as inputs in Steps unless they declare a defaultvalue.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepResult">
[]StepResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results are values that this StepAction can output&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>securityContext&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#securitycontext-v1-core">
Kubernetes core/v1.SecurityContext
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SecurityContext defines the security options the Step should be run with.
If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
More info: &lt;a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">https://kubernetes.io/docs/tasks/configure-pod-container/security-context/&lt;/a>
The value set in StepAction will take precedence over the value from Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeMounts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumemount-v1-core">
[]Kubernetes core/v1.VolumeMount
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Volumes to mount into the Step&rsquo;s filesystem.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.Task">Task
&lt;/h3>
&lt;div>
&lt;p>Task represents a collection of sequential steps that are run as part of a
Pipeline using a set of inputs and producing a set of outputs. Tasks execute
when TaskRuns are created that provide the input parameters and resources and
output resources the Task requires.&lt;/p>
&lt;p>Deprecated: Please use v1.Task instead.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1beta1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>Task&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskSpec">
TaskSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec holds the desired state of the Task from the client&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskResources">
TaskResources
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Resources is a list input and output resource to run the task
Resources are represented in TaskRuns as bindings to instances of
PipelineResources.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params is a list of input parameters required to run the task. Params
must be supplied as inputs in TaskRuns unless they declare a default
value.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is a user-facing name of the task that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the task that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>steps&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Step">
[]Step
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Steps are the steps of the build; each step is run sequentially with the
source mounted into /workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumes&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Volumes">
Volumes
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Volumes is a collection of volumes that are available to mount into the
steps of the build.
See Pod.spec.volumes (API version: v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stepTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.StepTemplate">
StepTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>StepTemplate can be used as the basis for all step containers within the
Task, so that the steps inherit settings on the base container.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecars&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Sidecar">
[]Sidecar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Sidecars are run alongside the Task&rsquo;s step containers. They begin before
the steps start and end after the steps complete.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceDeclaration">
[]WorkspaceDeclaration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Workspaces are the volumes that this Task requires.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskResult">
[]TaskResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Results are values that this Task can output&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRun">TaskRun
&lt;/h3>
&lt;div>
&lt;p>TaskRun represents a single execution of a Task. TaskRuns are how the steps
specified in a Task are executed; they specify the parameters and resources
used to run the steps in a Task.&lt;/p>
&lt;p>Deprecated: Please use v1.TaskRun instead.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
string&lt;/td>
&lt;td>
&lt;code>
tekton.dev/v1beta1
&lt;/code>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
string
&lt;/td>
&lt;td>&lt;code>TaskRun&lt;/code>&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#objectmeta-v1-meta">
Kubernetes meta/v1.ObjectMeta
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
Refer to the Kubernetes API documentation for the fields of the
&lt;code>metadata&lt;/code> field.
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunSpec">
TaskRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>debug&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunDebug">
TaskRunDebug
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunResources">
TaskRunResources
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRef">
TaskRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>no more than one of the TaskRef and TaskSpec may be specified.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskSpec">
TaskSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specifying TaskSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Task.spec (API version: tekton.dev/v1beta1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunSpecStatus">
TaskRunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a TaskRun (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>statusMessage&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunSpecStatusMessage">
TaskRunSpecStatusMessage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status message for cancellation.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retries&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Retries represents how many times this TaskRun should be retried in the event of Task failure.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which one retry attempt times out. Defaults to 1 hour.
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>podTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/unversioned.PodTemplate">
PodTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PodTemplate holds pod specific configuration&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces is a list of WorkspaceBindings from volumes to workspaces.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stepOverrides&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunStepOverride">
[]TaskRunStepOverride
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Overrides to apply to Steps in this TaskRun.
If a field is specified in both a Step and a StepOverride,
the value from the StepOverride will be used.
This field is only supported when the alpha feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecarOverrides&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunSidecarOverride">
[]TaskRunSidecarOverride
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Overrides to apply to Sidecars in this TaskRun.
If a field is specified in both a Sidecar and a SidecarOverride,
the value from the SidecarOverride will be used.
This field is only supported when the alpha feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>computeResources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Compute resources to use for this TaskRun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>managedBy&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ManagedBy indicates which controller is responsible for reconciling
this resource. If unset or set to &ldquo;tekton.dev/pipeline&rdquo;, the default
Tekton controller will manage this resource.
This field is immutable.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunStatus">
TaskRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.Algorithm">Algorithm
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>Algorithm Standard cryptographic hash algorithm&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.Args">Args
(&lt;code>[]string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.StepActionSpec">StepActionSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.ArrayOrString">ArrayOrString
&lt;/h3>
&lt;div>
&lt;p>ArrayOrString is deprecated, this is to keep backward compatibility&lt;/p>
&lt;p>Deprecated: Use ParamValue instead.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.Artifact">Artifact
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Artifacts">Artifacts&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Artifact represents an artifact within a system, potentially containing multiple values
associated with it.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The artifact&rsquo;s identifying category name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>values&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ArtifactValue">
[]ArtifactValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>A collection of values related to the artifact&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>buildOutput&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Indicate if the artifact is a build output or a by-product&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.ArtifactValue">ArtifactValue
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Artifact">Artifact&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ArtifactValue represents a specific value or data element within an Artifact.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>digest&lt;/code>&lt;br/>
&lt;em>
map[github.com/tektoncd/pipeline/pkg/apis/pipeline/v1beta1.Algorithm]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>uri&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Algorithm-specific digests for verifying the content (e.g., SHA256)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.Artifacts">Artifacts
&lt;/h3>
&lt;div>
&lt;p>Artifacts represents the collection of input and output artifacts associated with
a task run or a similar process. Artifacts in this context are units of data or resources
that the process either consumes as input or produces as output.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>inputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Artifact">
[]Artifact
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>outputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Artifact">
[]Artifact
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.ChildStatusReference">ChildStatusReference
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ChildStatusReference is used to point to the statuses of individual TaskRuns and Runs within this PipelineRun.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of the TaskRun or Run this is referencing.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>DisplayName is a user-facing name of the pipelineTask that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineTaskName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PipelineTaskName is the name of the PipelineTask this is referencing.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>whenExpressions&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WhenExpression">
[]WhenExpression
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>WhenExpressions is the list of checks guarding the execution of the PipelineTask&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.CloudEventCondition">CloudEventCondition
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.CloudEventDeliveryState">CloudEventDeliveryState&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>CloudEventCondition is a string that represents the condition of the event.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.CloudEventDelivery">CloudEventDelivery
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>CloudEventDelivery is the target of a cloud event along with the state of
delivery.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>target&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Target points to an addressable&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CloudEventDeliveryState">
CloudEventDeliveryState
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.CloudEventDeliveryState">CloudEventDeliveryState
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.CloudEventDelivery">CloudEventDelivery&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>CloudEventDeliveryState reports the state of a cloud event to be sent.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>condition&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CloudEventCondition">
CloudEventCondition
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Current status&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sentAt&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SentAt is the time at which the last attempt to send the event was made&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>message&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Error is the text of error (if any)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retryCount&lt;/code>&lt;br/>
&lt;em>
int32
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>RetryCount is the number of attempts of sending the cloud event&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.Combination">Combination
(&lt;code>map[string]string&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>Combination is a map, mainly defined to hold a single combination from a Matrix with key as param.Name and value as param.Value&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.Combinations">Combinations
(&lt;code>[]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1beta1.Combination&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>Combinations is a Combination list&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.ConfigSource">ConfigSource
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Provenance">Provenance&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ConfigSource contains the information that can uniquely identify where a remote
built definition came from i.e. Git repositories, Tekton Bundles in OCI registry
and hub.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>uri&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>URI indicates the identity of the source of the build definition.
Example: &ldquo;&lt;a href="https://github.com/tektoncd/catalog&quot;">https://github.com/tektoncd/catalog&rdquo;&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>digest&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Digest is a collection of cryptographic digests for the contents of the artifact specified by URI.
Example: &#123;&ldquo;sha1&rdquo;: &ldquo;f99d13e554ffcb696dee719fa85b695cb5b0f428&rdquo;&#125;&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>entryPoint&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>EntryPoint identifies the entry point into the build. This is often a path to a
build definition file and/or a target label within that file.
Example: &ldquo;task/git-clone/0.10/git-clone.yaml&rdquo;&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.CustomRunReason">CustomRunReason
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>CustomRunReason is an enum used to store all Run reason for the Succeeded condition that are controlled by the CustomRun itself.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.CustomRunResult">CustomRunResult
&lt;/h3>
&lt;div>
&lt;p>CustomRunResult used to describe the results of a task&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.CustomRunSpec">CustomRunSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.CustomRun">CustomRun&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>CustomRunSpec defines the desired state of CustomRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>customRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRef">
TaskRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>customSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.EmbeddedCustomRunSpec">
EmbeddedCustomRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec is a specification of a custom task&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CustomRunSpecStatus">
CustomRunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a customrun (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>statusMessage&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CustomRunSpecStatusMessage">
CustomRunSpecStatusMessage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status message for cancellation.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retries&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for propagating retries count to custom tasks&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which the custom-task times out.
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces is a list of WorkspaceBindings from volumes to workspaces.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.CustomRunSpecStatus">CustomRunSpecStatus
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.CustomRunSpec">CustomRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>CustomRunSpecStatus defines the taskrun spec status the user can provide&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.CustomRunSpecStatusMessage">CustomRunSpecStatusMessage
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.CustomRunSpec">CustomRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>CustomRunSpecStatusMessage defines human readable status messages for the TaskRun.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.CustomRunStatus">CustomRunStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.CustomRun">CustomRun&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineRunRunStatus">PipelineRunRunStatus&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>CustomRunStatus defines the observed state of CustomRun.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.CustomRunStatusFields">CustomRunStatusFields
&lt;/h3>
&lt;div>
&lt;p>CustomRunStatusFields holds the fields of CustomRun&rsquo;s status.  This is defined
separately and inlined so that other types can readily consume these fields
via duck typing.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.EmbeddedCustomRunSpec">EmbeddedCustomRunSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.CustomRunSpec">CustomRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>EmbeddedCustomRunSpec allows custom task definitions to be embedded&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTaskMetadata">
PipelineTaskMetadata
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/runtime#RawExtension">
k8s.io/apimachinery/pkg/runtime.RawExtension
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec is a specification of a custom task&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>-&lt;/code>&lt;br/>
&lt;em>
[]byte
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Raw is the underlying serialization of this object.&lt;/p>
&lt;p>TODO: Determine how to detect ContentType and ContentEncoding of &lsquo;Raw&rsquo; data.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>-&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/runtime#Object">
k8s.io/apimachinery/pkg/runtime.Object
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Object can hold a representation of this extension - useful for working with versioned
structs.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.EmbeddedTask">EmbeddedTask
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>EmbeddedTask is used to define a Task inline within a Pipeline&rsquo;s PipelineTasks.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>spec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/runtime#RawExtension">
k8s.io/apimachinery/pkg/runtime.RawExtension
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Spec is a specification of a custom task&lt;/p>
&lt;br/>
&lt;br/>
&lt;table>
&lt;tr>
&lt;td>
&lt;code>-&lt;/code>&lt;br/>
&lt;em>
[]byte
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Raw is the underlying serialization of this object.&lt;/p>
&lt;p>TODO: Determine how to detect ContentType and ContentEncoding of &lsquo;Raw&rsquo; data.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>-&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/runtime#Object">
k8s.io/apimachinery/pkg/runtime.Object
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Object can hold a representation of this extension - useful for working with versioned
structs.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/table>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTaskMetadata">
PipelineTaskMetadata
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>TaskSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskSpec">
TaskSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>TaskSpec&lt;/code> are embedded into this type.)
&lt;/p>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskSpec is a specification of a task&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.IncludeParams">IncludeParams
&lt;/h3>
&lt;div>
&lt;p>IncludeParams allows passing in a specific combinations of Parameters into the Matrix.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name the specified combination&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params takes only &lt;code>Parameters&lt;/code> of type &lt;code>&quot;string&quot;&lt;/code>
The names of the &lt;code>params&lt;/code> must match the names of the &lt;code>params&lt;/code> in the underlying &lt;code>Task&lt;/code>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.InternalTaskModifier">InternalTaskModifier
&lt;/h3>
&lt;div>
&lt;p>InternalTaskModifier implements TaskModifier for resources that are built-in to Tekton Pipelines.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>stepsToPrepend&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Step">
[]Step
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stepsToAppend&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Step">
[]Step
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumes&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volume-v1-core">
[]Kubernetes core/v1.Volume
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.Matrix">Matrix
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Matrix is used to fan out Tasks in a Pipeline&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params is a list of parameters used to fan out the pipelineTask
Params takes only &lt;code>Parameters&lt;/code> of type &lt;code>&quot;array&quot;&lt;/code>
Each array element is supplied to the &lt;code>PipelineTask&lt;/code> by substituting &lt;code>params&lt;/code> of type &lt;code>&quot;string&quot;&lt;/code> in the underlying &lt;code>Task&lt;/code>.
The names of the &lt;code>params&lt;/code> in the &lt;code>Matrix&lt;/code> must match the names of the &lt;code>params&lt;/code> in the underlying &lt;code>Task&lt;/code> that they will be substituting.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>include&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.IncludeParamsList">
IncludeParamsList
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Include is a list of IncludeParams which allows passing in specific combinations of Parameters into the Matrix.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.OnErrorType">OnErrorType
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Step">Step&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>OnErrorType defines a list of supported exiting behavior of a container on error&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.Param">Param
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunInputs">TaskRunInputs&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Param declares an ParamValues to use for the parameter called name.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ParamValue">
ParamValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.ParamSpec">ParamSpec
&lt;/h3>
&lt;div>
&lt;p>ParamSpec defines arbitrary parameters needed beyond typed inputs (such as
resources). Parameter values are provided by users as inputs on a TaskRun
or PipelineRun.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name declares the name by which a parameter is referenced.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ParamType">
ParamType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Type is the user-specified type of the parameter. The possible types
are currently &ldquo;string&rdquo;, &ldquo;array&rdquo; and &ldquo;object&rdquo;, and &ldquo;string&rdquo; is the default.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the parameter that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>properties&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PropertySpec">
map[string]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1beta1.PropertySpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Properties is the JSON Schema properties to support key-value pairs parameter.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>default&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ParamValue">
ParamValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Default is the value a parameter takes if no input value is supplied. If
default is set, a Task may be executed without a supplied value for the
parameter.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>enum&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Enum declares a set of allowed param input values for tasks/pipelines that can be validated.
If Enum is not set, no input validation is performed for the param.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.ParamSpecs">ParamSpecs
(&lt;code>[]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1beta1.ParamSpec&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineSpec">PipelineSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ParamSpecs is a list of ParamSpec&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.ParamType">ParamType
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.ParamSpec">ParamSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.ParamValue">ParamValue&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PropertySpec">PropertySpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ParamType indicates the type of an input parameter;
Used to distinguish between a single string and an array of strings.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.ParamValue">ParamValue
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Param">Param&lt;/a>, &lt;a href="#tekton.dev/v1beta1.ParamSpec">ParamSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ParamValue is a type that can hold a single string or string array.
Used in JSON unmarshalling so that a single JSON field can accept
either an individual string or an array of strings.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>Type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ParamType">
ParamType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>StringVal&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Represents the stored type of ParamValues.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ArrayVal&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ObjectVal&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.Params">Params
(&lt;code>[]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1beta1.Param&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.RunSpec">RunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.CustomRunSpec">CustomRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.IncludeParams">IncludeParams&lt;/a>, &lt;a href="#tekton.dev/v1beta1.Matrix">Matrix&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineRunSpec">PipelineRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineTask">PipelineTask&lt;/a>, &lt;a href="#tekton.dev/v1beta1.ResolverRef">ResolverRef&lt;/a>, &lt;a href="#tekton.dev/v1beta1.Step">Step&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Params is a list of Param&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.PipelineDeclaredResource">PipelineDeclaredResource
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineSpec">PipelineSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineDeclaredResource is used by a Pipeline to declare the types of the
PipelineResources that it will required to run and names which can be used to
refer to these PipelineResources in PipelineTaskResourceBindings.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name that will be used by the Pipeline to refer to this resource.
It does not directly correspond to the name of any PipelineResources Task
inputs or outputs, and it does not correspond to the actual names of the
PipelineResources that will be bound in the PipelineRun.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineResourceType">
PipelineResourceType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Type is the type of the PipelineResource.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>optional&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Optional declares the resource as optional.
optional: true - the resource is considered optional
optional: false - the resource is considered required (default/equivalent of not specifying it)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineObject">PipelineObject
&lt;/h3>
&lt;div>
&lt;p>PipelineObject is implemented by Pipeline&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.PipelineRef">PipelineRef
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunSpec">PipelineRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRef can be used to refer to a specific instance of a Pipeline.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name of the referent; More info: &lt;a href="http://kubernetes.io/docs/user-guide/identifiers#names">http://kubernetes.io/docs/user-guide/identifiers#names&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>API version of the referent&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>bundle&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Bundle url reference to a Tekton Bundle.&lt;/p>
&lt;p>Deprecated: Please use ResolverRef with the bundles resolver instead.
The field is staying there for go client backward compatibility, but is not used/allowed anymore.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ResolverRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResolverRef">
ResolverRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ResolverRef allows referencing a Pipeline in a remote location
like a git repo. This field is only supported when the alpha
feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineResourceBinding">PipelineResourceBinding
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunSpec">PipelineRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskResourceBinding">TaskResourceBinding&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineResourceBinding connects a reference to an instance of a PipelineResource
with a PipelineResource dependency that the Pipeline has declared&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of the PipelineResource in the Pipeline&rsquo;s declaration&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resourceRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineResourceRef">
PipelineResourceRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ResourceRef is a reference to the instance of the actual PipelineResource
that should be used&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resourceSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1alpha1.PipelineResourceSpec">
PipelineResourceSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ResourceSpec is specification of a resource that should be created and
consumed by the task&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineResourceInterface">PipelineResourceInterface
&lt;/h3>
&lt;div>
&lt;p>PipelineResourceInterface interface to be implemented by different PipelineResource types&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.PipelineResourceRef">PipelineResourceRef
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineResourceBinding">PipelineResourceBinding&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineResourceRef can be used to refer to a specific instance of a Resource&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name of the referent; More info: &lt;a href="http://kubernetes.io/docs/user-guide/identifiers#names">http://kubernetes.io/docs/user-guide/identifiers#names&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>API version of the referent&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineResourceResult">PipelineResourceResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineResourceResult has been deprecated with the migration of PipelineResources
Deprecated: Use RunResult instead&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.PipelineResourceType">PipelineResourceType
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineDeclaredResource">PipelineDeclaredResource&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineResourceType represents the type of endpoint the pipelineResource is, so that the
controller will know this pipelineResource should be fetched and optionally what
additional metatdata should be provided for it.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.PipelineResult">PipelineResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineSpec">PipelineSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineResult used to describe the results of a pipeline&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name the given name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResultsType">
ResultsType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Type is the user-specified type of the result.
The possible types are &lsquo;string&rsquo;, &lsquo;array&rsquo;, and &lsquo;object&rsquo;, with &lsquo;string&rsquo; as the default.
&lsquo;array&rsquo; and &lsquo;object&rsquo; types are alpha features.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a human-readable description of the result&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResultValue">
ResultValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Value the expression used to retrieve the value&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineRunReason">PipelineRunReason
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>PipelineRunReason represents a reason for the pipeline run &ldquo;Succeeded&rdquo; condition&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.PipelineRunResult">PipelineRunResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunResult used to describe the results of a pipeline&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the result&rsquo;s name as declared by the Pipeline&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResultValue">
ResultValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Value is the result returned from the execution of this PipelineRun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineRunRunStatus">PipelineRunRunStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunRunStatus contains the name of the PipelineTask for this CustomRun or Run and the CustomRun or Run&rsquo;s Status&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipelineTaskName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PipelineTaskName is the name of the PipelineTask.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CustomRunStatus">
CustomRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status is the CustomRunStatus for the corresponding CustomRun or Run&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>whenExpressions&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WhenExpression">
[]WhenExpression
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>WhenExpressions is the list of checks guarding the execution of the PipelineTask&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineRunSpec">PipelineRunSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRun">PipelineRun&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunSpec defines the desired state of PipelineRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipelineRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineRef">
PipelineRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineSpec">
PipelineSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specifying PipelineSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Pipeline.spec (API version: tekton.dev/v1beta1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineResourceBinding">
[]PipelineResourceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Resources is a list of bindings specifying which actual instances of
PipelineResources to use for the resources the Pipeline has declared
it needs.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params is a list of parameter names and values.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineRunSpecStatus">
PipelineRunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a pipelinerun (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeouts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TimeoutFields">
TimeoutFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which the Pipeline times out.
Currently three keys are accepted in the map
pipeline, tasks and finally
with Timeouts.pipeline &gt;= Timeouts.tasks + Timeouts.finally&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Timeout is the Time after which the Pipeline times out.
Defaults to never.
Refer to Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;p>Deprecated: use pipelineRunSpec.Timeouts.Pipeline instead&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>podTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/unversioned.PodTemplate">
PodTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PodTemplate holds pod specific configuration&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces holds a set of workspace bindings that must match names
with those declared in the pipeline.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRunSpecs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTaskRunSpec">
[]PipelineTaskRunSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskRunSpecs holds a set of runtime specs&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>managedBy&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ManagedBy indicates which controller is responsible for reconciling
this resource. If unset or set to &ldquo;tekton.dev/pipeline&rdquo;, the default
Tekton controller will manage this resource.
This field is immutable.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineRunSpecStatus">PipelineRunSpecStatus
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunSpec">PipelineRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunSpecStatus defines the pipelinerun spec status the user can provide&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.PipelineRunStatus">PipelineRunStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRun">PipelineRun&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunStatus defines the observed state of PipelineRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>Status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/knative.dev/pkg/apis/duck/v1#Status">
knative.dev/pkg/apis/duck/v1.Status
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>Status&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>PipelineRunStatusFields&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineRunStatusFields">
PipelineRunStatusFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>PipelineRunStatusFields&lt;/code> are embedded into this type.)
&lt;/p>
&lt;p>PipelineRunStatusFields inlines the status fields.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineRunStatusFields">PipelineRunStatusFields
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunStatus">PipelineRunStatus&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunStatusFields holds the fields of PipelineRunStatus&rsquo; status.
This is defined separately and inlined so that other types can readily
consume these fields via duck typing.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>startTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>StartTime is the time the PipelineRun is actually started.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>completionTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>CompletionTime is the time the PipelineRun completed.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRuns&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineRunTaskRunStatus">
map[string]*github.com/tektoncd/pipeline/pkg/apis/pipeline/v1beta1.PipelineRunTaskRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskRuns is a map of PipelineRunTaskRunStatus with the taskRun name as the key.&lt;/p>
&lt;p>Deprecated: use ChildReferences instead. As of v0.45.0, this field is no
longer populated and is only included for backwards compatibility with
older server versions.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>runs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineRunRunStatus">
map[string]*github.com/tektoncd/pipeline/pkg/apis/pipeline/v1beta1.PipelineRunRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Runs is a map of PipelineRunRunStatus with the run name as the key&lt;/p>
&lt;p>Deprecated: use ChildReferences instead. As of v0.45.0, this field is no
longer populated and is only included for backwards compatibility with
older server versions.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineResults&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineRunResult">
[]PipelineRunResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>PipelineResults are the list of results written out by the pipeline task&rsquo;s containers&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineSpec">
PipelineSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PipelineSpec contains the exact spec used to instantiate the run.
See Pipeline.spec (API version: tekton.dev/v1beta1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>skippedTasks&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.SkippedTask">
[]SkippedTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>list of tasks that were skipped due to when expressions evaluating to false&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>childReferences&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ChildStatusReference">
[]ChildStatusReference
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>list of TaskRun and Run names, PipelineTask names, and API versions/kinds for children of this PipelineRun.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>finallyStartTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>FinallyStartTime is when all non-finally tasks have been completed and only finally tasks are being executed.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>provenance&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Provenance">
Provenance
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Provenance contains some key authenticated metadata about how a software artifact was built (what sources, what inputs/outputs, etc.).&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spanContext&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>SpanContext contains tracing span context fields&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineRunTaskRunStatus">PipelineRunTaskRunStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineRunTaskRunStatus contains the name of the PipelineTask for this TaskRun and the TaskRun&rsquo;s Status&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipelineTaskName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PipelineTaskName is the name of the PipelineTask.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunStatus">
TaskRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status is the TaskRunStatus for the corresponding TaskRun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>whenExpressions&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WhenExpression">
[]WhenExpression
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>WhenExpressions is the list of checks guarding the execution of the PipelineTask&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineSpec">PipelineSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Pipeline">Pipeline&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineRunSpec">PipelineRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineSpec defines the desired state of Pipeline.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is a user-facing name of the pipeline that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the pipeline that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineDeclaredResource">
[]PipelineDeclaredResource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>tasks&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTask">
[]PipelineTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Tasks declares the graph of Tasks that execute when this Pipeline is run.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Params declares a list of input parameters that must be supplied when
this Pipeline is run.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineWorkspaceDeclaration">
[]PipelineWorkspaceDeclaration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces declares a set of named workspaces that are expected to be
provided by a PipelineRun.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineResult">
[]PipelineResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results are values that this pipeline can output once run&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>finally&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTask">
[]PipelineTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Finally declares the list of Tasks that execute just before leaving the Pipeline
i.e. either after all Tasks are finished executing successfully
or after a failure which would result in ending the Pipeline&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineTask">PipelineTask
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineSpec">PipelineSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTask defines a task in a Pipeline, passing inputs from both
Params and from the output of previous tasks.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of this task within the context of a Pipeline. Name is
used as a coordinate with the &lt;code>from&lt;/code> and &lt;code>runAfter&lt;/code> fields to establish
the execution order of tasks relative to one another.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is the display name of this task within the context of a Pipeline.
This display name may be used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is the description of this task within the context of a Pipeline.
This description may be used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRef">
TaskRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskRef is a reference to a task definition.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.EmbeddedTask">
EmbeddedTask
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskSpec is a specification of a task
Specifying TaskSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Task.spec (API version: tekton.dev/v1beta1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>when&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WhenExpressions">
WhenExpressions
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>WhenExpressions is a list of when expressions that need to be true for the task to run&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retries&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Retries represents how many times this task should be retried in case of task failure: ConditionSucceeded set to False&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>runAfter&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>RunAfter is the list of PipelineTask names that should be executed before
this Task executes. (Used to force a specific ordering in graph execution.)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTaskResources">
PipelineTaskResources
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Parameters declares parameters passed to this task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>matrix&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Matrix">
Matrix
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Matrix declares parameters used to fan out this task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspacePipelineTaskBinding">
[]WorkspacePipelineTaskBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces maps workspaces from the pipeline spec to the workspaces
declared in the Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Duration after which the TaskRun times out. Defaults to 1 hour.
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineRef">
PipelineRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>PipelineRef is a reference to a pipeline definition
Note: PipelineRef is in preview mode and not yet supported&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>pipelineSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineSpec">
PipelineSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>PipelineSpec is a specification of a pipeline
Note: PipelineSpec is in preview mode and not yet supported
Specifying PipelineSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Pipeline.spec (API version: tekton.dev/v1beta1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>onError&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTaskOnErrorType">
PipelineTaskOnErrorType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>OnError defines the exiting behavior of a PipelineRun on error
can be set to [ continue | stopAndFail ]&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineTaskInputResource">PipelineTaskInputResource
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineTaskResources">PipelineTaskResources&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTaskInputResource maps the name of a declared PipelineResource input
dependency in a Task to the resource in the Pipeline&rsquo;s DeclaredPipelineResources
that should be used. This input may come from a previous task.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of the PipelineResource as declared by the Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resource&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Resource is the name of the DeclaredPipelineResource to use.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>from&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>From is the list of PipelineTask names that the resource has to come from.
(Implies an ordering in the execution graph.)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineTaskMetadata">PipelineTaskMetadata
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.EmbeddedRunSpec">EmbeddedRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.EmbeddedCustomRunSpec">EmbeddedCustomRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.EmbeddedTask">EmbeddedTask&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineTaskRunSpec">PipelineTaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTaskMetadata contains the labels or annotations for an EmbeddedTask&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>labels&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>annotations&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineTaskOnErrorType">PipelineTaskOnErrorType
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTaskOnErrorType defines a list of supported failure handling behaviors of a PipelineTask on error&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.PipelineTaskOutputResource">PipelineTaskOutputResource
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineTaskResources">PipelineTaskResources&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTaskOutputResource maps the name of a declared PipelineResource output
dependency in a Task to the resource in the Pipeline&rsquo;s DeclaredPipelineResources
that should be used.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of the PipelineResource as declared by the Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resource&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Resource is the name of the DeclaredPipelineResource to use.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineTaskParam">PipelineTaskParam
&lt;/h3>
&lt;div>
&lt;p>PipelineTaskParam is used to provide arbitrary string parameters to a Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineTaskResources">PipelineTaskResources
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTaskResources allows a Pipeline to declare how its DeclaredPipelineResources
should be provided to a Task as its inputs and outputs.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>inputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTaskInputResource">
[]PipelineTaskInputResource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Inputs holds the mapping from the PipelineResources declared in
DeclaredPipelineResources to the input PipelineResources required by the Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>outputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTaskOutputResource">
[]PipelineTaskOutputResource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Outputs holds the mapping from the PipelineResources declared in
DeclaredPipelineResources to the input PipelineResources required by the Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineTaskRun">PipelineTaskRun
&lt;/h3>
&lt;div>
&lt;p>PipelineTaskRun reports the results of running a step in the Task. Each
task has the potential to succeed or fail (based on the exit code)
and produces logs.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineTaskRunSpec">PipelineTaskRunSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunSpec">PipelineRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineTaskRunSpec  can be used to configure specific
specs for a concrete Task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipelineTaskName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskServiceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskPodTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/unversioned.PodTemplate">
PodTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stepOverrides&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunStepOverride">
[]TaskRunStepOverride
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecarOverrides&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunSidecarOverride">
[]TaskRunSidecarOverride
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>metadata&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineTaskMetadata">
PipelineTaskMetadata
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>computeResources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Compute resources to use for this TaskRun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Duration after which the TaskRun times out.
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PipelineWorkspaceDeclaration">PipelineWorkspaceDeclaration
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineSpec">PipelineSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PipelineWorkspaceDeclaration creates a named slot in a Pipeline that a PipelineRun
is expected to populate with a workspace binding.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of a workspace to be provided by a PipelineRun.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a human readable string describing how the workspace will be
used in the Pipeline. It can be useful to include a bit of detail about which
tasks are intended to have access to the data on the workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>optional&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Optional marks a Workspace as not being required in PipelineRuns. By default
this field is false and so declared workspaces are required.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.PropertySpec">PropertySpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.ParamSpec">ParamSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskResult">TaskResult&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>PropertySpec defines the struct for object keys&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ParamType">
ParamType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.Provenance">Provenance
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>, &lt;a href="#tekton.dev/v1beta1.StepState">StepState&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Provenance contains metadata about resources used in the TaskRun/PipelineRun
such as the source from where a remote build definition was fetched.
This field aims to carry minimum amoumt of metadata in *Run status so that
Tekton Chains can capture them in the provenance.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>configSource&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ConfigSource">
ConfigSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Deprecated: Use RefSource instead&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>refSource&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.RefSource">
RefSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>RefSource identifies the source where a remote task/pipeline came from.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>featureFlags&lt;/code>&lt;br/>
&lt;em>
github.com/tektoncd/pipeline/pkg/apis/config.FeatureFlags
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>FeatureFlags identifies the feature flags that were used during the task/pipeline run&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.Ref">Ref
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Step">Step&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Ref can be used to refer to a specific instance of a StepAction.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name of the referenced step&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ResolverRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResolverRef">
ResolverRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ResolverRef allows referencing a StepAction in a remote location
like a git repo.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.RefSource">RefSource
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Provenance">Provenance&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>RefSource contains the information that can uniquely identify where a remote
built definition came from i.e. Git repositories, Tekton Bundles in OCI registry
and hub.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>uri&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>URI indicates the identity of the source of the build definition.
Example: &ldquo;&lt;a href="https://github.com/tektoncd/catalog&quot;">https://github.com/tektoncd/catalog&rdquo;&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>digest&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Digest is a collection of cryptographic digests for the contents of the artifact specified by URI.
Example: &#123;&ldquo;sha1&rdquo;: &ldquo;f99d13e554ffcb696dee719fa85b695cb5b0f428&rdquo;&#125;&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>entryPoint&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>EntryPoint identifies the entry point into the build. This is often a path to a
build definition file and/or a target label within that file.
Example: &ldquo;task/git-clone/0.10/git-clone.yaml&rdquo;&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.ResolverName">ResolverName
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.ResolverRef">ResolverRef&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResolverName is the name of a resolver from which a resource can be
requested.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.ResolverRef">ResolverRef
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRef">PipelineRef&lt;/a>, &lt;a href="#tekton.dev/v1beta1.Ref">Ref&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRef">TaskRef&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResolverRef can be used to refer to a Pipeline or Task in a remote
location like a git repo.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>resolver&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResolverName">
ResolverName
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Resolver is the name of the resolver that should perform
resolution of the referenced Tekton resource, such as &ldquo;git&rdquo;.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params contains the parameters used to identify the
referenced Tekton resource. Example entries might include
&ldquo;repo&rdquo; or &ldquo;path&rdquo; but the set of params ultimately depends on
the chosen resolver.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.ResourceDeclaration">ResourceDeclaration
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskResource">TaskResource&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResourceDeclaration defines an input or output PipelineResource declared as a requirement
by another type such as a Task or Condition. The Name field will be used to refer to these
PipelineResources within the type&rsquo;s definition, and when provided as an Input, the Name will be the
path to the volume mounted containing this PipelineResource as an input (e.g.
an input Resource named &lt;code>workspace&lt;/code> will be mounted at &lt;code>/workspace&lt;/code>).&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.ResourceParam">ResourceParam
&lt;/h3>
&lt;div>
&lt;p>ResourceParam declares a string value to use for the parameter called Name, and is used in
the specific context of PipelineResources.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.ResultRef">ResultRef
&lt;/h3>
&lt;div>
&lt;p>ResultRef is a type that represents a reference to a task run result&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipelineTask&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>result&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resultsIndex&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>property&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.ResultType">ResultType
&lt;/h3>
&lt;div>
&lt;p>ResultType of PipelineResourceResult has been deprecated with the migration of PipelineResources
Deprecated: v1beta1.ResultType is only kept for backward compatibility&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.ResultValue">ResultValue
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineResult">PipelineResult&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineRunResult">PipelineRunResult&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskResult">TaskResult&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunResult">TaskRunResult&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResultValue is a type alias of ParamValue&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.ResultsType">ResultsType
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineResult">PipelineResult&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskResult">TaskResult&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunResult">TaskRunResult&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>ResultsType indicates the type of a result;
Used to distinguish between a single string and an array of strings.
Note that there is ResultType used to find out whether a
RunResult is from a task result or not, which is different from
this ResultsType.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.RetriesStatus">RetriesStatus
(&lt;code>[]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1beta1.TaskRunStatus&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.RunObject">RunObject
&lt;/h3>
&lt;div>
&lt;p>RunObject is implemented by Run, CustomRun, TaskRun and PipelineRun&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.RunObjectWithRetries">RunObjectWithRetries
&lt;/h3>
&lt;div>
&lt;p>RunObjectWithRetries is implemented by Run and CustomRun&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.RunResult">RunResult
&lt;/h3>
&lt;div>
&lt;p>RunResult is used to write key/value pairs to TaskRun pod termination messages.
It has been migrated to the result package and kept for backward compatibility&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.Sidecar">Sidecar
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Sidecar has nearly the same data structure as Step but does not have the ability to timeout.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name of the Sidecar specified as a DNS_LABEL.
Each Sidecar in a Task must have a unique name (DNS_LABEL).
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>image&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image name to be used by the Sidecar.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images">https://kubernetes.io/docs/concepts/containers/images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>command&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Entrypoint array. Not executed within a shell.
The image&rsquo;s ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the Sidecar&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>args&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Arguments to the entrypoint.
The image&rsquo;s CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workingDir&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Sidecar&rsquo;s working directory.
If not specified, the container runtime&rsquo;s default will be used, which
might be configured in the container image.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ports&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#containerport-v1-core">
[]Kubernetes core/v1.ContainerPort
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of ports to expose from the Sidecar. Exposing a port here gives
the system additional information about the network connections a
container uses, but is primarily informational. Not specifying a port here
DOES NOT prevent that port from being exposed. Any port which is
listening on the default &ldquo;0.0.0.0&rdquo; address inside a container will be
accessible from the network.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>envFrom&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envfromsource-v1-core">
[]Kubernetes core/v1.EnvFromSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of sources to populate environment variables in the Sidecar.
The keys defined within a source must be a C_IDENTIFIER. All invalid keys
will be reported as an event when the Sidecar is starting. When a key exists in multiple
sources, the value associated with the last source will take precedence.
Values defined by an Env with a duplicate key will take precedence.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>env&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envvar-v1-core">
[]Kubernetes core/v1.EnvVar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of environment variables to set in the Sidecar.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Compute Resources required by this Sidecar.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeMounts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumemount-v1-core">
[]Kubernetes core/v1.VolumeMount
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Volumes to mount into the Sidecar&rsquo;s filesystem.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeDevices&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumedevice-v1-core">
[]Kubernetes core/v1.VolumeDevice
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>volumeDevices is the list of block devices to be used by the Sidecar.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>livenessProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Periodic probe of Sidecar liveness.
Container will be restarted if the probe fails.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>readinessProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Periodic probe of Sidecar service readiness.
Container will be removed from service endpoints if the probe fails.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>startupProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>StartupProbe indicates that the Pod the Sidecar is running in has successfully initialized.
If specified, no other probes are executed until this completes successfully.
If this probe fails, the Pod will be restarted, just as if the livenessProbe failed.
This can be used to provide different probe parameters at the beginning of a Pod&rsquo;s lifecycle,
when it might take a long time to load data or warm a cache, than during steady-state operation.
This cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>lifecycle&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#lifecycle-v1-core">
Kubernetes core/v1.Lifecycle
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Actions that the management system should take in response to Sidecar lifecycle events.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>terminationMessagePath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Optional: Path at which the file to which the Sidecar&rsquo;s termination message
will be written is mounted into the Sidecar&rsquo;s filesystem.
Message written is intended to be brief final status, such as an assertion failure message.
Will be truncated by the node if greater than 4096 bytes. The total message length across
all containers will be limited to 12kb.
Defaults to /dev/termination-log.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>terminationMessagePolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#terminationmessagepolicy-v1-core">
Kubernetes core/v1.TerminationMessagePolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Indicate how the termination message should be populated. File will use the contents of
terminationMessagePath to populate the Sidecar status message on both success and failure.
FallbackToLogsOnError will use the last chunk of Sidecar log output if the termination
message file is empty and the Sidecar exited with an error.
The log output is limited to 2048 bytes or 80 lines, whichever is smaller.
Defaults to File.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>imagePullPolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#pullpolicy-v1-core">
Kubernetes core/v1.PullPolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image pull policy.
One of Always, Never, IfNotPresent.
Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images#updating-images">https://kubernetes.io/docs/concepts/containers/images#updating-images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>securityContext&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#securitycontext-v1-core">
Kubernetes core/v1.SecurityContext
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SecurityContext defines the security options the Sidecar should be run with.
If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
More info: &lt;a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">https://kubernetes.io/docs/tasks/configure-pod-container/security-context/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stdin&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether this Sidecar should allocate a buffer for stdin in the container runtime. If this
is not set, reads from stdin in the Sidecar will always result in EOF.
Default is false.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stdinOnce&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether the container runtime should close the stdin channel after it has been opened by
a single attach. When stdin is true the stdin stream will remain open across multiple attach
sessions. If stdinOnce is set to true, stdin is opened on Sidecar start, is empty until the
first client attaches to stdin, and then remains open and accepts data until the client disconnects,
at which time stdin is closed and remains closed until the Sidecar is restarted. If this
flag is false, a container processes that reads from stdin will never receive an EOF.
Default is false&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>tty&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether this Sidecar should allocate a TTY for itself, also requires &lsquo;stdin&rsquo; to be true.
Default is false.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>script&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Script is the contents of an executable file to execute.&lt;/p>
&lt;p>If Script is not empty, the Step cannot have an Command or Args.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceUsage">
[]WorkspaceUsage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>This is an alpha field. You must set the &ldquo;enable-api-fields&rdquo; feature flag to &ldquo;alpha&rdquo;
for this field to be supported.&lt;/p>
&lt;p>Workspaces is a list of workspaces from the Task that this Sidecar wants
exclusive access to. Adding a workspace to this list means that any
other Step or Sidecar that does not also request this Workspace will
not have access to it.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>restartPolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#containerrestartpolicy-v1-core">
Kubernetes core/v1.ContainerRestartPolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>RestartPolicy refers to kubernetes RestartPolicy. It can only be set for an
initContainer and must have it&rsquo;s policy set to &ldquo;Always&rdquo;. It is currently
left optional to help support Kubernetes versions prior to 1.29 when this feature
was introduced.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.SidecarState">SidecarState
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>SidecarState reports the results of running a sidecar in a Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>ContainerState&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#containerstate-v1-core">
Kubernetes core/v1.ContainerState
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>ContainerState&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>container&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>imageID&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.SkippedTask">SkippedTask
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunStatusFields">PipelineRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>SkippedTask is used to describe the Tasks that were skipped due to their When Expressions
evaluating to False. This is a struct because we are looking into including more details
about the When Expressions that caused this Task to be skipped.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the Pipeline Task name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>reason&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.SkippingReason">
SkippingReason
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Reason is the cause of the PipelineTask being skipped.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>whenExpressions&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WhenExpression">
[]WhenExpression
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>WhenExpressions is the list of checks guarding the execution of the PipelineTask&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.SkippingReason">SkippingReason
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.SkippedTask">SkippedTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>SkippingReason explains why a PipelineTask was skipped.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.Step">Step
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.InternalTaskModifier">InternalTaskModifier&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>Step runs a subcomponent of a Task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name of the Step specified as a DNS_LABEL.
Each Step in a Task must have a unique name.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is a user-facing name of the step that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>image&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image reference name to run for this Step.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images">https://kubernetes.io/docs/concepts/containers/images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>command&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Entrypoint array. Not executed within a shell.
The image&rsquo;s ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>args&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Arguments to the entrypoint.
The image&rsquo;s CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workingDir&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Step&rsquo;s working directory.
If not specified, the container runtime&rsquo;s default will be used, which
might be configured in the container image.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ports&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#containerport-v1-core">
[]Kubernetes core/v1.ContainerPort
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of ports to expose from the Step&rsquo;s container. Exposing a port here gives
the system additional information about the network connections a
container uses, but is primarily informational. Not specifying a port here
DOES NOT prevent that port from being exposed. Any port which is
listening on the default &ldquo;0.0.0.0&rdquo; address inside a container will be
accessible from the network.
Cannot be updated.&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>envFrom&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envfromsource-v1-core">
[]Kubernetes core/v1.EnvFromSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of sources to populate environment variables in the container.
The keys defined within a source must be a C_IDENTIFIER. All invalid keys
will be reported as an event when the container is starting. When a key exists in multiple
sources, the value associated with the last source will take precedence.
Values defined by an Env with a duplicate key will take precedence.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>env&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envvar-v1-core">
[]Kubernetes core/v1.EnvVar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of environment variables to set in the container.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Compute Resources required by this Step.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeMounts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumemount-v1-core">
[]Kubernetes core/v1.VolumeMount
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Volumes to mount into the Step&rsquo;s filesystem.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeDevices&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumedevice-v1-core">
[]Kubernetes core/v1.VolumeDevice
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>volumeDevices is the list of block devices to be used by the Step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>livenessProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Periodic probe of container liveness.
Step will be restarted if the probe fails.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>readinessProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Periodic probe of container service readiness.
Step will be removed from service endpoints if the probe fails.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>startupProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DeprecatedStartupProbe indicates that the Pod this Step runs in has successfully initialized.
If specified, no other probes are executed until this completes successfully.
If this probe fails, the Pod will be restarted, just as if the livenessProbe failed.
This can be used to provide different probe parameters at the beginning of a Pod&rsquo;s lifecycle,
when it might take a long time to load data or warm a cache, than during steady-state operation.
This cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>lifecycle&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#lifecycle-v1-core">
Kubernetes core/v1.Lifecycle
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Actions that the management system should take in response to container lifecycle events.
Cannot be updated.&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>terminationMessagePath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Deprecated: This field will be removed in a future release and can&rsquo;t be meaningfully used.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>terminationMessagePolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#terminationmessagepolicy-v1-core">
Kubernetes core/v1.TerminationMessagePolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Deprecated: This field will be removed in a future release and can&rsquo;t be meaningfully used.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>imagePullPolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#pullpolicy-v1-core">
Kubernetes core/v1.PullPolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image pull policy.
One of Always, Never, IfNotPresent.
Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images#updating-images">https://kubernetes.io/docs/concepts/containers/images#updating-images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>securityContext&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#securitycontext-v1-core">
Kubernetes core/v1.SecurityContext
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SecurityContext defines the security options the Step should be run with.
If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
More info: &lt;a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">https://kubernetes.io/docs/tasks/configure-pod-container/security-context/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stdin&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether this container should allocate a buffer for stdin in the container runtime. If this
is not set, reads from stdin in the container will always result in EOF.
Default is false.&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stdinOnce&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether the container runtime should close the stdin channel after it has been opened by
a single attach. When stdin is true the stdin stream will remain open across multiple attach
sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the
first client attaches to stdin, and then remains open and accepts data until the client disconnects,
at which time stdin is closed and remains closed until the container is restarted. If this
flag is false, a container processes that reads from stdin will never receive an EOF.
Default is false&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>tty&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether this container should allocate a DeprecatedTTY for itself, also requires &lsquo;stdin&rsquo; to be true.
Default is false.&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>script&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Script is the contents of an executable file to execute.&lt;/p>
&lt;p>If Script is not empty, the Step cannot have an Command and the Args will be passed to the Script.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Timeout is the time after which the step times out. Defaults to never.
Refer to Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceUsage">
[]WorkspaceUsage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>This is an alpha field. You must set the &ldquo;enable-api-fields&rdquo; feature flag to &ldquo;alpha&rdquo;
for this field to be supported.&lt;/p>
&lt;p>Workspaces is a list of workspaces from the Task that this Step wants
exclusive access to. Adding a workspace to this list means that any
other Step or Sidecar that does not also request this Workspace will
not have access to it.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>onError&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.OnErrorType">
OnErrorType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>OnError defines the exiting behavior of a container on error
can be set to [ continue | stopAndFail ]&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stdoutConfig&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.StepOutputConfig">
StepOutputConfig
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Stores configuration for the stdout stream of the step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stderrConfig&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.StepOutputConfig">
StepOutputConfig
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Stores configuration for the stderr stream of the step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ref&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Ref">
Ref
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Contains the reference to an existing StepAction.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params declares parameters passed to this step action.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepResult">
[]StepResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results declares StepResults produced by the Step.&lt;/p>
&lt;p>It can be used in an inlined Step when used to store Results to $(step.results.resultName.path).
It cannot be used when referencing StepActions using [v1beta1.Step.Ref].
The Results declared by the StepActions will be stored here instead.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>when&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.StepWhenExpressions">
StepWhenExpressions
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.StepActionObject">StepActionObject
&lt;/h3>
&lt;div>
&lt;p>StepActionObject is implemented by StepAction&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.StepActionSpec">StepActionSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.StepAction">StepAction&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>StepActionSpec contains the actionable components of a step.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the stepaction that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>image&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image reference name to run for this StepAction.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images">https://kubernetes.io/docs/concepts/containers/images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>command&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Entrypoint array. Not executed within a shell.
The image&rsquo;s ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>args&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Args">
Args
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Arguments to the entrypoint.
The image&rsquo;s CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the container&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>env&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envvar-v1-core">
[]Kubernetes core/v1.EnvVar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of environment variables to set in the container.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>script&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Script is the contents of an executable file to execute.&lt;/p>
&lt;p>If Script is not empty, the Step cannot have an Command and the Args will be passed to the Script.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workingDir&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Step&rsquo;s working directory.
If not specified, the container runtime&rsquo;s default will be used, which
might be configured in the container image.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params is a list of input parameters required to run the stepAction.
Params must be supplied as inputs in Steps unless they declare a defaultvalue.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1.StepResult">
[]StepResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results are values that this StepAction can output&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>securityContext&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#securitycontext-v1-core">
Kubernetes core/v1.SecurityContext
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SecurityContext defines the security options the Step should be run with.
If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
More info: &lt;a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">https://kubernetes.io/docs/tasks/configure-pod-container/security-context/&lt;/a>
The value set in StepAction will take precedence over the value from Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeMounts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumemount-v1-core">
[]Kubernetes core/v1.VolumeMount
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Volumes to mount into the Step&rsquo;s filesystem.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.StepOutputConfig">StepOutputConfig
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Step">Step&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>StepOutputConfig stores configuration for a step output stream.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>path&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Path to duplicate stdout stream to on container&rsquo;s local filesystem.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.StepState">StepState
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>StepState reports the results of running a step in a Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>ContainerState&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#containerstate-v1-core">
Kubernetes core/v1.ContainerState
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>ContainerState&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>container&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>imageID&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunStepResult">
[]TaskRunStepResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>provenance&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Provenance">
Provenance
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>inputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunStepArtifact">
[]TaskRunStepArtifact
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>outputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunStepArtifact">
[]TaskRunStepArtifact
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.StepTemplate">StepTemplate
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>StepTemplate is a template for a Step&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Default name for each Step specified as a DNS_LABEL.
Each Step in a Task must have a unique name.
Cannot be updated.&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>image&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Default image name to use for each Step.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images">https://kubernetes.io/docs/concepts/containers/images&lt;/a>
This field is optional to allow higher level config management to default or override
container images in workload controllers like Deployments and StatefulSets.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>command&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Entrypoint array. Not executed within a shell.
The docker image&rsquo;s ENTRYPOINT is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the Step&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>args&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Arguments to the entrypoint.
The image&rsquo;s CMD is used if this is not provided.
Variable references $(VAR_NAME) are expanded using the Step&rsquo;s environment. If a variable
cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced
to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. &ldquo;$$(VAR_NAME)&rdquo; will
produce the string literal &ldquo;$(VAR_NAME)&rdquo;. Escaped references will never be expanded, regardless
of whether the variable exists or not. Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell">https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workingDir&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Step&rsquo;s working directory.
If not specified, the container runtime&rsquo;s default will be used, which
might be configured in the container image.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ports&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#containerport-v1-core">
[]Kubernetes core/v1.ContainerPort
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of ports to expose from the Step&rsquo;s container. Exposing a port here gives
the system additional information about the network connections a
container uses, but is primarily informational. Not specifying a port here
DOES NOT prevent that port from being exposed. Any port which is
listening on the default &ldquo;0.0.0.0&rdquo; address inside a container will be
accessible from the network.
Cannot be updated.&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>envFrom&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envfromsource-v1-core">
[]Kubernetes core/v1.EnvFromSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of sources to populate environment variables in the Step.
The keys defined within a source must be a C_IDENTIFIER. All invalid keys
will be reported as an event when the container is starting. When a key exists in multiple
sources, the value associated with the last source will take precedence.
Values defined by an Env with a duplicate key will take precedence.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>env&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#envvar-v1-core">
[]Kubernetes core/v1.EnvVar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>List of environment variables to set in the container.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Compute Resources required by this Step.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeMounts&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumemount-v1-core">
[]Kubernetes core/v1.VolumeMount
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Volumes to mount into the Step&rsquo;s filesystem.
Cannot be updated.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeDevices&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#volumedevice-v1-core">
[]Kubernetes core/v1.VolumeDevice
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>volumeDevices is the list of block devices to be used by the Step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>livenessProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Periodic probe of container liveness.
Container will be restarted if the probe fails.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>readinessProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Periodic probe of container service readiness.
Container will be removed from service endpoints if the probe fails.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>startupProbe&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#probe-v1-core">
Kubernetes core/v1.Probe
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DeprecatedStartupProbe indicates that the Pod has successfully initialized.
If specified, no other probes are executed until this completes successfully.
If this probe fails, the Pod will be restarted, just as if the livenessProbe failed.
This can be used to provide different probe parameters at the beginning of a Pod&rsquo;s lifecycle,
when it might take a long time to load data or warm a cache, than during steady-state operation.
This cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes">https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes&lt;/a>&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>lifecycle&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#lifecycle-v1-core">
Kubernetes core/v1.Lifecycle
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Actions that the management system should take in response to container lifecycle events.
Cannot be updated.&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>terminationMessagePath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Deprecated: This field will be removed in a future release and cannot be meaningfully used.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>terminationMessagePolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#terminationmessagepolicy-v1-core">
Kubernetes core/v1.TerminationMessagePolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Deprecated: This field will be removed in a future release and cannot be meaningfully used.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>imagePullPolicy&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#pullpolicy-v1-core">
Kubernetes core/v1.PullPolicy
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Image pull policy.
One of Always, Never, IfNotPresent.
Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.
Cannot be updated.
More info: &lt;a href="https://kubernetes.io/docs/concepts/containers/images#updating-images">https://kubernetes.io/docs/concepts/containers/images#updating-images&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>securityContext&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#securitycontext-v1-core">
Kubernetes core/v1.SecurityContext
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SecurityContext defines the security options the Step should be run with.
If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
More info: &lt;a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">https://kubernetes.io/docs/tasks/configure-pod-container/security-context/&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stdin&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether this Step should allocate a buffer for stdin in the container runtime. If this
is not set, reads from stdin in the Step will always result in EOF.
Default is false.&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stdinOnce&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether the container runtime should close the stdin channel after it has been opened by
a single attach. When stdin is true the stdin stream will remain open across multiple attach
sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the
first client attaches to stdin, and then remains open and accepts data until the client disconnects,
at which time stdin is closed and remains closed until the container is restarted. If this
flag is false, a container processes that reads from stdin will never receive an EOF.
Default is false&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>tty&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Whether this Step should allocate a DeprecatedTTY for itself, also requires &lsquo;stdin&rsquo; to be true.
Default is false.&lt;/p>
&lt;p>Deprecated: This field will be removed in a future release.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.StepWhenExpressions">StepWhenExpressions
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Step">Step&lt;/a>)
&lt;/p>
&lt;div>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.TaskBreakpoints">TaskBreakpoints
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunDebug">TaskRunDebug&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskBreakpoints defines the breakpoint config for a particular Task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>onFailure&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>if enabled, pause TaskRun on failure of a step
failed step will not exit&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>beforeSteps&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskKind">TaskKind
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRef">TaskRef&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskKind defines the type of Task used by the pipeline.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.TaskModifier">TaskModifier
&lt;/h3>
&lt;div>
&lt;p>TaskModifier is an interface to be implemented by different PipelineResources&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.TaskObject">TaskObject
&lt;/h3>
&lt;div>
&lt;p>TaskObject is implemented by Task&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.TaskRef">TaskRef
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.RunSpec">RunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.CustomRunSpec">CustomRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineTask">PipelineTask&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRef can be used to refer to a specific instance of a task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name of the referent; More info: &lt;a href="http://kubernetes.io/docs/user-guide/identifiers#names">http://kubernetes.io/docs/user-guide/identifiers#names&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>kind&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskKind">
TaskKind
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>TaskKind indicates the Kind of the Task:
1. Namespaced Task when Kind is set to &ldquo;Task&rdquo;. If Kind is &ldquo;&rdquo;, it defaults to &ldquo;Task&rdquo;.
2. Custom Task when Kind is non-empty and APIVersion is non-empty&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>apiVersion&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>API version of the referent
Note: A Task with non-empty APIVersion and Kind is considered a Custom Task&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>bundle&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Bundle url reference to a Tekton Bundle.&lt;/p>
&lt;p>Deprecated: Please use ResolverRef with the bundles resolver instead.
The field is staying there for go client backward compatibility, but is not used/allowed anymore.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>ResolverRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResolverRef">
ResolverRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ResolverRef allows referencing a Task in a remote location
like a git repo. This field is only supported when the alpha
feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskResource">TaskResource
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskResources">TaskResources&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskResource defines an input or output Resource declared as a requirement
by a Task. The Name field will be used to refer to these Resources within
the Task definition, and when provided as an Input, the Name will be the
path to the volume mounted containing this Resource as an input (e.g.
an input Resource named &lt;code>workspace&lt;/code> will be mounted at &lt;code>/workspace&lt;/code>).&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>ResourceDeclaration&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResourceDeclaration">
ResourceDeclaration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>ResourceDeclaration&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskResourceBinding">TaskResourceBinding
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunInputs">TaskRunInputs&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunOutputs">TaskRunOutputs&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunResources">TaskRunResources&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskResourceBinding points to the PipelineResource that
will be used for the Task input or output called Name.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>PipelineResourceBinding&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineResourceBinding">
PipelineResourceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>PipelineResourceBinding&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>paths&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Paths will probably be removed in #1284, and then PipelineResourceBinding can be used instead.
The optional Path field corresponds to a path on disk at which the Resource can be found
(used when providing the resource via mounted volume, overriding the default logic to fetch the Resource).&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskResources">TaskResources
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskResources allows a Pipeline to declare how its DeclaredPipelineResources
should be provided to a Task as its inputs and outputs.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>inputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskResource">
[]TaskResource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Inputs holds the mapping from the PipelineResources declared in
DeclaredPipelineResources to the input PipelineResources required by the Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>outputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskResource">
[]TaskResource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Outputs holds the mapping from the PipelineResources declared in
DeclaredPipelineResources to the input PipelineResources required by the Task.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskResult">TaskResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskResult used to describe the results of a task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name the given name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResultsType">
ResultsType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Type is the user-specified type of the result. The possible type
is currently &ldquo;string&rdquo; and will support &ldquo;array&rdquo; in following work.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>properties&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PropertySpec">
map[string]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1beta1.PropertySpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Properties is the JSON Schema properties to support key-value pairs results.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a human-readable description of the result&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResultValue">
ResultValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Value the expression used to retrieve the value of the result from an underlying Step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRunConditionType">TaskRunConditionType
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>TaskRunConditionType is an enum used to store TaskRun custom
conditions such as one used in spire results verification&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.TaskRunDebug">TaskRunDebug
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunDebug defines the breakpoint config for a particular TaskRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>breakpoints&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskBreakpoints">
TaskBreakpoints
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRunInputs">TaskRunInputs
&lt;/h3>
&lt;div>
&lt;p>TaskRunInputs holds the input values that this task was invoked with.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskResourceBinding">
[]TaskResourceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Param">
[]Param
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRunOutputs">TaskRunOutputs
&lt;/h3>
&lt;div>
&lt;p>TaskRunOutputs holds the output values that this task was invoked with.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskResourceBinding">
[]TaskResourceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRunReason">TaskRunReason
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;div>
&lt;p>TaskRunReason is an enum used to store all TaskRun reason for
the Succeeded condition that are controlled by the TaskRun itself. Failure
reasons that emerge from underlying resources are not included here&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.TaskRunResources">TaskRunResources
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunResources allows a TaskRun to declare inputs and outputs TaskResourceBinding&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>inputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskResourceBinding">
[]TaskResourceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Inputs holds the inputs resources this task was invoked with&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>outputs&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskResourceBinding">
[]TaskResourceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Outputs holds the inputs resources this task was invoked with&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRunResult">TaskRunResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunResult used to describe the results of a task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name the given name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>type&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResultsType">
ResultsType
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Type is the user-specified type of the result. The possible type
is currently &ldquo;string&rdquo; and will support &ldquo;array&rdquo; in following work.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ResultValue">
ResultValue
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Value the given value of the result&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRunSidecarOverride">TaskRunSidecarOverride
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineTaskRunSpec">PipelineTaskRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunSidecarOverride is used to override the values of a Sidecar in the corresponding Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The name of the Sidecar to override.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The resource requirements to apply to the Sidecar.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRunSpec">TaskRunSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRun">TaskRun&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunSpec defines the desired state of TaskRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>debug&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunDebug">
TaskRunDebug
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Params">
Params
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunResources">
TaskRunResources
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>serviceAccountName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskRef&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRef">
TaskRef
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>no more than one of the TaskRef and TaskSpec may be specified.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskSpec">
TaskSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Specifying TaskSpec can be disabled by setting
&lt;code>disable-inline-spec&lt;/code> feature flag.
See Task.spec (API version: tekton.dev/v1beta1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunSpecStatus">
TaskRunSpecStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Used for cancelling a TaskRun (and maybe more later on)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>statusMessage&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunSpecStatusMessage">
TaskRunSpecStatusMessage
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Status message for cancellation.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retries&lt;/code>&lt;br/>
&lt;em>
int
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Retries represents how many times this TaskRun should be retried in the event of Task failure.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>timeout&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Time after which one retry attempt times out. Defaults to 1 hour.
Refer Go&rsquo;s ParseDuration documentation for expected format: &lt;a href="https://golang.org/pkg/time/#ParseDuration">https://golang.org/pkg/time/#ParseDuration&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>podTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/unversioned.PodTemplate">
PodTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PodTemplate holds pod specific configuration&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceBinding">
[]WorkspaceBinding
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspaces is a list of WorkspaceBindings from volumes to workspaces.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stepOverrides&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunStepOverride">
[]TaskRunStepOverride
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Overrides to apply to Steps in this TaskRun.
If a field is specified in both a Step and a StepOverride,
the value from the StepOverride will be used.
This field is only supported when the alpha feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecarOverrides&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunSidecarOverride">
[]TaskRunSidecarOverride
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Overrides to apply to Sidecars in this TaskRun.
If a field is specified in both a Sidecar and a SidecarOverride,
the value from the SidecarOverride will be used.
This field is only supported when the alpha feature gate is enabled.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>computeResources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Compute resources to use for this TaskRun&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>managedBy&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ManagedBy indicates which controller is responsible for reconciling
this resource. If unset or set to &ldquo;tekton.dev/pipeline&rdquo;, the default
Tekton controller will manage this resource.
This field is immutable.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRunSpecStatus">TaskRunSpecStatus
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunSpecStatus defines the TaskRun spec status the user can provide&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.TaskRunSpecStatusMessage">TaskRunSpecStatusMessage
(&lt;code>string&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunSpecStatusMessage defines human readable status messages for the TaskRun.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.TaskRunStatus">TaskRunStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRun">TaskRun&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineRunTaskRunStatus">PipelineRunTaskRunStatus&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunStatus defines the observed state of TaskRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>Status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/knative.dev/pkg/apis/duck/v1#Status">
knative.dev/pkg/apis/duck/v1.Status
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>Status&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>TaskRunStatusFields&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunStatusFields">
TaskRunStatusFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>TaskRunStatusFields&lt;/code> are embedded into this type.)
&lt;/p>
&lt;p>TaskRunStatusFields inlines the status fields.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRunStatusFields">TaskRunStatusFields
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskRunStatus">TaskRunStatus&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunStatusFields holds the fields of TaskRun&rsquo;s status.  This is defined
separately and inlined so that other types can readily consume these fields
via duck typing.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>podName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>PodName is the name of the pod responsible for executing this task&rsquo;s steps.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>startTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>StartTime is the time the build is actually started.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>completionTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>CompletionTime is the time the build completed.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>steps&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.StepState">
[]StepState
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Steps describes the state of each build step container.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>cloudEvents&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CloudEventDelivery">
[]CloudEventDelivery
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>CloudEvents describe the state of each cloud event requested via a
CloudEventResource.&lt;/p>
&lt;p>Deprecated: No content written to it. To be Removed (since v0.44.0).
Use kubectl describe (CloudEventSent/CloudEventFailed k8s Events) or the
tekton_events_sent_total Prometheus metric for delivery visibility instead.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retriesStatus&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.RetriesStatus">
RetriesStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>RetriesStatus contains the history of TaskRunStatus in case of a retry in order to keep record of failures.
All TaskRunStatus stored in RetriesStatus will have no date within the RetriesStatus as is redundant.
See TaskRun.status (API version: tekton.dev/v1beta1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resourcesResult&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.PipelineResourceResult">
[]PipelineResourceResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results from Resources built during the TaskRun.
This is tomb-stoned along with the removal of pipelineResources
Deprecated: this field is not populated and is preserved only for backwards compatibility&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskResults&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskRunResult">
[]TaskRunResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>TaskRunResults are the list of results written out by the task&rsquo;s containers&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecars&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.SidecarState">
[]SidecarState
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The list has one entry per sidecar in the manifest. Each entry is
represents the imageid of the corresponding sidecar.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>taskSpec&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskSpec">
TaskSpec
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>TaskSpec contains the Spec from the dereferenced Task definition used to instantiate this TaskRun.
See Task.spec (API version tekton.dev/v1beta1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>provenance&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Provenance">
Provenance
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Provenance contains some key authenticated metadata about how a software artifact was built (what sources, what inputs/outputs, etc.).&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>spanContext&lt;/code>&lt;br/>
&lt;em>
map[string]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>SpanContext contains tracing span context fields&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRunStepArtifact">TaskRunStepArtifact
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.StepState">StepState&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunStepArtifact represents an artifact produced or used by a step within a task run.
It directly uses the Artifact type for its structure.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.TaskRunStepOverride">TaskRunStepOverride
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineTaskRunSpec">PipelineTaskRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunStepOverride is used to override the values of a Step in the corresponding Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The name of the Step to override.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#resourcerequirements-v1-core">
Kubernetes core/v1.ResourceRequirements
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>The resource requirements to apply to the Step.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TaskRunStepResult">TaskRunStepResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.StepState">StepState&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskRunStepResult is a type alias of TaskRunResult&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.TaskSpec">TaskSpec
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Task">Task&lt;/a>, &lt;a href="#tekton.dev/v1beta1.EmbeddedTask">EmbeddedTask&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunSpec">TaskRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunStatusFields">TaskRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TaskSpec defines the desired state of Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>resources&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskResources">
TaskResources
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Resources is a list input and output resource to run the task
Resources are represented in TaskRuns as bindings to instances of
PipelineResources.&lt;/p>
&lt;p>Deprecated: Unused, preserved only for backwards compatibility&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>params&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.ParamSpecs">
ParamSpecs
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Params is a list of input parameters required to run the task. Params
must be supplied as inputs in TaskRuns unless they declare a default
value.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>displayName&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>DisplayName is a user-facing name of the task that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is a user-facing description of the task that may be
used to populate a UI.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>steps&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Step">
[]Step
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Steps are the steps of the build; each step is run sequentially with the
source mounted into /workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumes&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Volumes">
Volumes
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Volumes is a collection of volumes that are available to mount into the
steps of the build.
See Pod.spec.volumes (API version: v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>stepTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.StepTemplate">
StepTemplate
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>StepTemplate can be used as the basis for all step containers within the
Task, so that the steps inherit settings on the base container.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>sidecars&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.Sidecar">
[]Sidecar
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Sidecars are run alongside the Task&rsquo;s step containers. They begin before
the steps start and end after the steps complete.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspaces&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.WorkspaceDeclaration">
[]WorkspaceDeclaration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Workspaces are the volumes that this Task requires.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.TaskResult">
[]TaskResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Results are values that this Task can output&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.TimeoutFields">TimeoutFields
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineRunSpec">PipelineRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>TimeoutFields allows granular specification of pipeline, task, and finally timeouts&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>pipeline&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Pipeline sets the maximum allowed duration for execution of the entire pipeline. The sum of individual timeouts for tasks and finally must not exceed this value.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>tasks&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Tasks sets the maximum allowed duration of this pipeline&rsquo;s tasks&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>finally&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#Duration">
Kubernetes meta/v1.Duration
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Finally sets the maximum allowed duration of this pipeline&rsquo;s finally&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.Volumes">Volumes
(&lt;code>[]k8s.io/api/core/v1.Volume&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.WhenExpression">WhenExpression
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.ChildStatusReference">ChildStatusReference&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineRunRunStatus">PipelineRunRunStatus&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineRunTaskRunStatus">PipelineRunTaskRunStatus&lt;/a>, &lt;a href="#tekton.dev/v1beta1.SkippedTask">SkippedTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WhenExpression allows a PipelineTask to declare expressions to be evaluated before the Task is run
to determine whether the Task should be executed or skipped&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>input&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Input is the string for guard checking which can be a static input or an output from a parent Task&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>operator&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/selection#Operator">
k8s.io/apimachinery/pkg/selection.Operator
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Operator that represents an Input&rsquo;s relationship to the values&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>values&lt;/code>&lt;br/>
&lt;em>
[]string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Values is an array of strings, which is compared against the input, for guard checking
It must be non-empty&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>cel&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>CEL is a string of Common Language Expression, which can be used to conditionally execute
the task based on the result of the expression evaluation
More info about CEL syntax: &lt;a href="https://github.com/google/cel-spec/blob/master/doc/langdef.md">https://github.com/google/cel-spec/blob/master/doc/langdef.md&lt;/a>&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.WhenExpressions">WhenExpressions
(&lt;code>[]github.com/tektoncd/pipeline/pkg/apis/pipeline/v1beta1.WhenExpression&lt;/code> alias)&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WhenExpressions are used to specify whether a Task should be executed or skipped
All of them need to evaluate to True for a guarded Task to be executed.&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.WorkspaceBinding">WorkspaceBinding
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1alpha1.RunSpec">RunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.CustomRunSpec">CustomRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.PipelineRunSpec">PipelineRunSpec&lt;/a>, &lt;a href="#tekton.dev/v1beta1.TaskRunSpec">TaskRunSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WorkspaceBinding maps a Task&rsquo;s declared workspace to a Volume.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of the workspace populated by the volume.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>subPath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SubPath is optionally a directory on the volume which should be used
for this binding (i.e. the volume will be mounted at this sub directory).&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>volumeClaimTemplate&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#persistentvolumeclaim-v1-core">
Kubernetes core/v1.PersistentVolumeClaim
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>VolumeClaimTemplate is a template for a claim that will be created in the same namespace.
The PipelineRun controller is responsible for creating a unique claim for each instance of PipelineRun.
See PersistentVolumeClaim (API version: v1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>persistentVolumeClaim&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#persistentvolumeclaimvolumesource-v1-core">
Kubernetes core/v1.PersistentVolumeClaimVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>PersistentVolumeClaimVolumeSource represents a reference to a
PersistentVolumeClaim in the same namespace. Either this OR EmptyDir can be used.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>emptyDir&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#emptydirvolumesource-v1-core">
Kubernetes core/v1.EmptyDirVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>EmptyDir represents a temporary directory that shares a Task&rsquo;s lifetime.
More info: &lt;a href="https://kubernetes.io/docs/concepts/storage/volumes#emptydir">https://kubernetes.io/docs/concepts/storage/volumes#emptydir&lt;/a>
Either this OR PersistentVolumeClaim can be used.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>configMap&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#configmapvolumesource-v1-core">
Kubernetes core/v1.ConfigMapVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>ConfigMap represents a configMap that should populate this workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>secret&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#secretvolumesource-v1-core">
Kubernetes core/v1.SecretVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Secret represents a secret that should populate this workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>projected&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#projectedvolumesource-v1-core">
Kubernetes core/v1.ProjectedVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Projected represents a projected volume that should populate this workspace.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>csi&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#csivolumesource-v1-core">
Kubernetes core/v1.CSIVolumeSource
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>CSI (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.WorkspaceDeclaration">WorkspaceDeclaration
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.TaskSpec">TaskSpec&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WorkspaceDeclaration is a declaration of a volume that a Task requires.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name by which you can bind the volume at runtime.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>description&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Description is an optional human readable description of this volume.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>mountPath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>MountPath overrides the directory that the volume will be made available at.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>readOnly&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>ReadOnly dictates whether a mounted volume is writable. By default this
field is false and so mounted volumes are writable.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>optional&lt;/code>&lt;br/>
&lt;em>
bool
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Optional marks a Workspace as not being required in TaskRuns. By default
this field is false and so declared workspaces are required.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.WorkspacePipelineDeclaration">WorkspacePipelineDeclaration
&lt;/h3>
&lt;div>
&lt;p>WorkspacePipelineDeclaration creates a named slot in a Pipeline that a PipelineRun
is expected to populate with a workspace binding.&lt;/p>
&lt;p>Deprecated: use PipelineWorkspaceDeclaration type instead&lt;/p>
&lt;/div>
&lt;h3 id="tekton.dev/v1beta1.WorkspacePipelineTaskBinding">WorkspacePipelineTaskBinding
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.PipelineTask">PipelineTask&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WorkspacePipelineTaskBinding describes how a workspace passed into the pipeline should be
mapped to a task&rsquo;s declared workspace.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of the workspace as declared by the task&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>workspace&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Workspace is the name of the workspace declared by the pipeline&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>subPath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>SubPath is optionally a directory on the volume which should be used
for this binding (i.e. the volume will be mounted at this sub directory).&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.WorkspaceUsage">WorkspaceUsage
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.Sidecar">Sidecar&lt;/a>, &lt;a href="#tekton.dev/v1beta1.Step">Step&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>WorkspaceUsage is used by a Step or Sidecar to declare that it wants isolated access
to a Workspace defined in a Task.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name is the name of the workspace this Step or Sidecar wants access to.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>mountPath&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>MountPath is the path that the workspace should be mounted to inside the Step or Sidecar,
overriding any MountPath specified in the Task&rsquo;s WorkspaceDeclaration.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.CustomRunResult">CustomRunResult
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.CustomRunStatusFields">CustomRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>CustomRunResult used to describe the results of a task&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>name&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Name the given name&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>value&lt;/code>&lt;br/>
&lt;em>
string
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>Value the given value of the result&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.CustomRunStatus">CustomRunStatus
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1.PipelineRunRunStatus">PipelineRunRunStatus&lt;/a>, &lt;a href="#tekton.dev/v1beta1.CustomRunStatusFields">CustomRunStatusFields&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>CustomRunStatus defines the observed state of CustomRun&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>Status&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/knative.dev/pkg/apis/duck/v1#Status">
knative.dev/pkg/apis/duck/v1.Status
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>Status&lt;/code> are embedded into this type.)
&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>CustomRunStatusFields&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CustomRunStatusFields">
CustomRunStatusFields
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>
(Members of &lt;code>CustomRunStatusFields&lt;/code> are embedded into this type.)
&lt;/p>
&lt;p>CustomRunStatusFields inlines the status fields.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;h3 id="tekton.dev/v1beta1.CustomRunStatusFields">CustomRunStatusFields
&lt;/h3>
&lt;p>
(&lt;em>Appears on:&lt;/em>&lt;a href="#tekton.dev/v1beta1.CustomRunStatus">CustomRunStatus&lt;/a>)
&lt;/p>
&lt;div>
&lt;p>CustomRunStatusFields holds the fields of CustomRun&rsquo;s status.  This is defined
separately and inlined so that other types can readily consume these fields
via duck typing.&lt;/p>
&lt;/div>
&lt;table>
&lt;thead>
&lt;tr>
&lt;th>Field&lt;/th>
&lt;th>Description&lt;/th>
&lt;/tr>
&lt;/thead>
&lt;tbody>
&lt;tr>
&lt;td>
&lt;code>startTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>StartTime is the time the build is actually started.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>completionTime&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.24/#time-v1-meta">
Kubernetes meta/v1.Time
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>CompletionTime is the time the build completed.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>results&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CustomRunResult">
[]CustomRunResult
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>Results reports any output result values to be consumed by later
tasks in a pipeline.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>retriesStatus&lt;/code>&lt;br/>
&lt;em>
&lt;a href="#tekton.dev/v1beta1.CustomRunStatus">
[]CustomRunStatus
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;em>(Optional)&lt;/em>
&lt;p>RetriesStatus contains the history of CustomRunStatus, in case of a retry.
See CustomRun.status (API version: tekton.dev/v1beta1)&lt;/p>
&lt;/td>
&lt;/tr>
&lt;tr>
&lt;td>
&lt;code>extraFields&lt;/code>&lt;br/>
&lt;em>
&lt;a href="https://pkg.go.dev/k8s.io/apimachinery/pkg/runtime#RawExtension">
k8s.io/apimachinery/pkg/runtime.RawExtension
&lt;/a>
&lt;/em>
&lt;/td>
&lt;td>
&lt;p>ExtraFields holds arbitrary fields provided by the custom task
controller.&lt;/p>
&lt;/td>
&lt;/tr>
&lt;/tbody>
&lt;/table>
&lt;hr/>
&lt;p>&lt;em>
Generated with &lt;code>gen-crd-api-reference-docs&lt;/code>
.
&lt;/em>&lt;/p>
