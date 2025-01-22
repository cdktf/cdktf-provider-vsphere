# `guestOsCustomization` Submodule <a name="`guestOsCustomization` Submodule" id="@cdktf/provider-vsphere.guestOsCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuestOsCustomization <a name="GuestOsCustomization" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization vsphere_guest_os_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomization(
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
  spec: GuestOsCustomizationSpec,
  type: str,
  description: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of customization specification: One among: Windows, Linux. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.description">description</a></code> | <code>str</code> | The description for the customization specification. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#id GuestOsCustomization#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.name"></a>

- *Type:* str

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#name GuestOsCustomization#name}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#spec GuestOsCustomization#spec}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.type"></a>

- *Type:* str

The type of customization specification: One among: Windows, Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#type GuestOsCustomization#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.description"></a>

- *Type:* str

The description for the customization specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#description GuestOsCustomization#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#id GuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec"></a>

```python
def put_spec(
  dns_server_list: typing.List[str] = None,
  dns_suffix_list: typing.List[str] = None,
  ipv4_gateway: str = None,
  ipv6_gateway: str = None,
  linux_options: GuestOsCustomizationSpecLinuxOptions = None,
  network_interface: typing.Union[IResolvable, typing.List[GuestOsCustomizationSpecNetworkInterface]] = None,
  windows_options: GuestOsCustomizationSpecWindowsOptions = None,
  windows_sysprep_text: str = None
) -> None
```

###### `dns_server_list`<sup>Optional</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec.parameter.dnsServerList"></a>

- *Type:* typing.List[str]

The list of DNS servers for a virtual network adapter with a static IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#dns_server_list GuestOsCustomization#dns_server_list}

---

###### `dns_suffix_list`<sup>Optional</sup> <a name="dns_suffix_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec.parameter.dnsSuffixList"></a>

- *Type:* typing.List[str]

A list of DNS search domains to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#dns_suffix_list GuestOsCustomization#dns_suffix_list}

---

###### `ipv4_gateway`<sup>Optional</sup> <a name="ipv4_gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec.parameter.ipv4Gateway"></a>

- *Type:* str

The IPv4 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#ipv4_gateway GuestOsCustomization#ipv4_gateway}

---

###### `ipv6_gateway`<sup>Optional</sup> <a name="ipv6_gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec.parameter.ipv6Gateway"></a>

- *Type:* str

The IPv6 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#ipv6_gateway GuestOsCustomization#ipv6_gateway}

---

###### `linux_options`<sup>Optional</sup> <a name="linux_options" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec.parameter.linuxOptions"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#linux_options GuestOsCustomization#linux_options}

---

###### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec.parameter.networkInterface"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#network_interface GuestOsCustomization#network_interface}

---

###### `windows_options`<sup>Optional</sup> <a name="windows_options" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec.parameter.windowsOptions"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

windows_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#windows_options GuestOsCustomization#windows_options}

---

###### `windows_sysprep_text`<sup>Optional</sup> <a name="windows_sysprep_text" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec.parameter.windowsSysprepText"></a>

- *Type:* str

Use this option to specify a windows sysprep file directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#windows_sysprep_text GuestOsCustomization#windows_sysprep_text}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GuestOsCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GuestOsCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GuestOsCustomization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GuestOsCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GuestOsCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.changeVersion">change_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lastUpdateTime">last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference">GuestOsCustomizationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `change_version`<sup>Required</sup> <a name="change_version" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.changeVersion"></a>

```python
change_version: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lastUpdateTime"></a>

```python
last_update_time: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.spec"></a>

```python
spec: GuestOsCustomizationSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference">GuestOsCustomizationSpecOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.specInput"></a>

```python
spec_input: GuestOsCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GuestOsCustomizationConfig <a name="GuestOsCustomizationConfig" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  spec: GuestOsCustomizationSpec,
  type: str,
  description: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.name">name</a></code> | <code>str</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.type">type</a></code> | <code>str</code> | The type of customization specification: One among: Windows, Linux. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.description">description</a></code> | <code>str</code> | The description for the customization specification. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#id GuestOsCustomization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#name GuestOsCustomization#name}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.spec"></a>

```python
spec: GuestOsCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#spec GuestOsCustomization#spec}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of customization specification: One among: Windows, Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#type GuestOsCustomization#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description for the customization specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#description GuestOsCustomization#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#id GuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GuestOsCustomizationSpec <a name="GuestOsCustomizationSpec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomizationSpec(
  dns_server_list: typing.List[str] = None,
  dns_suffix_list: typing.List[str] = None,
  ipv4_gateway: str = None,
  ipv6_gateway: str = None,
  linux_options: GuestOsCustomizationSpecLinuxOptions = None,
  network_interface: typing.Union[IResolvable, typing.List[GuestOsCustomizationSpecNetworkInterface]] = None,
  windows_options: GuestOsCustomizationSpecWindowsOptions = None,
  windows_sysprep_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsServerList">dns_server_list</a></code> | <code>typing.List[str]</code> | The list of DNS servers for a virtual network adapter with a static IP address. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsSuffixList">dns_suffix_list</a></code> | <code>typing.List[str]</code> | A list of DNS search domains to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv4Gateway">ipv4_gateway</a></code> | <code>str</code> | The IPv4 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv6Gateway">ipv6_gateway</a></code> | <code>str</code> | The IPv6 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.linuxOptions">linux_options</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | linux_options block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.networkInterface">network_interface</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>]]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsOptions">windows_options</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | windows_options block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsSysprepText">windows_sysprep_text</a></code> | <code>str</code> | Use this option to specify a windows sysprep file directly. |

---

##### `dns_server_list`<sup>Optional</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsServerList"></a>

```python
dns_server_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of DNS servers for a virtual network adapter with a static IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#dns_server_list GuestOsCustomization#dns_server_list}

---

##### `dns_suffix_list`<sup>Optional</sup> <a name="dns_suffix_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsSuffixList"></a>

```python
dns_suffix_list: typing.List[str]
```

- *Type:* typing.List[str]

A list of DNS search domains to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#dns_suffix_list GuestOsCustomization#dns_suffix_list}

---

##### `ipv4_gateway`<sup>Optional</sup> <a name="ipv4_gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv4Gateway"></a>

```python
ipv4_gateway: str
```

- *Type:* str

The IPv4 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#ipv4_gateway GuestOsCustomization#ipv4_gateway}

---

##### `ipv6_gateway`<sup>Optional</sup> <a name="ipv6_gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv6Gateway"></a>

```python
ipv6_gateway: str
```

- *Type:* str

The IPv6 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#ipv6_gateway GuestOsCustomization#ipv6_gateway}

---

##### `linux_options`<sup>Optional</sup> <a name="linux_options" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.linuxOptions"></a>

```python
linux_options: GuestOsCustomizationSpecLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#linux_options GuestOsCustomization#linux_options}

---

##### `network_interface`<sup>Optional</sup> <a name="network_interface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.networkInterface"></a>

```python
network_interface: typing.Union[IResolvable, typing.List[GuestOsCustomizationSpecNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>]]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#network_interface GuestOsCustomization#network_interface}

---

##### `windows_options`<sup>Optional</sup> <a name="windows_options" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsOptions"></a>

```python
windows_options: GuestOsCustomizationSpecWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

windows_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#windows_options GuestOsCustomization#windows_options}

---

##### `windows_sysprep_text`<sup>Optional</sup> <a name="windows_sysprep_text" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsSysprepText"></a>

```python
windows_sysprep_text: str
```

- *Type:* str

Use this option to specify a windows sysprep file directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#windows_sysprep_text GuestOsCustomization#windows_sysprep_text}

---

### GuestOsCustomizationSpecLinuxOptions <a name="GuestOsCustomizationSpecLinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomizationSpecLinuxOptions(
  domain: str,
  host_name: str,
  hw_clock_utc: typing.Union[bool, IResolvable] = None,
  script_text: str = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.domain">domain</a></code> | <code>str</code> | The domain name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hostName">host_name</a></code> | <code>str</code> | The hostname for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hwClockUtc">hw_clock_utc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether or not the hardware clock should be in UTC or not. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.scriptText">script_text</a></code> | <code>str</code> | The customization script to run before and or after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.timeZone">time_zone</a></code> | <code>str</code> | Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.domain"></a>

```python
domain: str
```

- *Type:* str

The domain name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#domain GuestOsCustomization#domain}

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

The hostname for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#host_name GuestOsCustomization#host_name}

---

##### `hw_clock_utc`<sup>Optional</sup> <a name="hw_clock_utc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hwClockUtc"></a>

```python
hw_clock_utc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the hardware clock should be in UTC or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#hw_clock_utc GuestOsCustomization#hw_clock_utc}

---

##### `script_text`<sup>Optional</sup> <a name="script_text" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.scriptText"></a>

```python
script_text: str
```

- *Type:* str

The customization script to run before and or after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#script_text GuestOsCustomization#script_text}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}

---

### GuestOsCustomizationSpecNetworkInterface <a name="GuestOsCustomizationSpecNetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomizationSpecNetworkInterface(
  dns_domain: str = None,
  dns_server_list: typing.List[str] = None,
  ipv4_address: str = None,
  ipv4_netmask: typing.Union[int, float] = None,
  ipv6_address: str = None,
  ipv6_netmask: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsDomain">dns_domain</a></code> | <code>str</code> | A DNS search domain to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsServerList">dns_server_list</a></code> | <code>typing.List[str]</code> | Network-interface specific DNS settings for Windows operating systems. Ignored on Linux. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | The IPv4 address assigned to this network adapter. If left blank, DHCP is used. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Netmask">ipv4_netmask</a></code> | <code>typing.Union[int, float]</code> | The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Netmask">ipv6_netmask</a></code> | <code>typing.Union[int, float]</code> | The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected. |

---

##### `dns_domain`<sup>Optional</sup> <a name="dns_domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsDomain"></a>

```python
dns_domain: str
```

- *Type:* str

A DNS search domain to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#dns_domain GuestOsCustomization#dns_domain}

---

##### `dns_server_list`<sup>Optional</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsServerList"></a>

```python
dns_server_list: typing.List[str]
```

- *Type:* typing.List[str]

Network-interface specific DNS settings for Windows operating systems. Ignored on Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#dns_server_list GuestOsCustomization#dns_server_list}

---

##### `ipv4_address`<sup>Optional</sup> <a name="ipv4_address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

The IPv4 address assigned to this network adapter. If left blank, DHCP is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#ipv4_address GuestOsCustomization#ipv4_address}

---

##### `ipv4_netmask`<sup>Optional</sup> <a name="ipv4_netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Netmask"></a>

```python
ipv4_netmask: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#ipv4_netmask GuestOsCustomization#ipv4_netmask}

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#ipv6_address GuestOsCustomization#ipv6_address}

---

##### `ipv6_netmask`<sup>Optional</sup> <a name="ipv6_netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Netmask"></a>

```python
ipv6_netmask: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#ipv6_netmask GuestOsCustomization#ipv6_netmask}

---

### GuestOsCustomizationSpecWindowsOptions <a name="GuestOsCustomizationSpecWindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomizationSpecWindowsOptions(
  computer_name: str,
  admin_password: str = None,
  auto_logon: typing.Union[bool, IResolvable] = None,
  auto_logon_count: typing.Union[int, float] = None,
  domain_admin_password: str = None,
  domain_admin_user: str = None,
  domain_ou: str = None,
  full_name: str = None,
  join_domain: str = None,
  organization_name: str = None,
  product_key: str = None,
  run_once_command_list: typing.List[str] = None,
  time_zone: typing.Union[int, float] = None,
  workgroup: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.computerName">computer_name</a></code> | <code>str</code> | The host name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.adminPassword">admin_password</a></code> | <code>str</code> | The new administrator password for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogon">auto_logon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether or not the VM automatically logs on as Administrator. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogonCount">auto_logon_count</a></code> | <code>typing.Union[int, float]</code> | Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminPassword">domain_admin_password</a></code> | <code>str</code> | The password of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminUser">domain_admin_user</a></code> | <code>str</code> | The user account of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainOu">domain_ou</a></code> | <code>str</code> | The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.fullName">full_name</a></code> | <code>str</code> | The full name of the user of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.joinDomain">join_domain</a></code> | <code>str</code> | The domain that the virtual machine should join. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.organizationName">organization_name</a></code> | <code>str</code> | The organization name this virtual machine is being installed for. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.productKey">product_key</a></code> | <code>str</code> | The product key for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.runOnceCommandList">run_once_command_list</a></code> | <code>typing.List[str]</code> | A list of commands to run at first user logon, after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.timeZone">time_zone</a></code> | <code>typing.Union[int, float]</code> | The new time zone for the virtual machine. This is a sysprep-dictated timezone code. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.workgroup">workgroup</a></code> | <code>str</code> | The workgroup for this virtual machine if not joining a domain. |

---

##### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

The host name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#computer_name GuestOsCustomization#computer_name}

---

##### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

The new administrator password for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#admin_password GuestOsCustomization#admin_password}

---

##### `auto_logon`<sup>Optional</sup> <a name="auto_logon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogon"></a>

```python
auto_logon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the VM automatically logs on as Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#auto_logon GuestOsCustomization#auto_logon}

---

##### `auto_logon_count`<sup>Optional</sup> <a name="auto_logon_count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogonCount"></a>

```python
auto_logon_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#auto_logon_count GuestOsCustomization#auto_logon_count}

---

##### `domain_admin_password`<sup>Optional</sup> <a name="domain_admin_password" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminPassword"></a>

```python
domain_admin_password: str
```

- *Type:* str

The password of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#domain_admin_password GuestOsCustomization#domain_admin_password}

---

##### `domain_admin_user`<sup>Optional</sup> <a name="domain_admin_user" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminUser"></a>

```python
domain_admin_user: str
```

- *Type:* str

The user account of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#domain_admin_user GuestOsCustomization#domain_admin_user}

---

##### `domain_ou`<sup>Optional</sup> <a name="domain_ou" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainOu"></a>

```python
domain_ou: str
```

- *Type:* str

The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#domain_ou GuestOsCustomization#domain_ou}

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

The full name of the user of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#full_name GuestOsCustomization#full_name}

---

##### `join_domain`<sup>Optional</sup> <a name="join_domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.joinDomain"></a>

```python
join_domain: str
```

- *Type:* str

The domain that the virtual machine should join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#join_domain GuestOsCustomization#join_domain}

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

The organization name this virtual machine is being installed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#organization_name GuestOsCustomization#organization_name}

---

##### `product_key`<sup>Optional</sup> <a name="product_key" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.productKey"></a>

```python
product_key: str
```

- *Type:* str

The product key for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#product_key GuestOsCustomization#product_key}

---

##### `run_once_command_list`<sup>Optional</sup> <a name="run_once_command_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.runOnceCommandList"></a>

```python
run_once_command_list: typing.List[str]
```

- *Type:* typing.List[str]

A list of commands to run at first user logon, after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#run_once_command_list GuestOsCustomization#run_once_command_list}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.timeZone"></a>

```python
time_zone: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The new time zone for the virtual machine. This is a sysprep-dictated timezone code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}

---

##### `workgroup`<sup>Optional</sup> <a name="workgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.workgroup"></a>

```python
workgroup: str
```

- *Type:* str

The workgroup for this virtual machine if not joining a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#workgroup GuestOsCustomization#workgroup}

---

## Classes <a name="Classes" id="Classes"></a>

### GuestOsCustomizationSpecLinuxOptionsOutputReference <a name="GuestOsCustomizationSpecLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetHwClockUtc">reset_hw_clock_utc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetScriptText">reset_script_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hw_clock_utc` <a name="reset_hw_clock_utc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetHwClockUtc"></a>

```python
def reset_hw_clock_utc() -> None
```

##### `reset_script_text` <a name="reset_script_text" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetScriptText"></a>

```python
def reset_script_text() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtcInput">hw_clock_utc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptTextInput">script_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc">hw_clock_utc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText">script_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `hw_clock_utc_input`<sup>Optional</sup> <a name="hw_clock_utc_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtcInput"></a>

```python
hw_clock_utc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `script_text_input`<sup>Optional</sup> <a name="script_text_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptTextInput"></a>

```python
script_text_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `hw_clock_utc`<sup>Required</sup> <a name="hw_clock_utc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc"></a>

```python
hw_clock_utc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `script_text`<sup>Required</sup> <a name="script_text" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText"></a>

```python
script_text: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GuestOsCustomizationSpecLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

---


### GuestOsCustomizationSpecNetworkInterfaceList <a name="GuestOsCustomizationSpecNetworkInterfaceList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GuestOsCustomizationSpecNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GuestOsCustomizationSpecNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>]]

---


### GuestOsCustomizationSpecNetworkInterfaceOutputReference <a name="GuestOsCustomizationSpecNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsDomain">reset_dns_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsServerList">reset_dns_server_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Address">reset_ipv4_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Netmask">reset_ipv4_netmask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Netmask">reset_ipv6_netmask</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_domain` <a name="reset_dns_domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsDomain"></a>

```python
def reset_dns_domain() -> None
```

##### `reset_dns_server_list` <a name="reset_dns_server_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsServerList"></a>

```python
def reset_dns_server_list() -> None
```

##### `reset_ipv4_address` <a name="reset_ipv4_address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Address"></a>

```python
def reset_ipv4_address() -> None
```

##### `reset_ipv4_netmask` <a name="reset_ipv4_netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Netmask"></a>

```python
def reset_ipv4_netmask() -> None
```

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

##### `reset_ipv6_netmask` <a name="reset_ipv6_netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Netmask"></a>

```python
def reset_ipv6_netmask() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomainInput">dns_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerListInput">dns_server_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4AddressInput">ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4NetmaskInput">ipv4_netmask_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6NetmaskInput">ipv6_netmask_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain">dns_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList">dns_server_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask">ipv4_netmask</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask">ipv6_netmask</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_domain_input`<sup>Optional</sup> <a name="dns_domain_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomainInput"></a>

```python
dns_domain_input: str
```

- *Type:* str

---

##### `dns_server_list_input`<sup>Optional</sup> <a name="dns_server_list_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerListInput"></a>

```python
dns_server_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_address_input`<sup>Optional</sup> <a name="ipv4_address_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4AddressInput"></a>

```python
ipv4_address_input: str
```

- *Type:* str

---

##### `ipv4_netmask_input`<sup>Optional</sup> <a name="ipv4_netmask_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4NetmaskInput"></a>

```python
ipv4_netmask_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `ipv6_netmask_input`<sup>Optional</sup> <a name="ipv6_netmask_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6NetmaskInput"></a>

```python
ipv6_netmask_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns_domain`<sup>Required</sup> <a name="dns_domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain"></a>

```python
dns_domain: str
```

- *Type:* str

---

##### `dns_server_list`<sup>Required</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList"></a>

```python
dns_server_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `ipv4_netmask`<sup>Required</sup> <a name="ipv4_netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```python
ipv4_netmask: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `ipv6_netmask`<sup>Required</sup> <a name="ipv6_netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```python
ipv6_netmask: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GuestOsCustomizationSpecNetworkInterface]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>]

---


### GuestOsCustomizationSpecOutputReference <a name="GuestOsCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomizationSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions">put_linux_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface">put_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions">put_windows_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsServerList">reset_dns_server_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsSuffixList">reset_dns_suffix_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv4Gateway">reset_ipv4_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv6Gateway">reset_ipv6_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetLinuxOptions">reset_linux_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetNetworkInterface">reset_network_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsOptions">reset_windows_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsSysprepText">reset_windows_sysprep_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_linux_options` <a name="put_linux_options" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions"></a>

```python
def put_linux_options(
  domain: str,
  host_name: str,
  hw_clock_utc: typing.Union[bool, IResolvable] = None,
  script_text: str = None,
  time_zone: str = None
) -> None
```

###### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions.parameter.domain"></a>

- *Type:* str

The domain name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#domain GuestOsCustomization#domain}

---

###### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions.parameter.hostName"></a>

- *Type:* str

The hostname for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#host_name GuestOsCustomization#host_name}

---

###### `hw_clock_utc`<sup>Optional</sup> <a name="hw_clock_utc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions.parameter.hwClockUtc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the hardware clock should be in UTC or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#hw_clock_utc GuestOsCustomization#hw_clock_utc}

---

###### `script_text`<sup>Optional</sup> <a name="script_text" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions.parameter.scriptText"></a>

- *Type:* str

The customization script to run before and or after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#script_text GuestOsCustomization#script_text}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions.parameter.timeZone"></a>

- *Type:* str

Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}

---

##### `put_network_interface` <a name="put_network_interface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface"></a>

```python
def put_network_interface(
  value: typing.Union[IResolvable, typing.List[GuestOsCustomizationSpecNetworkInterface]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>]]

---

##### `put_windows_options` <a name="put_windows_options" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions"></a>

```python
def put_windows_options(
  computer_name: str,
  admin_password: str = None,
  auto_logon: typing.Union[bool, IResolvable] = None,
  auto_logon_count: typing.Union[int, float] = None,
  domain_admin_password: str = None,
  domain_admin_user: str = None,
  domain_ou: str = None,
  full_name: str = None,
  join_domain: str = None,
  organization_name: str = None,
  product_key: str = None,
  run_once_command_list: typing.List[str] = None,
  time_zone: typing.Union[int, float] = None,
  workgroup: str = None
) -> None
```

###### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.computerName"></a>

- *Type:* str

The host name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#computer_name GuestOsCustomization#computer_name}

---

###### `admin_password`<sup>Optional</sup> <a name="admin_password" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.adminPassword"></a>

- *Type:* str

The new administrator password for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#admin_password GuestOsCustomization#admin_password}

---

###### `auto_logon`<sup>Optional</sup> <a name="auto_logon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.autoLogon"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the VM automatically logs on as Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#auto_logon GuestOsCustomization#auto_logon}

---

###### `auto_logon_count`<sup>Optional</sup> <a name="auto_logon_count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.autoLogonCount"></a>

- *Type:* typing.Union[int, float]

Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#auto_logon_count GuestOsCustomization#auto_logon_count}

---

###### `domain_admin_password`<sup>Optional</sup> <a name="domain_admin_password" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.domainAdminPassword"></a>

- *Type:* str

The password of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#domain_admin_password GuestOsCustomization#domain_admin_password}

---

###### `domain_admin_user`<sup>Optional</sup> <a name="domain_admin_user" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.domainAdminUser"></a>

- *Type:* str

The user account of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#domain_admin_user GuestOsCustomization#domain_admin_user}

---

###### `domain_ou`<sup>Optional</sup> <a name="domain_ou" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.domainOu"></a>

- *Type:* str

The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#domain_ou GuestOsCustomization#domain_ou}

---

###### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.fullName"></a>

- *Type:* str

The full name of the user of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#full_name GuestOsCustomization#full_name}

---

###### `join_domain`<sup>Optional</sup> <a name="join_domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.joinDomain"></a>

- *Type:* str

The domain that the virtual machine should join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#join_domain GuestOsCustomization#join_domain}

---

###### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.organizationName"></a>

- *Type:* str

The organization name this virtual machine is being installed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#organization_name GuestOsCustomization#organization_name}

---

###### `product_key`<sup>Optional</sup> <a name="product_key" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.productKey"></a>

- *Type:* str

The product key for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#product_key GuestOsCustomization#product_key}

---

###### `run_once_command_list`<sup>Optional</sup> <a name="run_once_command_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.runOnceCommandList"></a>

- *Type:* typing.List[str]

A list of commands to run at first user logon, after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#run_once_command_list GuestOsCustomization#run_once_command_list}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.timeZone"></a>

- *Type:* typing.Union[int, float]

The new time zone for the virtual machine. This is a sysprep-dictated timezone code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}

---

###### `workgroup`<sup>Optional</sup> <a name="workgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.workgroup"></a>

- *Type:* str

The workgroup for this virtual machine if not joining a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.0/docs/resources/guest_os_customization#workgroup GuestOsCustomization#workgroup}

---

##### `reset_dns_server_list` <a name="reset_dns_server_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsServerList"></a>

```python
def reset_dns_server_list() -> None
```

##### `reset_dns_suffix_list` <a name="reset_dns_suffix_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsSuffixList"></a>

```python
def reset_dns_suffix_list() -> None
```

##### `reset_ipv4_gateway` <a name="reset_ipv4_gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv4Gateway"></a>

```python
def reset_ipv4_gateway() -> None
```

##### `reset_ipv6_gateway` <a name="reset_ipv6_gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv6Gateway"></a>

```python
def reset_ipv6_gateway() -> None
```

##### `reset_linux_options` <a name="reset_linux_options" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetLinuxOptions"></a>

```python
def reset_linux_options() -> None
```

##### `reset_network_interface` <a name="reset_network_interface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetNetworkInterface"></a>

```python
def reset_network_interface() -> None
```

##### `reset_windows_options` <a name="reset_windows_options" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsOptions"></a>

```python
def reset_windows_options() -> None
```

##### `reset_windows_sysprep_text` <a name="reset_windows_sysprep_text" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsSysprepText"></a>

```python
def reset_windows_sysprep_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptions">linux_options</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference">GuestOsCustomizationSpecLinuxOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList">GuestOsCustomizationSpecNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptions">windows_options</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference">GuestOsCustomizationSpecWindowsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerListInput">dns_server_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixListInput">dns_suffix_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4GatewayInput">ipv4_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6GatewayInput">ipv6_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptionsInput">linux_options_input</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterfaceInput">network_interface_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptionsInput">windows_options_input</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepTextInput">windows_sysprep_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerList">dns_server_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixList">dns_suffix_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4Gateway">ipv4_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6Gateway">ipv6_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepText">windows_sysprep_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linux_options`<sup>Required</sup> <a name="linux_options" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptions"></a>

```python
linux_options: GuestOsCustomizationSpecLinuxOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference">GuestOsCustomizationSpecLinuxOptionsOutputReference</a>

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterface"></a>

```python
network_interface: GuestOsCustomizationSpecNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList">GuestOsCustomizationSpecNetworkInterfaceList</a>

---

##### `windows_options`<sup>Required</sup> <a name="windows_options" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptions"></a>

```python
windows_options: GuestOsCustomizationSpecWindowsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference">GuestOsCustomizationSpecWindowsOptionsOutputReference</a>

---

##### `dns_server_list_input`<sup>Optional</sup> <a name="dns_server_list_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerListInput"></a>

```python
dns_server_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_suffix_list_input`<sup>Optional</sup> <a name="dns_suffix_list_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixListInput"></a>

```python
dns_suffix_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_gateway_input`<sup>Optional</sup> <a name="ipv4_gateway_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4GatewayInput"></a>

```python
ipv4_gateway_input: str
```

- *Type:* str

---

##### `ipv6_gateway_input`<sup>Optional</sup> <a name="ipv6_gateway_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6GatewayInput"></a>

```python
ipv6_gateway_input: str
```

- *Type:* str

---

##### `linux_options_input`<sup>Optional</sup> <a name="linux_options_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptionsInput"></a>

```python
linux_options_input: GuestOsCustomizationSpecLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

---

##### `network_interface_input`<sup>Optional</sup> <a name="network_interface_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterfaceInput"></a>

```python
network_interface_input: typing.Union[IResolvable, typing.List[GuestOsCustomizationSpecNetworkInterface]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface">GuestOsCustomizationSpecNetworkInterface</a>]]

---

##### `windows_options_input`<sup>Optional</sup> <a name="windows_options_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptionsInput"></a>

```python
windows_options_input: GuestOsCustomizationSpecWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

---

##### `windows_sysprep_text_input`<sup>Optional</sup> <a name="windows_sysprep_text_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepTextInput"></a>

```python
windows_sysprep_text_input: str
```

- *Type:* str

---

##### `dns_server_list`<sup>Required</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerList"></a>

```python
dns_server_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_suffix_list`<sup>Required</sup> <a name="dns_suffix_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixList"></a>

```python
dns_suffix_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_gateway`<sup>Required</sup> <a name="ipv4_gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4Gateway"></a>

```python
ipv4_gateway: str
```

- *Type:* str

---

##### `ipv6_gateway`<sup>Required</sup> <a name="ipv6_gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6Gateway"></a>

```python
ipv6_gateway: str
```

- *Type:* str

---

##### `windows_sysprep_text`<sup>Required</sup> <a name="windows_sysprep_text" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepText"></a>

```python
windows_sysprep_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.internalValue"></a>

```python
internal_value: GuestOsCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

---


### GuestOsCustomizationSpecWindowsOptionsOutputReference <a name="GuestOsCustomizationSpecWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import guest_os_customization

guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAdminPassword">reset_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogon">reset_auto_logon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogonCount">reset_auto_logon_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminPassword">reset_domain_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminUser">reset_domain_admin_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainOu">reset_domain_ou</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetJoinDomain">reset_join_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetProductKey">reset_product_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetRunOnceCommandList">reset_run_once_command_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetWorkgroup">reset_workgroup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_password` <a name="reset_admin_password" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAdminPassword"></a>

```python
def reset_admin_password() -> None
```

##### `reset_auto_logon` <a name="reset_auto_logon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogon"></a>

```python
def reset_auto_logon() -> None
```

##### `reset_auto_logon_count` <a name="reset_auto_logon_count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogonCount"></a>

```python
def reset_auto_logon_count() -> None
```

##### `reset_domain_admin_password` <a name="reset_domain_admin_password" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminPassword"></a>

```python
def reset_domain_admin_password() -> None
```

##### `reset_domain_admin_user` <a name="reset_domain_admin_user" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminUser"></a>

```python
def reset_domain_admin_user() -> None
```

##### `reset_domain_ou` <a name="reset_domain_ou" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainOu"></a>

```python
def reset_domain_ou() -> None
```

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_join_domain` <a name="reset_join_domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetJoinDomain"></a>

```python
def reset_join_domain() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_product_key` <a name="reset_product_key" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetProductKey"></a>

```python
def reset_product_key() -> None
```

##### `reset_run_once_command_list` <a name="reset_run_once_command_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetRunOnceCommandList"></a>

```python
def reset_run_once_command_list() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

##### `reset_workgroup` <a name="reset_workgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetWorkgroup"></a>

```python
def reset_workgroup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCountInput">auto_logon_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonInput">auto_logon_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerNameInput">computer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPasswordInput">domain_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUserInput">domain_admin_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOuInput">domain_ou_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomainInput">join_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKeyInput">product_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandListInput">run_once_command_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroupInput">workgroup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon">auto_logon</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount">auto_logon_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName">computer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword">domain_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser">domain_admin_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu">domain_ou</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain">join_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey">product_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList">run_once_command_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone">time_zone</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup">workgroup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `auto_logon_count_input`<sup>Optional</sup> <a name="auto_logon_count_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCountInput"></a>

```python
auto_logon_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_logon_input`<sup>Optional</sup> <a name="auto_logon_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonInput"></a>

```python
auto_logon_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `computer_name_input`<sup>Optional</sup> <a name="computer_name_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerNameInput"></a>

```python
computer_name_input: str
```

- *Type:* str

---

##### `domain_admin_password_input`<sup>Optional</sup> <a name="domain_admin_password_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPasswordInput"></a>

```python
domain_admin_password_input: str
```

- *Type:* str

---

##### `domain_admin_user_input`<sup>Optional</sup> <a name="domain_admin_user_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUserInput"></a>

```python
domain_admin_user_input: str
```

- *Type:* str

---

##### `domain_ou_input`<sup>Optional</sup> <a name="domain_ou_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOuInput"></a>

```python
domain_ou_input: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `join_domain_input`<sup>Optional</sup> <a name="join_domain_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomainInput"></a>

```python
join_domain_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `product_key_input`<sup>Optional</sup> <a name="product_key_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKeyInput"></a>

```python
product_key_input: str
```

- *Type:* str

---

##### `run_once_command_list_input`<sup>Optional</sup> <a name="run_once_command_list_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandListInput"></a>

```python
run_once_command_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workgroup_input`<sup>Optional</sup> <a name="workgroup_input" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroupInput"></a>

```python
workgroup_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `auto_logon`<sup>Required</sup> <a name="auto_logon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon"></a>

```python
auto_logon: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_logon_count`<sup>Required</sup> <a name="auto_logon_count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount"></a>

```python
auto_logon_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

---

##### `domain_admin_password`<sup>Required</sup> <a name="domain_admin_password" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```python
domain_admin_password: str
```

- *Type:* str

---

##### `domain_admin_user`<sup>Required</sup> <a name="domain_admin_user" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser"></a>

```python
domain_admin_user: str
```

- *Type:* str

---

##### `domain_ou`<sup>Required</sup> <a name="domain_ou" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu"></a>

```python
domain_ou: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `join_domain`<sup>Required</sup> <a name="join_domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain"></a>

```python
join_domain: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `product_key`<sup>Required</sup> <a name="product_key" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey"></a>

```python
product_key: str
```

- *Type:* str

---

##### `run_once_command_list`<sup>Required</sup> <a name="run_once_command_list" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```python
run_once_command_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone"></a>

```python
time_zone: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workgroup`<sup>Required</sup> <a name="workgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup"></a>

```python
workgroup: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GuestOsCustomizationSpecWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

---



