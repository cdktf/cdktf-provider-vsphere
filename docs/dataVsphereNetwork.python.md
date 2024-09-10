# `dataVsphereNetwork` Submodule <a name="`dataVsphereNetwork` Submodule" id="@cdktf/provider-vsphere.dataVsphereNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereNetwork <a name="DataVsphereNetwork" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network vsphere_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_network

dataVsphereNetwork.DataVsphereNetwork(
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
  datacenter_id: str = None,
  distributed_virtual_switch_uuid: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.name">name</a></code> | <code>str</code> | The name or path of the network. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | The managed object ID of the datacenter the network is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.distributedVirtualSwitchUuid">distributed_virtual_switch_uuid</a></code> | <code>str</code> | Id of the distributed virtual switch of which the port group is a part of. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network#id DataVsphereNetwork#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.name"></a>

- *Type:* str

The name or path of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network#name DataVsphereNetwork#name}

---

##### `datacenter_id`<sup>Optional</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.datacenterId"></a>

- *Type:* str

The managed object ID of the datacenter the network is in.

This is required if the supplied path is not an absolute path containing a datacenter and there are multiple datacenters in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network#datacenter_id DataVsphereNetwork#datacenter_id}

---

##### `distributed_virtual_switch_uuid`<sup>Optional</sup> <a name="distributed_virtual_switch_uuid" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.distributedVirtualSwitchUuid"></a>

- *Type:* str

Id of the distributed virtual switch of which the port group is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network#distributed_virtual_switch_uuid DataVsphereNetwork#distributed_virtual_switch_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network#id DataVsphereNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDatacenterId">reset_datacenter_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDistributedVirtualSwitchUuid">reset_distributed_virtual_switch_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_datacenter_id` <a name="reset_datacenter_id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDatacenterId"></a>

```python
def reset_datacenter_id() -> None
```

##### `reset_distributed_virtual_switch_uuid` <a name="reset_distributed_virtual_switch_uuid" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetDistributedVirtualSwitchUuid"></a>

```python
def reset_distributed_virtual_switch_uuid() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVsphereNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_network

dataVsphereNetwork.DataVsphereNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_network

dataVsphereNetwork.DataVsphereNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_network

dataVsphereNetwork.DataVsphereNetwork.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_network

dataVsphereNetwork.DataVsphereNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVsphereNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVsphereNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVsphereNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuidInput">distributed_virtual_switch_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuid">distributed_virtual_switch_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `distributed_virtual_switch_uuid_input`<sup>Optional</sup> <a name="distributed_virtual_switch_uuid_input" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuidInput"></a>

```python
distributed_virtual_switch_uuid_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `distributed_virtual_switch_uuid`<sup>Required</sup> <a name="distributed_virtual_switch_uuid" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.distributedVirtualSwitchUuid"></a>

```python
distributed_virtual_switch_uuid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereNetworkConfig <a name="DataVsphereNetworkConfig" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import data_vsphere_network

dataVsphereNetwork.DataVsphereNetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  datacenter_id: str = None,
  distributed_virtual_switch_uuid: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.name">name</a></code> | <code>str</code> | The name or path of the network. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | The managed object ID of the datacenter the network is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.distributedVirtualSwitchUuid">distributed_virtual_switch_uuid</a></code> | <code>str</code> | Id of the distributed virtual switch of which the port group is a part of. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network#id DataVsphereNetwork#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name or path of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network#name DataVsphereNetwork#name}

---

##### `datacenter_id`<sup>Optional</sup> <a name="datacenter_id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

The managed object ID of the datacenter the network is in.

This is required if the supplied path is not an absolute path containing a datacenter and there are multiple datacenters in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network#datacenter_id DataVsphereNetwork#datacenter_id}

---

##### `distributed_virtual_switch_uuid`<sup>Optional</sup> <a name="distributed_virtual_switch_uuid" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.distributedVirtualSwitchUuid"></a>

```python
distributed_virtual_switch_uuid: str
```

- *Type:* str

Id of the distributed virtual switch of which the port group is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network#distributed_virtual_switch_uuid DataVsphereNetwork#distributed_virtual_switch_uuid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereNetwork.DataVsphereNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.1/docs/data-sources/network#id DataVsphereNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



