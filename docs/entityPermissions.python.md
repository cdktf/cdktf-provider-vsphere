# `vsphere_entity_permissions`

Refer to the Terraform Registory for docs: [`vsphere_entity_permissions`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions).

# `entityPermissions` Submodule <a name="`entityPermissions` Submodule" id="@cdktf/provider-vsphere.entityPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityPermissions <a name="EntityPermissions" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions vsphere_entity_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import entity_permissions

entityPermissions.EntityPermissions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entity_id: str,
  entity_type: str,
  permissions: typing.Union[IResolvable, typing.List[EntityPermissionsPermissions]],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.entityId">entity_id</a></code> | <code>str</code> | The managed object id or uuid of the entity. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.entityType">entity_type</a></code> | <code>str</code> | The entity managed object type. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>]]</code> | permissions block. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#id EntityPermissions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.entityId"></a>

- *Type:* str

The managed object id or uuid of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#entity_id EntityPermissions#entity_id}

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.entityType"></a>

- *Type:* str

The entity managed object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#entity_type EntityPermissions#entity_type}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.permissions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#permissions EntityPermissions#permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#id EntityPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_permissions` <a name="put_permissions" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.putPermissions"></a>

```python
def put_permissions(
  value: typing.Union[IResolvable, typing.List[EntityPermissionsPermissions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.putPermissions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isConstruct"></a>

```python
from cdktf_cdktf_provider_vsphere import entity_permissions

entityPermissions.EntityPermissions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vsphere import entity_permissions

entityPermissions.EntityPermissions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vsphere import entity_permissions

entityPermissions.EntityPermissions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList">EntityPermissionsPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.permissionsInput">permissions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.permissions"></a>

```python
permissions: EntityPermissionsPermissionsList
```

- *Type:* <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList">EntityPermissionsPermissionsList</a>

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.permissionsInput"></a>

```python
permissions_input: typing.Union[IResolvable, typing.List[EntityPermissionsPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>]]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EntityPermissionsConfig <a name="EntityPermissionsConfig" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import entity_permissions

entityPermissions.EntityPermissionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entity_id: str,
  entity_type: str,
  permissions: typing.Union[IResolvable, typing.List[EntityPermissionsPermissions]],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.entityId">entity_id</a></code> | <code>str</code> | The managed object id or uuid of the entity. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.entityType">entity_type</a></code> | <code>str</code> | The entity managed object type. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>]]</code> | permissions block. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#id EntityPermissions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

The managed object id or uuid of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#entity_id EntityPermissions#entity_id}

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

The entity managed object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#entity_type EntityPermissions#entity_type}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.permissions"></a>

```python
permissions: typing.Union[IResolvable, typing.List[EntityPermissionsPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#permissions EntityPermissions#permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#id EntityPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EntityPermissionsPermissions <a name="EntityPermissionsPermissions" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import entity_permissions

entityPermissions.EntityPermissionsPermissions(
  is_group: typing.Union[bool, IResolvable],
  propagate: typing.Union[bool, IResolvable],
  role_id: str,
  user_or_group: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.isGroup">is_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether user_or_group field refers to a user or a group. True for a group and false for a user. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.propagate">propagate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not this permission propagates down the hierarchy to sub-entities. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.roleId">role_id</a></code> | <code>str</code> | Reference to the role providing the access. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.userOrGroup">user_or_group</a></code> | <code>str</code> | User or group receiving access. |

---

##### `is_group`<sup>Required</sup> <a name="is_group" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.isGroup"></a>

```python
is_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether user_or_group field refers to a user or a group. True for a group and false for a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#is_group EntityPermissions#is_group}

---

##### `propagate`<sup>Required</sup> <a name="propagate" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.propagate"></a>

```python
propagate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not this permission propagates down the hierarchy to sub-entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#propagate EntityPermissions#propagate}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

Reference to the role providing the access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#role_id EntityPermissions#role_id}

---

##### `user_or_group`<sup>Required</sup> <a name="user_or_group" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions.property.userOrGroup"></a>

```python
user_or_group: str
```

- *Type:* str

User or group receiving access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/entity_permissions#user_or_group EntityPermissions#user_or_group}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityPermissionsPermissionsList <a name="EntityPermissionsPermissionsList" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import entity_permissions

entityPermissions.EntityPermissionsPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EntityPermissionsPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EntityPermissionsPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>]]

---


### EntityPermissionsPermissionsOutputReference <a name="EntityPermissionsPermissionsOutputReference" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vsphere import entity_permissions

entityPermissions.EntityPermissionsPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.isGroupInput">is_group_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.propagateInput">propagate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.userOrGroupInput">user_or_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.isGroup">is_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.propagate">propagate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.userOrGroup">user_or_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_group_input`<sup>Optional</sup> <a name="is_group_input" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.isGroupInput"></a>

```python
is_group_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `propagate_input`<sup>Optional</sup> <a name="propagate_input" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.propagateInput"></a>

```python
propagate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `user_or_group_input`<sup>Optional</sup> <a name="user_or_group_input" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.userOrGroupInput"></a>

```python
user_or_group_input: str
```

- *Type:* str

---

##### `is_group`<sup>Required</sup> <a name="is_group" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.isGroup"></a>

```python
is_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `propagate`<sup>Required</sup> <a name="propagate" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.propagate"></a>

```python
propagate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `user_or_group`<sup>Required</sup> <a name="user_or_group" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.userOrGroup"></a>

```python
user_or_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EntityPermissionsPermissions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vsphere.entityPermissions.EntityPermissionsPermissions">EntityPermissionsPermissions</a>]

---



