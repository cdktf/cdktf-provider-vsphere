# `datastoreClusterVmAntiAffinityRule` Submodule <a name="`datastoreClusterVmAntiAffinityRule` Submodule" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastoreClusterVmAntiAffinityRule <a name="DatastoreClusterVmAntiAffinityRule" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule vsphere_datastore_cluster_vm_anti_affinity_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster_vm_anti_affinity_rule

datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datastore_cluster_id: str,
  name: str,
  virtual_machine_ids: typing.List[str],
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mandatory: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | The managed object ID of the datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.virtualMachineIds">virtual_machine_ids</a></code> | <code>typing.List[str]</code> | The UUIDs of the virtual machines to run on different datastores from each other. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#id DatastoreClusterVmAntiAffinityRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.mandatory">mandatory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datastore_cluster_id`<sup>Required</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.datastoreClusterId"></a>

- *Type:* str

The managed object ID of the datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#datastore_cluster_id DatastoreClusterVmAntiAffinityRule#datastore_cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.name"></a>

- *Type:* str

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#name DatastoreClusterVmAntiAffinityRule#name}

---

##### `virtual_machine_ids`<sup>Required</sup> <a name="virtual_machine_ids" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.virtualMachineIds"></a>

- *Type:* typing.List[str]

The UUIDs of the virtual machines to run on different datastores from each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#virtual_machine_ids DatastoreClusterVmAntiAffinityRule#virtual_machine_ids}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#enabled DatastoreClusterVmAntiAffinityRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#id DatastoreClusterVmAntiAffinityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.Initializer.parameter.mandatory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#mandatory DatastoreClusterVmAntiAffinityRule#mandatory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetMandatory">reset_mandatory</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mandatory` <a name="reset_mandatory" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.resetMandatory"></a>

```python
def reset_mandatory() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatastoreClusterVmAntiAffinityRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster_vm_anti_affinity_rule

datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster_vm_anti_affinity_rule

datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster_vm_anti_affinity_rule

datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster_vm_anti_affinity_rule

datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatastoreClusterVmAntiAffinityRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatastoreClusterVmAntiAffinityRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatastoreClusterVmAntiAffinityRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatastoreClusterVmAntiAffinityRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterIdInput">datastore_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatoryInput">mandatory_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIdsInput">virtual_machine_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatory">mandatory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIds">virtual_machine_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datastore_cluster_id_input`<sup>Optional</sup> <a name="datastore_cluster_id_input" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterIdInput"></a>

```python
datastore_cluster_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mandatory_input`<sup>Optional</sup> <a name="mandatory_input" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatoryInput"></a>

```python
mandatory_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `virtual_machine_ids_input`<sup>Optional</sup> <a name="virtual_machine_ids_input" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIdsInput"></a>

```python
virtual_machine_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datastore_cluster_id`<sup>Required</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.datastoreClusterId"></a>

```python
datastore_cluster_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mandatory`<sup>Required</sup> <a name="mandatory" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.mandatory"></a>

```python
mandatory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `virtual_machine_ids`<sup>Required</sup> <a name="virtual_machine_ids" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.virtualMachineIds"></a>

```python
virtual_machine_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatastoreClusterVmAntiAffinityRuleConfig <a name="DatastoreClusterVmAntiAffinityRuleConfig" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import datastore_cluster_vm_anti_affinity_rule

datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datastore_cluster_id: str,
  name: str,
  virtual_machine_ids: typing.List[str],
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mandatory: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.datastoreClusterId">datastore_cluster_id</a></code> | <code>str</code> | The managed object ID of the datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.name">name</a></code> | <code>str</code> | The unique name of the virtual machine group in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.virtualMachineIds">virtual_machine_ids</a></code> | <code>typing.List[str]</code> | The UUIDs of the virtual machines to run on different datastores from each other. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable this rule in the cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#id DatastoreClusterVmAntiAffinityRule#id}. |
| <code><a href="#@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.mandatory">mandatory</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, prevents any virtual machine operations that may violate this rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datastore_cluster_id`<sup>Required</sup> <a name="datastore_cluster_id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.datastoreClusterId"></a>

```python
datastore_cluster_id: str
```

- *Type:* str

The managed object ID of the datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#datastore_cluster_id DatastoreClusterVmAntiAffinityRule#datastore_cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The unique name of the virtual machine group in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#name DatastoreClusterVmAntiAffinityRule#name}

---

##### `virtual_machine_ids`<sup>Required</sup> <a name="virtual_machine_ids" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.virtualMachineIds"></a>

```python
virtual_machine_ids: typing.List[str]
```

- *Type:* typing.List[str]

The UUIDs of the virtual machines to run on different datastores from each other.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#virtual_machine_ids DatastoreClusterVmAntiAffinityRule#virtual_machine_ids}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable this rule in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#enabled DatastoreClusterVmAntiAffinityRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#id DatastoreClusterVmAntiAffinityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mandatory`<sup>Optional</sup> <a name="mandatory" id="@cdktf/provider-vsphere.datastoreClusterVmAntiAffinityRule.DatastoreClusterVmAntiAffinityRuleConfig.property.mandatory"></a>

```python
mandatory: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, prevents any virtual machine operations that may violate this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.10.0/docs/resources/datastore_cluster_vm_anti_affinity_rule#mandatory DatastoreClusterVmAntiAffinityRule#mandatory}

---



