# `dataVsphereHostPciDevice` Submodule <a name="`dataVsphereHostPciDevice` Submodule" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereHostPciDevice <a name="DataVsphereHostPciDevice" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device vsphere_host_pci_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_pci_device

dataVsphereHostPciDevice.DataVsphereHostPciDevice(
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
  class_id: str = None,
  id: str = None,
  name_regex: str = None,
  vendor_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.hostId">host_id</a></code> | <code>str</code> | The Managed Object ID of the host system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.classId">class_id</a></code> | <code>str</code> | The hexadecimal value of the PCI device's class ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#id DataVsphereHostPciDevice#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.nameRegex">name_regex</a></code> | <code>str</code> | A regular expression used to match the PCI device name. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.vendorId">vendor_id</a></code> | <code>str</code> | The hexadecimal value of the PCI device's vendor ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.hostId"></a>

- *Type:* str

The Managed Object ID of the host system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#host_id DataVsphereHostPciDevice#host_id}

---

##### `class_id`<sup>Optional</sup> <a name="class_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.classId"></a>

- *Type:* str

The hexadecimal value of the PCI device's class ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#class_id DataVsphereHostPciDevice#class_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#id DataVsphereHostPciDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.nameRegex"></a>

- *Type:* str

A regular expression used to match the PCI device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#name_regex DataVsphereHostPciDevice#name_regex}

---

##### `vendor_id`<sup>Optional</sup> <a name="vendor_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.Initializer.parameter.vendorId"></a>

- *Type:* str

The hexadecimal value of the PCI device's vendor ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#vendor_id DataVsphereHostPciDevice#vendor_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetClassId">reset_class_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetNameRegex">reset_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetVendorId">reset_vendor_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_class_id` <a name="reset_class_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetClassId"></a>

```python
def reset_class_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name_regex` <a name="reset_name_regex" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetNameRegex"></a>

```python
def reset_name_regex() -> None
```

##### `reset_vendor_id` <a name="reset_vendor_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.resetVendorId"></a>

```python
def reset_vendor_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVsphereHostPciDevice resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_pci_device

dataVsphereHostPciDevice.DataVsphereHostPciDevice.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_pci_device

dataVsphereHostPciDevice.DataVsphereHostPciDevice.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_pci_device

dataVsphereHostPciDevice.DataVsphereHostPciDevice.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_pci_device

dataVsphereHostPciDevice.DataVsphereHostPciDevice.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVsphereHostPciDevice resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVsphereHostPciDevice to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVsphereHostPciDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereHostPciDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classIdInput">class_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostIdInput">host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegexInput">name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorIdInput">vendor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classId">class_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegex">name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorId">vendor_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `class_id_input`<sup>Optional</sup> <a name="class_id_input" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classIdInput"></a>

```python
class_id_input: str
```

- *Type:* str

---

##### `host_id_input`<sup>Optional</sup> <a name="host_id_input" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostIdInput"></a>

```python
host_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_regex_input`<sup>Optional</sup> <a name="name_regex_input" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegexInput"></a>

```python
name_regex_input: str
```

- *Type:* str

---

##### `vendor_id_input`<sup>Optional</sup> <a name="vendor_id_input" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorIdInput"></a>

```python
vendor_id_input: str
```

- *Type:* str

---

##### `class_id`<sup>Required</sup> <a name="class_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.classId"></a>

```python
class_id: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_regex`<sup>Required</sup> <a name="name_regex" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

---

##### `vendor_id`<sup>Required</sup> <a name="vendor_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.vendorId"></a>

```python
vendor_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDevice.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereHostPciDeviceConfig <a name="DataVsphereHostPciDeviceConfig" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_host_pci_device

dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_id: str,
  class_id: str = None,
  id: str = None,
  name_regex: str = None,
  vendor_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.hostId">host_id</a></code> | <code>str</code> | The Managed Object ID of the host system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.classId">class_id</a></code> | <code>str</code> | The hexadecimal value of the PCI device's class ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#id DataVsphereHostPciDevice#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.nameRegex">name_regex</a></code> | <code>str</code> | A regular expression used to match the PCI device name. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.vendorId">vendor_id</a></code> | <code>str</code> | The hexadecimal value of the PCI device's vendor ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

The Managed Object ID of the host system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#host_id DataVsphereHostPciDevice#host_id}

---

##### `class_id`<sup>Optional</sup> <a name="class_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.classId"></a>

```python
class_id: str
```

- *Type:* str

The hexadecimal value of the PCI device's class ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#class_id DataVsphereHostPciDevice#class_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#id DataVsphereHostPciDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

A regular expression used to match the PCI device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#name_regex DataVsphereHostPciDevice#name_regex}

---

##### `vendor_id`<sup>Optional</sup> <a name="vendor_id" id="@cdktf/provider-vsphere.dataVsphereHostPciDevice.DataVsphereHostPciDeviceConfig.property.vendorId"></a>

```python
vendor_id: str
```

- *Type:* str

The hexadecimal value of the PCI device's vendor ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.1/docs/data-sources/host_pci_device#vendor_id DataVsphereHostPciDevice#vendor_id}

---



