# `vsphere_compute_cluster_vm_dependency_rule`

Refer to the Terraform Registory for docs: [`vsphere_compute_cluster_vm_dependency_rule`](https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule).

# `computeClusterVmDependencyRule` Submodule <a name="`computeClusterVmDependencyRule` Submodule" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeClusterVmDependencyRule <a name="ComputeClusterVmDependencyRule" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule vsphere_compute_cluster_vm_dependency_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster_vm_dependency_rule

computeClusterVmDependencyRule.ComputeClusterVmDependencyRule(
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
  dependency_vm_group_name: str,
  name: str,
  vm_group_name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mandatory: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.dependencyVmGroupName">dependency_vm_group_name</a></code> | <code>str</code> | The name of the VM group that this rule depends on. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.vmGroupName">vm_group_name</a></code> | <code>str</code> | The name of the VM group that is the subject of this rule. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#id ComputeClusterVmDependencyRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.mandatory">mandatory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.computeClusterId"></a>

- *Type:* str

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#compute_cluster_id ComputeClusterVmDependencyRule#compute_cluster_id}

---

##### `dependency_vm_group_name`<sup>Required</sup> <a name="dependency_vm_group_name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.dependencyVmGroupName"></a>

- *Type:* str

The name of the VM group that this rule depends on.

The VMs defined in the group specified by vm_group_name will not be started until the VMs in this group are started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#dependency_vm_group_name ComputeClusterVmDependencyRule#dependency_vm_group_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.name"></a>

- *Type:* str

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#name ComputeClusterVmDependencyRule#name}

---

##### `vm_group_name`<sup>Required</sup> <a name="vm_group_name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.vmGroupName"></a>

- *Type:* str

The name of the VM group that is the subject of this rule.

The VMs defined in this group will not be started until the VMs in the group specified by dependency_vm_group_name are started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#vm_group_name ComputeClusterVmDependencyRule#vm_group_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#enabled ComputeClusterVmDependencyRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#id ComputeClusterVmDependencyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.Initializer.parameter.mandatory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#mandatory ComputeClusterVmDependencyRule#mandatory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetMandatory">reset_mandatory</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mandatory` <a name="reset_mandatory" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.resetMandatory"></a>

```python
def reset_mandatory() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster_vm_dependency_rule

computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster_vm_dependency_rule

computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster_vm_dependency_rule

computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterIdInput">compute_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupNameInput">dependency_vm_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatoryInput">mandatory_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupNameInput">vm_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupName">dependency_vm_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatory">mandatory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupName">vm_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_cluster_id_input`<sup>Optional</sup> <a name="compute_cluster_id_input" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterIdInput"></a>

```python
compute_cluster_id_input: str
```

- *Type:* str

---

##### `dependency_vm_group_name_input`<sup>Optional</sup> <a name="dependency_vm_group_name_input" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupNameInput"></a>

```python
dependency_vm_group_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mandatory_input`<sup>Optional</sup> <a name="mandatory_input" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatoryInput"></a>

```python
mandatory_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `vm_group_name_input`<sup>Optional</sup> <a name="vm_group_name_input" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupNameInput"></a>

```python
vm_group_name_input: str
```

- *Type:* str

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.computeClusterId"></a>

```python
compute_cluster_id: str
```

- *Type:* str

---

##### `dependency_vm_group_name`<sup>Required</sup> <a name="dependency_vm_group_name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.dependencyVmGroupName"></a>

```python
dependency_vm_group_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mandatory`<sup>Required</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.mandatory"></a>

```python
mandatory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `vm_group_name`<sup>Required</sup> <a name="vm_group_name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.vmGroupName"></a>

```python
vm_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeClusterVmDependencyRuleConfig <a name="ComputeClusterVmDependencyRuleConfig" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import compute_cluster_vm_dependency_rule

computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_cluster_id: str,
  dependency_vm_group_name: str,
  name: str,
  vm_group_name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mandatory: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.computeClusterId">compute_cluster_id</a></code> | <code>str</code> | The managed object ID of the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependencyVmGroupName">dependency_vm_group_name</a></code> | <code>str</code> | The name of the VM group that this rule depends on. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.name">name</a></code> | <code>str</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.vmGroupName">vm_group_name</a></code> | <code>str</code> | The name of the VM group that is the subject of this rule. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#id ComputeClusterVmDependencyRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.mandatory">mandatory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_cluster_id`<sup>Required</sup> <a name="compute_cluster_id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.computeClusterId"></a>

```python
compute_cluster_id: str
```

- *Type:* str

The managed object ID of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#compute_cluster_id ComputeClusterVmDependencyRule#compute_cluster_id}

---

##### `dependency_vm_group_name`<sup>Required</sup> <a name="dependency_vm_group_name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.dependencyVmGroupName"></a>

```python
dependency_vm_group_name: str
```

- *Type:* str

The name of the VM group that this rule depends on.

The VMs defined in the group specified by vm_group_name will not be started until the VMs in this group are started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#dependency_vm_group_name ComputeClusterVmDependencyRule#dependency_vm_group_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#name ComputeClusterVmDependencyRule#name}

---

##### `vm_group_name`<sup>Required</sup> <a name="vm_group_name" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.vmGroupName"></a>

```python
vm_group_name: str
```

- *Type:* str

The name of the VM group that is the subject of this rule.

The VMs defined in this group will not be started until the VMs in the group specified by dependency_vm_group_name are started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#vm_group_name ComputeClusterVmDependencyRule#vm_group_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#enabled ComputeClusterVmDependencyRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#id ComputeClusterVmDependencyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.computeClusterVmDependencyRule.ComputeClusterVmDependencyRuleConfig.property.mandatory"></a>

```python
mandatory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.4.1/docs/resources/compute_cluster_vm_dependency_rule#mandatory ComputeClusterVmDependencyRule#mandatory}

---



