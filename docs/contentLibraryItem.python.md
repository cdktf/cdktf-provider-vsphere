# `contentLibraryItem` Submodule <a name="`contentLibraryItem` Submodule" id="@cdktf/provider-vsphere.contentLibraryItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContentLibraryItem <a name="ContentLibraryItem" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item vsphere_content_library_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library_item

contentLibraryItem.ContentLibraryItem(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  library_id: str,
  name: str,
  description: str = None,
  file_url: str = None,
  id: str = None,
  source_uuid: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.libraryId">library_id</a></code> | <code>str</code> | ID of the content library to contain item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional description of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.fileUrl">file_url</a></code> | <code>str</code> | ID of source VM of content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#id ContentLibraryItem#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.sourceUuid">source_uuid</a></code> | <code>str</code> | The managed object ID of an existing VM to be cloned to the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of content library item. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `library_id`<sup>Required</sup> <a name="library_id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.libraryId"></a>

- *Type:* str

ID of the content library to contain item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#library_id ContentLibraryItem#library_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.name"></a>

- *Type:* str

The name of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#name ContentLibraryItem#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.description"></a>

- *Type:* str

Optional description of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#description ContentLibraryItem#description}

---

##### `file_url`<sup>Optional</sup> <a name="file_url" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.fileUrl"></a>

- *Type:* str

ID of source VM of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#file_url ContentLibraryItem#file_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#id ContentLibraryItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_uuid`<sup>Optional</sup> <a name="source_uuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.sourceUuid"></a>

- *Type:* str

The managed object ID of an existing VM to be cloned to the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#source_uuid ContentLibraryItem#source_uuid}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.Initializer.parameter.type"></a>

- *Type:* str

Type of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#type ContentLibraryItem#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetFileUrl">reset_file_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetSourceUuid">reset_source_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_file_url` <a name="reset_file_url" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetFileUrl"></a>

```python
def reset_file_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_source_uuid` <a name="reset_source_uuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetSourceUuid"></a>

```python
def reset_source_uuid() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContentLibraryItem resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library_item

contentLibraryItem.ContentLibraryItem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library_item

contentLibraryItem.ContentLibraryItem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library_item

contentLibraryItem.ContentLibraryItem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library_item

contentLibraryItem.ContentLibraryItem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContentLibraryItem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContentLibraryItem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContentLibraryItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContentLibraryItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrlInput">file_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryIdInput">library_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuidInput">source_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrl">file_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryId">library_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuid">source_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `file_url_input`<sup>Optional</sup> <a name="file_url_input" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrlInput"></a>

```python
file_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `library_id_input`<sup>Optional</sup> <a name="library_id_input" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryIdInput"></a>

```python
library_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_uuid_input`<sup>Optional</sup> <a name="source_uuid_input" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuidInput"></a>

```python
source_uuid_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `file_url`<sup>Required</sup> <a name="file_url" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.fileUrl"></a>

```python
file_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `library_id`<sup>Required</sup> <a name="library_id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.libraryId"></a>

```python
library_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_uuid`<sup>Required</sup> <a name="source_uuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.sourceUuid"></a>

```python
source_uuid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContentLibraryItemConfig <a name="ContentLibraryItemConfig" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import content_library_item

contentLibraryItem.ContentLibraryItemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  library_id: str,
  name: str,
  description: str = None,
  file_url: str = None,
  id: str = None,
  source_uuid: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.libraryId">library_id</a></code> | <code>str</code> | ID of the content library to contain item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.name">name</a></code> | <code>str</code> | The name of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.description">description</a></code> | <code>str</code> | Optional description of the content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.fileUrl">file_url</a></code> | <code>str</code> | ID of source VM of content library item. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#id ContentLibraryItem#id}. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.sourceUuid">source_uuid</a></code> | <code>str</code> | The managed object ID of an existing VM to be cloned to the content library. |
| <code><a href="#@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.type">type</a></code> | <code>str</code> | Type of content library item. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `library_id`<sup>Required</sup> <a name="library_id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.libraryId"></a>

```python
library_id: str
```

- *Type:* str

ID of the content library to contain item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#library_id ContentLibraryItem#library_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#name ContentLibraryItem#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description of the content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#description ContentLibraryItem#description}

---

##### `file_url`<sup>Optional</sup> <a name="file_url" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.fileUrl"></a>

```python
file_url: str
```

- *Type:* str

ID of source VM of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#file_url ContentLibraryItem#file_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#id ContentLibraryItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_uuid`<sup>Optional</sup> <a name="source_uuid" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.sourceUuid"></a>

```python
source_uuid: str
```

- *Type:* str

The managed object ID of an existing VM to be cloned to the content library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#source_uuid ContentLibraryItem#source_uuid}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.contentLibraryItem.ContentLibraryItemConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of content library item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/content_library_item#type ContentLibraryItem#type}

---



