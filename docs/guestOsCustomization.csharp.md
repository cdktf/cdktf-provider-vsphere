# `guestOsCustomization` Submodule <a name="`guestOsCustomization` Submodule" id="@cdktf/provider-vsphere.guestOsCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuestOsCustomization <a name="GuestOsCustomization" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization vsphere_guest_os_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new GuestOsCustomization(Construct Scope, string Id, GuestOsCustomizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig">GuestOsCustomizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig">GuestOsCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec"></a>

```csharp
private void PutSpec(GuestOsCustomizationSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GuestOsCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

GuestOsCustomization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

GuestOsCustomization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

GuestOsCustomization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

GuestOsCustomization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GuestOsCustomization resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GuestOsCustomization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GuestOsCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GuestOsCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.changeVersion">ChangeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lastUpdateTime">LastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference">GuestOsCustomizationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ChangeVersion`<sup>Required</sup> <a name="ChangeVersion" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.changeVersion"></a>

```csharp
public string ChangeVersion { get; }
```

- *Type:* string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.lastUpdateTime"></a>

```csharp
public string LastUpdateTime { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.spec"></a>

```csharp
public GuestOsCustomizationSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference">GuestOsCustomizationSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.specInput"></a>

```csharp
public GuestOsCustomizationSpec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuestOsCustomizationConfig <a name="GuestOsCustomizationConfig" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new GuestOsCustomizationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    GuestOsCustomizationSpec Spec,
    string Type,
    string Description = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.name">Name</a></code> | <code>string</code> | The name of the customization specification is the unique identifier per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.type">Type</a></code> | <code>string</code> | The type of customization specification: One among: Windows, Linux. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.description">Description</a></code> | <code>string</code> | The description for the customization specification. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#id GuestOsCustomization#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the customization specification is the unique identifier per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#name GuestOsCustomization#name}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.spec"></a>

```csharp
public GuestOsCustomizationSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#spec GuestOsCustomization#spec}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of customization specification: One among: Windows, Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#type GuestOsCustomization#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description for the customization specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#description GuestOsCustomization#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#id GuestOsCustomization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GuestOsCustomizationSpec <a name="GuestOsCustomizationSpec" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new GuestOsCustomizationSpec {
    string[] DnsServerList = null,
    string[] DnsSuffixList = null,
    string Ipv4Gateway = null,
    string Ipv6Gateway = null,
    GuestOsCustomizationSpecLinuxOptions LinuxOptions = null,
    object NetworkInterface = null,
    GuestOsCustomizationSpecWindowsOptions WindowsOptions = null,
    string WindowsSysprepText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsServerList">DnsServerList</a></code> | <code>string[]</code> | The list of DNS servers for a virtual network adapter with a static IP address. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsSuffixList">DnsSuffixList</a></code> | <code>string[]</code> | A list of DNS search domains to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv4Gateway">Ipv4Gateway</a></code> | <code>string</code> | The IPv4 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv6Gateway">Ipv6Gateway</a></code> | <code>string</code> | The IPv6 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.linuxOptions">LinuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | linux_options block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsOptions">WindowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | windows_options block. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsSysprepText">WindowsSysprepText</a></code> | <code>string</code> | Use this option to specify a windows sysprep file directly. |

---

##### `DnsServerList`<sup>Optional</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsServerList"></a>

```csharp
public string[] DnsServerList { get; set; }
```

- *Type:* string[]

The list of DNS servers for a virtual network adapter with a static IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#dns_server_list GuestOsCustomization#dns_server_list}

---

##### `DnsSuffixList`<sup>Optional</sup> <a name="DnsSuffixList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.dnsSuffixList"></a>

```csharp
public string[] DnsSuffixList { get; set; }
```

- *Type:* string[]

A list of DNS search domains to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#dns_suffix_list GuestOsCustomization#dns_suffix_list}

---

##### `Ipv4Gateway`<sup>Optional</sup> <a name="Ipv4Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv4Gateway"></a>

```csharp
public string Ipv4Gateway { get; set; }
```

- *Type:* string

The IPv4 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#ipv4_gateway GuestOsCustomization#ipv4_gateway}

---

##### `Ipv6Gateway`<sup>Optional</sup> <a name="Ipv6Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.ipv6Gateway"></a>

```csharp
public string Ipv6Gateway { get; set; }
```

- *Type:* string

The IPv6 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#ipv6_gateway GuestOsCustomization#ipv6_gateway}

---

##### `LinuxOptions`<sup>Optional</sup> <a name="LinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.linuxOptions"></a>

```csharp
public GuestOsCustomizationSpecLinuxOptions LinuxOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#linux_options GuestOsCustomization#linux_options}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#network_interface GuestOsCustomization#network_interface}

---

##### `WindowsOptions`<sup>Optional</sup> <a name="WindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsOptions"></a>

```csharp
public GuestOsCustomizationSpecWindowsOptions WindowsOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

windows_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#windows_options GuestOsCustomization#windows_options}

---

##### `WindowsSysprepText`<sup>Optional</sup> <a name="WindowsSysprepText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec.property.windowsSysprepText"></a>

```csharp
public string WindowsSysprepText { get; set; }
```

- *Type:* string

Use this option to specify a windows sysprep file directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#windows_sysprep_text GuestOsCustomization#windows_sysprep_text}

---

### GuestOsCustomizationSpecLinuxOptions <a name="GuestOsCustomizationSpecLinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new GuestOsCustomizationSpecLinuxOptions {
    string Domain,
    string HostName,
    object HwClockUtc = null,
    string ScriptText = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.domain">Domain</a></code> | <code>string</code> | The domain name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hostName">HostName</a></code> | <code>string</code> | The hostname for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hwClockUtc">HwClockUtc</a></code> | <code>object</code> | Specifies whether or not the hardware clock should be in UTC or not. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.scriptText">ScriptText</a></code> | <code>string</code> | The customization script to run before and or after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.timeZone">TimeZone</a></code> | <code>string</code> | Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The domain name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#domain GuestOsCustomization#domain}

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

The hostname for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#host_name GuestOsCustomization#host_name}

---

##### `HwClockUtc`<sup>Optional</sup> <a name="HwClockUtc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.hwClockUtc"></a>

```csharp
public object HwClockUtc { get; set; }
```

- *Type:* object

Specifies whether or not the hardware clock should be in UTC or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#hw_clock_utc GuestOsCustomization#hw_clock_utc}

---

##### `ScriptText`<sup>Optional</sup> <a name="ScriptText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.scriptText"></a>

```csharp
public string ScriptText { get; set; }
```

- *Type:* string

The customization script to run before and or after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#script_text GuestOsCustomization#script_text}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}

---

### GuestOsCustomizationSpecNetworkInterface <a name="GuestOsCustomizationSpecNetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new GuestOsCustomizationSpecNetworkInterface {
    string DnsDomain = null,
    string[] DnsServerList = null,
    string Ipv4Address = null,
    double Ipv4Netmask = null,
    string Ipv6Address = null,
    double Ipv6Netmask = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsDomain">DnsDomain</a></code> | <code>string</code> | A DNS search domain to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsServerList">DnsServerList</a></code> | <code>string[]</code> | Network-interface specific DNS settings for Windows operating systems. Ignored on Linux. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | The IPv4 address assigned to this network adapter. If left blank, DHCP is used. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Netmask">Ipv4Netmask</a></code> | <code>double</code> | The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Netmask">Ipv6Netmask</a></code> | <code>double</code> | The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected. |

---

##### `DnsDomain`<sup>Optional</sup> <a name="DnsDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsDomain"></a>

```csharp
public string DnsDomain { get; set; }
```

- *Type:* string

A DNS search domain to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#dns_domain GuestOsCustomization#dns_domain}

---

##### `DnsServerList`<sup>Optional</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.dnsServerList"></a>

```csharp
public string[] DnsServerList { get; set; }
```

- *Type:* string[]

Network-interface specific DNS settings for Windows operating systems. Ignored on Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#dns_server_list GuestOsCustomization#dns_server_list}

---

##### `Ipv4Address`<sup>Optional</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; set; }
```

- *Type:* string

The IPv4 address assigned to this network adapter. If left blank, DHCP is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#ipv4_address GuestOsCustomization#ipv4_address}

---

##### `Ipv4Netmask`<sup>Optional</sup> <a name="Ipv4Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv4Netmask"></a>

```csharp
public double Ipv4Netmask { get; set; }
```

- *Type:* double

The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#ipv4_netmask GuestOsCustomization#ipv4_netmask}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#ipv6_address GuestOsCustomization#ipv6_address}

---

##### `Ipv6Netmask`<sup>Optional</sup> <a name="Ipv6Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterface.property.ipv6Netmask"></a>

```csharp
public double Ipv6Netmask { get; set; }
```

- *Type:* double

The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#ipv6_netmask GuestOsCustomization#ipv6_netmask}

---

### GuestOsCustomizationSpecWindowsOptions <a name="GuestOsCustomizationSpecWindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new GuestOsCustomizationSpecWindowsOptions {
    string ComputerName,
    string AdminPassword = null,
    object AutoLogon = null,
    double AutoLogonCount = null,
    string DomainAdminPassword = null,
    string DomainAdminUser = null,
    string DomainOu = null,
    string FullName = null,
    string JoinDomain = null,
    string OrganizationName = null,
    string ProductKey = null,
    string[] RunOnceCommandList = null,
    double TimeZone = null,
    string Workgroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.computerName">ComputerName</a></code> | <code>string</code> | The host name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.adminPassword">AdminPassword</a></code> | <code>string</code> | The new administrator password for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogon">AutoLogon</a></code> | <code>object</code> | Specifies whether or not the VM automatically logs on as Administrator. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogonCount">AutoLogonCount</a></code> | <code>double</code> | Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminPassword">DomainAdminPassword</a></code> | <code>string</code> | The password of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminUser">DomainAdminUser</a></code> | <code>string</code> | The user account of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainOu">DomainOu</a></code> | <code>string</code> | The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.fullName">FullName</a></code> | <code>string</code> | The full name of the user of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.joinDomain">JoinDomain</a></code> | <code>string</code> | The domain that the virtual machine should join. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.organizationName">OrganizationName</a></code> | <code>string</code> | The organization name this virtual machine is being installed for. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.productKey">ProductKey</a></code> | <code>string</code> | The product key for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.runOnceCommandList">RunOnceCommandList</a></code> | <code>string[]</code> | A list of commands to run at first user logon, after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.timeZone">TimeZone</a></code> | <code>double</code> | The new time zone for the virtual machine. This is a sysprep-dictated timezone code. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.workgroup">Workgroup</a></code> | <code>string</code> | The workgroup for this virtual machine if not joining a domain. |

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.computerName"></a>

```csharp
public string ComputerName { get; set; }
```

- *Type:* string

The host name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#computer_name GuestOsCustomization#computer_name}

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

The new administrator password for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#admin_password GuestOsCustomization#admin_password}

---

##### `AutoLogon`<sup>Optional</sup> <a name="AutoLogon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogon"></a>

```csharp
public object AutoLogon { get; set; }
```

- *Type:* object

Specifies whether or not the VM automatically logs on as Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#auto_logon GuestOsCustomization#auto_logon}

---

##### `AutoLogonCount`<sup>Optional</sup> <a name="AutoLogonCount" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.autoLogonCount"></a>

```csharp
public double AutoLogonCount { get; set; }
```

- *Type:* double

Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#auto_logon_count GuestOsCustomization#auto_logon_count}

---

##### `DomainAdminPassword`<sup>Optional</sup> <a name="DomainAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminPassword"></a>

```csharp
public string DomainAdminPassword { get; set; }
```

- *Type:* string

The password of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#domain_admin_password GuestOsCustomization#domain_admin_password}

---

##### `DomainAdminUser`<sup>Optional</sup> <a name="DomainAdminUser" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainAdminUser"></a>

```csharp
public string DomainAdminUser { get; set; }
```

- *Type:* string

The user account of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#domain_admin_user GuestOsCustomization#domain_admin_user}

---

##### `DomainOu`<sup>Optional</sup> <a name="DomainOu" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.domainOu"></a>

```csharp
public string DomainOu { get; set; }
```

- *Type:* string

The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#domain_ou GuestOsCustomization#domain_ou}

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

The full name of the user of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#full_name GuestOsCustomization#full_name}

---

##### `JoinDomain`<sup>Optional</sup> <a name="JoinDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.joinDomain"></a>

```csharp
public string JoinDomain { get; set; }
```

- *Type:* string

The domain that the virtual machine should join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#join_domain GuestOsCustomization#join_domain}

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.organizationName"></a>

```csharp
public string OrganizationName { get; set; }
```

- *Type:* string

The organization name this virtual machine is being installed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#organization_name GuestOsCustomization#organization_name}

---

##### `ProductKey`<sup>Optional</sup> <a name="ProductKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.productKey"></a>

```csharp
public string ProductKey { get; set; }
```

- *Type:* string

The product key for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#product_key GuestOsCustomization#product_key}

---

##### `RunOnceCommandList`<sup>Optional</sup> <a name="RunOnceCommandList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.runOnceCommandList"></a>

```csharp
public string[] RunOnceCommandList { get; set; }
```

- *Type:* string[]

A list of commands to run at first user logon, after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#run_once_command_list GuestOsCustomization#run_once_command_list}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.timeZone"></a>

```csharp
public double TimeZone { get; set; }
```

- *Type:* double

The new time zone for the virtual machine. This is a sysprep-dictated timezone code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#time_zone GuestOsCustomization#time_zone}

---

##### `Workgroup`<sup>Optional</sup> <a name="Workgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions.property.workgroup"></a>

```csharp
public string Workgroup { get; set; }
```

- *Type:* string

The workgroup for this virtual machine if not joining a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.2/docs/resources/guest_os_customization#workgroup GuestOsCustomization#workgroup}

---

## Classes <a name="Classes" id="Classes"></a>

### GuestOsCustomizationSpecLinuxOptionsOutputReference <a name="GuestOsCustomizationSpecLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new GuestOsCustomizationSpecLinuxOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetHwClockUtc">ResetHwClockUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetScriptText">ResetScriptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHwClockUtc` <a name="ResetHwClockUtc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetHwClockUtc"></a>

```csharp
private void ResetHwClockUtc()
```

##### `ResetScriptText` <a name="ResetScriptText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetScriptText"></a>

```csharp
private void ResetScriptText()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtcInput">HwClockUtcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptTextInput">ScriptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc">HwClockUtc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText">ScriptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `HwClockUtcInput`<sup>Optional</sup> <a name="HwClockUtcInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtcInput"></a>

```csharp
public object HwClockUtcInput { get; }
```

- *Type:* object

---

##### `ScriptTextInput`<sup>Optional</sup> <a name="ScriptTextInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptTextInput"></a>

```csharp
public string ScriptTextInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `HwClockUtc`<sup>Required</sup> <a name="HwClockUtc" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.hwClockUtc"></a>

```csharp
public object HwClockUtc { get; }
```

- *Type:* object

---

##### `ScriptText`<sup>Required</sup> <a name="ScriptText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.scriptText"></a>

```csharp
public string ScriptText { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference.property.internalValue"></a>

```csharp
public GuestOsCustomizationSpecLinuxOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

---


### GuestOsCustomizationSpecNetworkInterfaceList <a name="GuestOsCustomizationSpecNetworkInterfaceList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new GuestOsCustomizationSpecNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get"></a>

```csharp
private GuestOsCustomizationSpecNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GuestOsCustomizationSpecNetworkInterfaceOutputReference <a name="GuestOsCustomizationSpecNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new GuestOsCustomizationSpecNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsDomain">ResetDnsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsServerList">ResetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Address">ResetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Netmask">ResetIpv4Netmask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Netmask">ResetIpv6Netmask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsDomain` <a name="ResetDnsDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsDomain"></a>

```csharp
private void ResetDnsDomain()
```

##### `ResetDnsServerList` <a name="ResetDnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetDnsServerList"></a>

```csharp
private void ResetDnsServerList()
```

##### `ResetIpv4Address` <a name="ResetIpv4Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Address"></a>

```csharp
private void ResetIpv4Address()
```

##### `ResetIpv4Netmask` <a name="ResetIpv4Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv4Netmask"></a>

```csharp
private void ResetIpv4Netmask()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```

##### `ResetIpv6Netmask` <a name="ResetIpv6Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.resetIpv6Netmask"></a>

```csharp
private void ResetIpv6Netmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomainInput">DnsDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerListInput">DnsServerListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4NetmaskInput">Ipv4NetmaskInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6NetmaskInput">Ipv6NetmaskInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain">DnsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask">Ipv4Netmask</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask">Ipv6Netmask</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsDomainInput`<sup>Optional</sup> <a name="DnsDomainInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomainInput"></a>

```csharp
public string DnsDomainInput { get; }
```

- *Type:* string

---

##### `DnsServerListInput`<sup>Optional</sup> <a name="DnsServerListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerListInput"></a>

```csharp
public string[] DnsServerListInput { get; }
```

- *Type:* string[]

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4AddressInput"></a>

```csharp
public string Ipv4AddressInput { get; }
```

- *Type:* string

---

##### `Ipv4NetmaskInput`<sup>Optional</sup> <a name="Ipv4NetmaskInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4NetmaskInput"></a>

```csharp
public double Ipv4NetmaskInput { get; }
```

- *Type:* double

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `Ipv6NetmaskInput`<sup>Optional</sup> <a name="Ipv6NetmaskInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6NetmaskInput"></a>

```csharp
public double Ipv6NetmaskInput { get; }
```

- *Type:* double

---

##### `DnsDomain`<sup>Required</sup> <a name="DnsDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsDomain"></a>

```csharp
public string DnsDomain { get; }
```

- *Type:* string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.dnsServerList"></a>

```csharp
public string[] DnsServerList { get; }
```

- *Type:* string[]

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; }
```

- *Type:* string

---

##### `Ipv4Netmask`<sup>Required</sup> <a name="Ipv4Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```csharp
public double Ipv4Netmask { get; }
```

- *Type:* double

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Ipv6Netmask`<sup>Required</sup> <a name="Ipv6Netmask" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```csharp
public double Ipv6Netmask { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GuestOsCustomizationSpecOutputReference <a name="GuestOsCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new GuestOsCustomizationSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions">PutLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions">PutWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsServerList">ResetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsSuffixList">ResetDnsSuffixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv4Gateway">ResetIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv6Gateway">ResetIpv6Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetLinuxOptions">ResetLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsOptions">ResetWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsSysprepText">ResetWindowsSysprepText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxOptions` <a name="PutLinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions"></a>

```csharp
private void PutLinuxOptions(GuestOsCustomizationSpecLinuxOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putLinuxOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutWindowsOptions` <a name="PutWindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions"></a>

```csharp
private void PutWindowsOptions(GuestOsCustomizationSpecWindowsOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.putWindowsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

---

##### `ResetDnsServerList` <a name="ResetDnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsServerList"></a>

```csharp
private void ResetDnsServerList()
```

##### `ResetDnsSuffixList` <a name="ResetDnsSuffixList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetDnsSuffixList"></a>

```csharp
private void ResetDnsSuffixList()
```

##### `ResetIpv4Gateway` <a name="ResetIpv4Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv4Gateway"></a>

```csharp
private void ResetIpv4Gateway()
```

##### `ResetIpv6Gateway` <a name="ResetIpv6Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetIpv6Gateway"></a>

```csharp
private void ResetIpv6Gateway()
```

##### `ResetLinuxOptions` <a name="ResetLinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetLinuxOptions"></a>

```csharp
private void ResetLinuxOptions()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetNetworkInterface"></a>

```csharp
private void ResetNetworkInterface()
```

##### `ResetWindowsOptions` <a name="ResetWindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsOptions"></a>

```csharp
private void ResetWindowsOptions()
```

##### `ResetWindowsSysprepText` <a name="ResetWindowsSysprepText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.resetWindowsSysprepText"></a>

```csharp
private void ResetWindowsSysprepText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptions">LinuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference">GuestOsCustomizationSpecLinuxOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList">GuestOsCustomizationSpecNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptions">WindowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference">GuestOsCustomizationSpecWindowsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerListInput">DnsServerListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixListInput">DnsSuffixListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4GatewayInput">Ipv4GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6GatewayInput">Ipv6GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptionsInput">LinuxOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptionsInput">WindowsOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepTextInput">WindowsSysprepTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixList">DnsSuffixList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4Gateway">Ipv4Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6Gateway">Ipv6Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepText">WindowsSysprepText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinuxOptions`<sup>Required</sup> <a name="LinuxOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptions"></a>

```csharp
public GuestOsCustomizationSpecLinuxOptionsOutputReference LinuxOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptionsOutputReference">GuestOsCustomizationSpecLinuxOptionsOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterface"></a>

```csharp
public GuestOsCustomizationSpecNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecNetworkInterfaceList">GuestOsCustomizationSpecNetworkInterfaceList</a>

---

##### `WindowsOptions`<sup>Required</sup> <a name="WindowsOptions" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptions"></a>

```csharp
public GuestOsCustomizationSpecWindowsOptionsOutputReference WindowsOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference">GuestOsCustomizationSpecWindowsOptionsOutputReference</a>

---

##### `DnsServerListInput`<sup>Optional</sup> <a name="DnsServerListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerListInput"></a>

```csharp
public string[] DnsServerListInput { get; }
```

- *Type:* string[]

---

##### `DnsSuffixListInput`<sup>Optional</sup> <a name="DnsSuffixListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixListInput"></a>

```csharp
public string[] DnsSuffixListInput { get; }
```

- *Type:* string[]

---

##### `Ipv4GatewayInput`<sup>Optional</sup> <a name="Ipv4GatewayInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4GatewayInput"></a>

```csharp
public string Ipv4GatewayInput { get; }
```

- *Type:* string

---

##### `Ipv6GatewayInput`<sup>Optional</sup> <a name="Ipv6GatewayInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6GatewayInput"></a>

```csharp
public string Ipv6GatewayInput { get; }
```

- *Type:* string

---

##### `LinuxOptionsInput`<sup>Optional</sup> <a name="LinuxOptionsInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.linuxOptionsInput"></a>

```csharp
public GuestOsCustomizationSpecLinuxOptions LinuxOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecLinuxOptions">GuestOsCustomizationSpecLinuxOptions</a>

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `WindowsOptionsInput`<sup>Optional</sup> <a name="WindowsOptionsInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsOptionsInput"></a>

```csharp
public GuestOsCustomizationSpecWindowsOptions WindowsOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

---

##### `WindowsSysprepTextInput`<sup>Optional</sup> <a name="WindowsSysprepTextInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepTextInput"></a>

```csharp
public string WindowsSysprepTextInput { get; }
```

- *Type:* string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsServerList"></a>

```csharp
public string[] DnsServerList { get; }
```

- *Type:* string[]

---

##### `DnsSuffixList`<sup>Required</sup> <a name="DnsSuffixList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.dnsSuffixList"></a>

```csharp
public string[] DnsSuffixList { get; }
```

- *Type:* string[]

---

##### `Ipv4Gateway`<sup>Required</sup> <a name="Ipv4Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv4Gateway"></a>

```csharp
public string Ipv4Gateway { get; }
```

- *Type:* string

---

##### `Ipv6Gateway`<sup>Required</sup> <a name="Ipv6Gateway" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.ipv6Gateway"></a>

```csharp
public string Ipv6Gateway { get; }
```

- *Type:* string

---

##### `WindowsSysprepText`<sup>Required</sup> <a name="WindowsSysprepText" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.windowsSysprepText"></a>

```csharp
public string WindowsSysprepText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecOutputReference.property.internalValue"></a>

```csharp
public GuestOsCustomizationSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpec">GuestOsCustomizationSpec</a>

---


### GuestOsCustomizationSpecWindowsOptionsOutputReference <a name="GuestOsCustomizationSpecWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new GuestOsCustomizationSpecWindowsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogon">ResetAutoLogon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogonCount">ResetAutoLogonCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminPassword">ResetDomainAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminUser">ResetDomainAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainOu">ResetDomainOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetJoinDomain">ResetJoinDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetProductKey">ResetProductKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetRunOnceCommandList">ResetRunOnceCommandList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetWorkgroup">ResetWorkgroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetAutoLogon` <a name="ResetAutoLogon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogon"></a>

```csharp
private void ResetAutoLogon()
```

##### `ResetAutoLogonCount` <a name="ResetAutoLogonCount" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetAutoLogonCount"></a>

```csharp
private void ResetAutoLogonCount()
```

##### `ResetDomainAdminPassword` <a name="ResetDomainAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminPassword"></a>

```csharp
private void ResetDomainAdminPassword()
```

##### `ResetDomainAdminUser` <a name="ResetDomainAdminUser" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainAdminUser"></a>

```csharp
private void ResetDomainAdminUser()
```

##### `ResetDomainOu` <a name="ResetDomainOu" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetDomainOu"></a>

```csharp
private void ResetDomainOu()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetFullName"></a>

```csharp
private void ResetFullName()
```

##### `ResetJoinDomain` <a name="ResetJoinDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetJoinDomain"></a>

```csharp
private void ResetJoinDomain()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetOrganizationName"></a>

```csharp
private void ResetOrganizationName()
```

##### `ResetProductKey` <a name="ResetProductKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetProductKey"></a>

```csharp
private void ResetProductKey()
```

##### `ResetRunOnceCommandList` <a name="ResetRunOnceCommandList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetRunOnceCommandList"></a>

```csharp
private void ResetRunOnceCommandList()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

##### `ResetWorkgroup` <a name="ResetWorkgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.resetWorkgroup"></a>

```csharp
private void ResetWorkgroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCountInput">AutoLogonCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonInput">AutoLogonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerNameInput">ComputerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPasswordInput">DomainAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUserInput">DomainAdminUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOuInput">DomainOuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomainInput">JoinDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKeyInput">ProductKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandListInput">RunOnceCommandListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroupInput">WorkgroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon">AutoLogon</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount">AutoLogonCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName">ComputerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword">DomainAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser">DomainAdminUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu">DomainOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain">JoinDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey">ProductKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList">RunOnceCommandList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup">Workgroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AutoLogonCountInput`<sup>Optional</sup> <a name="AutoLogonCountInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCountInput"></a>

```csharp
public double AutoLogonCountInput { get; }
```

- *Type:* double

---

##### `AutoLogonInput`<sup>Optional</sup> <a name="AutoLogonInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonInput"></a>

```csharp
public object AutoLogonInput { get; }
```

- *Type:* object

---

##### `ComputerNameInput`<sup>Optional</sup> <a name="ComputerNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerNameInput"></a>

```csharp
public string ComputerNameInput { get; }
```

- *Type:* string

---

##### `DomainAdminPasswordInput`<sup>Optional</sup> <a name="DomainAdminPasswordInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPasswordInput"></a>

```csharp
public string DomainAdminPasswordInput { get; }
```

- *Type:* string

---

##### `DomainAdminUserInput`<sup>Optional</sup> <a name="DomainAdminUserInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUserInput"></a>

```csharp
public string DomainAdminUserInput { get; }
```

- *Type:* string

---

##### `DomainOuInput`<sup>Optional</sup> <a name="DomainOuInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOuInput"></a>

```csharp
public string DomainOuInput { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `JoinDomainInput`<sup>Optional</sup> <a name="JoinDomainInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomainInput"></a>

```csharp
public string JoinDomainInput { get; }
```

- *Type:* string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationNameInput"></a>

```csharp
public string OrganizationNameInput { get; }
```

- *Type:* string

---

##### `ProductKeyInput`<sup>Optional</sup> <a name="ProductKeyInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKeyInput"></a>

```csharp
public string ProductKeyInput { get; }
```

- *Type:* string

---

##### `RunOnceCommandListInput`<sup>Optional</sup> <a name="RunOnceCommandListInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandListInput"></a>

```csharp
public string[] RunOnceCommandListInput { get; }
```

- *Type:* string[]

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZoneInput"></a>

```csharp
public double TimeZoneInput { get; }
```

- *Type:* double

---

##### `WorkgroupInput`<sup>Optional</sup> <a name="WorkgroupInput" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroupInput"></a>

```csharp
public string WorkgroupInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AutoLogon`<sup>Required</sup> <a name="AutoLogon" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogon"></a>

```csharp
public object AutoLogon { get; }
```

- *Type:* object

---

##### `AutoLogonCount`<sup>Required</sup> <a name="AutoLogonCount" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.autoLogonCount"></a>

```csharp
public double AutoLogonCount { get; }
```

- *Type:* double

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.computerName"></a>

```csharp
public string ComputerName { get; }
```

- *Type:* string

---

##### `DomainAdminPassword`<sup>Required</sup> <a name="DomainAdminPassword" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```csharp
public string DomainAdminPassword { get; }
```

- *Type:* string

---

##### `DomainAdminUser`<sup>Required</sup> <a name="DomainAdminUser" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainAdminUser"></a>

```csharp
public string DomainAdminUser { get; }
```

- *Type:* string

---

##### `DomainOu`<sup>Required</sup> <a name="DomainOu" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.domainOu"></a>

```csharp
public string DomainOu { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `JoinDomain`<sup>Required</sup> <a name="JoinDomain" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.joinDomain"></a>

```csharp
public string JoinDomain { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `ProductKey`<sup>Required</sup> <a name="ProductKey" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.productKey"></a>

```csharp
public string ProductKey { get; }
```

- *Type:* string

---

##### `RunOnceCommandList`<sup>Required</sup> <a name="RunOnceCommandList" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```csharp
public string[] RunOnceCommandList { get; }
```

- *Type:* string[]

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.timeZone"></a>

```csharp
public double TimeZone { get; }
```

- *Type:* double

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.workgroup"></a>

```csharp
public string Workgroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptionsOutputReference.property.internalValue"></a>

```csharp
public GuestOsCustomizationSpecWindowsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.guestOsCustomization.GuestOsCustomizationSpecWindowsOptions">GuestOsCustomizationSpecWindowsOptions</a>

---



