# `vsphere_resource_pool`

Refer to the Terraform Registory for docs: [`vsphere_resource_pool`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool).

# `resourcePool` Submodule <a name="`resourcePool` Submodule" id="@cdktf/provider-vsphere.resourcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcePool <a name="ResourcePool" id="@cdktf/provider-vsphere.resourcePool.ResourcePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool vsphere_resource_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import resource_pool

resourcePool.ResourcePool(
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
  scale_descendants_shares: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.parentResourcePoolId">parent_resource_pool_id</a></code> | <code>str</code> | The ID of the root resource pool of the compute resource the resource pool is in. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuExpandable">cpu_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | Amount of CPU (MHz) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuShares">cpu_shares</a></code> | <code>typing.Union[int, float]</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#id ResourcePool#id}. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryExpandable">memory_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | Amount of memory (MB) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryShares">memory_shares</a></code> | <code>typing.Union[int, float]</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scaleDescendantsShares">scale_descendants_shares</a></code> | <code>str</code> | Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.name"></a>

- *Type:* str

Name of resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#name ResourcePool#name}

---

##### `parent_resource_pool_id`<sup>Required</sup> <a name="parent_resource_pool_id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.parentResourcePoolId"></a>

- *Type:* str

The ID of the root resource pool of the compute resource the resource pool is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#parent_resource_pool_id ResourcePool#parent_resource_pool_id}

---

##### `cpu_expandable`<sup>Optional</sup> <a name="cpu_expandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuExpandable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#cpu_expandable ResourcePool#cpu_expandable}

---

##### `cpu_limit`<sup>Optional</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuLimit"></a>

- *Type:* typing.Union[int, float]

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#cpu_limit ResourcePool#cpu_limit}

---

##### `cpu_reservation`<sup>Optional</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuReservation"></a>

- *Type:* typing.Union[int, float]

Amount of CPU (MHz) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#cpu_reservation ResourcePool#cpu_reservation}

---

##### `cpu_share_level`<sup>Optional</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuShareLevel"></a>

- *Type:* str

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#cpu_share_level ResourcePool#cpu_share_level}

---

##### `cpu_shares`<sup>Optional</sup> <a name="cpu_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.cpuShares"></a>

- *Type:* typing.Union[int, float]

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#cpu_shares ResourcePool#cpu_shares}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.customAttributes"></a>

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#custom_attributes ResourcePool#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#id ResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memory_expandable`<sup>Optional</sup> <a name="memory_expandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryExpandable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#memory_expandable ResourcePool#memory_expandable}

---

##### `memory_limit`<sup>Optional</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryLimit"></a>

- *Type:* typing.Union[int, float]

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#memory_limit ResourcePool#memory_limit}

---

##### `memory_reservation`<sup>Optional</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryReservation"></a>

- *Type:* typing.Union[int, float]

Amount of memory (MB) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#memory_reservation ResourcePool#memory_reservation}

---

##### `memory_share_level`<sup>Optional</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryShareLevel"></a>

- *Type:* str

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#memory_share_level ResourcePool#memory_share_level}

---

##### `memory_shares`<sup>Optional</sup> <a name="memory_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.memoryShares"></a>

- *Type:* typing.Union[int, float]

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#memory_shares ResourcePool#memory_shares}

---

##### `scale_descendants_shares`<sup>Optional</sup> <a name="scale_descendants_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.scaleDescendantsShares"></a>

- *Type:* str

Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#scale_descendants_shares ResourcePool#scale_descendants_shares}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#tags ResourcePool#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuExpandable">reset_cpu_expandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuLimit">reset_cpu_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuReservation">reset_cpu_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShareLevel">reset_cpu_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShares">reset_cpu_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryExpandable">reset_memory_expandable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryLimit">reset_memory_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryReservation">reset_memory_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShareLevel">reset_memory_share_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShares">reset_memory_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetScaleDescendantsShares">reset_scale_descendants_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cpu_expandable` <a name="reset_cpu_expandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuExpandable"></a>

```python
def reset_cpu_expandable() -> None
```

##### `reset_cpu_limit` <a name="reset_cpu_limit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuLimit"></a>

```python
def reset_cpu_limit() -> None
```

##### `reset_cpu_reservation` <a name="reset_cpu_reservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuReservation"></a>

```python
def reset_cpu_reservation() -> None
```

##### `reset_cpu_share_level` <a name="reset_cpu_share_level" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShareLevel"></a>

```python
def reset_cpu_share_level() -> None
```

##### `reset_cpu_shares` <a name="reset_cpu_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCpuShares"></a>

```python
def reset_cpu_shares() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_memory_expandable` <a name="reset_memory_expandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryExpandable"></a>

```python
def reset_memory_expandable() -> None
```

##### `reset_memory_limit` <a name="reset_memory_limit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryLimit"></a>

```python
def reset_memory_limit() -> None
```

##### `reset_memory_reservation` <a name="reset_memory_reservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryReservation"></a>

```python
def reset_memory_reservation() -> None
```

##### `reset_memory_share_level` <a name="reset_memory_share_level" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShareLevel"></a>

```python
def reset_memory_share_level() -> None
```

##### `reset_memory_shares` <a name="reset_memory_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetMemoryShares"></a>

```python
def reset_memory_shares() -> None
```

##### `reset_scale_descendants_shares` <a name="reset_scale_descendants_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetScaleDescendantsShares"></a>

```python
def reset_scale_descendants_shares() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import resource_pool

resourcePool.ResourcePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import resource_pool

resourcePool.ResourcePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import resource_pool

resourcePool.ResourcePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandableInput">cpu_expandable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimitInput">cpu_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservationInput">cpu_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevelInput">cpu_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuSharesInput">cpu_shares_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributesInput">custom_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandableInput">memory_expandable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimitInput">memory_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservationInput">memory_reservation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevelInput">memory_share_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memorySharesInput">memory_shares_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolIdInput">parent_resource_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsSharesInput">scale_descendants_shares_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandable">cpu_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShares">cpu_shares</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandable">memory_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShares">memory_shares</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolId">parent_resource_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsShares">scale_descendants_shares</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cpu_expandable_input`<sup>Optional</sup> <a name="cpu_expandable_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandableInput"></a>

```python
cpu_expandable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_limit_input`<sup>Optional</sup> <a name="cpu_limit_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimitInput"></a>

```python
cpu_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_reservation_input`<sup>Optional</sup> <a name="cpu_reservation_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservationInput"></a>

```python
cpu_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_level_input`<sup>Optional</sup> <a name="cpu_share_level_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevelInput"></a>

```python
cpu_share_level_input: str
```

- *Type:* str

---

##### `cpu_shares_input`<sup>Optional</sup> <a name="cpu_shares_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuSharesInput"></a>

```python
cpu_shares_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributesInput"></a>

```python
custom_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `memory_expandable_input`<sup>Optional</sup> <a name="memory_expandable_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandableInput"></a>

```python
memory_expandable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_limit_input`<sup>Optional</sup> <a name="memory_limit_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimitInput"></a>

```python
memory_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation_input`<sup>Optional</sup> <a name="memory_reservation_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservationInput"></a>

```python
memory_reservation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_share_level_input`<sup>Optional</sup> <a name="memory_share_level_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevelInput"></a>

```python
memory_share_level_input: str
```

- *Type:* str

---

##### `memory_shares_input`<sup>Optional</sup> <a name="memory_shares_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memorySharesInput"></a>

```python
memory_shares_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_resource_pool_id_input`<sup>Optional</sup> <a name="parent_resource_pool_id_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolIdInput"></a>

```python
parent_resource_pool_id_input: str
```

- *Type:* str

---

##### `scale_descendants_shares_input`<sup>Optional</sup> <a name="scale_descendants_shares_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsSharesInput"></a>

```python
scale_descendants_shares_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_expandable`<sup>Required</sup> <a name="cpu_expandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuExpandable"></a>

```python
cpu_expandable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cpu_limit`<sup>Required</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuLimit"></a>

```python
cpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_reservation`<sup>Required</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuReservation"></a>

```python
cpu_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_share_level`<sup>Required</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShareLevel"></a>

```python
cpu_share_level: str
```

- *Type:* str

---

##### `cpu_shares`<sup>Required</sup> <a name="cpu_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.cpuShares"></a>

```python
cpu_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `memory_expandable`<sup>Required</sup> <a name="memory_expandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryExpandable"></a>

```python
memory_expandable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_limit`<sup>Required</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryLimit"></a>

```python
memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_reservation`<sup>Required</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_share_level`<sup>Required</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShareLevel"></a>

```python
memory_share_level: str
```

- *Type:* str

---

##### `memory_shares`<sup>Required</sup> <a name="memory_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.memoryShares"></a>

```python
memory_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_resource_pool_id`<sup>Required</sup> <a name="parent_resource_pool_id" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.parentResourcePoolId"></a>

```python
parent_resource_pool_id: str
```

- *Type:* str

---

##### `scale_descendants_shares`<sup>Required</sup> <a name="scale_descendants_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.scaleDescendantsShares"></a>

```python
scale_descendants_shares: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.resourcePool.ResourcePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcePoolConfig <a name="ResourcePoolConfig" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import resource_pool

resourcePool.ResourcePoolConfig(
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
  scale_descendants_shares: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.name">name</a></code> | <code>str</code> | Name of resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.parentResourcePoolId">parent_resource_pool_id</a></code> | <code>str</code> | The ID of the root resource pool of the compute resource the resource pool is in. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuExpandable">cpu_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuLimit">cpu_limit</a></code> | <code>typing.Union[int, float]</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuReservation">cpu_reservation</a></code> | <code>typing.Union[int, float]</code> | Amount of CPU (MHz) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShareLevel">cpu_share_level</a></code> | <code>str</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShares">cpu_shares</a></code> | <code>typing.Union[int, float]</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#id ResourcePool#id}. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryExpandable">memory_expandable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryLimit">memory_limit</a></code> | <code>typing.Union[int, float]</code> | The utilization of a resource pool will not exceed this limit, even if there are available resources. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryReservation">memory_reservation</a></code> | <code>typing.Union[int, float]</code> | Amount of memory (MB) that is guaranteed available to the resource pool. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShareLevel">memory_share_level</a></code> | <code>str</code> | The allocation level. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShares">memory_shares</a></code> | <code>typing.Union[int, float]</code> | The number of shares allocated. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.scaleDescendantsShares">scale_descendants_shares</a></code> | <code>str</code> | Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down. |
| <code><a href="#@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#name ResourcePool#name}

---

##### `parent_resource_pool_id`<sup>Required</sup> <a name="parent_resource_pool_id" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.parentResourcePoolId"></a>

```python
parent_resource_pool_id: str
```

- *Type:* str

The ID of the root resource pool of the compute resource the resource pool is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#parent_resource_pool_id ResourcePool#parent_resource_pool_id}

---

##### `cpu_expandable`<sup>Optional</sup> <a name="cpu_expandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuExpandable"></a>

```python
cpu_expandable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#cpu_expandable ResourcePool#cpu_expandable}

---

##### `cpu_limit`<sup>Optional</sup> <a name="cpu_limit" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuLimit"></a>

```python
cpu_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#cpu_limit ResourcePool#cpu_limit}

---

##### `cpu_reservation`<sup>Optional</sup> <a name="cpu_reservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuReservation"></a>

```python
cpu_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of CPU (MHz) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#cpu_reservation ResourcePool#cpu_reservation}

---

##### `cpu_share_level`<sup>Optional</sup> <a name="cpu_share_level" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShareLevel"></a>

```python
cpu_share_level: str
```

- *Type:* str

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#cpu_share_level ResourcePool#cpu_share_level}

---

##### `cpu_shares`<sup>Optional</sup> <a name="cpu_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.cpuShares"></a>

```python
cpu_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, cpu_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#cpu_shares ResourcePool#cpu_shares}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#custom_attributes ResourcePool#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#id ResourcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memory_expandable`<sup>Optional</sup> <a name="memory_expandable" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryExpandable"></a>

```python
memory_expandable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the reservation on a resource pool can grow beyond the specified value, if the parent resource pool has unreserved resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#memory_expandable ResourcePool#memory_expandable}

---

##### `memory_limit`<sup>Optional</sup> <a name="memory_limit" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryLimit"></a>

```python
memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization of a resource pool will not exceed this limit, even if there are available resources.

Set to -1 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#memory_limit ResourcePool#memory_limit}

---

##### `memory_reservation`<sup>Optional</sup> <a name="memory_reservation" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryReservation"></a>

```python
memory_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of memory (MB) that is guaranteed available to the resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#memory_reservation ResourcePool#memory_reservation}

---

##### `memory_share_level`<sup>Optional</sup> <a name="memory_share_level" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShareLevel"></a>

```python
memory_share_level: str
```

- *Type:* str

The allocation level.

The level is a simplified view of shares. Levels map to a pre-determined set of numeric values for shares. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#memory_share_level ResourcePool#memory_share_level}

---

##### `memory_shares`<sup>Optional</sup> <a name="memory_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.memoryShares"></a>

```python
memory_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of shares allocated.

Used to determine resource allocation in case of resource contention. If this is set, memory_share_level must be custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#memory_shares ResourcePool#memory_shares}

---

##### `scale_descendants_shares`<sup>Optional</sup> <a name="scale_descendants_shares" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.scaleDescendantsShares"></a>

```python
scale_descendants_shares: str
```

- *Type:* str

Determines if the shares of all descendants of the resource pool are scaled up or down when the shares of the resource pool are scaled up or down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#scale_descendants_shares ResourcePool#scale_descendants_shares}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.resourcePool.ResourcePoolConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.2/docs/resources/resource_pool#tags ResourcePool#tags}

---



