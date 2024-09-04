# `storageDrsVmOverride` Submodule <a name="`storageDrsVmOverride` Submodule" id="@cdktf/provider-vsphere.storageDrsVmOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDrsVmOverride <a name="StorageDrsVmOverride" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/storage_drs_vm_override vsphere_storage_drs_vm_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new StorageDrsVmOverride(Construct Scope, string Id, StorageDrsVmOverrideConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig">StorageDrsVmOverrideConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig">StorageDrsVmOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsAutomationLevel">ResetSdrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsEnabled">ResetSdrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsIntraVmAffinity">ResetSdrsIntraVmAffinity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSdrsAutomationLevel` <a name="ResetSdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsAutomationLevel"></a>

```csharp
private void ResetSdrsAutomationLevel()
```

##### `ResetSdrsEnabled` <a name="ResetSdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsEnabled"></a>

```csharp
private void ResetSdrsEnabled()
```

##### `ResetSdrsIntraVmAffinity` <a name="ResetSdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.resetSdrsIntraVmAffinity"></a>

```csharp
private void ResetSdrsIntraVmAffinity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageDrsVmOverride resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

StorageDrsVmOverride.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

StorageDrsVmOverride.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

StorageDrsVmOverride.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

StorageDrsVmOverride.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageDrsVmOverride resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageDrsVmOverride to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageDrsVmOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/storage_drs_vm_override#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageDrsVmOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterIdInput">DatastoreClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevelInput">SdrsAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabledInput">SdrsEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinityInput">SdrsIntraVmAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevel">SdrsAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabled">SdrsEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinity">SdrsIntraVmAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DatastoreClusterIdInput`<sup>Optional</sup> <a name="DatastoreClusterIdInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterIdInput"></a>

```csharp
public string DatastoreClusterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SdrsAutomationLevelInput`<sup>Optional</sup> <a name="SdrsAutomationLevelInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevelInput"></a>

```csharp
public string SdrsAutomationLevelInput { get; }
```

- *Type:* string

---

##### `SdrsEnabledInput`<sup>Optional</sup> <a name="SdrsEnabledInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabledInput"></a>

```csharp
public string SdrsEnabledInput { get; }
```

- *Type:* string

---

##### `SdrsIntraVmAffinityInput`<sup>Optional</sup> <a name="SdrsIntraVmAffinityInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinityInput"></a>

```csharp
public string SdrsIntraVmAffinityInput { get; }
```

- *Type:* string

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineIdInput"></a>

```csharp
public string VirtualMachineIdInput { get; }
```

- *Type:* string

---

##### `DatastoreClusterId`<sup>Required</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.datastoreClusterId"></a>

```csharp
public string DatastoreClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SdrsAutomationLevel`<sup>Required</sup> <a name="SdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsAutomationLevel"></a>

```csharp
public string SdrsAutomationLevel { get; }
```

- *Type:* string

---

##### `SdrsEnabled`<sup>Required</sup> <a name="SdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsEnabled"></a>

```csharp
public string SdrsEnabled { get; }
```

- *Type:* string

---

##### `SdrsIntraVmAffinity`<sup>Required</sup> <a name="SdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.sdrsIntraVmAffinity"></a>

```csharp
public string SdrsIntraVmAffinity { get; }
```

- *Type:* string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverride.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDrsVmOverrideConfig <a name="StorageDrsVmOverrideConfig" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new StorageDrsVmOverrideConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatastoreClusterId,
    string VirtualMachineId,
    string Id = null,
    string SdrsAutomationLevel = null,
    string SdrsEnabled = null,
    string SdrsIntraVmAffinity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>string</code> | The managed object ID of the datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>string</code> | The managed object ID of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/storage_drs_vm_override#id StorageDrsVmOverride#id}. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsAutomationLevel">SdrsAutomationLevel</a></code> | <code>string</code> | Overrides any Storage DRS automation levels for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsEnabled">SdrsEnabled</a></code> | <code>string</code> | Overrides the default Storage DRS setting for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsIntraVmAffinity">SdrsIntraVmAffinity</a></code> | <code>string</code> | Overrides the intra-VM affinity setting for this virtual machine. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatastoreClusterId`<sup>Required</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.datastoreClusterId"></a>

```csharp
public string DatastoreClusterId { get; set; }
```

- *Type:* string

The managed object ID of the datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/storage_drs_vm_override#datastore_cluster_id StorageDrsVmOverride#datastore_cluster_id}

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.virtualMachineId"></a>

```csharp
public string VirtualMachineId { get; set; }
```

- *Type:* string

The managed object ID of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/storage_drs_vm_override#virtual_machine_id StorageDrsVmOverride#virtual_machine_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/storage_drs_vm_override#id StorageDrsVmOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SdrsAutomationLevel`<sup>Optional</sup> <a name="SdrsAutomationLevel" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsAutomationLevel"></a>

```csharp
public string SdrsAutomationLevel { get; set; }
```

- *Type:* string

Overrides any Storage DRS automation levels for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/storage_drs_vm_override#sdrs_automation_level StorageDrsVmOverride#sdrs_automation_level}

---

##### `SdrsEnabled`<sup>Optional</sup> <a name="SdrsEnabled" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsEnabled"></a>

```csharp
public string SdrsEnabled { get; set; }
```

- *Type:* string

Overrides the default Storage DRS setting for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/storage_drs_vm_override#sdrs_enabled StorageDrsVmOverride#sdrs_enabled}

---

##### `SdrsIntraVmAffinity`<sup>Optional</sup> <a name="SdrsIntraVmAffinity" id="@cdktf/provider-vsphere.storageDrsVmOverride.StorageDrsVmOverrideConfig.property.sdrsIntraVmAffinity"></a>

```csharp
public string SdrsIntraVmAffinity { get; set; }
```

- *Type:* string

Overrides the intra-VM affinity setting for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.0/docs/resources/storage_drs_vm_override#sdrs_intra_vm_affinity StorageDrsVmOverride#sdrs_intra_vm_affinity}

---



