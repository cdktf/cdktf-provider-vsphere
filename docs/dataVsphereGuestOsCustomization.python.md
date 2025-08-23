# `dataVsphereGuestOsCustomization` Submodule <a name="`dataVsphereGuestOsCustomization` Submodule" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereGuestOsCustomization <a name="DataVsphereGuestOsCustomization" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/guest_os_customization vsphere_guest_os_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.name"></a>

- *Type:* str

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/guest_os_customization#name DataVsphereGuestOsCustomization#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVsphereGuestOsCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVsphereGuestOsCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVsphereGuestOsCustomization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVsphereGuestOsCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/guest_os_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereGuestOsCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.changeVersion">change_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lastUpdateTime">last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList">DataVsphereGuestOsCustomizationSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `change_version`<sup>Required</sup> <a name="change_version" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.changeVersion"></a>

```python
change_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lastUpdateTime"></a>

```python
last_update_time: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.spec"></a>

```python
spec: DataVsphereGuestOsCustomizationSpecList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList">DataVsphereGuestOsCustomizationSpecList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereGuestOsCustomizationConfig <a name="DataVsphereGuestOsCustomizationConfig" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.name">name</a></code> | <code>str</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/guest_os_customization#name DataVsphereGuestOsCustomization#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.15.0/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataVsphereGuestOsCustomizationSpec <a name="DataVsphereGuestOsCustomizationSpec" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec()
```


### DataVsphereGuestOsCustomizationSpecLinuxOptions <a name="DataVsphereGuestOsCustomizationSpecLinuxOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions()
```


### DataVsphereGuestOsCustomizationSpecNetworkInterface <a name="DataVsphereGuestOsCustomizationSpecNetworkInterface" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface()
```


### DataVsphereGuestOsCustomizationSpecWindowsOptions <a name="DataVsphereGuestOsCustomizationSpecWindowsOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataVsphereGuestOsCustomizationSpecLinuxOptionsList <a name="DataVsphereGuestOsCustomizationSpecLinuxOptionsList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference <a name="DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc">hw_clock_utc</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText">script_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions">DataVsphereGuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `hw_clock_utc`<sup>Required</sup> <a name="hw_clock_utc" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc"></a>

```python
hw_clock_utc: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `script_text`<sup>Required</sup> <a name="script_text" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText"></a>

```python
script_text: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataVsphereGuestOsCustomizationSpecLinuxOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions">DataVsphereGuestOsCustomizationSpecLinuxOptions</a>

---


### DataVsphereGuestOsCustomizationSpecList <a name="DataVsphereGuestOsCustomizationSpecList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVsphereGuestOsCustomizationSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataVsphereGuestOsCustomizationSpecNetworkInterfaceList <a name="DataVsphereGuestOsCustomizationSpecNetworkInterfaceList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference <a name="DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain">dns_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList">dns_server_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask">ipv4_netmask</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask">ipv6_netmask</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface">DataVsphereGuestOsCustomizationSpecNetworkInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_domain`<sup>Required</sup> <a name="dns_domain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain"></a>

```python
dns_domain: str
```

- *Type:* str

---

##### `dns_server_list`<sup>Required</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList"></a>

```python
dns_server_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `ipv4_netmask`<sup>Required</sup> <a name="ipv4_netmask" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```python
ipv4_netmask: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `ipv6_netmask`<sup>Required</sup> <a name="ipv6_netmask" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```python
ipv6_netmask: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: DataVsphereGuestOsCustomizationSpecNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface">DataVsphereGuestOsCustomizationSpecNetworkInterface</a>

---


### DataVsphereGuestOsCustomizationSpecOutputReference <a name="DataVsphereGuestOsCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsServerList">dns_server_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsSuffixList">dns_suffix_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.linuxOptions">linux_options</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList">DataVsphereGuestOsCustomizationSpecLinuxOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList">DataVsphereGuestOsCustomizationSpecNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsOptions">windows_options</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList">DataVsphereGuestOsCustomizationSpecWindowsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsSysprepText">windows_sysprep_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec">DataVsphereGuestOsCustomizationSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_server_list`<sup>Required</sup> <a name="dns_server_list" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsServerList"></a>

```python
dns_server_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_suffix_list`<sup>Required</sup> <a name="dns_suffix_list" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsSuffixList"></a>

```python
dns_suffix_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `linux_options`<sup>Required</sup> <a name="linux_options" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.linuxOptions"></a>

```python
linux_options: DataVsphereGuestOsCustomizationSpecLinuxOptionsList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList">DataVsphereGuestOsCustomizationSpecLinuxOptionsList</a>

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.networkInterface"></a>

```python
network_interface: DataVsphereGuestOsCustomizationSpecNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList">DataVsphereGuestOsCustomizationSpecNetworkInterfaceList</a>

---

##### `windows_options`<sup>Required</sup> <a name="windows_options" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsOptions"></a>

```python
windows_options: DataVsphereGuestOsCustomizationSpecWindowsOptionsList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList">DataVsphereGuestOsCustomizationSpecWindowsOptionsList</a>

---

##### `windows_sysprep_text`<sup>Required</sup> <a name="windows_sysprep_text" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsSysprepText"></a>

```python
windows_sysprep_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataVsphereGuestOsCustomizationSpec
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec">DataVsphereGuestOsCustomizationSpec</a>

---


### DataVsphereGuestOsCustomizationSpecWindowsOptionsList <a name="DataVsphereGuestOsCustomizationSpecWindowsOptionsList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference <a name="DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_guest_os_customization

dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon">auto_logon</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount">auto_logon_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName">computer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword">domain_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser">domain_admin_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu">domain_ou</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain">join_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey">product_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList">run_once_command_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone">time_zone</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup">workgroup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions">DataVsphereGuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `auto_logon`<sup>Required</sup> <a name="auto_logon" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon"></a>

```python
auto_logon: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_logon_count`<sup>Required</sup> <a name="auto_logon_count" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount"></a>

```python
auto_logon_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

---

##### `domain_admin_password`<sup>Required</sup> <a name="domain_admin_password" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```python
domain_admin_password: str
```

- *Type:* str

---

##### `domain_admin_user`<sup>Required</sup> <a name="domain_admin_user" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser"></a>

```python
domain_admin_user: str
```

- *Type:* str

---

##### `domain_ou`<sup>Required</sup> <a name="domain_ou" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu"></a>

```python
domain_ou: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `join_domain`<sup>Required</sup> <a name="join_domain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain"></a>

```python
join_domain: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `product_key`<sup>Required</sup> <a name="product_key" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey"></a>

```python
product_key: str
```

- *Type:* str

---

##### `run_once_command_list`<sup>Required</sup> <a name="run_once_command_list" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```python
run_once_command_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone"></a>

```python
time_zone: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workgroup`<sup>Required</sup> <a name="workgroup" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup"></a>

```python
workgroup: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataVsphereGuestOsCustomizationSpecWindowsOptions
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions">DataVsphereGuestOsCustomizationSpecWindowsOptions</a>

---



