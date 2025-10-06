# `vmStoragePolicy` Submodule <a name="`vmStoragePolicy` Submodule" id="@cdktf/provider-vsphere.vmStoragePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmStoragePolicy <a name="VmStoragePolicy" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy vsphere_vm_storage_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vm_storage_policy

vmStoragePolicy.VmStoragePolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  tag_rules: IResolvable | typing.List[VmStoragePolicyTagRules],
  description: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the storage policy. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.tagRules">tag_rules</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>]</code> | tag_rules block. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the storage policy. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#id VmStoragePolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the storage policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#name VmStoragePolicy#name}

---

##### `tag_rules`<sup>Required</sup> <a name="tag_rules" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.tagRules"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>]

tag_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#tag_rules VmStoragePolicy#tag_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.description"></a>

- *Type:* str

Description of the storage policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#description VmStoragePolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#id VmStoragePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.putTagRules">put_tag_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tag_rules` <a name="put_tag_rules" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.putTagRules"></a>

```python
def put_tag_rules(
  value: IResolvable | typing.List[VmStoragePolicyTagRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.putTagRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VmStoragePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import vm_storage_policy

vmStoragePolicy.VmStoragePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import vm_storage_policy

vmStoragePolicy.VmStoragePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import vm_storage_policy

vmStoragePolicy.VmStoragePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import vm_storage_policy

vmStoragePolicy.VmStoragePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VmStoragePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VmStoragePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VmStoragePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmStoragePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tagRules">tag_rules</a></code> | <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList">VmStoragePolicyTagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tagRulesInput">tag_rules_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `tag_rules`<sup>Required</sup> <a name="tag_rules" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tagRules"></a>

```python
tag_rules: VmStoragePolicyTagRulesList
```

- *Type:* <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList">VmStoragePolicyTagRulesList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tag_rules_input`<sup>Optional</sup> <a name="tag_rules_input" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tagRulesInput"></a>

```python
tag_rules_input: IResolvable | typing.List[VmStoragePolicyTagRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VmStoragePolicyConfig <a name="VmStoragePolicyConfig" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vm_storage_policy

vmStoragePolicy.VmStoragePolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  tag_rules: IResolvable | typing.List[VmStoragePolicyTagRules],
  description: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the storage policy. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.tagRules">tag_rules</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>]</code> | tag_rules block. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.description">description</a></code> | <code>str</code> | Description of the storage policy. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#id VmStoragePolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the storage policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#name VmStoragePolicy#name}

---

##### `tag_rules`<sup>Required</sup> <a name="tag_rules" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.tagRules"></a>

```python
tag_rules: IResolvable | typing.List[VmStoragePolicyTagRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>]

tag_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#tag_rules VmStoragePolicy#tag_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the storage policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#description VmStoragePolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#id VmStoragePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### VmStoragePolicyTagRules <a name="VmStoragePolicyTagRules" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vm_storage_policy

vmStoragePolicy.VmStoragePolicyTagRules(
  tag_category: str,
  tags: typing.List[str],
  include_datastores_with_tags: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.tagCategory">tag_category</a></code> | <code>str</code> | The tag category to select the tags from. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.tags">tags</a></code> | <code>typing.List[str]</code> | The tags to use for creating a tag-based vm placement rule. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.includeDatastoresWithTags">include_datastores_with_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether to include or exclude datastores tagged with the provided tags. |

---

##### `tag_category`<sup>Required</sup> <a name="tag_category" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.tagCategory"></a>

```python
tag_category: str
```

- *Type:* str

The tag category to select the tags from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#tag_category VmStoragePolicy#tag_category}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

The tags to use for creating a tag-based vm placement rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#tags VmStoragePolicy#tags}

---

##### `include_datastores_with_tags`<sup>Optional</sup> <a name="include_datastores_with_tags" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules.property.includeDatastoresWithTags"></a>

```python
include_datastores_with_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether to include or exclude datastores tagged with the provided tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/resources/vm_storage_policy#include_datastores_with_tags VmStoragePolicy#include_datastores_with_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### VmStoragePolicyTagRulesList <a name="VmStoragePolicyTagRulesList" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vm_storage_policy

vmStoragePolicy.VmStoragePolicyTagRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VmStoragePolicyTagRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VmStoragePolicyTagRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>]

---


### VmStoragePolicyTagRulesOutputReference <a name="VmStoragePolicyTagRulesOutputReference" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vm_storage_policy

vmStoragePolicy.VmStoragePolicyTagRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.resetIncludeDatastoresWithTags">reset_include_datastores_with_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_datastores_with_tags` <a name="reset_include_datastores_with_tags" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.resetIncludeDatastoresWithTags"></a>

```python
def reset_include_datastores_with_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.includeDatastoresWithTagsInput">include_datastores_with_tags_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagCategoryInput">tag_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.includeDatastoresWithTags">include_datastores_with_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagCategory">tag_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_datastores_with_tags_input`<sup>Optional</sup> <a name="include_datastores_with_tags_input" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.includeDatastoresWithTagsInput"></a>

```python
include_datastores_with_tags_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tag_category_input`<sup>Optional</sup> <a name="tag_category_input" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagCategoryInput"></a>

```python
tag_category_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_datastores_with_tags`<sup>Required</sup> <a name="include_datastores_with_tags" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.includeDatastoresWithTags"></a>

```python
include_datastores_with_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tag_category`<sup>Required</sup> <a name="tag_category" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tagCategory"></a>

```python
tag_category: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VmStoragePolicyTagRules
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.vmStoragePolicy.VmStoragePolicyTagRules">VmStoragePolicyTagRules</a>

---



