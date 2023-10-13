# `vsphere_virtual_disk`

Refer to the Terraform Registory for docs: [`vsphere_virtual_disk`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk).

# `virtualDisk` Submodule <a name="`virtualDisk` Submodule" id="@cdktf/provider-vsphere.virtualDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDisk <a name="VirtualDisk" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk vsphere_virtual_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_disk

virtualDisk.VirtualDisk(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datastore: str,
  size: typing.Union[int, float],
  vmdk_path: str,
  adapter_type: str = None,
  create_directories: typing.Union[bool, IResolvable] = None,
  datacenter: str = None,
  id: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.datastore">datastore</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#datastore VirtualDisk#datastore}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#size VirtualDisk#size}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.vmdkPath">vmdk_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.adapterType">adapter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.createDirectories">create_directories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#id VirtualDisk#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#type VirtualDisk#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.datastore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#datastore VirtualDisk#datastore}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#size VirtualDisk#size}.

---

##### `vmdk_path`<sup>Required</sup> <a name="vmdk_path" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.vmdkPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}.

---

##### `adapter_type`<sup>Optional</sup> <a name="adapter_type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.adapterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}.

---

##### `create_directories`<sup>Optional</sup> <a name="create_directories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.createDirectories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.datacenter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#id VirtualDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#type VirtualDisk#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetAdapterType">reset_adapter_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetCreateDirectories">reset_create_directories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_adapter_type` <a name="reset_adapter_type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetAdapterType"></a>

```python
def reset_adapter_type() -> None
```

##### `reset_create_directories` <a name="reset_create_directories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetCreateDirectories"></a>

```python
def reset_create_directories() -> None
```

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_disk

virtualDisk.VirtualDisk.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_disk

virtualDisk.VirtualDisk.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_disk

virtualDisk.VirtualDisk.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterTypeInput">adapter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectoriesInput">create_directories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastoreInput">datastore_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPathInput">vmdk_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterType">adapter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectories">create_directories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastore">datastore</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPath">vmdk_path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `adapter_type_input`<sup>Optional</sup> <a name="adapter_type_input" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterTypeInput"></a>

```python
adapter_type_input: str
```

- *Type:* str

---

##### `create_directories_input`<sup>Optional</sup> <a name="create_directories_input" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectoriesInput"></a>

```python
create_directories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `datastore_input`<sup>Optional</sup> <a name="datastore_input" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastoreInput"></a>

```python
datastore_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vmdk_path_input`<sup>Optional</sup> <a name="vmdk_path_input" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPathInput"></a>

```python
vmdk_path_input: str
```

- *Type:* str

---

##### `adapter_type`<sup>Required</sup> <a name="adapter_type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.adapterType"></a>

```python
adapter_type: str
```

- *Type:* str

---

##### `create_directories`<sup>Required</sup> <a name="create_directories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.createDirectories"></a>

```python
create_directories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.datastore"></a>

```python
datastore: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vmdk_path`<sup>Required</sup> <a name="vmdk_path" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.vmdkPath"></a>

```python
vmdk_path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.virtualDisk.VirtualDisk.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDiskConfig <a name="VirtualDiskConfig" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import virtual_disk

virtualDisk.VirtualDiskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datastore: str,
  size: typing.Union[int, float],
  vmdk_path: str,
  adapter_type: str = None,
  create_directories: typing.Union[bool, IResolvable] = None,
  datacenter: str = None,
  id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datastore">datastore</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#datastore VirtualDisk#datastore}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#size VirtualDisk#size}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.vmdkPath">vmdk_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.adapterType">adapter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.createDirectories">create_directories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#id VirtualDisk#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#type VirtualDisk#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datastore"></a>

```python
datastore: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#datastore VirtualDisk#datastore}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#size VirtualDisk#size}.

---

##### `vmdk_path`<sup>Required</sup> <a name="vmdk_path" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.vmdkPath"></a>

```python
vmdk_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#vmdk_path VirtualDisk#vmdk_path}.

---

##### `adapter_type`<sup>Optional</sup> <a name="adapter_type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.adapterType"></a>

```python
adapter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#adapter_type VirtualDisk#adapter_type}.

---

##### `create_directories`<sup>Optional</sup> <a name="create_directories" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.createDirectories"></a>

```python
create_directories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#create_directories VirtualDisk#create_directories}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#datacenter VirtualDisk#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#id VirtualDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vsphere.virtualDisk.VirtualDiskConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/resources/virtual_disk#type VirtualDisk#type}.

---



