# `dataVsphereGuestOsCustomization` Submodule <a name="`dataVsphereGuestOsCustomization` Submodule" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereGuestOsCustomization <a name="DataVsphereGuestOsCustomization" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/data-sources/guest_os_customization vsphere_guest_os_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomization(Construct Scope, string Id, DataVsphereGuestOsCustomizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig">DataVsphereGuestOsCustomizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig">DataVsphereGuestOsCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereGuestOsCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereGuestOsCustomization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereGuestOsCustomization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereGuestOsCustomization.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereGuestOsCustomization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataVsphereGuestOsCustomization resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVsphereGuestOsCustomization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVsphereGuestOsCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/data-sources/guest_os_customization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereGuestOsCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.changeVersion">ChangeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lastUpdateTime">LastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList">DataVsphereGuestOsCustomizationSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ChangeVersion`<sup>Required</sup> <a name="ChangeVersion" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.changeVersion"></a>

```csharp
public string ChangeVersion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.lastUpdateTime"></a>

```csharp
public string LastUpdateTime { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.spec"></a>

```csharp
public DataVsphereGuestOsCustomizationSpecList Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList">DataVsphereGuestOsCustomizationSpecList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereGuestOsCustomizationConfig <a name="DataVsphereGuestOsCustomizationConfig" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.name">Name</a></code> | <code>string</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/data-sources/guest_os_customization#name DataVsphereGuestOsCustomization#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.13.0/docs/data-sources/guest_os_customization#id DataVsphereGuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataVsphereGuestOsCustomizationSpec <a name="DataVsphereGuestOsCustomizationSpec" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpec {

};
```


### DataVsphereGuestOsCustomizationSpecLinuxOptions <a name="DataVsphereGuestOsCustomizationSpecLinuxOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpecLinuxOptions {

};
```


### DataVsphereGuestOsCustomizationSpecNetworkInterface <a name="DataVsphereGuestOsCustomizationSpecNetworkInterface" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpecNetworkInterface {

};
```


### DataVsphereGuestOsCustomizationSpecWindowsOptions <a name="DataVsphereGuestOsCustomizationSpecWindowsOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpecWindowsOptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataVsphereGuestOsCustomizationSpecLinuxOptionsList <a name="DataVsphereGuestOsCustomizationSpecLinuxOptionsList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpecLinuxOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get"></a>

```csharp
private DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference <a name="DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc">HwClockUtc</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText">ScriptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions">DataVsphereGuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `HwClockUtc`<sup>Required</sup> <a name="HwClockUtc" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc"></a>

```csharp
public IResolvable HwClockUtc { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ScriptText`<sup>Required</sup> <a name="ScriptText" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText"></a>

```csharp
public string ScriptText { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue"></a>

```csharp
public DataVsphereGuestOsCustomizationSpecLinuxOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptions">DataVsphereGuestOsCustomizationSpecLinuxOptions</a>

---


### DataVsphereGuestOsCustomizationSpecList <a name="DataVsphereGuestOsCustomizationSpecList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get"></a>

```csharp
private DataVsphereGuestOsCustomizationSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataVsphereGuestOsCustomizationSpecNetworkInterfaceList <a name="DataVsphereGuestOsCustomizationSpecNetworkInterfaceList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpecNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get"></a>

```csharp
private DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference <a name="DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain">DnsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask">Ipv4Netmask</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask">Ipv6Netmask</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface">DataVsphereGuestOsCustomizationSpecNetworkInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsDomain`<sup>Required</sup> <a name="DnsDomain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain"></a>

```csharp
public string DnsDomain { get; }
```

- *Type:* string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList"></a>

```csharp
public string[] DnsServerList { get; }
```

- *Type:* string[]

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; }
```

- *Type:* string

---

##### `Ipv4Netmask`<sup>Required</sup> <a name="Ipv4Netmask" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```csharp
public double Ipv4Netmask { get; }
```

- *Type:* double

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Ipv6Netmask`<sup>Required</sup> <a name="Ipv6Netmask" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```csharp
public double Ipv6Netmask { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public DataVsphereGuestOsCustomizationSpecNetworkInterface InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterface">DataVsphereGuestOsCustomizationSpecNetworkInterface</a>

---


### DataVsphereGuestOsCustomizationSpecOutputReference <a name="DataVsphereGuestOsCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsSuffixList">DnsSuffixList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.linuxOptions">LinuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList">DataVsphereGuestOsCustomizationSpecLinuxOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList">DataVsphereGuestOsCustomizationSpecNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsOptions">WindowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList">DataVsphereGuestOsCustomizationSpecWindowsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsSysprepText">WindowsSysprepText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec">DataVsphereGuestOsCustomizationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsServerList"></a>

```csharp
public string[] DnsServerList { get; }
```

- *Type:* string[]

---

##### `DnsSuffixList`<sup>Required</sup> <a name="DnsSuffixList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.dnsSuffixList"></a>

```csharp
public string[] DnsSuffixList { get; }
```

- *Type:* string[]

---

##### `LinuxOptions`<sup>Required</sup> <a name="LinuxOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.linuxOptions"></a>

```csharp
public DataVsphereGuestOsCustomizationSpecLinuxOptionsList LinuxOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecLinuxOptionsList">DataVsphereGuestOsCustomizationSpecLinuxOptionsList</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.networkInterface"></a>

```csharp
public DataVsphereGuestOsCustomizationSpecNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecNetworkInterfaceList">DataVsphereGuestOsCustomizationSpecNetworkInterfaceList</a>

---

##### `WindowsOptions`<sup>Required</sup> <a name="WindowsOptions" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsOptions"></a>

```csharp
public DataVsphereGuestOsCustomizationSpecWindowsOptionsList WindowsOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList">DataVsphereGuestOsCustomizationSpecWindowsOptionsList</a>

---

##### `WindowsSysprepText`<sup>Required</sup> <a name="WindowsSysprepText" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.windowsSysprepText"></a>

```csharp
public string WindowsSysprepText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecOutputReference.property.internalValue"></a>

```csharp
public DataVsphereGuestOsCustomizationSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpec">DataVsphereGuestOsCustomizationSpec</a>

---


### DataVsphereGuestOsCustomizationSpecWindowsOptionsList <a name="DataVsphereGuestOsCustomizationSpecWindowsOptionsList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpecWindowsOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get"></a>

```csharp
private DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference <a name="DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon">AutoLogon</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount">AutoLogonCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName">ComputerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword">DomainAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser">DomainAdminUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu">DomainOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain">JoinDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey">ProductKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList">RunOnceCommandList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup">Workgroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions">DataVsphereGuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AutoLogon`<sup>Required</sup> <a name="AutoLogon" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon"></a>

```csharp
public IResolvable AutoLogon { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutoLogonCount`<sup>Required</sup> <a name="AutoLogonCount" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount"></a>

```csharp
public double AutoLogonCount { get; }
```

- *Type:* double

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName"></a>

```csharp
public string ComputerName { get; }
```

- *Type:* string

---

##### `DomainAdminPassword`<sup>Required</sup> <a name="DomainAdminPassword" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```csharp
public string DomainAdminPassword { get; }
```

- *Type:* string

---

##### `DomainAdminUser`<sup>Required</sup> <a name="DomainAdminUser" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser"></a>

```csharp
public string DomainAdminUser { get; }
```

- *Type:* string

---

##### `DomainOu`<sup>Required</sup> <a name="DomainOu" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu"></a>

```csharp
public string DomainOu { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `JoinDomain`<sup>Required</sup> <a name="JoinDomain" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain"></a>

```csharp
public string JoinDomain { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `ProductKey`<sup>Required</sup> <a name="ProductKey" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey"></a>

```csharp
public string ProductKey { get; }
```

- *Type:* string

---

##### `RunOnceCommandList`<sup>Required</sup> <a name="RunOnceCommandList" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```csharp
public string[] RunOnceCommandList { get; }
```

- *Type:* string[]

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone"></a>

```csharp
public double TimeZone { get; }
```

- *Type:* double

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup"></a>

```csharp
public string Workgroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue"></a>

```csharp
public DataVsphereGuestOsCustomizationSpecWindowsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereGuestOsCustomization.DataVsphereGuestOsCustomizationSpecWindowsOptions">DataVsphereGuestOsCustomizationSpecWindowsOptions</a>

---



