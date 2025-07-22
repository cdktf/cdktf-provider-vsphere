# `distributedVirtualSwitchPvlanMapping` Submodule <a name="`distributedVirtualSwitchPvlanMapping` Submodule" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedVirtualSwitchPvlanMappingA <a name="DistributedVirtualSwitchPvlanMappingA" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping vsphere_distributed_virtual_switch_pvlan_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch_pvlan_mapping

distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distributed_virtual_switch_id: str,
  primary_vlan_id: typing.Union[int, float],
  pvlan_type: str,
  secondary_vlan_id: typing.Union[int, float],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.distributedVirtualSwitchId">distributed_virtual_switch_id</a></code> | <code>str</code> | The ID of the distributed virtual switch to attach this mapping to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.primaryVlanId">primary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | The primary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.pvlanType">pvlan_type</a></code> | <code>str</code> | The private VLAN type. Valid values are promiscuous, community and isolated. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.secondaryVlanId">secondary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | The secondary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#id DistributedVirtualSwitchPvlanMappingA#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distributed_virtual_switch_id`<sup>Required</sup> <a name="distributed_virtual_switch_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.distributedVirtualSwitchId"></a>

- *Type:* str

The ID of the distributed virtual switch to attach this mapping to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#distributed_virtual_switch_id DistributedVirtualSwitchPvlanMappingA#distributed_virtual_switch_id}

---

##### `primary_vlan_id`<sup>Required</sup> <a name="primary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.primaryVlanId"></a>

- *Type:* typing.Union[int, float]

The primary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#primary_vlan_id DistributedVirtualSwitchPvlanMappingA#primary_vlan_id}

---

##### `pvlan_type`<sup>Required</sup> <a name="pvlan_type" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.pvlanType"></a>

- *Type:* str

The private VLAN type. Valid values are promiscuous, community and isolated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#pvlan_type DistributedVirtualSwitchPvlanMappingA#pvlan_type}

---

##### `secondary_vlan_id`<sup>Required</sup> <a name="secondary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.secondaryVlanId"></a>

- *Type:* typing.Union[int, float]

The secondary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#secondary_vlan_id DistributedVirtualSwitchPvlanMappingA#secondary_vlan_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#id DistributedVirtualSwitchPvlanMappingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DistributedVirtualSwitchPvlanMappingA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch_pvlan_mapping

distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch_pvlan_mapping

distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch_pvlan_mapping

distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch_pvlan_mapping

distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DistributedVirtualSwitchPvlanMappingA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DistributedVirtualSwitchPvlanMappingA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DistributedVirtualSwitchPvlanMappingA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DistributedVirtualSwitchPvlanMappingA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchIdInput">distributed_virtual_switch_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanIdInput">primary_vlan_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanTypeInput">pvlan_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanIdInput">secondary_vlan_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchId">distributed_virtual_switch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanId">primary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanType">pvlan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanId">secondary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distributed_virtual_switch_id_input`<sup>Optional</sup> <a name="distributed_virtual_switch_id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchIdInput"></a>

```python
distributed_virtual_switch_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `primary_vlan_id_input`<sup>Optional</sup> <a name="primary_vlan_id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanIdInput"></a>

```python
primary_vlan_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pvlan_type_input`<sup>Optional</sup> <a name="pvlan_type_input" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanTypeInput"></a>

```python
pvlan_type_input: str
```

- *Type:* str

---

##### `secondary_vlan_id_input`<sup>Optional</sup> <a name="secondary_vlan_id_input" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanIdInput"></a>

```python
secondary_vlan_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `distributed_virtual_switch_id`<sup>Required</sup> <a name="distributed_virtual_switch_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.distributedVirtualSwitchId"></a>

```python
distributed_virtual_switch_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `primary_vlan_id`<sup>Required</sup> <a name="primary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.primaryVlanId"></a>

```python
primary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pvlan_type`<sup>Required</sup> <a name="pvlan_type" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.pvlanType"></a>

```python
pvlan_type: str
```

- *Type:* str

---

##### `secondary_vlan_id`<sup>Required</sup> <a name="secondary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.secondaryVlanId"></a>

```python
secondary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedVirtualSwitchPvlanMappingAConfig <a name="DistributedVirtualSwitchPvlanMappingAConfig" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import distributed_virtual_switch_pvlan_mapping

distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distributed_virtual_switch_id: str,
  primary_vlan_id: typing.Union[int, float],
  pvlan_type: str,
  secondary_vlan_id: typing.Union[int, float],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.distributedVirtualSwitchId">distributed_virtual_switch_id</a></code> | <code>str</code> | The ID of the distributed virtual switch to attach this mapping to. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.primaryVlanId">primary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | The primary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.pvlanType">pvlan_type</a></code> | <code>str</code> | The private VLAN type. Valid values are promiscuous, community and isolated. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.secondaryVlanId">secondary_vlan_id</a></code> | <code>typing.Union[int, float]</code> | The secondary VLAN ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#id DistributedVirtualSwitchPvlanMappingA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distributed_virtual_switch_id`<sup>Required</sup> <a name="distributed_virtual_switch_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.distributedVirtualSwitchId"></a>

```python
distributed_virtual_switch_id: str
```

- *Type:* str

The ID of the distributed virtual switch to attach this mapping to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#distributed_virtual_switch_id DistributedVirtualSwitchPvlanMappingA#distributed_virtual_switch_id}

---

##### `primary_vlan_id`<sup>Required</sup> <a name="primary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.primaryVlanId"></a>

```python
primary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The primary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#primary_vlan_id DistributedVirtualSwitchPvlanMappingA#primary_vlan_id}

---

##### `pvlan_type`<sup>Required</sup> <a name="pvlan_type" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.pvlanType"></a>

```python
pvlan_type: str
```

- *Type:* str

The private VLAN type. Valid values are promiscuous, community and isolated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#pvlan_type DistributedVirtualSwitchPvlanMappingA#pvlan_type}

---

##### `secondary_vlan_id`<sup>Required</sup> <a name="secondary_vlan_id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.secondaryVlanId"></a>

```python
secondary_vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The secondary VLAN ID.

The VLAN IDs of 0 and 4095 are reserved and cannot be used in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#secondary_vlan_id DistributedVirtualSwitchPvlanMappingA#secondary_vlan_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.distributedVirtualSwitchPvlanMapping.DistributedVirtualSwitchPvlanMappingAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/distributed_virtual_switch_pvlan_mapping#id DistributedVirtualSwitchPvlanMappingA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



