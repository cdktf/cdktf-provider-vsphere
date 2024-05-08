# `dataVsphereDynamic` Submodule <a name="`dataVsphereDynamic` Submodule" id="@cdktf/provider-vsphere.dataVsphereDynamic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereDynamic <a name="DataVsphereDynamic" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/dynamic vsphere_dynamic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereDynamic(Construct Scope, string Id, DataVsphereDynamicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig">DataVsphereDynamicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig">DataVsphereDynamicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.resetNameRegex">ResetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNameRegex` <a name="ResetNameRegex" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.resetNameRegex"></a>

```csharp
private void ResetNameRegex()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereDynamic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereDynamic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereDynamic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereDynamic.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereDynamic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVsphereDynamic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVsphereDynamic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVsphereDynamic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/dynamic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereDynamic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.filterInput">FilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.nameRegexInput">NameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.filter">Filter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.nameRegex">NameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.filterInput"></a>

```csharp
public string[] FilterInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameRegexInput`<sup>Optional</sup> <a name="NameRegexInput" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.nameRegexInput"></a>

```csharp
public string NameRegexInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.filter"></a>

```csharp
public string[] Filter { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.nameRegex"></a>

```csharp
public string NameRegex { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereDynamicConfig <a name="DataVsphereDynamicConfig" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereDynamicConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Filter,
    string Id = null,
    string NameRegex = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.filter">Filter</a></code> | <code>string[]</code> | List of tag IDs to match target. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/dynamic#id DataVsphereDynamic#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.nameRegex">NameRegex</a></code> | <code>string</code> | A regular expression used to match against managed object names. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.type">Type</a></code> | <code>string</code> | The type of managed object to return. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.filter"></a>

```csharp
public string[] Filter { get; set; }
```

- *Type:* string[]

List of tag IDs to match target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/dynamic#filter DataVsphereDynamic#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/dynamic#id DataVsphereDynamic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NameRegex`<sup>Optional</sup> <a name="NameRegex" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.nameRegex"></a>

```csharp
public string NameRegex { get; set; }
```

- *Type:* string

A regular expression used to match against managed object names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/dynamic#name_regex DataVsphereDynamic#name_regex}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vsphere.dataVsphereDynamic.DataVsphereDynamicConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of managed object to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/data-sources/dynamic#type DataVsphereDynamic#type}

---



