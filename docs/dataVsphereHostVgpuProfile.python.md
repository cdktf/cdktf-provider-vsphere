# `dataVsphereHostVgpuProfile` Submodule <a name="`dataVsphereHostVgpuProfile` Submodule" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereHostVgpuProfile <a name="DataVsphereHostVgpuProfile" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/host_vgpu_profile vsphere_host_vgpu_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_vgpu_profile

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_id: str,
  id: str = None,
  name_regex: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.hostId">host_id</a></code> | <code>str</code> | The Managed Object ID of the host system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/host_vgpu_profile#id DataVsphereHostVgpuProfile#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.nameRegex">name_regex</a></code> | <code>str</code> | A regular expression used to match the vGPU Profile on the host. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.hostId"></a>

- *Type:* str

The Managed Object ID of the host system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/host_vgpu_profile#host_id DataVsphereHostVgpuProfile#host_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/host_vgpu_profile#id DataVsphereHostVgpuProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.Initializer.parameter.nameRegex"></a>

- *Type:* str

A regular expression used to match the vGPU Profile on the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/host_vgpu_profile#name_regex DataVsphereHostVgpuProfile#name_regex}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetNameRegex">reset_name_regex</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name_regex` <a name="reset_name_regex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.resetNameRegex"></a>

```python
def reset_name_regex() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVsphereHostVgpuProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_vgpu_profile

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_vgpu_profile

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_vgpu_profile

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_vgpu_profile

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVsphereHostVgpuProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVsphereHostVgpuProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVsphereHostVgpuProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/host_vgpu_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereHostVgpuProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.vgpuProfiles">vgpu_profiles</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList">DataVsphereHostVgpuProfileVgpuProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostIdInput">host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegexInput">name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegex">name_regex</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `vgpu_profiles`<sup>Required</sup> <a name="vgpu_profiles" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.vgpuProfiles"></a>

```python
vgpu_profiles: DataVsphereHostVgpuProfileVgpuProfilesList
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList">DataVsphereHostVgpuProfileVgpuProfilesList</a>

---

##### `host_id_input`<sup>Optional</sup> <a name="host_id_input" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostIdInput"></a>

```python
host_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_regex_input`<sup>Optional</sup> <a name="name_regex_input" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegexInput"></a>

```python
name_regex_input: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_regex`<sup>Required</sup> <a name="name_regex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereHostVgpuProfileConfig <a name="DataVsphereHostVgpuProfileConfig" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_vgpu_profile

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_id: str,
  id: str = None,
  name_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.hostId">host_id</a></code> | <code>str</code> | The Managed Object ID of the host system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/host_vgpu_profile#id DataVsphereHostVgpuProfile#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.nameRegex">name_regex</a></code> | <code>str</code> | A regular expression used to match the vGPU Profile on the host. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

The Managed Object ID of the host system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/host_vgpu_profile#host_id DataVsphereHostVgpuProfile#host_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/host_vgpu_profile#id DataVsphereHostVgpuProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileConfig.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

A regular expression used to match the vGPU Profile on the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.2/docs/data-sources/host_vgpu_profile#name_regex DataVsphereHostVgpuProfile#name_regex}

---

### DataVsphereHostVgpuProfileVgpuProfiles <a name="DataVsphereHostVgpuProfileVgpuProfiles" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_vgpu_profile

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles()
```


## Classes <a name="Classes" id="Classes"></a>

### DataVsphereHostVgpuProfileVgpuProfilesList <a name="DataVsphereHostVgpuProfileVgpuProfilesList" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_vgpu_profile

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataVsphereHostVgpuProfileVgpuProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataVsphereHostVgpuProfileVgpuProfilesOutputReference <a name="DataVsphereHostVgpuProfileVgpuProfilesOutputReference" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_vgpu_profile

dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.diskSnapshotSupported">disk_snapshot_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.memorySnapshotSupported">memory_snapshot_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.migrateSupported">migrate_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.suspendSupported">suspend_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.vgpu">vgpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles">DataVsphereHostVgpuProfileVgpuProfiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_snapshot_supported`<sup>Required</sup> <a name="disk_snapshot_supported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.diskSnapshotSupported"></a>

```python
disk_snapshot_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `memory_snapshot_supported`<sup>Required</sup> <a name="memory_snapshot_supported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.memorySnapshotSupported"></a>

```python
memory_snapshot_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `migrate_supported`<sup>Required</sup> <a name="migrate_supported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.migrateSupported"></a>

```python
migrate_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `suspend_supported`<sup>Required</sup> <a name="suspend_supported" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.suspendSupported"></a>

```python
suspend_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `vgpu`<sup>Required</sup> <a name="vgpu" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.vgpu"></a>

```python
vgpu: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfilesOutputReference.property.internalValue"></a>

```python
internal_value: DataVsphereHostVgpuProfileVgpuProfiles
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereHostVgpuProfile.DataVsphereHostVgpuProfileVgpuProfiles">DataVsphereHostVgpuProfileVgpuProfiles</a>

---



