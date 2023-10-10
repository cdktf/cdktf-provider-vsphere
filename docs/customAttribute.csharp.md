# `vsphere_custom_attribute`

Refer to the Terraform Registory for docs: [`vsphere_custom_attribute`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/custom_attribute).

# `customAttribute` Submodule <a name="`customAttribute` Submodule" id="@cdktf/provider-vsphere.customAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomAttribute <a name="CustomAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/custom_attribute vsphere_custom_attribute}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new CustomAttribute(Construct Scope, string Id, CustomAttributeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig">CustomAttributeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig">CustomAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.resetManagedObjectType">ResetManagedObjectType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagedObjectType` <a name="ResetManagedObjectType" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.resetManagedObjectType"></a>

```csharp
private void ResetManagedObjectType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

CustomAttribute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

CustomAttribute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

CustomAttribute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.managedObjectTypeInput">ManagedObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.managedObjectType">ManagedObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedObjectTypeInput`<sup>Optional</sup> <a name="ManagedObjectTypeInput" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.managedObjectTypeInput"></a>

```csharp
public string ManagedObjectTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedObjectType`<sup>Required</sup> <a name="ManagedObjectType" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.managedObjectType"></a>

```csharp
public string ManagedObjectType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.customAttribute.CustomAttribute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomAttributeConfig <a name="CustomAttributeConfig" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new CustomAttributeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string ManagedObjectType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.name">Name</a></code> | <code>string</code> | The display name of the custom attribute. |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/custom_attribute#id CustomAttribute#id}. |
| <code><a href="#@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.managedObjectType">ManagedObjectType</a></code> | <code>string</code> | Object type for which the custom attribute is valid. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The display name of the custom attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/custom_attribute#name CustomAttribute#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/custom_attribute#id CustomAttribute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedObjectType`<sup>Optional</sup> <a name="ManagedObjectType" id="@cdktf/provider-vsphere.customAttribute.CustomAttributeConfig.property.managedObjectType"></a>

```csharp
public string ManagedObjectType { get; set; }
```

- *Type:* string

Object type for which the custom attribute is valid.

If not specified, the attribute is valid for all managed object types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.0/docs/resources/custom_attribute#managed_object_type CustomAttribute#managed_object_type}

---



