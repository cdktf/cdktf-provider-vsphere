# `hostPortGroup` Submodule <a name="`hostPortGroup` Submodule" id="@cdktf/provider-vsphere.hostPortGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostPortGroup <a name="HostPortGroup" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group vsphere_host_port_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostPortGroup(Construct Scope, string Id, HostPortGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig">HostPortGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig">HostPortGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetActiveNics">ResetActiveNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowForgedTransmits">ResetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowMacChanges">ResetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowPromiscuous">ResetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetCheckBeacon">ResetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetFailback">ResetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetNotifySwitches">ResetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingAverageBandwidth">ResetShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingBurstSize">ResetShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingEnabled">ResetShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingPeakBandwidth">ResetShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetStandbyNics">ResetStandbyNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetTeamingPolicy">ResetTeamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetVlanId">ResetVlanId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetActiveNics` <a name="ResetActiveNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetActiveNics"></a>

```csharp
private void ResetActiveNics()
```

##### `ResetAllowForgedTransmits` <a name="ResetAllowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowForgedTransmits"></a>

```csharp
private void ResetAllowForgedTransmits()
```

##### `ResetAllowMacChanges` <a name="ResetAllowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowMacChanges"></a>

```csharp
private void ResetAllowMacChanges()
```

##### `ResetAllowPromiscuous` <a name="ResetAllowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetAllowPromiscuous"></a>

```csharp
private void ResetAllowPromiscuous()
```

##### `ResetCheckBeacon` <a name="ResetCheckBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetCheckBeacon"></a>

```csharp
private void ResetCheckBeacon()
```

##### `ResetFailback` <a name="ResetFailback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetFailback"></a>

```csharp
private void ResetFailback()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotifySwitches` <a name="ResetNotifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetNotifySwitches"></a>

```csharp
private void ResetNotifySwitches()
```

##### `ResetShapingAverageBandwidth` <a name="ResetShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingAverageBandwidth"></a>

```csharp
private void ResetShapingAverageBandwidth()
```

##### `ResetShapingBurstSize` <a name="ResetShapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingBurstSize"></a>

```csharp
private void ResetShapingBurstSize()
```

##### `ResetShapingEnabled` <a name="ResetShapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingEnabled"></a>

```csharp
private void ResetShapingEnabled()
```

##### `ResetShapingPeakBandwidth` <a name="ResetShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetShapingPeakBandwidth"></a>

```csharp
private void ResetShapingPeakBandwidth()
```

##### `ResetStandbyNics` <a name="ResetStandbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetStandbyNics"></a>

```csharp
private void ResetStandbyNics()
```

##### `ResetTeamingPolicy` <a name="ResetTeamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetTeamingPolicy"></a>

```csharp
private void ResetTeamingPolicy()
```

##### `ResetVlanId` <a name="ResetVlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.resetVlanId"></a>

```csharp
private void ResetVlanId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HostPortGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HostPortGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HostPortGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HostPortGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HostPortGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HostPortGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HostPortGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HostPortGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HostPortGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.computedPolicy">ComputedPolicy</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList">HostPortGroupPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNicsInput">ActiveNicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmitsInput">AllowForgedTransmitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChangesInput">AllowMacChangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuousInput">AllowPromiscuousInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeaconInput">CheckBeaconInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failbackInput">FailbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemIdInput">HostSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitchesInput">NotifySwitchesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidthInput">ShapingAverageBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSizeInput">ShapingBurstSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabledInput">ShapingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidthInput">ShapingPeakBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNicsInput">StandbyNicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicyInput">TeamingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchNameInput">VirtualSwitchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanIdInput">VlanIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNics">ActiveNics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChanges">AllowMacChanges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeacon">CheckBeacon</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failback">Failback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemId">HostSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitches">NotifySwitches</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidth">ShapingAverageBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSize">ShapingBurstSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabled">ShapingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidth">ShapingPeakBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNics">StandbyNics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicy">TeamingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchName">VirtualSwitchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanId">VlanId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComputedPolicy`<sup>Required</sup> <a name="ComputedPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.computedPolicy"></a>

```csharp
public StringMap ComputedPolicy { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.ports"></a>

```csharp
public HostPortGroupPortsList Ports { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList">HostPortGroupPortsList</a>

---

##### `ActiveNicsInput`<sup>Optional</sup> <a name="ActiveNicsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNicsInput"></a>

```csharp
public string[] ActiveNicsInput { get; }
```

- *Type:* string[]

---

##### `AllowForgedTransmitsInput`<sup>Optional</sup> <a name="AllowForgedTransmitsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmitsInput"></a>

```csharp
public object AllowForgedTransmitsInput { get; }
```

- *Type:* object

---

##### `AllowMacChangesInput`<sup>Optional</sup> <a name="AllowMacChangesInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChangesInput"></a>

```csharp
public object AllowMacChangesInput { get; }
```

- *Type:* object

---

##### `AllowPromiscuousInput`<sup>Optional</sup> <a name="AllowPromiscuousInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuousInput"></a>

```csharp
public object AllowPromiscuousInput { get; }
```

- *Type:* object

---

##### `CheckBeaconInput`<sup>Optional</sup> <a name="CheckBeaconInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeaconInput"></a>

```csharp
public object CheckBeaconInput { get; }
```

- *Type:* object

---

##### `FailbackInput`<sup>Optional</sup> <a name="FailbackInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failbackInput"></a>

```csharp
public object FailbackInput { get; }
```

- *Type:* object

---

##### `HostSystemIdInput`<sup>Optional</sup> <a name="HostSystemIdInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemIdInput"></a>

```csharp
public string HostSystemIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotifySwitchesInput`<sup>Optional</sup> <a name="NotifySwitchesInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitchesInput"></a>

```csharp
public object NotifySwitchesInput { get; }
```

- *Type:* object

---

##### `ShapingAverageBandwidthInput`<sup>Optional</sup> <a name="ShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidthInput"></a>

```csharp
public double ShapingAverageBandwidthInput { get; }
```

- *Type:* double

---

##### `ShapingBurstSizeInput`<sup>Optional</sup> <a name="ShapingBurstSizeInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSizeInput"></a>

```csharp
public double ShapingBurstSizeInput { get; }
```

- *Type:* double

---

##### `ShapingEnabledInput`<sup>Optional</sup> <a name="ShapingEnabledInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabledInput"></a>

```csharp
public object ShapingEnabledInput { get; }
```

- *Type:* object

---

##### `ShapingPeakBandwidthInput`<sup>Optional</sup> <a name="ShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidthInput"></a>

```csharp
public double ShapingPeakBandwidthInput { get; }
```

- *Type:* double

---

##### `StandbyNicsInput`<sup>Optional</sup> <a name="StandbyNicsInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNicsInput"></a>

```csharp
public string[] StandbyNicsInput { get; }
```

- *Type:* string[]

---

##### `TeamingPolicyInput`<sup>Optional</sup> <a name="TeamingPolicyInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicyInput"></a>

```csharp
public string TeamingPolicyInput { get; }
```

- *Type:* string

---

##### `VirtualSwitchNameInput`<sup>Optional</sup> <a name="VirtualSwitchNameInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchNameInput"></a>

```csharp
public string VirtualSwitchNameInput { get; }
```

- *Type:* string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanIdInput"></a>

```csharp
public double VlanIdInput { get; }
```

- *Type:* double

---

##### `ActiveNics`<sup>Required</sup> <a name="ActiveNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.activeNics"></a>

```csharp
public string[] ActiveNics { get; }
```

- *Type:* string[]

---

##### `AllowForgedTransmits`<sup>Required</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowForgedTransmits"></a>

```csharp
public object AllowForgedTransmits { get; }
```

- *Type:* object

---

##### `AllowMacChanges`<sup>Required</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowMacChanges"></a>

```csharp
public object AllowMacChanges { get; }
```

- *Type:* object

---

##### `AllowPromiscuous`<sup>Required</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.allowPromiscuous"></a>

```csharp
public object AllowPromiscuous { get; }
```

- *Type:* object

---

##### `CheckBeacon`<sup>Required</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.checkBeacon"></a>

```csharp
public object CheckBeacon { get; }
```

- *Type:* object

---

##### `Failback`<sup>Required</sup> <a name="Failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.failback"></a>

```csharp
public object Failback { get; }
```

- *Type:* object

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.hostSystemId"></a>

```csharp
public string HostSystemId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotifySwitches`<sup>Required</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.notifySwitches"></a>

```csharp
public object NotifySwitches { get; }
```

- *Type:* object

---

##### `ShapingAverageBandwidth`<sup>Required</sup> <a name="ShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingAverageBandwidth"></a>

```csharp
public double ShapingAverageBandwidth { get; }
```

- *Type:* double

---

##### `ShapingBurstSize`<sup>Required</sup> <a name="ShapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingBurstSize"></a>

```csharp
public double ShapingBurstSize { get; }
```

- *Type:* double

---

##### `ShapingEnabled`<sup>Required</sup> <a name="ShapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingEnabled"></a>

```csharp
public object ShapingEnabled { get; }
```

- *Type:* object

---

##### `ShapingPeakBandwidth`<sup>Required</sup> <a name="ShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.shapingPeakBandwidth"></a>

```csharp
public double ShapingPeakBandwidth { get; }
```

- *Type:* double

---

##### `StandbyNics`<sup>Required</sup> <a name="StandbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.standbyNics"></a>

```csharp
public string[] StandbyNics { get; }
```

- *Type:* string[]

---

##### `TeamingPolicy`<sup>Required</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.teamingPolicy"></a>

```csharp
public string TeamingPolicy { get; }
```

- *Type:* string

---

##### `VirtualSwitchName`<sup>Required</sup> <a name="VirtualSwitchName" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.virtualSwitchName"></a>

```csharp
public string VirtualSwitchName { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.vlanId"></a>

```csharp
public double VlanId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostPortGroupConfig <a name="HostPortGroupConfig" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostPortGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string HostSystemId,
    string Name,
    string VirtualSwitchName,
    string[] ActiveNics = null,
    object AllowForgedTransmits = null,
    object AllowMacChanges = null,
    object AllowPromiscuous = null,
    object CheckBeacon = null,
    object Failback = null,
    string Id = null,
    object NotifySwitches = null,
    double ShapingAverageBandwidth = null,
    double ShapingBurstSize = null,
    object ShapingEnabled = null,
    double ShapingPeakBandwidth = null,
    string[] StandbyNics = null,
    string TeamingPolicy = null,
    double VlanId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.hostSystemId">HostSystemId</a></code> | <code>string</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.name">Name</a></code> | <code>string</code> | The name of the port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.virtualSwitchName">VirtualSwitchName</a></code> | <code>string</code> | The name of the virtual switch to bind this port group to. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.activeNics">ActiveNics</a></code> | <code>string[]</code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>object</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowMacChanges">AllowMacChanges</a></code> | <code>object</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>object</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.checkBeacon">CheckBeacon</a></code> | <code>object</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.failback">Failback</a></code> | <code>object</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#id HostPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.notifySwitches">NotifySwitches</a></code> | <code>object</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingAverageBandwidth">ShapingAverageBandwidth</a></code> | <code>double</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingBurstSize">ShapingBurstSize</a></code> | <code>double</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingEnabled">ShapingEnabled</a></code> | <code>object</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingPeakBandwidth">ShapingPeakBandwidth</a></code> | <code>double</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.standbyNics">StandbyNics</a></code> | <code>string[]</code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.teamingPolicy">TeamingPolicy</a></code> | <code>string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.vlanId">VlanId</a></code> | <code>double</code> | The VLAN ID/trunk mode for this port group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.hostSystemId"></a>

```csharp
public string HostSystemId { get; set; }
```

- *Type:* string

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#host_system_id HostPortGroup#host_system_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#name HostPortGroup#name}

---

##### `VirtualSwitchName`<sup>Required</sup> <a name="VirtualSwitchName" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.virtualSwitchName"></a>

```csharp
public string VirtualSwitchName { get; set; }
```

- *Type:* string

The name of the virtual switch to bind this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#virtual_switch_name HostPortGroup#virtual_switch_name}

---

##### `ActiveNics`<sup>Optional</sup> <a name="ActiveNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.activeNics"></a>

```csharp
public string[] ActiveNics { get; set; }
```

- *Type:* string[]

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#active_nics HostPortGroup#active_nics}

---

##### `AllowForgedTransmits`<sup>Optional</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowForgedTransmits"></a>

```csharp
public object AllowForgedTransmits { get; set; }
```

- *Type:* object

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#allow_forged_transmits HostPortGroup#allow_forged_transmits}

---

##### `AllowMacChanges`<sup>Optional</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowMacChanges"></a>

```csharp
public object AllowMacChanges { get; set; }
```

- *Type:* object

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#allow_mac_changes HostPortGroup#allow_mac_changes}

---

##### `AllowPromiscuous`<sup>Optional</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.allowPromiscuous"></a>

```csharp
public object AllowPromiscuous { get; set; }
```

- *Type:* object

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#allow_promiscuous HostPortGroup#allow_promiscuous}

---

##### `CheckBeacon`<sup>Optional</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.checkBeacon"></a>

```csharp
public object CheckBeacon { get; set; }
```

- *Type:* object

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#check_beacon HostPortGroup#check_beacon}

---

##### `Failback`<sup>Optional</sup> <a name="Failback" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.failback"></a>

```csharp
public object Failback { get; set; }
```

- *Type:* object

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#failback HostPortGroup#failback}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#id HostPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotifySwitches`<sup>Optional</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.notifySwitches"></a>

```csharp
public object NotifySwitches { get; set; }
```

- *Type:* object

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#notify_switches HostPortGroup#notify_switches}

---

##### `ShapingAverageBandwidth`<sup>Optional</sup> <a name="ShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingAverageBandwidth"></a>

```csharp
public double ShapingAverageBandwidth { get; set; }
```

- *Type:* double

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#shaping_average_bandwidth HostPortGroup#shaping_average_bandwidth}

---

##### `ShapingBurstSize`<sup>Optional</sup> <a name="ShapingBurstSize" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingBurstSize"></a>

```csharp
public double ShapingBurstSize { get; set; }
```

- *Type:* double

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#shaping_burst_size HostPortGroup#shaping_burst_size}

---

##### `ShapingEnabled`<sup>Optional</sup> <a name="ShapingEnabled" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingEnabled"></a>

```csharp
public object ShapingEnabled { get; set; }
```

- *Type:* object

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#shaping_enabled HostPortGroup#shaping_enabled}

---

##### `ShapingPeakBandwidth`<sup>Optional</sup> <a name="ShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.shapingPeakBandwidth"></a>

```csharp
public double ShapingPeakBandwidth { get; set; }
```

- *Type:* double

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#shaping_peak_bandwidth HostPortGroup#shaping_peak_bandwidth}

---

##### `StandbyNics`<sup>Optional</sup> <a name="StandbyNics" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.standbyNics"></a>

```csharp
public string[] StandbyNics { get; set; }
```

- *Type:* string[]

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#standby_nics HostPortGroup#standby_nics}

---

##### `TeamingPolicy`<sup>Optional</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.teamingPolicy"></a>

```csharp
public string TeamingPolicy { get; set; }
```

- *Type:* string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#teaming_policy HostPortGroup#teaming_policy}

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupConfig.property.vlanId"></a>

```csharp
public double VlanId { get; set; }
```

- *Type:* double

The VLAN ID/trunk mode for this port group.

An ID of 0 denotes no tagging, an ID of 1-4094 tags with the specific ID, and an ID of 4095 enables trunk mode, allowing the guest to manage its own tagging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.12.0/docs/resources/host_port_group#vlan_id HostPortGroup#vlan_id}

---

### HostPortGroupPorts <a name="HostPortGroupPorts" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostPortGroupPorts {

};
```


## Classes <a name="Classes" id="Classes"></a>

### HostPortGroupPortsList <a name="HostPortGroupPortsList" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostPortGroupPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get"></a>

```csharp
private HostPortGroupPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### HostPortGroupPortsOutputReference <a name="HostPortGroupPortsOutputReference" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostPortGroupPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.macAddresses">MacAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts">HostPortGroupPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MacAddresses`<sup>Required</sup> <a name="MacAddresses" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.macAddresses"></a>

```csharp
public string[] MacAddresses { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPortsOutputReference.property.internalValue"></a>

```csharp
public HostPortGroupPorts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.hostPortGroup.HostPortGroupPorts">HostPortGroupPorts</a>

---



