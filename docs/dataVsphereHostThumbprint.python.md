# `dataVsphereHostThumbprint` Submodule <a name="`dataVsphereHostThumbprint` Submodule" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereHostThumbprint <a name="DataVsphereHostThumbprint" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint vsphere_host_thumbprint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_thumbprint

dataVsphereHostThumbprint.DataVsphereHostThumbprint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str,
  id: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  port: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.address">address</a></code> | <code>str</code> | The address of the ESXi to extract the thumbprint from. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint#id DataVsphereHostThumbprint#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean that can be set to true to disable SSL certificate verification. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.port">port</a></code> | <code>str</code> | The port to connect to on the ESXi host. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.address"></a>

- *Type:* str

The address of the ESXi to extract the thumbprint from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint#address DataVsphereHostThumbprint#address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint#id DataVsphereHostThumbprint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.insecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean that can be set to true to disable SSL certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint#insecure DataVsphereHostThumbprint#insecure}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.Initializer.parameter.port"></a>

- *Type:* str

The port to connect to on the ESXi host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint#port DataVsphereHostThumbprint#port}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.resetPort">reset_port</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.resetPort"></a>

```python
def reset_port() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVsphereHostThumbprint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_thumbprint

dataVsphereHostThumbprint.DataVsphereHostThumbprint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_thumbprint

dataVsphereHostThumbprint.DataVsphereHostThumbprint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_thumbprint

dataVsphereHostThumbprint.DataVsphereHostThumbprint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_thumbprint

dataVsphereHostThumbprint.DataVsphereHostThumbprint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVsphereHostThumbprint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVsphereHostThumbprint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVsphereHostThumbprint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereHostThumbprint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.insecureInput">insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.port">port</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.insecureInput"></a>

```python
insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insecure`<sup>Required</sup> <a name="insecure" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.port"></a>

```python
port: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereHostThumbprintConfig <a name="DataVsphereHostThumbprintConfig" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_thumbprint

dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str,
  id: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  port: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.address">address</a></code> | <code>str</code> | The address of the ESXi to extract the thumbprint from. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint#id DataVsphereHostThumbprint#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean that can be set to true to disable SSL certificate verification. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.port">port</a></code> | <code>str</code> | The port to connect to on the ESXi host. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.address"></a>

```python
address: str
```

- *Type:* str

The address of the ESXi to extract the thumbprint from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint#address DataVsphereHostThumbprint#address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint#id DataVsphereHostThumbprint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean that can be set to true to disable SSL certificate verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint#insecure DataVsphereHostThumbprint#insecure}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-vsphere.dataVsphereHostThumbprint.DataVsphereHostThumbprintConfig.property.port"></a>

```python
port: str
```

- *Type:* str

The port to connect to on the ESXi host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/data-sources/host_thumbprint#port DataVsphereHostThumbprint#port}

---



