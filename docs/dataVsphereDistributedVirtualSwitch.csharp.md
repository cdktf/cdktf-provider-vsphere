# `data_vsphere_distributed_virtual_switch`

Refer to the Terraform Registory for docs: [`data_vsphere_distributed_virtual_switch`](https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/data-sources/distributed_virtual_switch).

# `dataVsphereDistributedVirtualSwitch` Submodule <a name="`dataVsphereDistributedVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereDistributedVirtualSwitch <a name="DataVsphereDistributedVirtualSwitch" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/data-sources/distributed_virtual_switch vsphere_distributed_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereDistributedVirtualSwitch(Construct Scope, string Id, DataVsphereDistributedVirtualSwitchConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig">DataVsphereDistributedVirtualSwitchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig">DataVsphereDistributedVirtualSwitchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetDatacenterId">ResetDatacenterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDatacenterId` <a name="ResetDatacenterId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetDatacenterId"></a>

```csharp
private void ResetDatacenterId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereDistributedVirtualSwitch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereDistributedVirtualSwitch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereDistributedVirtualSwitch.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.uplinks">Uplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Uplinks`<sup>Required</sup> <a name="Uplinks" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.uplinks"></a>

```csharp
public string[] Uplinks { get; }
```

- *Type:* string[]

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereDistributedVirtualSwitchConfig <a name="DataVsphereDistributedVirtualSwitchConfig" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereDistributedVirtualSwitchConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string DatacenterId = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.name">Name</a></code> | <code>string</code> | The name of the distributed virtual switch. This can be a name or path. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.datacenterId">DatacenterId</a></code> | <code>string</code> | The managed object ID of the datacenter the DVS is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/data-sources/distributed_virtual_switch#id DataVsphereDistributedVirtualSwitch#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the distributed virtual switch. This can be a name or path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/data-sources/distributed_virtual_switch#name DataVsphereDistributedVirtualSwitch#name}

---

##### `DatacenterId`<sup>Optional</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

The managed object ID of the datacenter the DVS is in.

This is required if the supplied path is not an absolute path containing a datacenter and there are multiple datacenters in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/data-sources/distributed_virtual_switch#datacenter_id DataVsphereDistributedVirtualSwitch#datacenter_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereDistributedVirtualSwitch.DataVsphereDistributedVirtualSwitchConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.3.1/docs/data-sources/distributed_virtual_switch#id DataVsphereDistributedVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



