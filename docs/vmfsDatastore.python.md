# `vmfsDatastore` Submodule <a name="`vmfsDatastore` Submodule" id="@cdktf/provider-vsphere.vmfsDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmfsDatastore <a name="VmfsDatastore" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore vsphere_vmfs_datastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vmfs_datastore

vmfsDatastore.VmfsDatastore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disks: typing.List[str],
  host_system_id: str,
  name: str,
  custom_attributes: typing.Mapping[str] = None,
  datastore_cluster_id: str = None,
  folder: str = None,
  id: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.disks">disks</a></code> | <code>typing.List[str]</code> | The disks to add to the datastore. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.hostSystemId">host_system_id</a></code> | <code>str</code> | The managed object ID of the host to set up the datastore on. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the datastore. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | The managed object ID of the datastore cluster to place the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.folder">folder</a></code> | <code>str</code> | The path to the datastore folder to put the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#id VmfsDatastore#id}. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.disks"></a>

- *Type:* typing.List[str]

The disks to add to the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#disks VmfsDatastore#disks}

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.hostSystemId"></a>

- *Type:* str

The managed object ID of the host to set up the datastore on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#host_system_id VmfsDatastore#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.name"></a>

- *Type:* str

The name of the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#name VmfsDatastore#name}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.customAttributes"></a>

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#custom_attributes VmfsDatastore#custom_attributes}

---

##### `datastore_cluster_id`<sup>Optional</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.datastoreClusterId"></a>

- *Type:* str

The managed object ID of the datastore cluster to place the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#datastore_cluster_id VmfsDatastore#datastore_cluster_id}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.folder"></a>

- *Type:* str

The path to the datastore folder to put the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#folder VmfsDatastore#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#id VmfsDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#tags VmfsDatastore#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetDatastoreClusterId">reset_datastore_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetFolder">reset_folder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_datastore_cluster_id` <a name="reset_datastore_cluster_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetDatastoreClusterId"></a>

```python
def reset_datastore_cluster_id() -> None
```

##### `reset_folder` <a name="reset_folder" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetFolder"></a>

```python
def reset_folder() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VmfsDatastore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import vmfs_datastore

vmfsDatastore.VmfsDatastore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import vmfs_datastore

vmfsDatastore.VmfsDatastore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import vmfs_datastore

vmfsDatastore.VmfsDatastore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import vmfs_datastore

vmfsDatastore.VmfsDatastore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VmfsDatastore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VmfsDatastore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VmfsDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmfsDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.accessible">accessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.freeSpace">free_space</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.maintenanceMode">maintenance_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.multipleHostAccess">multiple_host_access</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.uncommittedSpace">uncommitted_space</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributesInput">custom_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterIdInput">datastore_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disksInput">disks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemIdInput">host_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disks">disks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemId">host_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessible`<sup>Required</sup> <a name="accessible" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.accessible"></a>

```python
accessible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `free_space`<sup>Required</sup> <a name="free_space" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.freeSpace"></a>

```python
free_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_mode`<sup>Required</sup> <a name="maintenance_mode" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.maintenanceMode"></a>

```python
maintenance_mode: str
```

- *Type:* str

---

##### `multiple_host_access`<sup>Required</sup> <a name="multiple_host_access" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.multipleHostAccess"></a>

```python
multiple_host_access: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `uncommitted_space`<sup>Required</sup> <a name="uncommitted_space" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.uncommittedSpace"></a>

```python
uncommitted_space: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributesInput"></a>

```python
custom_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datastore_cluster_id_input`<sup>Optional</sup> <a name="datastore_cluster_id_input" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterIdInput"></a>

```python
datastore_cluster_id_input: str
```

- *Type:* str

---

##### `disks_input`<sup>Optional</sup> <a name="disks_input" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disksInput"></a>

```python
disks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `host_system_id_input`<sup>Optional</sup> <a name="host_system_id_input" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemIdInput"></a>

```python
host_system_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datastore_cluster_id`<sup>Required</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.datastoreClusterId"></a>

```python
datastore_cluster_id: str
```

- *Type:* str

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.disks"></a>

```python
disks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.hostSystemId"></a>

```python
host_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VmfsDatastoreConfig <a name="VmfsDatastoreConfig" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vmfs_datastore

vmfsDatastore.VmfsDatastoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disks: typing.List[str],
  host_system_id: str,
  name: str,
  custom_attributes: typing.Mapping[str] = None,
  datastore_cluster_id: str = None,
  folder: str = None,
  id: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.disks">disks</a></code> | <code>typing.List[str]</code> | The disks to add to the datastore. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.hostSystemId">host_system_id</a></code> | <code>str</code> | The managed object ID of the host to set up the datastore on. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.name">name</a></code> | <code>str</code> | The name of the datastore. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | The managed object ID of the datastore cluster to place the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.folder">folder</a></code> | <code>str</code> | The path to the datastore folder to put the datastore in. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#id VmfsDatastore#id}. |
| <code><a href="#@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.disks"></a>

```python
disks: typing.List[str]
```

- *Type:* typing.List[str]

The disks to add to the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#disks VmfsDatastore#disks}

---

##### `host_system_id`<sup>Required</sup> <a name="host_system_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.hostSystemId"></a>

```python
host_system_id: str
```

- *Type:* str

The managed object ID of the host to set up the datastore on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#host_system_id VmfsDatastore#host_system_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#name VmfsDatastore#name}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#custom_attributes VmfsDatastore#custom_attributes}

---

##### `datastore_cluster_id`<sup>Optional</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.datastoreClusterId"></a>

```python
datastore_cluster_id: str
```

- *Type:* str

The managed object ID of the datastore cluster to place the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#datastore_cluster_id VmfsDatastore#datastore_cluster_id}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

The path to the datastore folder to put the datastore in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#folder VmfsDatastore#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#id VmfsDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vmfsDatastore.VmfsDatastoreConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.1/docs/resources/vmfs_datastore#tags VmfsDatastore#tags}

---



