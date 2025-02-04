# `dataVsphereDatastoreStats` Submodule <a name="`dataVsphereDatastoreStats` Submodule" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereDatastoreStats <a name="DataVsphereDatastoreStats" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats vsphere_datastore_stats}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_datastore_stats

dataVsphereDatastoreStats.DataVsphereDatastoreStats(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  capacity: typing.Mapping[str] = None,
  free_space: typing.Mapping[str] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | The managed object ID of the datacenter to get datastores from. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.capacity">capacity</a></code> | <code>typing.Mapping[str]</code> | The capacity of the datastores. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.freeSpace">free_space</a></code> | <code>typing.Mapping[str]</code> | The free space of the datastores. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats#id DataVsphereDatastoreStats#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.datacenterId"></a>

- *Type:* str

The managed object ID of the datacenter to get datastores from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats#datacenter_id DataVsphereDatastoreStats#datacenter_id}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.capacity"></a>

- *Type:* typing.Mapping[str]

The capacity of the datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats#capacity DataVsphereDatastoreStats#capacity}

---

##### `free_space`<sup>Optional</sup> <a name="free_space" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.freeSpace"></a>

- *Type:* typing.Mapping[str]

The free space of the datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats#free_space DataVsphereDatastoreStats#free_space}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats#id DataVsphereDatastoreStats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetCapacity">reset_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetFreeSpace">reset_free_space</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_capacity` <a name="reset_capacity" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetCapacity"></a>

```python
def reset_capacity() -> None
```

##### `reset_free_space` <a name="reset_free_space" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetFreeSpace"></a>

```python
def reset_free_space() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVsphereDatastoreStats resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_datastore_stats

dataVsphereDatastoreStats.DataVsphereDatastoreStats.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_datastore_stats

dataVsphereDatastoreStats.DataVsphereDatastoreStats.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_datastore_stats

dataVsphereDatastoreStats.DataVsphereDatastoreStats.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_datastore_stats

dataVsphereDatastoreStats.DataVsphereDatastoreStats.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVsphereDatastoreStats resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVsphereDatastoreStats to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVsphereDatastoreStats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereDatastoreStats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.capacityInput">capacity_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.freeSpaceInput">free_space_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.capacity">capacity</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.freeSpace">free_space</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.capacityInput"></a>

```python
capacity_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `free_space_input`<sup>Optional</sup> <a name="free_space_input" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.freeSpaceInput"></a>

```python
free_space_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.capacity"></a>

```python
capacity: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `free_space`<sup>Required</sup> <a name="free_space" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.freeSpace"></a>

```python
free_space: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStats.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereDatastoreStatsConfig <a name="DataVsphereDatastoreStatsConfig" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_datastore_stats

dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datacenter_id: str,
  capacity: typing.Mapping[str] = None,
  free_space: typing.Mapping[str] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | The managed object ID of the datacenter to get datastores from. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.capacity">capacity</a></code> | <code>typing.Mapping[str]</code> | The capacity of the datastores. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.freeSpace">free_space</a></code> | <code>typing.Mapping[str]</code> | The free space of the datastores. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats#id DataVsphereDatastoreStats#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

The managed object ID of the datacenter to get datastores from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats#datacenter_id DataVsphereDatastoreStats#datacenter_id}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.capacity"></a>

```python
capacity: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The capacity of the datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats#capacity DataVsphereDatastoreStats#capacity}

---

##### `free_space`<sup>Optional</sup> <a name="free_space" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.freeSpace"></a>

```python
free_space: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The free space of the datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats#free_space DataVsphereDatastoreStats#free_space}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereDatastoreStats.DataVsphereDatastoreStatsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.11.1/docs/data-sources/datastore_stats#id DataVsphereDatastoreStats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



