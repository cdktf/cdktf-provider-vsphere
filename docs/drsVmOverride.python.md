# `vsphere_drs_vm_override`

Refer to the Terraform Registory for docs: [`vsphere_drs_vm_override`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override).

# `drsVmOverride` Submodule <a name="`drsVmOverride` Submodule" id="@cdktf/provider-vsphere.drsVmOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsVmOverride <a name="DrsVmOverride" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override vsphere_drs_vm_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import drs_vm_override

drsVmOverride.DrsVmOverride(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_cluster_id: str,
  virtual_machine_id: str,
  drs_automation_level: str = None,
  drs_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.drsAutomationLevel">drs_automation_level</a></code> | <code>str</code> | The automation level for this virtual machine in the cluster. Can be one of manual, partiallyAutomated, or fullyAutomated. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.drsEnabled">drs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable DRS for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#id DrsVmOverride#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.computeClusterId"></a>

- *Type:* str

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#compute_cluster_id DrsVmOverride#compute_cluster_id}

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.virtualMachineId"></a>

- *Type:* str

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#virtual_machine_id DrsVmOverride#virtual_machine_id}

---

##### `drs_automation_level`<sup>Optional</sup> <a name="drs_automation_level" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.drsAutomationLevel"></a>

- *Type:* str

The automation level for this virtual machine in the cluster. Can be one of manual, partiallyAutomated, or fullyAutomated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#drs_automation_level DrsVmOverride#drs_automation_level}

---

##### `drs_enabled`<sup>Optional</sup> <a name="drs_enabled" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.drsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable DRS for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#drs_enabled DrsVmOverride#drs_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#id DrsVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetDrsAutomationLevel">reset_drs_automation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetDrsEnabled">reset_drs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_drs_automation_level` <a name="reset_drs_automation_level" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetDrsAutomationLevel"></a>

```python
def reset_drs_automation_level() -> None
```

##### `reset_drs_enabled` <a name="reset_drs_enabled" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetDrsEnabled"></a>

```python
def reset_drs_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import drs_vm_override

drsVmOverride.DrsVmOverride.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import drs_vm_override

drsVmOverride.DrsVmOverride.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import drs_vm_override

drsVmOverride.DrsVmOverride.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.computeClusterIdInput">compute_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsAutomationLevelInput">drs_automation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsEnabledInput">drs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.virtualMachineIdInput">virtual_machine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsAutomationLevel">drs_automation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsEnabled">drs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_cluster_id_input`<sup>Optional</sup> <a name="compute_cluster_id_input" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.computeClusterIdInput"></a>

```python
compute_cluster_id_input: str
```

- *Type:* str

---

##### `drs_automation_level_input`<sup>Optional</sup> <a name="drs_automation_level_input" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsAutomationLevelInput"></a>

```python
drs_automation_level_input: str
```

- *Type:* str

---

##### `drs_enabled_input`<sup>Optional</sup> <a name="drs_enabled_input" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsEnabledInput"></a>

```python
drs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `virtual_machine_id_input`<sup>Optional</sup> <a name="virtual_machine_id_input" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.virtualMachineIdInput"></a>

```python
virtual_machine_id_input: str
```

- *Type:* str

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.computeClusterId"></a>

```python
compute_cluster_id: str
```

- *Type:* str

---

##### `drs_automation_level`<sup>Required</sup> <a name="drs_automation_level" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsAutomationLevel"></a>

```python
drs_automation_level: str
```

- *Type:* str

---

##### `drs_enabled`<sup>Required</sup> <a name="drs_enabled" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.drsEnabled"></a>

```python
drs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverride.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DrsVmOverrideConfig <a name="DrsVmOverrideConfig" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import drs_vm_override

drsVmOverride.DrsVmOverrideConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_cluster_id: str,
  virtual_machine_id: str,
  drs_automation_level: str = None,
  drs_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.drsAutomationLevel">drs_automation_level</a></code> | <code>str</code> | The automation level for this virtual machine in the cluster. Can be one of manual, partiallyAutomated, or fullyAutomated. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.drsEnabled">drs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable DRS for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#id DrsVmOverride#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.computeClusterId"></a>

```python
compute_cluster_id: str
```

- *Type:* str

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#compute_cluster_id DrsVmOverride#compute_cluster_id}

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#virtual_machine_id DrsVmOverride#virtual_machine_id}

---

##### `drs_automation_level`<sup>Optional</sup> <a name="drs_automation_level" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.drsAutomationLevel"></a>

```python
drs_automation_level: str
```

- *Type:* str

The automation level for this virtual machine in the cluster. Can be one of manual, partiallyAutomated, or fullyAutomated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#drs_automation_level DrsVmOverride#drs_automation_level}

---

##### `drs_enabled`<sup>Optional</sup> <a name="drs_enabled" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.drsEnabled"></a>

```python
drs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable DRS for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#drs_enabled DrsVmOverride#drs_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.drsVmOverride.DrsVmOverrideConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.0/docs/resources/drs_vm_override#id DrsVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



