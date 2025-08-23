# `virtualMachineSnapshot` Submodule <a name="`virtualMachineSnapshot` Submodule" id="@cdktf/provider-vsphere.virtualMachineSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineSnapshot <a name="VirtualMachineSnapshot" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot vsphere_virtual_machine_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine_snapshot

virtualMachineSnapshot.VirtualMachineSnapshot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  memory: typing.Union[bool, IResolvable],
  quiesce: typing.Union[bool, IResolvable],
  snapshot_name: str,
  virtual_machine_uuid: str,
  consolidate: typing.Union[bool, IResolvable] = None,
  id: str = None,
  remove_children: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#description VirtualMachineSnapshot#description}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.memory">memory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.quiesce">quiesce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.snapshotName">snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.virtualMachineUuid">virtual_machine_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.consolidate">consolidate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#id VirtualMachineSnapshot#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.removeChildren">remove_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#description VirtualMachineSnapshot#description}.

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.memory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}.

---

##### `quiesce`<sup>Required</sup> <a name="quiesce" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.quiesce"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}.

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.snapshotName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}.

---

##### `virtual_machine_uuid`<sup>Required</sup> <a name="virtual_machine_uuid" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.virtualMachineUuid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}.

---

##### `consolidate`<sup>Optional</sup> <a name="consolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.consolidate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#id VirtualMachineSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `remove_children`<sup>Optional</sup> <a name="remove_children" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.Initializer.parameter.removeChildren"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetConsolidate">reset_consolidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetRemoveChildren">reset_remove_children</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_consolidate` <a name="reset_consolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetConsolidate"></a>

```python
def reset_consolidate() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_remove_children` <a name="reset_remove_children" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.resetRemoveChildren"></a>

```python
def reset_remove_children() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualMachineSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine_snapshot

virtualMachineSnapshot.VirtualMachineSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine_snapshot

virtualMachineSnapshot.VirtualMachineSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine_snapshot

virtualMachineSnapshot.VirtualMachineSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine_snapshot

virtualMachineSnapshot.VirtualMachineSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualMachineSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualMachineSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualMachineSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidateInput">consolidate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memoryInput">memory_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesceInput">quiesce_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildrenInput">remove_children_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotNameInput">snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuidInput">virtual_machine_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidate">consolidate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memory">memory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesce">quiesce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildren">remove_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuid">virtual_machine_uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `consolidate_input`<sup>Optional</sup> <a name="consolidate_input" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidateInput"></a>

```python
consolidate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memoryInput"></a>

```python
memory_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `quiesce_input`<sup>Optional</sup> <a name="quiesce_input" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesceInput"></a>

```python
quiesce_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remove_children_input`<sup>Optional</sup> <a name="remove_children_input" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildrenInput"></a>

```python
remove_children_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_name_input`<sup>Optional</sup> <a name="snapshot_name_input" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotNameInput"></a>

```python
snapshot_name_input: str
```

- *Type:* str

---

##### `virtual_machine_uuid_input`<sup>Optional</sup> <a name="virtual_machine_uuid_input" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuidInput"></a>

```python
virtual_machine_uuid_input: str
```

- *Type:* str

---

##### `consolidate`<sup>Required</sup> <a name="consolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.consolidate"></a>

```python
consolidate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.memory"></a>

```python
memory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `quiesce`<sup>Required</sup> <a name="quiesce" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.quiesce"></a>

```python
quiesce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remove_children`<sup>Required</sup> <a name="remove_children" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.removeChildren"></a>

```python
remove_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

##### `virtual_machine_uuid`<sup>Required</sup> <a name="virtual_machine_uuid" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.virtualMachineUuid"></a>

```python
virtual_machine_uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineSnapshotConfig <a name="VirtualMachineSnapshotConfig" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_machine_snapshot

virtualMachineSnapshot.VirtualMachineSnapshotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  memory: typing.Union[bool, IResolvable],
  quiesce: typing.Union[bool, IResolvable],
  snapshot_name: str,
  virtual_machine_uuid: str,
  consolidate: typing.Union[bool, IResolvable] = None,
  id: str = None,
  remove_children: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#description VirtualMachineSnapshot#description}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.memory">memory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.quiesce">quiesce</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.snapshotName">snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.virtualMachineUuid">virtual_machine_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.consolidate">consolidate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#id VirtualMachineSnapshot#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.removeChildren">remove_children</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#description VirtualMachineSnapshot#description}.

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.memory"></a>

```python
memory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#memory VirtualMachineSnapshot#memory}.

---

##### `quiesce`<sup>Required</sup> <a name="quiesce" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.quiesce"></a>

```python
quiesce: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#quiesce VirtualMachineSnapshot#quiesce}.

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#snapshot_name VirtualMachineSnapshot#snapshot_name}.

---

##### `virtual_machine_uuid`<sup>Required</sup> <a name="virtual_machine_uuid" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.virtualMachineUuid"></a>

```python
virtual_machine_uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#virtual_machine_uuid VirtualMachineSnapshot#virtual_machine_uuid}.

---

##### `consolidate`<sup>Optional</sup> <a name="consolidate" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.consolidate"></a>

```python
consolidate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#consolidate VirtualMachineSnapshot#consolidate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#id VirtualMachineSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `remove_children`<sup>Optional</sup> <a name="remove_children" id="@cdktf/provider-vsphere.virtualMachineSnapshot.VirtualMachineSnapshotConfig.property.removeChildren"></a>

```python
remove_children: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/virtual_machine_snapshot#remove_children VirtualMachineSnapshot#remove_children}.

---



