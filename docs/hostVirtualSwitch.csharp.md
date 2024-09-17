# `hostVirtualSwitch` Submodule <a name="`hostVirtualSwitch` Submodule" id="@cdktf/provider-vsphere.hostVirtualSwitch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostVirtualSwitch <a name="HostVirtualSwitch" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch vsphere_host_virtual_switch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostVirtualSwitch(Construct Scope, string Id, HostVirtualSwitchConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig">HostVirtualSwitchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig">HostVirtualSwitchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowForgedTransmits">ResetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowMacChanges">ResetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowPromiscuous">ResetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetBeaconInterval">ResetBeaconInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetCheckBeacon">ResetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetFailback">ResetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryOperation">ResetLinkDiscoveryOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryProtocol">ResetLinkDiscoveryProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNotifySwitches">ResetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNumberOfPorts">ResetNumberOfPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingAverageBandwidth">ResetShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingBurstSize">ResetShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingEnabled">ResetShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingPeakBandwidth">ResetShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetStandbyNics">ResetStandbyNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetTeamingPolicy">ResetTeamingPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowForgedTransmits` <a name="ResetAllowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowForgedTransmits"></a>

```csharp
private void ResetAllowForgedTransmits()
```

##### `ResetAllowMacChanges` <a name="ResetAllowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowMacChanges"></a>

```csharp
private void ResetAllowMacChanges()
```

##### `ResetAllowPromiscuous` <a name="ResetAllowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetAllowPromiscuous"></a>

```csharp
private void ResetAllowPromiscuous()
```

##### `ResetBeaconInterval` <a name="ResetBeaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetBeaconInterval"></a>

```csharp
private void ResetBeaconInterval()
```

##### `ResetCheckBeacon` <a name="ResetCheckBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetCheckBeacon"></a>

```csharp
private void ResetCheckBeacon()
```

##### `ResetFailback` <a name="ResetFailback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetFailback"></a>

```csharp
private void ResetFailback()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLinkDiscoveryOperation` <a name="ResetLinkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryOperation"></a>

```csharp
private void ResetLinkDiscoveryOperation()
```

##### `ResetLinkDiscoveryProtocol` <a name="ResetLinkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetLinkDiscoveryProtocol"></a>

```csharp
private void ResetLinkDiscoveryProtocol()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetNotifySwitches` <a name="ResetNotifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNotifySwitches"></a>

```csharp
private void ResetNotifySwitches()
```

##### `ResetNumberOfPorts` <a name="ResetNumberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetNumberOfPorts"></a>

```csharp
private void ResetNumberOfPorts()
```

##### `ResetShapingAverageBandwidth` <a name="ResetShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingAverageBandwidth"></a>

```csharp
private void ResetShapingAverageBandwidth()
```

##### `ResetShapingBurstSize` <a name="ResetShapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingBurstSize"></a>

```csharp
private void ResetShapingBurstSize()
```

##### `ResetShapingEnabled` <a name="ResetShapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingEnabled"></a>

```csharp
private void ResetShapingEnabled()
```

##### `ResetShapingPeakBandwidth` <a name="ResetShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetShapingPeakBandwidth"></a>

```csharp
private void ResetShapingPeakBandwidth()
```

##### `ResetStandbyNics` <a name="ResetStandbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetStandbyNics"></a>

```csharp
private void ResetStandbyNics()
```

##### `ResetTeamingPolicy` <a name="ResetTeamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.resetTeamingPolicy"></a>

```csharp
private void ResetTeamingPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HostVirtualSwitch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HostVirtualSwitch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HostVirtualSwitch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HostVirtualSwitch.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

HostVirtualSwitch.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HostVirtualSwitch resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HostVirtualSwitch to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HostVirtualSwitch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HostVirtualSwitch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNicsInput">ActiveNicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmitsInput">AllowForgedTransmitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChangesInput">AllowMacChangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuousInput">AllowPromiscuousInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconIntervalInput">BeaconIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeaconInput">CheckBeaconInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failbackInput">FailbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemIdInput">HostSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperationInput">LinkDiscoveryOperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocolInput">LinkDiscoveryProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdaptersInput">NetworkAdaptersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitchesInput">NotifySwitchesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPortsInput">NumberOfPortsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidthInput">ShapingAverageBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSizeInput">ShapingBurstSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabledInput">ShapingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidthInput">ShapingPeakBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNicsInput">StandbyNicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicyInput">TeamingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNics">ActiveNics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChanges">AllowMacChanges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconInterval">BeaconInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeacon">CheckBeacon</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failback">Failback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemId">HostSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperation">LinkDiscoveryOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocol">LinkDiscoveryProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdapters">NetworkAdapters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitches">NotifySwitches</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPorts">NumberOfPorts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidth">ShapingAverageBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSize">ShapingBurstSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabled">ShapingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidth">ShapingPeakBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNics">StandbyNics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicy">TeamingPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActiveNicsInput`<sup>Optional</sup> <a name="ActiveNicsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNicsInput"></a>

```csharp
public string[] ActiveNicsInput { get; }
```

- *Type:* string[]

---

##### `AllowForgedTransmitsInput`<sup>Optional</sup> <a name="AllowForgedTransmitsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmitsInput"></a>

```csharp
public object AllowForgedTransmitsInput { get; }
```

- *Type:* object

---

##### `AllowMacChangesInput`<sup>Optional</sup> <a name="AllowMacChangesInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChangesInput"></a>

```csharp
public object AllowMacChangesInput { get; }
```

- *Type:* object

---

##### `AllowPromiscuousInput`<sup>Optional</sup> <a name="AllowPromiscuousInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuousInput"></a>

```csharp
public object AllowPromiscuousInput { get; }
```

- *Type:* object

---

##### `BeaconIntervalInput`<sup>Optional</sup> <a name="BeaconIntervalInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconIntervalInput"></a>

```csharp
public double BeaconIntervalInput { get; }
```

- *Type:* double

---

##### `CheckBeaconInput`<sup>Optional</sup> <a name="CheckBeaconInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeaconInput"></a>

```csharp
public object CheckBeaconInput { get; }
```

- *Type:* object

---

##### `FailbackInput`<sup>Optional</sup> <a name="FailbackInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failbackInput"></a>

```csharp
public object FailbackInput { get; }
```

- *Type:* object

---

##### `HostSystemIdInput`<sup>Optional</sup> <a name="HostSystemIdInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemIdInput"></a>

```csharp
public string HostSystemIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinkDiscoveryOperationInput`<sup>Optional</sup> <a name="LinkDiscoveryOperationInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperationInput"></a>

```csharp
public string LinkDiscoveryOperationInput { get; }
```

- *Type:* string

---

##### `LinkDiscoveryProtocolInput`<sup>Optional</sup> <a name="LinkDiscoveryProtocolInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocolInput"></a>

```csharp
public string LinkDiscoveryProtocolInput { get; }
```

- *Type:* string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkAdaptersInput`<sup>Optional</sup> <a name="NetworkAdaptersInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdaptersInput"></a>

```csharp
public string[] NetworkAdaptersInput { get; }
```

- *Type:* string[]

---

##### `NotifySwitchesInput`<sup>Optional</sup> <a name="NotifySwitchesInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitchesInput"></a>

```csharp
public object NotifySwitchesInput { get; }
```

- *Type:* object

---

##### `NumberOfPortsInput`<sup>Optional</sup> <a name="NumberOfPortsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPortsInput"></a>

```csharp
public double NumberOfPortsInput { get; }
```

- *Type:* double

---

##### `ShapingAverageBandwidthInput`<sup>Optional</sup> <a name="ShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidthInput"></a>

```csharp
public double ShapingAverageBandwidthInput { get; }
```

- *Type:* double

---

##### `ShapingBurstSizeInput`<sup>Optional</sup> <a name="ShapingBurstSizeInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSizeInput"></a>

```csharp
public double ShapingBurstSizeInput { get; }
```

- *Type:* double

---

##### `ShapingEnabledInput`<sup>Optional</sup> <a name="ShapingEnabledInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabledInput"></a>

```csharp
public object ShapingEnabledInput { get; }
```

- *Type:* object

---

##### `ShapingPeakBandwidthInput`<sup>Optional</sup> <a name="ShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidthInput"></a>

```csharp
public double ShapingPeakBandwidthInput { get; }
```

- *Type:* double

---

##### `StandbyNicsInput`<sup>Optional</sup> <a name="StandbyNicsInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNicsInput"></a>

```csharp
public string[] StandbyNicsInput { get; }
```

- *Type:* string[]

---

##### `TeamingPolicyInput`<sup>Optional</sup> <a name="TeamingPolicyInput" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicyInput"></a>

```csharp
public string TeamingPolicyInput { get; }
```

- *Type:* string

---

##### `ActiveNics`<sup>Required</sup> <a name="ActiveNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.activeNics"></a>

```csharp
public string[] ActiveNics { get; }
```

- *Type:* string[]

---

##### `AllowForgedTransmits`<sup>Required</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowForgedTransmits"></a>

```csharp
public object AllowForgedTransmits { get; }
```

- *Type:* object

---

##### `AllowMacChanges`<sup>Required</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowMacChanges"></a>

```csharp
public object AllowMacChanges { get; }
```

- *Type:* object

---

##### `AllowPromiscuous`<sup>Required</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.allowPromiscuous"></a>

```csharp
public object AllowPromiscuous { get; }
```

- *Type:* object

---

##### `BeaconInterval`<sup>Required</sup> <a name="BeaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.beaconInterval"></a>

```csharp
public double BeaconInterval { get; }
```

- *Type:* double

---

##### `CheckBeacon`<sup>Required</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.checkBeacon"></a>

```csharp
public object CheckBeacon { get; }
```

- *Type:* object

---

##### `Failback`<sup>Required</sup> <a name="Failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.failback"></a>

```csharp
public object Failback { get; }
```

- *Type:* object

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.hostSystemId"></a>

```csharp
public string HostSystemId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkDiscoveryOperation`<sup>Required</sup> <a name="LinkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryOperation"></a>

```csharp
public string LinkDiscoveryOperation { get; }
```

- *Type:* string

---

##### `LinkDiscoveryProtocol`<sup>Required</sup> <a name="LinkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.linkDiscoveryProtocol"></a>

```csharp
public string LinkDiscoveryProtocol { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkAdapters`<sup>Required</sup> <a name="NetworkAdapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.networkAdapters"></a>

```csharp
public string[] NetworkAdapters { get; }
```

- *Type:* string[]

---

##### `NotifySwitches`<sup>Required</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.notifySwitches"></a>

```csharp
public object NotifySwitches { get; }
```

- *Type:* object

---

##### `NumberOfPorts`<sup>Required</sup> <a name="NumberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.numberOfPorts"></a>

```csharp
public double NumberOfPorts { get; }
```

- *Type:* double

---

##### `ShapingAverageBandwidth`<sup>Required</sup> <a name="ShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingAverageBandwidth"></a>

```csharp
public double ShapingAverageBandwidth { get; }
```

- *Type:* double

---

##### `ShapingBurstSize`<sup>Required</sup> <a name="ShapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingBurstSize"></a>

```csharp
public double ShapingBurstSize { get; }
```

- *Type:* double

---

##### `ShapingEnabled`<sup>Required</sup> <a name="ShapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingEnabled"></a>

```csharp
public object ShapingEnabled { get; }
```

- *Type:* object

---

##### `ShapingPeakBandwidth`<sup>Required</sup> <a name="ShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.shapingPeakBandwidth"></a>

```csharp
public double ShapingPeakBandwidth { get; }
```

- *Type:* double

---

##### `StandbyNics`<sup>Required</sup> <a name="StandbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.standbyNics"></a>

```csharp
public string[] StandbyNics { get; }
```

- *Type:* string[]

---

##### `TeamingPolicy`<sup>Required</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.teamingPolicy"></a>

```csharp
public string TeamingPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostVirtualSwitchConfig <a name="HostVirtualSwitchConfig" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new HostVirtualSwitchConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] ActiveNics,
    string HostSystemId,
    string Name,
    string[] NetworkAdapters,
    object AllowForgedTransmits = null,
    object AllowMacChanges = null,
    object AllowPromiscuous = null,
    double BeaconInterval = null,
    object CheckBeacon = null,
    object Failback = null,
    string Id = null,
    string LinkDiscoveryOperation = null,
    string LinkDiscoveryProtocol = null,
    double Mtu = null,
    object NotifySwitches = null,
    double NumberOfPorts = null,
    double ShapingAverageBandwidth = null,
    double ShapingBurstSize = null,
    object ShapingEnabled = null,
    double ShapingPeakBandwidth = null,
    string[] StandbyNics = null,
    string TeamingPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.activeNics">ActiveNics</a></code> | <code>string[]</code> | List of active network adapters used for load balancing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.hostSystemId">HostSystemId</a></code> | <code>string</code> | The managed object ID of the host to set the virtual switch up on. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.name">Name</a></code> | <code>string</code> | The name of the virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.networkAdapters">NetworkAdapters</a></code> | <code>string[]</code> | The list of network adapters to bind to this virtual switch. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>object</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowMacChanges">AllowMacChanges</a></code> | <code>object</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>object</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.beaconInterval">BeaconInterval</a></code> | <code>double</code> | Determines how often, in seconds, a beacon should be sent to probe for the validity of a link. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.checkBeacon">CheckBeacon</a></code> | <code>object</code> | Enable beacon probing. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.failback">Failback</a></code> | <code>object</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryOperation">LinkDiscoveryOperation</a></code> | <code>string</code> | Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryProtocol">LinkDiscoveryProtocol</a></code> | <code>string</code> | The discovery protocol type. Valid values are cdp and lldp. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.mtu">Mtu</a></code> | <code>double</code> | The maximum transmission unit (MTU) of the virtual switch in bytes. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.notifySwitches">NotifySwitches</a></code> | <code>object</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.numberOfPorts">NumberOfPorts</a></code> | <code>double</code> | The number of ports that this virtual switch is configured to use. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingAverageBandwidth">ShapingAverageBandwidth</a></code> | <code>double</code> | The average bandwidth in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingBurstSize">ShapingBurstSize</a></code> | <code>double</code> | The maximum burst size allowed in bytes if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingEnabled">ShapingEnabled</a></code> | <code>object</code> | Enable traffic shaping on this virtual switch or port group. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingPeakBandwidth">ShapingPeakBandwidth</a></code> | <code>double</code> | The peak bandwidth during bursts in bits per second if traffic shaping is enabled. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.standbyNics">StandbyNics</a></code> | <code>string[]</code> | List of standby network adapters used for failover. |
| <code><a href="#@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.teamingPolicy">TeamingPolicy</a></code> | <code>string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ActiveNics`<sup>Required</sup> <a name="ActiveNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.activeNics"></a>

```csharp
public string[] ActiveNics { get; set; }
```

- *Type:* string[]

List of active network adapters used for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#active_nics HostVirtualSwitch#active_nics}

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.hostSystemId"></a>

```csharp
public string HostSystemId { get; set; }
```

- *Type:* string

The managed object ID of the host to set the virtual switch up on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#host_system_id HostVirtualSwitch#host_system_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#name HostVirtualSwitch#name}

---

##### `NetworkAdapters`<sup>Required</sup> <a name="NetworkAdapters" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.networkAdapters"></a>

```csharp
public string[] NetworkAdapters { get; set; }
```

- *Type:* string[]

The list of network adapters to bind to this virtual switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#network_adapters HostVirtualSwitch#network_adapters}

---

##### `AllowForgedTransmits`<sup>Optional</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowForgedTransmits"></a>

```csharp
public object AllowForgedTransmits { get; set; }
```

- *Type:* object

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#allow_forged_transmits HostVirtualSwitch#allow_forged_transmits}

---

##### `AllowMacChanges`<sup>Optional</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowMacChanges"></a>

```csharp
public object AllowMacChanges { get; set; }
```

- *Type:* object

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#allow_mac_changes HostVirtualSwitch#allow_mac_changes}

---

##### `AllowPromiscuous`<sup>Optional</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.allowPromiscuous"></a>

```csharp
public object AllowPromiscuous { get; set; }
```

- *Type:* object

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#allow_promiscuous HostVirtualSwitch#allow_promiscuous}

---

##### `BeaconInterval`<sup>Optional</sup> <a name="BeaconInterval" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.beaconInterval"></a>

```csharp
public double BeaconInterval { get; set; }
```

- *Type:* double

Determines how often, in seconds, a beacon should be sent to probe for the validity of a link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#beacon_interval HostVirtualSwitch#beacon_interval}

---

##### `CheckBeacon`<sup>Optional</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.checkBeacon"></a>

```csharp
public object CheckBeacon { get; set; }
```

- *Type:* object

Enable beacon probing.

Requires that the vSwitch has been configured to use a beacon. If disabled, link status is used only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#check_beacon HostVirtualSwitch#check_beacon}

---

##### `Failback`<sup>Optional</sup> <a name="Failback" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.failback"></a>

```csharp
public object Failback { get; set; }
```

- *Type:* object

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#failback HostVirtualSwitch#failback}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#id HostVirtualSwitch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LinkDiscoveryOperation`<sup>Optional</sup> <a name="LinkDiscoveryOperation" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryOperation"></a>

```csharp
public string LinkDiscoveryOperation { get; set; }
```

- *Type:* string

Whether to advertise or listen for link discovery. Valid values are advertise, both, listen, and none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#link_discovery_operation HostVirtualSwitch#link_discovery_operation}

---

##### `LinkDiscoveryProtocol`<sup>Optional</sup> <a name="LinkDiscoveryProtocol" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.linkDiscoveryProtocol"></a>

```csharp
public string LinkDiscoveryProtocol { get; set; }
```

- *Type:* string

The discovery protocol type. Valid values are cdp and lldp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#link_discovery_protocol HostVirtualSwitch#link_discovery_protocol}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

The maximum transmission unit (MTU) of the virtual switch in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#mtu HostVirtualSwitch#mtu}

---

##### `NotifySwitches`<sup>Optional</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.notifySwitches"></a>

```csharp
public object NotifySwitches { get; set; }
```

- *Type:* object

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#notify_switches HostVirtualSwitch#notify_switches}

---

##### `NumberOfPorts`<sup>Optional</sup> <a name="NumberOfPorts" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.numberOfPorts"></a>

```csharp
public double NumberOfPorts { get; set; }
```

- *Type:* double

The number of ports that this virtual switch is configured to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#number_of_ports HostVirtualSwitch#number_of_ports}

---

##### `ShapingAverageBandwidth`<sup>Optional</sup> <a name="ShapingAverageBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingAverageBandwidth"></a>

```csharp
public double ShapingAverageBandwidth { get; set; }
```

- *Type:* double

The average bandwidth in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#shaping_average_bandwidth HostVirtualSwitch#shaping_average_bandwidth}

---

##### `ShapingBurstSize`<sup>Optional</sup> <a name="ShapingBurstSize" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingBurstSize"></a>

```csharp
public double ShapingBurstSize { get; set; }
```

- *Type:* double

The maximum burst size allowed in bytes if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#shaping_burst_size HostVirtualSwitch#shaping_burst_size}

---

##### `ShapingEnabled`<sup>Optional</sup> <a name="ShapingEnabled" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingEnabled"></a>

```csharp
public object ShapingEnabled { get; set; }
```

- *Type:* object

Enable traffic shaping on this virtual switch or port group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#shaping_enabled HostVirtualSwitch#shaping_enabled}

---

##### `ShapingPeakBandwidth`<sup>Optional</sup> <a name="ShapingPeakBandwidth" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.shapingPeakBandwidth"></a>

```csharp
public double ShapingPeakBandwidth { get; set; }
```

- *Type:* double

The peak bandwidth during bursts in bits per second if traffic shaping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#shaping_peak_bandwidth HostVirtualSwitch#shaping_peak_bandwidth}

---

##### `StandbyNics`<sup>Optional</sup> <a name="StandbyNics" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.standbyNics"></a>

```csharp
public string[] StandbyNics { get; set; }
```

- *Type:* string[]

List of standby network adapters used for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#standby_nics HostVirtualSwitch#standby_nics}

---

##### `TeamingPolicy`<sup>Optional</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.hostVirtualSwitch.HostVirtualSwitchConfig.property.teamingPolicy"></a>

```csharp
public string TeamingPolicy { get; set; }
```

- *Type:* string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or failover_explicit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/resources/host_virtual_switch#teaming_policy HostVirtualSwitch#teaming_policy}

---



