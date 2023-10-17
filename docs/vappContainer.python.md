# `vsphere_vapp_container`

Refer to the Terraform Registory for docs: [`vsphere_vapp_container`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container).

# `vappContainer` Submodule <a name="`vappContainer` Submodule" id="@cdktf/provider-vsphere.vappContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VappContainer <a name="VappContainer" id="@cdktf/provider-vsphere.vappContainer.VappContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container vsphere_vapp_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vapp_container

vappContainer.VappContainer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent_resource_pool_id: str,
  cpu_expandable: typing.Union[bool, IResolvable] = None,
  cpu_limit: typing.Union[int, float] = None,
  cpu_reservation: typing.Union[int, float] = None,
  cpu_share_level: str = None,
  cpu_shares: typing.Union[int, float] = None,
  custom_attributes: typing.Mapping[str] = None,
  id: str = None,
  memory_expandable: typing.Union[bool, IResolvable] = None,
  memory_limit: typing.Union[int, float] = None,
  memory_reservation: typing.Union[int, float] = None,
  memory_share_level: str = None,
  memory_shares: typing.Union[int, float] = None,
  parent_folder_id: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.parentResourcePoolId">parent_resource_pool_id</a></code> | <code>str</code> | The managed object ID of the parent resource pool or the compute resource the vApp container is in. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuExpandable">cpu_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | Amount of CPU (MHz) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuShares">cpu_shares</a></code> | <code>typing.Union[int, float]</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#id VappContainer#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryExpandable">memory_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | Amount of memory (MB) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryShares">memory_shares</a></code> | <code>typing.Union[int, float]</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.parentFolderId">parent_folder_id</a></code> | <code>str</code> | The ID of the parent VM folder. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.name"></a>

- *Type:* str

The name of the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#name VappContainer#name}

---

##### `parent_resource_pool_id`<sup>Required</sup> <a name="parent_resource_pool_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.parentResourcePoolId"></a>

- *Type:* str

The managed object ID of the parent resource pool or the compute resource the vApp container is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#parent_resource_pool_id VappContainer#parent_resource_pool_id}

---

##### `cpu_expandable`<sup>Optional</sup> <a name="cpu_expandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuExpandable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#cpu_expandable VappContainer#cpu_expandable}

---

##### `cpu_limit`<sup>Optional</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuLimit"></a>

- *Type:* typing.Union[int, float]

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#cpu_limit VappContainer#cpu_limit}

---

##### `cpu_reservation`<sup>Optional</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuReservation"></a>

- *Type:* typing.Union[int, float]

Amount of CPU (MHz) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#cpu_reservation VappContainer#cpu_reservation}

---

##### `cpu_share_level`<sup>Optional</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuShareLevel"></a>

- *Type:* str

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#cpu_share_level VappContainer#cpu_share_level}

---

##### `cpu_shares`<sup>Optional</sup> <a name="cpu_shares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.cpuShares"></a>

- *Type:* typing.Union[int, float]

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#cpu_shares VappContainer#cpu_shares}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.customAttributes"></a>

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#custom_attributes VappContainer#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#id VappContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memory_expandable`<sup>Optional</sup> <a name="memory_expandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryExpandable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#memory_expandable VappContainer#memory_expandable}

---

##### `memory_limit`<sup>Optional</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryLimit"></a>

- *Type:* typing.Union[int, float]

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#memory_limit VappContainer#memory_limit}

---

##### `memory_reservation`<sup>Optional</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryReservation"></a>

- *Type:* typing.Union[int, float]

Amount of memory (MB) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#memory_reservation VappContainer#memory_reservation}

---

##### `memory_share_level`<sup>Optional</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryShareLevel"></a>

- *Type:* str

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#memory_share_level VappContainer#memory_share_level}

---

##### `memory_shares`<sup>Optional</sup> <a name="memory_shares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.memoryShares"></a>

- *Type:* typing.Union[int, float]

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#memory_shares VappContainer#memory_shares}

---

##### `parent_folder_id`<sup>Optional</sup> <a name="parent_folder_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.parentFolderId"></a>

- *Type:* str

The ID of the parent VM folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#parent_folder_id VappContainer#parent_folder_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#tags VappContainer#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuExpandable">reset_cpu_expandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuLimit">reset_cpu_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuReservation">reset_cpu_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShareLevel">reset_cpu_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShares">reset_cpu_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryExpandable">reset_memory_expandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryLimit">reset_memory_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryReservation">reset_memory_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShareLevel">reset_memory_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShares">reset_memory_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetParentFolderId">reset_parent_folder_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.vappContainer.VappContainer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.vappContainer.VappContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappContainer.VappContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.vappContainer.VappContainer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_cpu_expandable` <a name="reset_cpu_expandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuExpandable"></a>

```python
def reset_cpu_expandable() -> None
```

##### `reset_cpu_limit` <a name="reset_cpu_limit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuLimit"></a>

```python
def reset_cpu_limit() -> None
```

##### `reset_cpu_reservation` <a name="reset_cpu_reservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuReservation"></a>

```python
def reset_cpu_reservation() -> None
```

##### `reset_cpu_share_level` <a name="reset_cpu_share_level" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShareLevel"></a>

```python
def reset_cpu_share_level() -> None
```

##### `reset_cpu_shares` <a name="reset_cpu_shares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCpuShares"></a>

```python
def reset_cpu_shares() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_memory_expandable` <a name="reset_memory_expandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryExpandable"></a>

```python
def reset_memory_expandable() -> None
```

##### `reset_memory_limit` <a name="reset_memory_limit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryLimit"></a>

```python
def reset_memory_limit() -> None
```

##### `reset_memory_reservation` <a name="reset_memory_reservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryReservation"></a>

```python
def reset_memory_reservation() -> None
```

##### `reset_memory_share_level` <a name="reset_memory_share_level" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShareLevel"></a>

```python
def reset_memory_share_level() -> None
```

##### `reset_memory_shares` <a name="reset_memory_shares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetMemoryShares"></a>

```python
def reset_memory_shares() -> None
```

##### `reset_parent_folder_id` <a name="reset_parent_folder_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetParentFolderId"></a>

```python
def reset_parent_folder_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VappContainer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import vapp_container

vappContainer.VappContainer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import vapp_container

vappContainer.VappContainer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import vapp_container

vappContainer.VappContainer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappContainer.VappContainer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import vapp_container

vappContainer.VappContainer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VappContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VappContainer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VappContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VappContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandableInput">cpu_expandable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimitInput">cpu_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservationInput">cpu_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevelInput">cpu_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuSharesInput">cpu_shares_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributesInput">custom_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandableInput">memory_expandable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimitInput">memory_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservationInput">memory_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevelInput">memory_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memorySharesInput">memory_shares_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderIdInput">parent_folder_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolIdInput">parent_resource_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandable">cpu_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShares">cpu_shares</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandable">memory_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShares">memory_shares</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderId">parent_folder_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolId">parent_resource_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cpu_expandable_input`<sup>Optional</sup> <a name="cpu_expandable_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandableInput"></a>

```python
cpu_expandable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_limit_input`<sup>Optional</sup> <a name="cpu_limit_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimitInput"></a>

```python
cpu_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_reservation_input`<sup>Optional</sup> <a name="cpu_reservation_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservationInput"></a>

```python
cpu_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_level_input`<sup>Optional</sup> <a name="cpu_share_level_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevelInput"></a>

```python
cpu_share_level_input: str
```

- *Type:* str

---

##### `cpu_shares_input`<sup>Optional</sup> <a name="cpu_shares_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuSharesInput"></a>

```python
cpu_shares_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributesInput"></a>

```python
custom_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `memory_expandable_input`<sup>Optional</sup> <a name="memory_expandable_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandableInput"></a>

```python
memory_expandable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_limit_input`<sup>Optional</sup> <a name="memory_limit_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimitInput"></a>

```python
memory_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation_input`<sup>Optional</sup> <a name="memory_reservation_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservationInput"></a>

```python
memory_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_share_level_input`<sup>Optional</sup> <a name="memory_share_level_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevelInput"></a>

```python
memory_share_level_input: str
```

- *Type:* str

---

##### `memory_shares_input`<sup>Optional</sup> <a name="memory_shares_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memorySharesInput"></a>

```python
memory_shares_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_folder_id_input`<sup>Optional</sup> <a name="parent_folder_id_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderIdInput"></a>

```python
parent_folder_id_input: str
```

- *Type:* str

---

##### `parent_resource_pool_id_input`<sup>Optional</sup> <a name="parent_resource_pool_id_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolIdInput"></a>

```python
parent_resource_pool_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_expandable`<sup>Required</sup> <a name="cpu_expandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuExpandable"></a>

```python
cpu_expandable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_limit`<sup>Required</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuLimit"></a>

```python
cpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_reservation`<sup>Required</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuReservation"></a>

```python
cpu_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_level`<sup>Required</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShareLevel"></a>

```python
cpu_share_level: str
```

- *Type:* str

---

##### `cpu_shares`<sup>Required</sup> <a name="cpu_shares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.cpuShares"></a>

```python
cpu_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `memory_expandable`<sup>Required</sup> <a name="memory_expandable" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryExpandable"></a>

```python
memory_expandable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_limit`<sup>Required</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryLimit"></a>

```python
memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation`<sup>Required</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_share_level`<sup>Required</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShareLevel"></a>

```python
memory_share_level: str
```

- *Type:* str

---

##### `memory_shares`<sup>Required</sup> <a name="memory_shares" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.memoryShares"></a>

```python
memory_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_folder_id`<sup>Required</sup> <a name="parent_folder_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentFolderId"></a>

```python
parent_folder_id: str
```

- *Type:* str

---

##### `parent_resource_pool_id`<sup>Required</sup> <a name="parent_resource_pool_id" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.parentResourcePoolId"></a>

```python
parent_resource_pool_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vappContainer.VappContainer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VappContainerConfig <a name="VappContainerConfig" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vapp_container

vappContainer.VappContainerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent_resource_pool_id: str,
  cpu_expandable: typing.Union[bool, IResolvable] = None,
  cpu_limit: typing.Union[int, float] = None,
  cpu_reservation: typing.Union[int, float] = None,
  cpu_share_level: str = None,
  cpu_shares: typing.Union[int, float] = None,
  custom_attributes: typing.Mapping[str] = None,
  id: str = None,
  memory_expandable: typing.Union[bool, IResolvable] = None,
  memory_limit: typing.Union[int, float] = None,
  memory_reservation: typing.Union[int, float] = None,
  memory_share_level: str = None,
  memory_shares: typing.Union[int, float] = None,
  parent_folder_id: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.name">name</a></code> | <code>str</code> | The name of the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentResourcePoolId">parent_resource_pool_id</a></code> | <code>str</code> | The managed object ID of the parent resource pool or the compute resource the vApp container is in. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuExpandable">cpu_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | Amount of CPU (MHz) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShares">cpu_shares</a></code> | <code>typing.Union[int, float]</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#id VappContainer#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryExpandable">memory_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | The utilization of a vApp container will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | Amount of memory (MB) that is guaranteed available to the vApp container. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShares">memory_shares</a></code> | <code>typing.Union[int, float]</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentFolderId">parent_folder_id</a></code> | <code>str</code> | The ID of the parent VM folder. |
| <code><a href="#@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#name VappContainer#name}

---

##### `parent_resource_pool_id`<sup>Required</sup> <a name="parent_resource_pool_id" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentResourcePoolId"></a>

```python
parent_resource_pool_id: str
```

- *Type:* str

The managed object ID of the parent resource pool or the compute resource the vApp container is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#parent_resource_pool_id VappContainer#parent_resource_pool_id}

---

##### `cpu_expandable`<sup>Optional</sup> <a name="cpu_expandable" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuExpandable"></a>

```python
cpu_expandable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#cpu_expandable VappContainer#cpu_expandable}

---

##### `cpu_limit`<sup>Optional</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuLimit"></a>

```python
cpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#cpu_limit VappContainer#cpu_limit}

---

##### `cpu_reservation`<sup>Optional</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuReservation"></a>

```python
cpu_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of CPU (MHz) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#cpu_reservation VappContainer#cpu_reservation}

---

##### `cpu_share_level`<sup>Optional</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShareLevel"></a>

```python
cpu_share_level: str
```

- *Type:* str

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#cpu_share_level VappContainer#cpu_share_level}

---

##### `cpu_shares`<sup>Optional</sup> <a name="cpu_shares" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.cpuShares"></a>

```python
cpu_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#cpu_shares VappContainer#cpu_shares}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#custom_attributes VappContainer#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#id VappContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memory_expandable`<sup>Optional</sup> <a name="memory_expandable" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryExpandable"></a>

```python
memory_expandable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the reservation on a vApp container can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#memory_expandable VappContainer#memory_expandable}

---

##### `memory_limit`<sup>Optional</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryLimit"></a>

```python
memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization of a vApp container will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#memory_limit VappContainer#memory_limit}

---

##### `memory_reservation`<sup>Optional</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of memory (MB) that is guaranteed available to the vApp container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#memory_reservation VappContainer#memory_reservation}

---

##### `memory_share_level`<sup>Optional</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShareLevel"></a>

```python
memory_share_level: str
```

- *Type:* str

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#memory_share_level VappContainer#memory_share_level}

---

##### `memory_shares`<sup>Optional</sup> <a name="memory_shares" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.memoryShares"></a>

```python
memory_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#memory_shares VappContainer#memory_shares}

---

##### `parent_folder_id`<sup>Optional</sup> <a name="parent_folder_id" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.parentFolderId"></a>

```python
parent_folder_id: str
```

- *Type:* str

The ID of the parent VM folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#parent_folder_id VappContainer#parent_folder_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vappContainer.VappContainerConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/vapp_container#tags VappContainer#tags}

---



