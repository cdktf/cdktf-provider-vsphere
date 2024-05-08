# `offlineSoftwareDepot` Submodule <a name="`offlineSoftwareDepot` Submodule" id="@cdktf/provider-vsphere.offlineSoftwareDepot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OfflineSoftwareDepot <a name="OfflineSoftwareDepot" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/offline_software_depot vsphere_offline_software_depot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new OfflineSoftwareDepot(Construct Scope, string Id, OfflineSoftwareDepotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig">OfflineSoftwareDepotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig">OfflineSoftwareDepotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OfflineSoftwareDepot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

OfflineSoftwareDepot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

OfflineSoftwareDepot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

OfflineSoftwareDepot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

OfflineSoftwareDepot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OfflineSoftwareDepot resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OfflineSoftwareDepot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OfflineSoftwareDepot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/offline_software_depot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OfflineSoftwareDepot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.component">Component</a></code> | <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList">OfflineSoftwareDepotComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.location">Location</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.component"></a>

```csharp
public OfflineSoftwareDepotComponentList Component { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList">OfflineSoftwareDepotComponentList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OfflineSoftwareDepotComponent <a name="OfflineSoftwareDepotComponent" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new OfflineSoftwareDepotComponent {

};
```


### OfflineSoftwareDepotConfig <a name="OfflineSoftwareDepotConfig" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new OfflineSoftwareDepotConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.location">Location</a></code> | <code>string</code> | The remote location where the contents for this depot are served. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/offline_software_depot#id OfflineSoftwareDepot#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The remote location where the contents for this depot are served.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/offline_software_depot#location OfflineSoftwareDepot#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/offline_software_depot#id OfflineSoftwareDepot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### OfflineSoftwareDepotComponentList <a name="OfflineSoftwareDepotComponentList" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new OfflineSoftwareDepotComponentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.get"></a>

```csharp
private OfflineSoftwareDepotComponentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OfflineSoftwareDepotComponentOutputReference <a name="OfflineSoftwareDepotComponentOutputReference" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new OfflineSoftwareDepotComponentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.version">Version</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponent">OfflineSoftwareDepotComponent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.version"></a>

```csharp
public string[] Version { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponentOutputReference.property.internalValue"></a>

```csharp
public OfflineSoftwareDepotComponent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.offlineSoftwareDepot.OfflineSoftwareDepotComponent">OfflineSoftwareDepotComponent</a>

---



