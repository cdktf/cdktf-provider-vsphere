# `computeClusterVmHostRule` Submodule <a name="`computeClusterVmHostRule` Submodule" id="@cdktf/provider-vsphere.computeClusterVmHostRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeClusterVmHostRule <a name="ComputeClusterVmHostRule" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule vsphere_compute_cluster_vm_host_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster_vm_host_rule

computeClusterVmHostRule.ComputeClusterVmHostRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_cluster_id: str,
  name: str,
  vm_group_name: str,
  affinity_host_group_name: str = None,
  anti_affinity_host_group_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mandatory: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.vmGroupName">vm_group_name</a></code> | <code>str</code> | The name of the virtual machine group to use with this rule. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.affinityHostGroupName">affinity_host_group_name</a></code> | <code>str</code> | When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.antiAffinityHostGroupName">anti_affinity_host_group_name</a></code> | <code>str</code> | When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.mandatory">mandatory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.computeClusterId"></a>

- *Type:* str

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#compute_cluster_id ComputeClusterVmHostRule#compute_cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.name"></a>

- *Type:* str

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#name ComputeClusterVmHostRule#name}

---

##### `vm_group_name`<sup>Required</sup> <a name="vm_group_name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.vmGroupName"></a>

- *Type:* str

The name of the virtual machine group to use with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#vm_group_name ComputeClusterVmHostRule#vm_group_name}

---

##### `affinity_host_group_name`<sup>Optional</sup> <a name="affinity_host_group_name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.affinityHostGroupName"></a>

- *Type:* str

When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#affinity_host_group_name ComputeClusterVmHostRule#affinity_host_group_name}

---

##### `anti_affinity_host_group_name`<sup>Optional</sup> <a name="anti_affinity_host_group_name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.antiAffinityHostGroupName"></a>

- *Type:* str

When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#anti_affinity_host_group_name ComputeClusterVmHostRule#anti_affinity_host_group_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#enabled ComputeClusterVmHostRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.Initializer.parameter.mandatory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#mandatory ComputeClusterVmHostRule#mandatory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAffinityHostGroupName">reset_affinity_host_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAntiAffinityHostGroupName">reset_anti_affinity_host_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetMandatory">reset_mandatory</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_affinity_host_group_name` <a name="reset_affinity_host_group_name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAffinityHostGroupName"></a>

```python
def reset_affinity_host_group_name() -> None
```

##### `reset_anti_affinity_host_group_name` <a name="reset_anti_affinity_host_group_name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetAntiAffinityHostGroupName"></a>

```python
def reset_anti_affinity_host_group_name() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mandatory` <a name="reset_mandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.resetMandatory"></a>

```python
def reset_mandatory() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeClusterVmHostRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster_vm_host_rule

computeClusterVmHostRule.ComputeClusterVmHostRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster_vm_host_rule

computeClusterVmHostRule.ComputeClusterVmHostRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster_vm_host_rule

computeClusterVmHostRule.ComputeClusterVmHostRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster_vm_host_rule

computeClusterVmHostRule.ComputeClusterVmHostRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeClusterVmHostRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeClusterVmHostRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeClusterVmHostRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeClusterVmHostRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupNameInput">affinity_host_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupNameInput">anti_affinity_host_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterIdInput">compute_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatoryInput">mandatory_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupNameInput">vm_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupName">affinity_host_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupName">anti_affinity_host_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatory">mandatory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupName">vm_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `affinity_host_group_name_input`<sup>Optional</sup> <a name="affinity_host_group_name_input" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupNameInput"></a>

```python
affinity_host_group_name_input: str
```

- *Type:* str

---

##### `anti_affinity_host_group_name_input`<sup>Optional</sup> <a name="anti_affinity_host_group_name_input" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupNameInput"></a>

```python
anti_affinity_host_group_name_input: str
```

- *Type:* str

---

##### `compute_cluster_id_input`<sup>Optional</sup> <a name="compute_cluster_id_input" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterIdInput"></a>

```python
compute_cluster_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mandatory_input`<sup>Optional</sup> <a name="mandatory_input" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatoryInput"></a>

```python
mandatory_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `vm_group_name_input`<sup>Optional</sup> <a name="vm_group_name_input" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupNameInput"></a>

```python
vm_group_name_input: str
```

- *Type:* str

---

##### `affinity_host_group_name`<sup>Required</sup> <a name="affinity_host_group_name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.affinityHostGroupName"></a>

```python
affinity_host_group_name: str
```

- *Type:* str

---

##### `anti_affinity_host_group_name`<sup>Required</sup> <a name="anti_affinity_host_group_name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.antiAffinityHostGroupName"></a>

```python
anti_affinity_host_group_name: str
```

- *Type:* str

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.computeClusterId"></a>

```python
compute_cluster_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mandatory`<sup>Required</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.mandatory"></a>

```python
mandatory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `vm_group_name`<sup>Required</sup> <a name="vm_group_name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.vmGroupName"></a>

```python
vm_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterVmHostRuleConfig <a name="ComputeClusterVmHostRuleConfig" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster_vm_host_rule

computeClusterVmHostRule.ComputeClusterVmHostRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_cluster_id: str,
  name: str,
  vm_group_name: str,
  affinity_host_group_name: str = None,
  anti_affinity_host_group_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mandatory: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.name">name</a></code> | <code>str</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.vmGroupName">vm_group_name</a></code> | <code>str</code> | The name of the virtual machine group to use with this rule. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.affinityHostGroupName">affinity_host_group_name</a></code> | <code>str</code> | When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.antiAffinityHostGroupName">anti_affinity_host_group_name</a></code> | <code>str</code> | When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.mandatory">mandatory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.computeClusterId"></a>

```python
compute_cluster_id: str
```

- *Type:* str

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#compute_cluster_id ComputeClusterVmHostRule#compute_cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#name ComputeClusterVmHostRule#name}

---

##### `vm_group_name`<sup>Required</sup> <a name="vm_group_name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.vmGroupName"></a>

```python
vm_group_name: str
```

- *Type:* str

The name of the virtual machine group to use with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#vm_group_name ComputeClusterVmHostRule#vm_group_name}

---

##### `affinity_host_group_name`<sup>Optional</sup> <a name="affinity_host_group_name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.affinityHostGroupName"></a>

```python
affinity_host_group_name: str
```

- *Type:* str

When this field is used, virtual machines defined in vm_group_name will be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#affinity_host_group_name ComputeClusterVmHostRule#affinity_host_group_name}

---

##### `anti_affinity_host_group_name`<sup>Optional</sup> <a name="anti_affinity_host_group_name" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.antiAffinityHostGroupName"></a>

```python
anti_affinity_host_group_name: str
```

- *Type:* str

When this field is used, virtual machines defined in vm_group_name will not be run on the hosts defined in this host group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#anti_affinity_host_group_name ComputeClusterVmHostRule#anti_affinity_host_group_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#enabled ComputeClusterVmHostRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#id ComputeClusterVmHostRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmHostRule.ComputeClusterVmHostRuleConfig.property.mandatory"></a>

```python
mandatory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/compute_cluster_vm_host_rule#mandatory ComputeClusterVmHostRule#mandatory}

---



