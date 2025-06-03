# `supervisor` Submodule <a name="`supervisor` Submodule" id="@cdktf/provider-vsphere.supervisor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Supervisor <a name="Supervisor" id="@cdktf/provider-vsphere.supervisor.Supervisor"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor vsphere_supervisor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.Supervisor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  content_library: str,
  dvs_uuid: str,
  edge_cluster: str,
  egress_cidr: typing.Union[IResolvable, typing.List[SupervisorEgressCidr]],
  ingress_cidr: typing.Union[IResolvable, typing.List[SupervisorIngressCidr]],
  main_dns: typing.List[str],
  main_ntp: typing.List[str],
  management_network: SupervisorManagementNetwork,
  pod_cidr: typing.Union[IResolvable, typing.List[SupervisorPodCidr]],
  search_domains: typing.List[str],
  service_cidr: SupervisorServiceCidr,
  sizing_hint: str,
  storage_policy: str,
  worker_dns: typing.List[str],
  worker_ntp: typing.List[str],
  id: str = None,
  namespace: typing.Union[IResolvable, typing.List[SupervisorNamespace]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | ID of the vSphere cluster on which workload management will be enabled. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.contentLibrary">content_library</a></code> | <code>str</code> | ID of the subscribed content library. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.dvsUuid">dvs_uuid</a></code> | <code>str</code> | The UUID (not ID) of the distributed switch. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.edgeCluster">edge_cluster</a></code> | <code>str</code> | ID of the NSX Edge Cluster. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.egressCidr">egress_cidr</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>]]</code> | egress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.ingressCidr">ingress_cidr</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>]]</code> | ingress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.mainDns">main_dns</a></code> | <code>typing.List[str]</code> | List of DNS servers to use on the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.mainNtp">main_ntp</a></code> | <code>typing.List[str]</code> | List of NTP servers to use on the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.managementNetwork">management_network</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | management_network block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.podCidr">pod_cidr</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>]]</code> | pod_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.searchDomains">search_domains</a></code> | <code>typing.List[str]</code> | List of DNS search domains. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.serviceCidr">service_cidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | service_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.sizingHint">sizing_hint</a></code> | <code>str</code> | Size of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.storagePolicy">storage_policy</a></code> | <code>str</code> | The name of a storage policy associated with the datastore where the container images will be stored. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.workerDns">worker_dns</a></code> | <code>typing.List[str]</code> | List of DNS servers to use on the worker nodes. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.workerNtp">worker_ntp</a></code> | <code>typing.List[str]</code> | List of NTP servers to use on the worker nodes. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#id Supervisor#id}. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.namespace">namespace</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>]]</code> | namespace block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.cluster"></a>

- *Type:* str

ID of the vSphere cluster on which workload management will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#cluster Supervisor#cluster}

---

##### `content_library`<sup>Required</sup> <a name="content_library" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.contentLibrary"></a>

- *Type:* str

ID of the subscribed content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#content_library Supervisor#content_library}

---

##### `dvs_uuid`<sup>Required</sup> <a name="dvs_uuid" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.dvsUuid"></a>

- *Type:* str

The UUID (not ID) of the distributed switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#dvs_uuid Supervisor#dvs_uuid}

---

##### `edge_cluster`<sup>Required</sup> <a name="edge_cluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.edgeCluster"></a>

- *Type:* str

ID of the NSX Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#edge_cluster Supervisor#edge_cluster}

---

##### `egress_cidr`<sup>Required</sup> <a name="egress_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.egressCidr"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>]]

egress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#egress_cidr Supervisor#egress_cidr}

---

##### `ingress_cidr`<sup>Required</sup> <a name="ingress_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.ingressCidr"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>]]

ingress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#ingress_cidr Supervisor#ingress_cidr}

---

##### `main_dns`<sup>Required</sup> <a name="main_dns" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.mainDns"></a>

- *Type:* typing.List[str]

List of DNS servers to use on the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#main_dns Supervisor#main_dns}

---

##### `main_ntp`<sup>Required</sup> <a name="main_ntp" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.mainNtp"></a>

- *Type:* typing.List[str]

List of NTP servers to use on the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#main_ntp Supervisor#main_ntp}

---

##### `management_network`<sup>Required</sup> <a name="management_network" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.managementNetwork"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

management_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#management_network Supervisor#management_network}

---

##### `pod_cidr`<sup>Required</sup> <a name="pod_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.podCidr"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>]]

pod_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#pod_cidr Supervisor#pod_cidr}

---

##### `search_domains`<sup>Required</sup> <a name="search_domains" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.searchDomains"></a>

- *Type:* typing.List[str]

List of DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#search_domains Supervisor#search_domains}

---

##### `service_cidr`<sup>Required</sup> <a name="service_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.serviceCidr"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

service_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#service_cidr Supervisor#service_cidr}

---

##### `sizing_hint`<sup>Required</sup> <a name="sizing_hint" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.sizingHint"></a>

- *Type:* str

Size of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#sizing_hint Supervisor#sizing_hint}

---

##### `storage_policy`<sup>Required</sup> <a name="storage_policy" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.storagePolicy"></a>

- *Type:* str

The name of a storage policy associated with the datastore where the container images will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#storage_policy Supervisor#storage_policy}

---

##### `worker_dns`<sup>Required</sup> <a name="worker_dns" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.workerDns"></a>

- *Type:* typing.List[str]

List of DNS servers to use on the worker nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#worker_dns Supervisor#worker_dns}

---

##### `worker_ntp`<sup>Required</sup> <a name="worker_ntp" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.workerNtp"></a>

- *Type:* typing.List[str]

List of NTP servers to use on the worker nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#worker_ntp Supervisor#worker_ntp}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#id Supervisor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.Initializer.parameter.namespace"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>]]

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#namespace Supervisor#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr">put_egress_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr">put_ingress_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork">put_management_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace">put_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr">put_pod_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr">put_service_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.supervisor.Supervisor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.supervisor.Supervisor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.supervisor.Supervisor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.supervisor.Supervisor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.supervisor.Supervisor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.supervisor.Supervisor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.supervisor.Supervisor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.Supervisor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_egress_cidr` <a name="put_egress_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr"></a>

```python
def put_egress_cidr(
  value: typing.Union[IResolvable, typing.List[SupervisorEgressCidr]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putEgressCidr.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>]]

---

##### `put_ingress_cidr` <a name="put_ingress_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr"></a>

```python
def put_ingress_cidr(
  value: typing.Union[IResolvable, typing.List[SupervisorIngressCidr]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putIngressCidr.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>]]

---

##### `put_management_network` <a name="put_management_network" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork"></a>

```python
def put_management_network(
  address_count: typing.Union[int, float],
  gateway: str,
  network: str,
  starting_address: str,
  subnet_mask: str
) -> None
```

###### `address_count`<sup>Required</sup> <a name="address_count" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork.parameter.addressCount"></a>

- *Type:* typing.Union[int, float]

Number of addresses to allocate. Starts from 'starting_address'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#address_count Supervisor#address_count}

---

###### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork.parameter.gateway"></a>

- *Type:* str

Gateway IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#gateway Supervisor#gateway}

---

###### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork.parameter.network"></a>

- *Type:* str

ID of the network. (e.g. a distributed port group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#network Supervisor#network}

---

###### `starting_address`<sup>Required</sup> <a name="starting_address" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork.parameter.startingAddress"></a>

- *Type:* str

Starting address of the management network range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#starting_address Supervisor#starting_address}

---

###### `subnet_mask`<sup>Required</sup> <a name="subnet_mask" id="@cdktf/provider-vsphere.supervisor.Supervisor.putManagementNetwork.parameter.subnetMask"></a>

- *Type:* str

Subnet mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#subnet_mask Supervisor#subnet_mask}

---

##### `put_namespace` <a name="put_namespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace"></a>

```python
def put_namespace(
  value: typing.Union[IResolvable, typing.List[SupervisorNamespace]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putNamespace.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>]]

---

##### `put_pod_cidr` <a name="put_pod_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr"></a>

```python
def put_pod_cidr(
  value: typing.Union[IResolvable, typing.List[SupervisorPodCidr]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.supervisor.Supervisor.putPodCidr.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>]]

---

##### `put_service_cidr` <a name="put_service_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr"></a>

```python
def put_service_cidr(
  address: str,
  prefix: typing.Union[int, float]
) -> None
```

###### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr.parameter.address"></a>

- *Type:* str

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#address Supervisor#address}

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.Supervisor.putServiceCidr.parameter.prefix"></a>

- *Type:* typing.Union[int, float]

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#prefix Supervisor#prefix}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Supervisor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.Supervisor.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.supervisor.Supervisor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.Supervisor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.Supervisor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.supervisor.Supervisor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.Supervisor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Supervisor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Supervisor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Supervisor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Supervisor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidr">egress_cidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList">SupervisorEgressCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidr">ingress_cidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList">SupervisorIngressCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetwork">management_network</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference">SupervisorManagementNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList">SupervisorNamespaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidr">pod_cidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList">SupervisorPodCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidr">service_cidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference">SupervisorServiceCidrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibraryInput">content_library_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuidInput">dvs_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeClusterInput">edge_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidrInput">egress_cidr_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidrInput">ingress_cidr_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDnsInput">main_dns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtpInput">main_ntp_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetworkInput">management_network_input</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.namespaceInput">namespace_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidrInput">pod_cidr_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomainsInput">search_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidrInput">service_cidr_input</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHintInput">sizing_hint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicyInput">storage_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDnsInput">worker_dns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtpInput">worker_ntp_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibrary">content_library</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuid">dvs_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeCluster">edge_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDns">main_dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtp">main_ntp</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomains">search_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHint">sizing_hint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicy">storage_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDns">worker_dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtp">worker_ntp</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `egress_cidr`<sup>Required</sup> <a name="egress_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidr"></a>

```python
egress_cidr: SupervisorEgressCidrList
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList">SupervisorEgressCidrList</a>

---

##### `ingress_cidr`<sup>Required</sup> <a name="ingress_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidr"></a>

```python
ingress_cidr: SupervisorIngressCidrList
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList">SupervisorIngressCidrList</a>

---

##### `management_network`<sup>Required</sup> <a name="management_network" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetwork"></a>

```python
management_network: SupervisorManagementNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference">SupervisorManagementNetworkOutputReference</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.namespace"></a>

```python
namespace: SupervisorNamespaceList
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList">SupervisorNamespaceList</a>

---

##### `pod_cidr`<sup>Required</sup> <a name="pod_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidr"></a>

```python
pod_cidr: SupervisorPodCidrList
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList">SupervisorPodCidrList</a>

---

##### `service_cidr`<sup>Required</sup> <a name="service_cidr" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidr"></a>

```python
service_cidr: SupervisorServiceCidrOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference">SupervisorServiceCidrOutputReference</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `content_library_input`<sup>Optional</sup> <a name="content_library_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibraryInput"></a>

```python
content_library_input: str
```

- *Type:* str

---

##### `dvs_uuid_input`<sup>Optional</sup> <a name="dvs_uuid_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuidInput"></a>

```python
dvs_uuid_input: str
```

- *Type:* str

---

##### `edge_cluster_input`<sup>Optional</sup> <a name="edge_cluster_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeClusterInput"></a>

```python
edge_cluster_input: str
```

- *Type:* str

---

##### `egress_cidr_input`<sup>Optional</sup> <a name="egress_cidr_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.egressCidrInput"></a>

```python
egress_cidr_input: typing.Union[IResolvable, typing.List[SupervisorEgressCidr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_cidr_input`<sup>Optional</sup> <a name="ingress_cidr_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.ingressCidrInput"></a>

```python
ingress_cidr_input: typing.Union[IResolvable, typing.List[SupervisorIngressCidr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>]]

---

##### `main_dns_input`<sup>Optional</sup> <a name="main_dns_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDnsInput"></a>

```python
main_dns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_ntp_input`<sup>Optional</sup> <a name="main_ntp_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtpInput"></a>

```python
main_ntp_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `management_network_input`<sup>Optional</sup> <a name="management_network_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.managementNetworkInput"></a>

```python
management_network_input: SupervisorManagementNetwork
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.namespaceInput"></a>

```python
namespace_input: typing.Union[IResolvable, typing.List[SupervisorNamespace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>]]

---

##### `pod_cidr_input`<sup>Optional</sup> <a name="pod_cidr_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.podCidrInput"></a>

```python
pod_cidr_input: typing.Union[IResolvable, typing.List[SupervisorPodCidr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>]]

---

##### `search_domains_input`<sup>Optional</sup> <a name="search_domains_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomainsInput"></a>

```python
search_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_cidr_input`<sup>Optional</sup> <a name="service_cidr_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.serviceCidrInput"></a>

```python
service_cidr_input: SupervisorServiceCidr
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---

##### `sizing_hint_input`<sup>Optional</sup> <a name="sizing_hint_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHintInput"></a>

```python
sizing_hint_input: str
```

- *Type:* str

---

##### `storage_policy_input`<sup>Optional</sup> <a name="storage_policy_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicyInput"></a>

```python
storage_policy_input: str
```

- *Type:* str

---

##### `worker_dns_input`<sup>Optional</sup> <a name="worker_dns_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDnsInput"></a>

```python
worker_dns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `worker_ntp_input`<sup>Optional</sup> <a name="worker_ntp_input" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtpInput"></a>

```python
worker_ntp_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `content_library`<sup>Required</sup> <a name="content_library" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.contentLibrary"></a>

```python
content_library: str
```

- *Type:* str

---

##### `dvs_uuid`<sup>Required</sup> <a name="dvs_uuid" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.dvsUuid"></a>

```python
dvs_uuid: str
```

- *Type:* str

---

##### `edge_cluster`<sup>Required</sup> <a name="edge_cluster" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.edgeCluster"></a>

```python
edge_cluster: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `main_dns`<sup>Required</sup> <a name="main_dns" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainDns"></a>

```python
main_dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_ntp`<sup>Required</sup> <a name="main_ntp" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.mainNtp"></a>

```python
main_ntp: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_domains`<sup>Required</sup> <a name="search_domains" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.searchDomains"></a>

```python
search_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sizing_hint`<sup>Required</sup> <a name="sizing_hint" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.sizingHint"></a>

```python
sizing_hint: str
```

- *Type:* str

---

##### `storage_policy`<sup>Required</sup> <a name="storage_policy" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.storagePolicy"></a>

```python
storage_policy: str
```

- *Type:* str

---

##### `worker_dns`<sup>Required</sup> <a name="worker_dns" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerDns"></a>

```python
worker_dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `worker_ntp`<sup>Required</sup> <a name="worker_ntp" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.workerNtp"></a>

```python
worker_ntp: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.Supervisor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.supervisor.Supervisor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SupervisorConfig <a name="SupervisorConfig" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  content_library: str,
  dvs_uuid: str,
  edge_cluster: str,
  egress_cidr: typing.Union[IResolvable, typing.List[SupervisorEgressCidr]],
  ingress_cidr: typing.Union[IResolvable, typing.List[SupervisorIngressCidr]],
  main_dns: typing.List[str],
  main_ntp: typing.List[str],
  management_network: SupervisorManagementNetwork,
  pod_cidr: typing.Union[IResolvable, typing.List[SupervisorPodCidr]],
  search_domains: typing.List[str],
  service_cidr: SupervisorServiceCidr,
  sizing_hint: str,
  storage_policy: str,
  worker_dns: typing.List[str],
  worker_ntp: typing.List[str],
  id: str = None,
  namespace: typing.Union[IResolvable, typing.List[SupervisorNamespace]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.cluster">cluster</a></code> | <code>str</code> | ID of the vSphere cluster on which workload management will be enabled. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.contentLibrary">content_library</a></code> | <code>str</code> | ID of the subscribed content library. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dvsUuid">dvs_uuid</a></code> | <code>str</code> | The UUID (not ID) of the distributed switch. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.edgeCluster">edge_cluster</a></code> | <code>str</code> | ID of the NSX Edge Cluster. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.egressCidr">egress_cidr</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>]]</code> | egress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.ingressCidr">ingress_cidr</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>]]</code> | ingress_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainDns">main_dns</a></code> | <code>typing.List[str]</code> | List of DNS servers to use on the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainNtp">main_ntp</a></code> | <code>typing.List[str]</code> | List of NTP servers to use on the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.managementNetwork">management_network</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | management_network block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.podCidr">pod_cidr</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>]]</code> | pod_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.searchDomains">search_domains</a></code> | <code>typing.List[str]</code> | List of DNS search domains. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.serviceCidr">service_cidr</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | service_cidr block. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.sizingHint">sizing_hint</a></code> | <code>str</code> | Size of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.storagePolicy">storage_policy</a></code> | <code>str</code> | The name of a storage policy associated with the datastore where the container images will be stored. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerDns">worker_dns</a></code> | <code>typing.List[str]</code> | List of DNS servers to use on the worker nodes. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerNtp">worker_ntp</a></code> | <code>typing.List[str]</code> | List of NTP servers to use on the worker nodes. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#id Supervisor#id}. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.namespace">namespace</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>]]</code> | namespace block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

ID of the vSphere cluster on which workload management will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#cluster Supervisor#cluster}

---

##### `content_library`<sup>Required</sup> <a name="content_library" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.contentLibrary"></a>

```python
content_library: str
```

- *Type:* str

ID of the subscribed content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#content_library Supervisor#content_library}

---

##### `dvs_uuid`<sup>Required</sup> <a name="dvs_uuid" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.dvsUuid"></a>

```python
dvs_uuid: str
```

- *Type:* str

The UUID (not ID) of the distributed switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#dvs_uuid Supervisor#dvs_uuid}

---

##### `edge_cluster`<sup>Required</sup> <a name="edge_cluster" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.edgeCluster"></a>

```python
edge_cluster: str
```

- *Type:* str

ID of the NSX Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#edge_cluster Supervisor#edge_cluster}

---

##### `egress_cidr`<sup>Required</sup> <a name="egress_cidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.egressCidr"></a>

```python
egress_cidr: typing.Union[IResolvable, typing.List[SupervisorEgressCidr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>]]

egress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#egress_cidr Supervisor#egress_cidr}

---

##### `ingress_cidr`<sup>Required</sup> <a name="ingress_cidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.ingressCidr"></a>

```python
ingress_cidr: typing.Union[IResolvable, typing.List[SupervisorIngressCidr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>]]

ingress_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#ingress_cidr Supervisor#ingress_cidr}

---

##### `main_dns`<sup>Required</sup> <a name="main_dns" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainDns"></a>

```python
main_dns: typing.List[str]
```

- *Type:* typing.List[str]

List of DNS servers to use on the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#main_dns Supervisor#main_dns}

---

##### `main_ntp`<sup>Required</sup> <a name="main_ntp" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.mainNtp"></a>

```python
main_ntp: typing.List[str]
```

- *Type:* typing.List[str]

List of NTP servers to use on the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#main_ntp Supervisor#main_ntp}

---

##### `management_network`<sup>Required</sup> <a name="management_network" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.managementNetwork"></a>

```python
management_network: SupervisorManagementNetwork
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

management_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#management_network Supervisor#management_network}

---

##### `pod_cidr`<sup>Required</sup> <a name="pod_cidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.podCidr"></a>

```python
pod_cidr: typing.Union[IResolvable, typing.List[SupervisorPodCidr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>]]

pod_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#pod_cidr Supervisor#pod_cidr}

---

##### `search_domains`<sup>Required</sup> <a name="search_domains" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.searchDomains"></a>

```python
search_domains: typing.List[str]
```

- *Type:* typing.List[str]

List of DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#search_domains Supervisor#search_domains}

---

##### `service_cidr`<sup>Required</sup> <a name="service_cidr" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.serviceCidr"></a>

```python
service_cidr: SupervisorServiceCidr
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

service_cidr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#service_cidr Supervisor#service_cidr}

---

##### `sizing_hint`<sup>Required</sup> <a name="sizing_hint" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.sizingHint"></a>

```python
sizing_hint: str
```

- *Type:* str

Size of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#sizing_hint Supervisor#sizing_hint}

---

##### `storage_policy`<sup>Required</sup> <a name="storage_policy" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.storagePolicy"></a>

```python
storage_policy: str
```

- *Type:* str

The name of a storage policy associated with the datastore where the container images will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#storage_policy Supervisor#storage_policy}

---

##### `worker_dns`<sup>Required</sup> <a name="worker_dns" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerDns"></a>

```python
worker_dns: typing.List[str]
```

- *Type:* typing.List[str]

List of DNS servers to use on the worker nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#worker_dns Supervisor#worker_dns}

---

##### `worker_ntp`<sup>Required</sup> <a name="worker_ntp" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.workerNtp"></a>

```python
worker_ntp: typing.List[str]
```

- *Type:* typing.List[str]

List of NTP servers to use on the worker nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#worker_ntp Supervisor#worker_ntp}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#id Supervisor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vsphere.supervisor.SupervisorConfig.property.namespace"></a>

```python
namespace: typing.Union[IResolvable, typing.List[SupervisorNamespace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>]]

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#namespace Supervisor#namespace}

---

### SupervisorEgressCidr <a name="SupervisorEgressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorEgressCidr(
  address: str,
  prefix: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.address">address</a></code> | <code>str</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.prefix">prefix</a></code> | <code>typing.Union[int, float]</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.address"></a>

```python
address: str
```

- *Type:* str

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr.property.prefix"></a>

```python
prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorIngressCidr <a name="SupervisorIngressCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorIngressCidr(
  address: str,
  prefix: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.address">address</a></code> | <code>str</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.prefix">prefix</a></code> | <code>typing.Union[int, float]</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.address"></a>

```python
address: str
```

- *Type:* str

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr.property.prefix"></a>

```python
prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorManagementNetwork <a name="SupervisorManagementNetwork" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorManagementNetwork(
  address_count: typing.Union[int, float],
  gateway: str,
  network: str,
  starting_address: str,
  subnet_mask: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.addressCount">address_count</a></code> | <code>typing.Union[int, float]</code> | Number of addresses to allocate. Starts from 'starting_address'. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.gateway">gateway</a></code> | <code>str</code> | Gateway IP address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.network">network</a></code> | <code>str</code> | ID of the network. (e.g. a distributed port group). |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.startingAddress">starting_address</a></code> | <code>str</code> | Starting address of the management network range. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.subnetMask">subnet_mask</a></code> | <code>str</code> | Subnet mask. |

---

##### `address_count`<sup>Required</sup> <a name="address_count" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.addressCount"></a>

```python
address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of addresses to allocate. Starts from 'starting_address'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#address_count Supervisor#address_count}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

Gateway IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#gateway Supervisor#gateway}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.network"></a>

```python
network: str
```

- *Type:* str

ID of the network. (e.g. a distributed port group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#network Supervisor#network}

---

##### `starting_address`<sup>Required</sup> <a name="starting_address" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.startingAddress"></a>

```python
starting_address: str
```

- *Type:* str

Starting address of the management network range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#starting_address Supervisor#starting_address}

---

##### `subnet_mask`<sup>Required</sup> <a name="subnet_mask" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork.property.subnetMask"></a>

```python
subnet_mask: str
```

- *Type:* str

Subnet mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#subnet_mask Supervisor#subnet_mask}

---

### SupervisorNamespace <a name="SupervisorNamespace" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorNamespace(
  name: str,
  content_libraries: typing.List[str] = None,
  vm_classes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.name">name</a></code> | <code>str</code> | The name of the namespace. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.contentLibraries">content_libraries</a></code> | <code>typing.List[str]</code> | A list of content libraries. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.vmClasses">vm_classes</a></code> | <code>typing.List[str]</code> | A list of virtual machine classes. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#name Supervisor#name}

---

##### `content_libraries`<sup>Optional</sup> <a name="content_libraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.contentLibraries"></a>

```python
content_libraries: typing.List[str]
```

- *Type:* typing.List[str]

A list of content libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#content_libraries Supervisor#content_libraries}

---

##### `vm_classes`<sup>Optional</sup> <a name="vm_classes" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespace.property.vmClasses"></a>

```python
vm_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of virtual machine classes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#vm_classes Supervisor#vm_classes}

---

### SupervisorPodCidr <a name="SupervisorPodCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorPodCidr(
  address: str,
  prefix: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.address">address</a></code> | <code>str</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.prefix">prefix</a></code> | <code>typing.Union[int, float]</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.address"></a>

```python
address: str
```

- *Type:* str

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidr.property.prefix"></a>

```python
prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#prefix Supervisor#prefix}

---

### SupervisorServiceCidr <a name="SupervisorServiceCidr" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorServiceCidr(
  address: str,
  prefix: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.address">address</a></code> | <code>str</code> | Network address. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.prefix">prefix</a></code> | <code>typing.Union[int, float]</code> | Subnet prefix. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.address"></a>

```python
address: str
```

- *Type:* str

Network address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#address Supervisor#address}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr.property.prefix"></a>

```python
prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Subnet prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/resources/supervisor#prefix Supervisor#prefix}

---

## Classes <a name="Classes" id="Classes"></a>

### SupervisorEgressCidrList <a name="SupervisorEgressCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorEgressCidrList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SupervisorEgressCidrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SupervisorEgressCidr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>]]

---


### SupervisorEgressCidrOutputReference <a name="SupervisorEgressCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorEgressCidrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefixInput">prefix_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefix">prefix</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefixInput"></a>

```python
prefix_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.prefix"></a>

```python
prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.supervisor.SupervisorEgressCidrOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SupervisorEgressCidr]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.supervisor.SupervisorEgressCidr">SupervisorEgressCidr</a>]

---


### SupervisorIngressCidrList <a name="SupervisorIngressCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorIngressCidrList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SupervisorIngressCidrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SupervisorIngressCidr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>]]

---


### SupervisorIngressCidrOutputReference <a name="SupervisorIngressCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorIngressCidrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefixInput">prefix_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefix">prefix</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefixInput"></a>

```python
prefix_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.prefix"></a>

```python
prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.supervisor.SupervisorIngressCidrOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SupervisorIngressCidr]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.supervisor.SupervisorIngressCidr">SupervisorIngressCidr</a>]

---


### SupervisorManagementNetworkOutputReference <a name="SupervisorManagementNetworkOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorManagementNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCountInput">address_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gatewayInput">gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddressInput">starting_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMaskInput">subnet_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCount">address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddress">starting_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMask">subnet_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_count_input`<sup>Optional</sup> <a name="address_count_input" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCountInput"></a>

```python
address_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gatewayInput"></a>

```python
gateway_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `starting_address_input`<sup>Optional</sup> <a name="starting_address_input" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddressInput"></a>

```python
starting_address_input: str
```

- *Type:* str

---

##### `subnet_mask_input`<sup>Optional</sup> <a name="subnet_mask_input" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMaskInput"></a>

```python
subnet_mask_input: str
```

- *Type:* str

---

##### `address_count`<sup>Required</sup> <a name="address_count" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.addressCount"></a>

```python
address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `starting_address`<sup>Required</sup> <a name="starting_address" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.startingAddress"></a>

```python
starting_address: str
```

- *Type:* str

---

##### `subnet_mask`<sup>Required</sup> <a name="subnet_mask" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.subnetMask"></a>

```python
subnet_mask: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.supervisor.SupervisorManagementNetworkOutputReference.property.internalValue"></a>

```python
internal_value: SupervisorManagementNetwork
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorManagementNetwork">SupervisorManagementNetwork</a>

---


### SupervisorNamespaceList <a name="SupervisorNamespaceList" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorNamespaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SupervisorNamespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SupervisorNamespace]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>]]

---


### SupervisorNamespaceOutputReference <a name="SupervisorNamespaceOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorNamespaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetContentLibraries">reset_content_libraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetVmClasses">reset_vm_classes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_libraries` <a name="reset_content_libraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetContentLibraries"></a>

```python
def reset_content_libraries() -> None
```

##### `reset_vm_classes` <a name="reset_vm_classes" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.resetVmClasses"></a>

```python
def reset_vm_classes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibrariesInput">content_libraries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClassesInput">vm_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibraries">content_libraries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClasses">vm_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_libraries_input`<sup>Optional</sup> <a name="content_libraries_input" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibrariesInput"></a>

```python
content_libraries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `vm_classes_input`<sup>Optional</sup> <a name="vm_classes_input" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClassesInput"></a>

```python
vm_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content_libraries`<sup>Required</sup> <a name="content_libraries" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.contentLibraries"></a>

```python
content_libraries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `vm_classes`<sup>Required</sup> <a name="vm_classes" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.vmClasses"></a>

```python
vm_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.supervisor.SupervisorNamespaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SupervisorNamespace]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.supervisor.SupervisorNamespace">SupervisorNamespace</a>]

---


### SupervisorPodCidrList <a name="SupervisorPodCidrList" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorPodCidrList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SupervisorPodCidrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SupervisorPodCidr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>]]

---


### SupervisorPodCidrOutputReference <a name="SupervisorPodCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorPodCidrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefixInput">prefix_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefix">prefix</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefixInput"></a>

```python
prefix_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.prefix"></a>

```python
prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.supervisor.SupervisorPodCidrOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SupervisorPodCidr]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.supervisor.SupervisorPodCidr">SupervisorPodCidr</a>]

---


### SupervisorServiceCidrOutputReference <a name="SupervisorServiceCidrOutputReference" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import supervisor

supervisor.SupervisorServiceCidrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefixInput">prefix_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefix">prefix</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefixInput"></a>

```python
prefix_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.prefix"></a>

```python
prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.supervisor.SupervisorServiceCidrOutputReference.property.internalValue"></a>

```python
internal_value: SupervisorServiceCidr
```

- *Type:* <a href="#@cdktf/provider-vsphere.supervisor.SupervisorServiceCidr">SupervisorServiceCidr</a>

---



