# `vsphere_vapp_entity`

Refer to the Terraform Registory for docs: [`vsphere_vapp_entity`](https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity).

# `vappEntity` Submodule <a name="`vappEntity` Submodule" id="@cdktf/provider-vsphere.vappEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VappEntity <a name="VappEntity" id="@cdktf/provider-vsphere.vappEntity.VappEntity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity vsphere_vapp_entity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vapp_entity

vappEntity.VappEntity(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_id: str,
  target_id: str,
  custom_attributes: typing.Mapping[str] = None,
  id: str = None,
  start_action: str = None,
  start_delay: typing.Union[int, float] = None,
  start_order: typing.Union[int, float] = None,
  stop_action: str = None,
  stop_delay: typing.Union[int, float] = None,
  tags: typing.List[str] = None,
  wait_for_guest: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.containerId">container_id</a></code> | <code>str</code> | Managed object ID of the vApp container the entity is a member of. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Managed object ID of the entity to power on or power off. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#id VappEntity#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startAction">start_action</a></code> | <code>str</code> | How to start the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startDelay">start_delay</a></code> | <code>typing.Union[int, float]</code> | Delay in seconds before continuing with the next entity in the order of entities to be started. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startOrder">start_order</a></code> | <code>typing.Union[int, float]</code> | Order to start and stop target in vApp. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.stopAction">stop_action</a></code> | <code>str</code> | Defines the stop action for the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.stopDelay">stop_delay</a></code> | <code>typing.Union[int, float]</code> | Delay in seconds before continuing with the next entity in the order of entities to be stopped. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.waitForGuest">wait_for_guest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.containerId"></a>

- *Type:* str

Managed object ID of the vApp container the entity is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#container_id VappEntity#container_id}

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.targetId"></a>

- *Type:* str

Managed object ID of the entity to power on or power off.

This can be a virtual machine or a vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#target_id VappEntity#target_id}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.customAttributes"></a>

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#custom_attributes VappEntity#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#id VappEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_action`<sup>Optional</sup> <a name="start_action" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startAction"></a>

- *Type:* str

How to start the entity.

Valid settings are none or powerOn. If set to none, then the entity does not participate in auto-start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#start_action VappEntity#start_action}

---

##### `start_delay`<sup>Optional</sup> <a name="start_delay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startDelay"></a>

- *Type:* typing.Union[int, float]

Delay in seconds before continuing with the next entity in the order of entities to be started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#start_delay VappEntity#start_delay}

---

##### `start_order`<sup>Optional</sup> <a name="start_order" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.startOrder"></a>

- *Type:* typing.Union[int, float]

Order to start and stop target in vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#start_order VappEntity#start_order}

---

##### `stop_action`<sup>Optional</sup> <a name="stop_action" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.stopAction"></a>

- *Type:* str

Defines the stop action for the entity.

Can be set to none, powerOff, guestShutdown, or suspend. If set to none, then the entity does not participate in auto-stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#stop_action VappEntity#stop_action}

---

##### `stop_delay`<sup>Optional</sup> <a name="stop_delay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.stopDelay"></a>

- *Type:* typing.Union[int, float]

Delay in seconds before continuing with the next entity in the order of entities to be stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#stop_delay VappEntity#stop_delay}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#tags VappEntity#tags}

---

##### `wait_for_guest`<sup>Optional</sup> <a name="wait_for_guest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.Initializer.parameter.waitForGuest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay.

This property has no effect for vApps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#wait_for_guest VappEntity#wait_for_guest}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartAction">reset_start_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartDelay">reset_start_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartOrder">reset_start_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopAction">reset_stop_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopDelay">reset_stop_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.resetWaitForGuest">reset_wait_for_guest</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.vappEntity.VappEntity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.vappEntity.VappEntity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.vappEntity.VappEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_start_action` <a name="reset_start_action" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartAction"></a>

```python
def reset_start_action() -> None
```

##### `reset_start_delay` <a name="reset_start_delay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartDelay"></a>

```python
def reset_start_delay() -> None
```

##### `reset_start_order` <a name="reset_start_order" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStartOrder"></a>

```python
def reset_start_order() -> None
```

##### `reset_stop_action` <a name="reset_stop_action" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopAction"></a>

```python
def reset_stop_action() -> None
```

##### `reset_stop_delay` <a name="reset_stop_delay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetStopDelay"></a>

```python
def reset_stop_delay() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_wait_for_guest` <a name="reset_wait_for_guest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.resetWaitForGuest"></a>

```python
def reset_wait_for_guest() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import vapp_entity

vappEntity.VappEntity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import vapp_entity

vappEntity.VappEntity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import vapp_entity

vappEntity.VappEntity.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.vappEntity.VappEntity.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerIdInput">container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributesInput">custom_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startActionInput">start_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelayInput">start_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrderInput">start_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopActionInput">stop_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelayInput">stop_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuestInput">wait_for_guest_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerId">container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startAction">start_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelay">start_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrder">start_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopAction">stop_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelay">stop_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuest">wait_for_guest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_id_input`<sup>Optional</sup> <a name="container_id_input" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerIdInput"></a>

```python
container_id_input: str
```

- *Type:* str

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributesInput"></a>

```python
custom_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `start_action_input`<sup>Optional</sup> <a name="start_action_input" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startActionInput"></a>

```python
start_action_input: str
```

- *Type:* str

---

##### `start_delay_input`<sup>Optional</sup> <a name="start_delay_input" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelayInput"></a>

```python
start_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_order_input`<sup>Optional</sup> <a name="start_order_input" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrderInput"></a>

```python
start_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_action_input`<sup>Optional</sup> <a name="stop_action_input" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopActionInput"></a>

```python
stop_action_input: str
```

- *Type:* str

---

##### `stop_delay_input`<sup>Optional</sup> <a name="stop_delay_input" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelayInput"></a>

```python
stop_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `wait_for_guest_input`<sup>Optional</sup> <a name="wait_for_guest_input" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuestInput"></a>

```python
wait_for_guest_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `start_action`<sup>Required</sup> <a name="start_action" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startAction"></a>

```python
start_action: str
```

- *Type:* str

---

##### `start_delay`<sup>Required</sup> <a name="start_delay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startDelay"></a>

```python
start_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_order`<sup>Required</sup> <a name="start_order" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.startOrder"></a>

```python
start_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stop_action`<sup>Required</sup> <a name="stop_action" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopAction"></a>

```python
stop_action: str
```

- *Type:* str

---

##### `stop_delay`<sup>Required</sup> <a name="stop_delay" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.stopDelay"></a>

```python
stop_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `wait_for_guest`<sup>Required</sup> <a name="wait_for_guest" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.waitForGuest"></a>

```python
wait_for_guest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.vappEntity.VappEntity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VappEntityConfig <a name="VappEntityConfig" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import vapp_entity

vappEntity.VappEntityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_id: str,
  target_id: str,
  custom_attributes: typing.Mapping[str] = None,
  id: str = None,
  start_action: str = None,
  start_delay: typing.Union[int, float] = None,
  start_order: typing.Union[int, float] = None,
  stop_action: str = None,
  stop_delay: typing.Union[int, float] = None,
  tags: typing.List[str] = None,
  wait_for_guest: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.containerId">container_id</a></code> | <code>str</code> | Managed object ID of the vApp container the entity is a member of. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.targetId">target_id</a></code> | <code>str</code> | Managed object ID of the entity to power on or power off. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.customAttributes">custom_attributes</a></code> | <code>typing.Mapping[str]</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#id VappEntity#id}. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startAction">start_action</a></code> | <code>str</code> | How to start the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startDelay">start_delay</a></code> | <code>typing.Union[int, float]</code> | Delay in seconds before continuing with the next entity in the order of entities to be started. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startOrder">start_order</a></code> | <code>typing.Union[int, float]</code> | Order to start and stop target in vApp. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopAction">stop_action</a></code> | <code>str</code> | Defines the stop action for the entity. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopDelay">stop_delay</a></code> | <code>typing.Union[int, float]</code> | Delay in seconds before continuing with the next entity in the order of entities to be stopped. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.waitForGuest">wait_for_guest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

Managed object ID of the vApp container the entity is a member of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#container_id VappEntity#container_id}

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Managed object ID of the entity to power on or power off.

This can be a virtual machine or a vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#target_id VappEntity#target_id}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.customAttributes"></a>

```python
custom_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#custom_attributes VappEntity#custom_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#id VappEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_action`<sup>Optional</sup> <a name="start_action" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startAction"></a>

```python
start_action: str
```

- *Type:* str

How to start the entity.

Valid settings are none or powerOn. If set to none, then the entity does not participate in auto-start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#start_action VappEntity#start_action}

---

##### `start_delay`<sup>Optional</sup> <a name="start_delay" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startDelay"></a>

```python
start_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Delay in seconds before continuing with the next entity in the order of entities to be started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#start_delay VappEntity#start_delay}

---

##### `start_order`<sup>Optional</sup> <a name="start_order" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.startOrder"></a>

```python
start_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Order to start and stop target in vApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#start_order VappEntity#start_order}

---

##### `stop_action`<sup>Optional</sup> <a name="stop_action" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopAction"></a>

```python
stop_action: str
```

- *Type:* str

Defines the stop action for the entity.

Can be set to none, powerOff, guestShutdown, or suspend. If set to none, then the entity does not participate in auto-stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#stop_action VappEntity#stop_action}

---

##### `stop_delay`<sup>Optional</sup> <a name="stop_delay" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.stopDelay"></a>

```python
stop_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Delay in seconds before continuing with the next entity in the order of entities to be stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#stop_delay VappEntity#stop_delay}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#tags VappEntity#tags}

---

##### `wait_for_guest`<sup>Optional</sup> <a name="wait_for_guest" id="@cdktf/provider-vsphere.vappEntity.VappEntityConfig.property.waitForGuest"></a>

```python
wait_for_guest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the VM should be marked as being started when VMware Tools are ready instead of waiting for start_delay.

This property has no effect for vApps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/resources/vapp_entity#wait_for_guest VappEntity#wait_for_guest}

---



