# `distributedPortGroup` Submodule <a name="`distributedPortGroup` Submodule" id="@cdktf/provider-vsphere.distributedPortGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DistributedPortGroup <a name="DistributedPortGroup" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group vsphere_distributed_port_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedPortGroup(Construct Scope, string Id, DistributedPortGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig">DistributedPortGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig">DistributedPortGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange">PutVlanRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetActiveUplinks">ResetActiveUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowForgedTransmits">ResetAllowForgedTransmits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowMacChanges">ResetAllowMacChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowPromiscuous">ResetAllowPromiscuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAutoExpand">ResetAutoExpand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockAllPorts">ResetBlockAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockOverrideAllowed">ResetBlockOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCheckBeacon">ResetCheckBeacon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDirectpathGen2Allowed">ResetDirectpathGen2Allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingAverageBandwidth">ResetEgressShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingBurstSize">ResetEgressShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingEnabled">ResetEgressShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingPeakBandwidth">ResetEgressShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetFailback">ResetFailback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingAverageBandwidth">ResetIngressShapingAverageBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingBurstSize">ResetIngressShapingBurstSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingEnabled">ResetIngressShapingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingPeakBandwidth">ResetIngressShapingPeakBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpEnabled">ResetLacpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpMode">ResetLacpMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLivePortMovingAllowed">ResetLivePortMovingAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowEnabled">ResetNetflowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowOverrideAllowed">ResetNetflowOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolKey">ResetNetworkResourcePoolKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolOverrideAllowed">ResetNetworkResourcePoolOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNotifySwitches">ResetNotifySwitches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNumberOfPorts">ResetNumberOfPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortConfigResetAtDisconnect">ResetPortConfigResetAtDisconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortNameFormat">ResetPortNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortPrivateSecondaryVlanId">ResetPortPrivateSecondaryVlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetSecurityPolicyOverrideAllowed">ResetSecurityPolicyOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetShapingOverrideAllowed">ResetShapingOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetStandbyUplinks">ResetStandbyUplinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTeamingPolicy">ResetTeamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTrafficFilterOverrideAllowed">ResetTrafficFilterOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTxUplink">ResetTxUplink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetUplinkTeamingOverrideAllowed">ResetUplinkTeamingOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanId">ResetVlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanOverrideAllowed">ResetVlanOverrideAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanRange">ResetVlanRange</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutVlanRange` <a name="PutVlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange"></a>

```csharp
private void PutVlanRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.putVlanRange.parameter.value"></a>

- *Type:* object

---

##### `ResetActiveUplinks` <a name="ResetActiveUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetActiveUplinks"></a>

```csharp
private void ResetActiveUplinks()
```

##### `ResetAllowForgedTransmits` <a name="ResetAllowForgedTransmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowForgedTransmits"></a>

```csharp
private void ResetAllowForgedTransmits()
```

##### `ResetAllowMacChanges` <a name="ResetAllowMacChanges" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowMacChanges"></a>

```csharp
private void ResetAllowMacChanges()
```

##### `ResetAllowPromiscuous` <a name="ResetAllowPromiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAllowPromiscuous"></a>

```csharp
private void ResetAllowPromiscuous()
```

##### `ResetAutoExpand` <a name="ResetAutoExpand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetAutoExpand"></a>

```csharp
private void ResetAutoExpand()
```

##### `ResetBlockAllPorts` <a name="ResetBlockAllPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockAllPorts"></a>

```csharp
private void ResetBlockAllPorts()
```

##### `ResetBlockOverrideAllowed` <a name="ResetBlockOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetBlockOverrideAllowed"></a>

```csharp
private void ResetBlockOverrideAllowed()
```

##### `ResetCheckBeacon` <a name="ResetCheckBeacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCheckBeacon"></a>

```csharp
private void ResetCheckBeacon()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDirectpathGen2Allowed` <a name="ResetDirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetDirectpathGen2Allowed"></a>

```csharp
private void ResetDirectpathGen2Allowed()
```

##### `ResetEgressShapingAverageBandwidth` <a name="ResetEgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingAverageBandwidth"></a>

```csharp
private void ResetEgressShapingAverageBandwidth()
```

##### `ResetEgressShapingBurstSize` <a name="ResetEgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingBurstSize"></a>

```csharp
private void ResetEgressShapingBurstSize()
```

##### `ResetEgressShapingEnabled` <a name="ResetEgressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingEnabled"></a>

```csharp
private void ResetEgressShapingEnabled()
```

##### `ResetEgressShapingPeakBandwidth` <a name="ResetEgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetEgressShapingPeakBandwidth"></a>

```csharp
private void ResetEgressShapingPeakBandwidth()
```

##### `ResetFailback` <a name="ResetFailback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetFailback"></a>

```csharp
private void ResetFailback()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngressShapingAverageBandwidth` <a name="ResetIngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingAverageBandwidth"></a>

```csharp
private void ResetIngressShapingAverageBandwidth()
```

##### `ResetIngressShapingBurstSize` <a name="ResetIngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingBurstSize"></a>

```csharp
private void ResetIngressShapingBurstSize()
```

##### `ResetIngressShapingEnabled` <a name="ResetIngressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingEnabled"></a>

```csharp
private void ResetIngressShapingEnabled()
```

##### `ResetIngressShapingPeakBandwidth` <a name="ResetIngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetIngressShapingPeakBandwidth"></a>

```csharp
private void ResetIngressShapingPeakBandwidth()
```

##### `ResetLacpEnabled` <a name="ResetLacpEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpEnabled"></a>

```csharp
private void ResetLacpEnabled()
```

##### `ResetLacpMode` <a name="ResetLacpMode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLacpMode"></a>

```csharp
private void ResetLacpMode()
```

##### `ResetLivePortMovingAllowed` <a name="ResetLivePortMovingAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetLivePortMovingAllowed"></a>

```csharp
private void ResetLivePortMovingAllowed()
```

##### `ResetNetflowEnabled` <a name="ResetNetflowEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowEnabled"></a>

```csharp
private void ResetNetflowEnabled()
```

##### `ResetNetflowOverrideAllowed` <a name="ResetNetflowOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetflowOverrideAllowed"></a>

```csharp
private void ResetNetflowOverrideAllowed()
```

##### `ResetNetworkResourcePoolKey` <a name="ResetNetworkResourcePoolKey" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolKey"></a>

```csharp
private void ResetNetworkResourcePoolKey()
```

##### `ResetNetworkResourcePoolOverrideAllowed` <a name="ResetNetworkResourcePoolOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNetworkResourcePoolOverrideAllowed"></a>

```csharp
private void ResetNetworkResourcePoolOverrideAllowed()
```

##### `ResetNotifySwitches` <a name="ResetNotifySwitches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNotifySwitches"></a>

```csharp
private void ResetNotifySwitches()
```

##### `ResetNumberOfPorts` <a name="ResetNumberOfPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetNumberOfPorts"></a>

```csharp
private void ResetNumberOfPorts()
```

##### `ResetPortConfigResetAtDisconnect` <a name="ResetPortConfigResetAtDisconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortConfigResetAtDisconnect"></a>

```csharp
private void ResetPortConfigResetAtDisconnect()
```

##### `ResetPortNameFormat` <a name="ResetPortNameFormat" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortNameFormat"></a>

```csharp
private void ResetPortNameFormat()
```

##### `ResetPortPrivateSecondaryVlanId` <a name="ResetPortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetPortPrivateSecondaryVlanId"></a>

```csharp
private void ResetPortPrivateSecondaryVlanId()
```

##### `ResetSecurityPolicyOverrideAllowed` <a name="ResetSecurityPolicyOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetSecurityPolicyOverrideAllowed"></a>

```csharp
private void ResetSecurityPolicyOverrideAllowed()
```

##### `ResetShapingOverrideAllowed` <a name="ResetShapingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetShapingOverrideAllowed"></a>

```csharp
private void ResetShapingOverrideAllowed()
```

##### `ResetStandbyUplinks` <a name="ResetStandbyUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetStandbyUplinks"></a>

```csharp
private void ResetStandbyUplinks()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTeamingPolicy` <a name="ResetTeamingPolicy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTeamingPolicy"></a>

```csharp
private void ResetTeamingPolicy()
```

##### `ResetTrafficFilterOverrideAllowed` <a name="ResetTrafficFilterOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTrafficFilterOverrideAllowed"></a>

```csharp
private void ResetTrafficFilterOverrideAllowed()
```

##### `ResetTxUplink` <a name="ResetTxUplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetTxUplink"></a>

```csharp
private void ResetTxUplink()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUplinkTeamingOverrideAllowed` <a name="ResetUplinkTeamingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetUplinkTeamingOverrideAllowed"></a>

```csharp
private void ResetUplinkTeamingOverrideAllowed()
```

##### `ResetVlanId` <a name="ResetVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanId"></a>

```csharp
private void ResetVlanId()
```

##### `ResetVlanOverrideAllowed` <a name="ResetVlanOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanOverrideAllowed"></a>

```csharp
private void ResetVlanOverrideAllowed()
```

##### `ResetVlanRange` <a name="ResetVlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.resetVlanRange"></a>

```csharp
private void ResetVlanRange()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DistributedPortGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DistributedPortGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DistributedPortGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DistributedPortGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DistributedPortGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DistributedPortGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DistributedPortGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DistributedPortGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DistributedPortGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.configVersion">ConfigVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRange">VlanRange</a></code> | <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList">DistributedPortGroupVlanRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinksInput">ActiveUplinksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmitsInput">AllowForgedTransmitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChangesInput">AllowMacChangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuousInput">AllowPromiscuousInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpandInput">AutoExpandInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPortsInput">BlockAllPortsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowedInput">BlockOverrideAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeaconInput">CheckBeaconInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributesInput">CustomAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2AllowedInput">DirectpathGen2AllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuidInput">DistributedVirtualSwitchUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidthInput">EgressShapingAverageBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSizeInput">EgressShapingBurstSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabledInput">EgressShapingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidthInput">EgressShapingPeakBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failbackInput">FailbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidthInput">IngressShapingAverageBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSizeInput">IngressShapingBurstSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabledInput">IngressShapingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidthInput">IngressShapingPeakBandwidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabledInput">LacpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpModeInput">LacpModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowedInput">LivePortMovingAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabledInput">NetflowEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowedInput">NetflowOverrideAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKeyInput">NetworkResourcePoolKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowedInput">NetworkResourcePoolOverrideAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitchesInput">NotifySwitchesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPortsInput">NumberOfPortsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnectInput">PortConfigResetAtDisconnectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormatInput">PortNameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanIdInput">PortPrivateSecondaryVlanIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowedInput">SecurityPolicyOverrideAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowedInput">ShapingOverrideAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinksInput">StandbyUplinksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicyInput">TeamingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowedInput">TrafficFilterOverrideAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplinkInput">TxUplinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowedInput">UplinkTeamingOverrideAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanIdInput">VlanIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowedInput">VlanOverrideAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRangeInput">VlanRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinks">ActiveUplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChanges">AllowMacChanges</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpand">AutoExpand</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPorts">BlockAllPorts</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowed">BlockOverrideAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeacon">CheckBeacon</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2Allowed">DirectpathGen2Allowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuid">DistributedVirtualSwitchUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidth">EgressShapingAverageBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSize">EgressShapingBurstSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabled">EgressShapingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidth">EgressShapingPeakBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failback">Failback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidth">IngressShapingAverageBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSize">IngressShapingBurstSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabled">IngressShapingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidth">IngressShapingPeakBandwidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabled">LacpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpMode">LacpMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowed">LivePortMovingAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabled">NetflowEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowed">NetflowOverrideAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKey">NetworkResourcePoolKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowed">NetworkResourcePoolOverrideAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitches">NotifySwitches</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPorts">NumberOfPorts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnect">PortConfigResetAtDisconnect</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormat">PortNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanId">PortPrivateSecondaryVlanId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowed">SecurityPolicyOverrideAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowed">ShapingOverrideAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinks">StandbyUplinks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicy">TeamingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowed">TrafficFilterOverrideAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplink">TxUplink</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowed">UplinkTeamingOverrideAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanId">VlanId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowed">VlanOverrideAllowed</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConfigVersion`<sup>Required</sup> <a name="ConfigVersion" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.configVersion"></a>

```csharp
public string ConfigVersion { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `VlanRange`<sup>Required</sup> <a name="VlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRange"></a>

```csharp
public DistributedPortGroupVlanRangeList VlanRange { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList">DistributedPortGroupVlanRangeList</a>

---

##### `ActiveUplinksInput`<sup>Optional</sup> <a name="ActiveUplinksInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinksInput"></a>

```csharp
public string[] ActiveUplinksInput { get; }
```

- *Type:* string[]

---

##### `AllowForgedTransmitsInput`<sup>Optional</sup> <a name="AllowForgedTransmitsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmitsInput"></a>

```csharp
public object AllowForgedTransmitsInput { get; }
```

- *Type:* object

---

##### `AllowMacChangesInput`<sup>Optional</sup> <a name="AllowMacChangesInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChangesInput"></a>

```csharp
public object AllowMacChangesInput { get; }
```

- *Type:* object

---

##### `AllowPromiscuousInput`<sup>Optional</sup> <a name="AllowPromiscuousInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuousInput"></a>

```csharp
public object AllowPromiscuousInput { get; }
```

- *Type:* object

---

##### `AutoExpandInput`<sup>Optional</sup> <a name="AutoExpandInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpandInput"></a>

```csharp
public object AutoExpandInput { get; }
```

- *Type:* object

---

##### `BlockAllPortsInput`<sup>Optional</sup> <a name="BlockAllPortsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPortsInput"></a>

```csharp
public object BlockAllPortsInput { get; }
```

- *Type:* object

---

##### `BlockOverrideAllowedInput`<sup>Optional</sup> <a name="BlockOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowedInput"></a>

```csharp
public object BlockOverrideAllowedInput { get; }
```

- *Type:* object

---

##### `CheckBeaconInput`<sup>Optional</sup> <a name="CheckBeaconInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeaconInput"></a>

```csharp
public object CheckBeaconInput { get; }
```

- *Type:* object

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DirectpathGen2AllowedInput`<sup>Optional</sup> <a name="DirectpathGen2AllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2AllowedInput"></a>

```csharp
public object DirectpathGen2AllowedInput { get; }
```

- *Type:* object

---

##### `DistributedVirtualSwitchUuidInput`<sup>Optional</sup> <a name="DistributedVirtualSwitchUuidInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuidInput"></a>

```csharp
public string DistributedVirtualSwitchUuidInput { get; }
```

- *Type:* string

---

##### `EgressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="EgressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidthInput"></a>

```csharp
public double EgressShapingAverageBandwidthInput { get; }
```

- *Type:* double

---

##### `EgressShapingBurstSizeInput`<sup>Optional</sup> <a name="EgressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSizeInput"></a>

```csharp
public double EgressShapingBurstSizeInput { get; }
```

- *Type:* double

---

##### `EgressShapingEnabledInput`<sup>Optional</sup> <a name="EgressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabledInput"></a>

```csharp
public object EgressShapingEnabledInput { get; }
```

- *Type:* object

---

##### `EgressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="EgressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidthInput"></a>

```csharp
public double EgressShapingPeakBandwidthInput { get; }
```

- *Type:* double

---

##### `FailbackInput`<sup>Optional</sup> <a name="FailbackInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failbackInput"></a>

```csharp
public object FailbackInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressShapingAverageBandwidthInput`<sup>Optional</sup> <a name="IngressShapingAverageBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidthInput"></a>

```csharp
public double IngressShapingAverageBandwidthInput { get; }
```

- *Type:* double

---

##### `IngressShapingBurstSizeInput`<sup>Optional</sup> <a name="IngressShapingBurstSizeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSizeInput"></a>

```csharp
public double IngressShapingBurstSizeInput { get; }
```

- *Type:* double

---

##### `IngressShapingEnabledInput`<sup>Optional</sup> <a name="IngressShapingEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabledInput"></a>

```csharp
public object IngressShapingEnabledInput { get; }
```

- *Type:* object

---

##### `IngressShapingPeakBandwidthInput`<sup>Optional</sup> <a name="IngressShapingPeakBandwidthInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidthInput"></a>

```csharp
public double IngressShapingPeakBandwidthInput { get; }
```

- *Type:* double

---

##### `LacpEnabledInput`<sup>Optional</sup> <a name="LacpEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabledInput"></a>

```csharp
public object LacpEnabledInput { get; }
```

- *Type:* object

---

##### `LacpModeInput`<sup>Optional</sup> <a name="LacpModeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpModeInput"></a>

```csharp
public string LacpModeInput { get; }
```

- *Type:* string

---

##### `LivePortMovingAllowedInput`<sup>Optional</sup> <a name="LivePortMovingAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowedInput"></a>

```csharp
public object LivePortMovingAllowedInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetflowEnabledInput`<sup>Optional</sup> <a name="NetflowEnabledInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabledInput"></a>

```csharp
public object NetflowEnabledInput { get; }
```

- *Type:* object

---

##### `NetflowOverrideAllowedInput`<sup>Optional</sup> <a name="NetflowOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowedInput"></a>

```csharp
public object NetflowOverrideAllowedInput { get; }
```

- *Type:* object

---

##### `NetworkResourcePoolKeyInput`<sup>Optional</sup> <a name="NetworkResourcePoolKeyInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKeyInput"></a>

```csharp
public string NetworkResourcePoolKeyInput { get; }
```

- *Type:* string

---

##### `NetworkResourcePoolOverrideAllowedInput`<sup>Optional</sup> <a name="NetworkResourcePoolOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowedInput"></a>

```csharp
public object NetworkResourcePoolOverrideAllowedInput { get; }
```

- *Type:* object

---

##### `NotifySwitchesInput`<sup>Optional</sup> <a name="NotifySwitchesInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitchesInput"></a>

```csharp
public object NotifySwitchesInput { get; }
```

- *Type:* object

---

##### `NumberOfPortsInput`<sup>Optional</sup> <a name="NumberOfPortsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPortsInput"></a>

```csharp
public double NumberOfPortsInput { get; }
```

- *Type:* double

---

##### `PortConfigResetAtDisconnectInput`<sup>Optional</sup> <a name="PortConfigResetAtDisconnectInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnectInput"></a>

```csharp
public object PortConfigResetAtDisconnectInput { get; }
```

- *Type:* object

---

##### `PortNameFormatInput`<sup>Optional</sup> <a name="PortNameFormatInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormatInput"></a>

```csharp
public string PortNameFormatInput { get; }
```

- *Type:* string

---

##### `PortPrivateSecondaryVlanIdInput`<sup>Optional</sup> <a name="PortPrivateSecondaryVlanIdInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanIdInput"></a>

```csharp
public double PortPrivateSecondaryVlanIdInput { get; }
```

- *Type:* double

---

##### `SecurityPolicyOverrideAllowedInput`<sup>Optional</sup> <a name="SecurityPolicyOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowedInput"></a>

```csharp
public object SecurityPolicyOverrideAllowedInput { get; }
```

- *Type:* object

---

##### `ShapingOverrideAllowedInput`<sup>Optional</sup> <a name="ShapingOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowedInput"></a>

```csharp
public object ShapingOverrideAllowedInput { get; }
```

- *Type:* object

---

##### `StandbyUplinksInput`<sup>Optional</sup> <a name="StandbyUplinksInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinksInput"></a>

```csharp
public string[] StandbyUplinksInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TeamingPolicyInput`<sup>Optional</sup> <a name="TeamingPolicyInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicyInput"></a>

```csharp
public string TeamingPolicyInput { get; }
```

- *Type:* string

---

##### `TrafficFilterOverrideAllowedInput`<sup>Optional</sup> <a name="TrafficFilterOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowedInput"></a>

```csharp
public object TrafficFilterOverrideAllowedInput { get; }
```

- *Type:* object

---

##### `TxUplinkInput`<sup>Optional</sup> <a name="TxUplinkInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplinkInput"></a>

```csharp
public object TxUplinkInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UplinkTeamingOverrideAllowedInput`<sup>Optional</sup> <a name="UplinkTeamingOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowedInput"></a>

```csharp
public object UplinkTeamingOverrideAllowedInput { get; }
```

- *Type:* object

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanIdInput"></a>

```csharp
public double VlanIdInput { get; }
```

- *Type:* double

---

##### `VlanOverrideAllowedInput`<sup>Optional</sup> <a name="VlanOverrideAllowedInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowedInput"></a>

```csharp
public object VlanOverrideAllowedInput { get; }
```

- *Type:* object

---

##### `VlanRangeInput`<sup>Optional</sup> <a name="VlanRangeInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanRangeInput"></a>

```csharp
public object VlanRangeInput { get; }
```

- *Type:* object

---

##### `ActiveUplinks`<sup>Required</sup> <a name="ActiveUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.activeUplinks"></a>

```csharp
public string[] ActiveUplinks { get; }
```

- *Type:* string[]

---

##### `AllowForgedTransmits`<sup>Required</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowForgedTransmits"></a>

```csharp
public object AllowForgedTransmits { get; }
```

- *Type:* object

---

##### `AllowMacChanges`<sup>Required</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowMacChanges"></a>

```csharp
public object AllowMacChanges { get; }
```

- *Type:* object

---

##### `AllowPromiscuous`<sup>Required</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.allowPromiscuous"></a>

```csharp
public object AllowPromiscuous { get; }
```

- *Type:* object

---

##### `AutoExpand`<sup>Required</sup> <a name="AutoExpand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.autoExpand"></a>

```csharp
public object AutoExpand { get; }
```

- *Type:* object

---

##### `BlockAllPorts`<sup>Required</sup> <a name="BlockAllPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockAllPorts"></a>

```csharp
public object BlockAllPorts { get; }
```

- *Type:* object

---

##### `BlockOverrideAllowed`<sup>Required</sup> <a name="BlockOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.blockOverrideAllowed"></a>

```csharp
public object BlockOverrideAllowed { get; }
```

- *Type:* object

---

##### `CheckBeacon`<sup>Required</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.checkBeacon"></a>

```csharp
public object CheckBeacon { get; }
```

- *Type:* object

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DirectpathGen2Allowed`<sup>Required</sup> <a name="DirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.directpathGen2Allowed"></a>

```csharp
public object DirectpathGen2Allowed { get; }
```

- *Type:* object

---

##### `DistributedVirtualSwitchUuid`<sup>Required</sup> <a name="DistributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.distributedVirtualSwitchUuid"></a>

```csharp
public string DistributedVirtualSwitchUuid { get; }
```

- *Type:* string

---

##### `EgressShapingAverageBandwidth`<sup>Required</sup> <a name="EgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingAverageBandwidth"></a>

```csharp
public double EgressShapingAverageBandwidth { get; }
```

- *Type:* double

---

##### `EgressShapingBurstSize`<sup>Required</sup> <a name="EgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingBurstSize"></a>

```csharp
public double EgressShapingBurstSize { get; }
```

- *Type:* double

---

##### `EgressShapingEnabled`<sup>Required</sup> <a name="EgressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingEnabled"></a>

```csharp
public object EgressShapingEnabled { get; }
```

- *Type:* object

---

##### `EgressShapingPeakBandwidth`<sup>Required</sup> <a name="EgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.egressShapingPeakBandwidth"></a>

```csharp
public double EgressShapingPeakBandwidth { get; }
```

- *Type:* double

---

##### `Failback`<sup>Required</sup> <a name="Failback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.failback"></a>

```csharp
public object Failback { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngressShapingAverageBandwidth`<sup>Required</sup> <a name="IngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingAverageBandwidth"></a>

```csharp
public double IngressShapingAverageBandwidth { get; }
```

- *Type:* double

---

##### `IngressShapingBurstSize`<sup>Required</sup> <a name="IngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingBurstSize"></a>

```csharp
public double IngressShapingBurstSize { get; }
```

- *Type:* double

---

##### `IngressShapingEnabled`<sup>Required</sup> <a name="IngressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingEnabled"></a>

```csharp
public object IngressShapingEnabled { get; }
```

- *Type:* object

---

##### `IngressShapingPeakBandwidth`<sup>Required</sup> <a name="IngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.ingressShapingPeakBandwidth"></a>

```csharp
public double IngressShapingPeakBandwidth { get; }
```

- *Type:* double

---

##### `LacpEnabled`<sup>Required</sup> <a name="LacpEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpEnabled"></a>

```csharp
public object LacpEnabled { get; }
```

- *Type:* object

---

##### `LacpMode`<sup>Required</sup> <a name="LacpMode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.lacpMode"></a>

```csharp
public string LacpMode { get; }
```

- *Type:* string

---

##### `LivePortMovingAllowed`<sup>Required</sup> <a name="LivePortMovingAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.livePortMovingAllowed"></a>

```csharp
public object LivePortMovingAllowed { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetflowEnabled`<sup>Required</sup> <a name="NetflowEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowEnabled"></a>

```csharp
public object NetflowEnabled { get; }
```

- *Type:* object

---

##### `NetflowOverrideAllowed`<sup>Required</sup> <a name="NetflowOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.netflowOverrideAllowed"></a>

```csharp
public object NetflowOverrideAllowed { get; }
```

- *Type:* object

---

##### `NetworkResourcePoolKey`<sup>Required</sup> <a name="NetworkResourcePoolKey" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolKey"></a>

```csharp
public string NetworkResourcePoolKey { get; }
```

- *Type:* string

---

##### `NetworkResourcePoolOverrideAllowed`<sup>Required</sup> <a name="NetworkResourcePoolOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.networkResourcePoolOverrideAllowed"></a>

```csharp
public object NetworkResourcePoolOverrideAllowed { get; }
```

- *Type:* object

---

##### `NotifySwitches`<sup>Required</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.notifySwitches"></a>

```csharp
public object NotifySwitches { get; }
```

- *Type:* object

---

##### `NumberOfPorts`<sup>Required</sup> <a name="NumberOfPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.numberOfPorts"></a>

```csharp
public double NumberOfPorts { get; }
```

- *Type:* double

---

##### `PortConfigResetAtDisconnect`<sup>Required</sup> <a name="PortConfigResetAtDisconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portConfigResetAtDisconnect"></a>

```csharp
public object PortConfigResetAtDisconnect { get; }
```

- *Type:* object

---

##### `PortNameFormat`<sup>Required</sup> <a name="PortNameFormat" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portNameFormat"></a>

```csharp
public string PortNameFormat { get; }
```

- *Type:* string

---

##### `PortPrivateSecondaryVlanId`<sup>Required</sup> <a name="PortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.portPrivateSecondaryVlanId"></a>

```csharp
public double PortPrivateSecondaryVlanId { get; }
```

- *Type:* double

---

##### `SecurityPolicyOverrideAllowed`<sup>Required</sup> <a name="SecurityPolicyOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.securityPolicyOverrideAllowed"></a>

```csharp
public object SecurityPolicyOverrideAllowed { get; }
```

- *Type:* object

---

##### `ShapingOverrideAllowed`<sup>Required</sup> <a name="ShapingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.shapingOverrideAllowed"></a>

```csharp
public object ShapingOverrideAllowed { get; }
```

- *Type:* object

---

##### `StandbyUplinks`<sup>Required</sup> <a name="StandbyUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.standbyUplinks"></a>

```csharp
public string[] StandbyUplinks { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `TeamingPolicy`<sup>Required</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.teamingPolicy"></a>

```csharp
public string TeamingPolicy { get; }
```

- *Type:* string

---

##### `TrafficFilterOverrideAllowed`<sup>Required</sup> <a name="TrafficFilterOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.trafficFilterOverrideAllowed"></a>

```csharp
public object TrafficFilterOverrideAllowed { get; }
```

- *Type:* object

---

##### `TxUplink`<sup>Required</sup> <a name="TxUplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.txUplink"></a>

```csharp
public object TxUplink { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UplinkTeamingOverrideAllowed`<sup>Required</sup> <a name="UplinkTeamingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.uplinkTeamingOverrideAllowed"></a>

```csharp
public object UplinkTeamingOverrideAllowed { get; }
```

- *Type:* object

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanId"></a>

```csharp
public double VlanId { get; }
```

- *Type:* double

---

##### `VlanOverrideAllowed`<sup>Required</sup> <a name="VlanOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.vlanOverrideAllowed"></a>

```csharp
public object VlanOverrideAllowed { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DistributedPortGroupConfig <a name="DistributedPortGroupConfig" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedPortGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DistributedVirtualSwitchUuid,
    string Name,
    string[] ActiveUplinks = null,
    object AllowForgedTransmits = null,
    object AllowMacChanges = null,
    object AllowPromiscuous = null,
    object AutoExpand = null,
    object BlockAllPorts = null,
    object BlockOverrideAllowed = null,
    object CheckBeacon = null,
    System.Collections.Generic.IDictionary<string, string> CustomAttributes = null,
    string Description = null,
    object DirectpathGen2Allowed = null,
    double EgressShapingAverageBandwidth = null,
    double EgressShapingBurstSize = null,
    object EgressShapingEnabled = null,
    double EgressShapingPeakBandwidth = null,
    object Failback = null,
    string Id = null,
    double IngressShapingAverageBandwidth = null,
    double IngressShapingBurstSize = null,
    object IngressShapingEnabled = null,
    double IngressShapingPeakBandwidth = null,
    object LacpEnabled = null,
    string LacpMode = null,
    object LivePortMovingAllowed = null,
    object NetflowEnabled = null,
    object NetflowOverrideAllowed = null,
    string NetworkResourcePoolKey = null,
    object NetworkResourcePoolOverrideAllowed = null,
    object NotifySwitches = null,
    double NumberOfPorts = null,
    object PortConfigResetAtDisconnect = null,
    string PortNameFormat = null,
    double PortPrivateSecondaryVlanId = null,
    object SecurityPolicyOverrideAllowed = null,
    object ShapingOverrideAllowed = null,
    string[] StandbyUplinks = null,
    string[] Tags = null,
    string TeamingPolicy = null,
    object TrafficFilterOverrideAllowed = null,
    object TxUplink = null,
    string Type = null,
    object UplinkTeamingOverrideAllowed = null,
    double VlanId = null,
    object VlanOverrideAllowed = null,
    object VlanRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.distributedVirtualSwitchUuid">DistributedVirtualSwitchUuid</a></code> | <code>string</code> | The UUID of the DVS to attach this port group to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.name">Name</a></code> | <code>string</code> | The name of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.activeUplinks">ActiveUplinks</a></code> | <code>string[]</code> | List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowForgedTransmits">AllowForgedTransmits</a></code> | <code>object</code> | Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowMacChanges">AllowMacChanges</a></code> | <code>object</code> | Controls whether or not the Media Access Control (MAC) address can be changed. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowPromiscuous">AllowPromiscuous</a></code> | <code>object</code> | Enable promiscuous mode on the network. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.autoExpand">AutoExpand</a></code> | <code>object</code> | Auto-expands the port group beyond the port count configured in number_of_ports when necessary. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockAllPorts">BlockAllPorts</a></code> | <code>object</code> | Indicates whether to block all ports by default. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockOverrideAllowed">BlockOverrideAllowed</a></code> | <code>object</code> | Allow the blocked setting of an individual port to override the setting in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.checkBeacon">CheckBeacon</a></code> | <code>object</code> | Enable beacon probing on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.description">Description</a></code> | <code>string</code> | The description of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.directpathGen2Allowed">DirectpathGen2Allowed</a></code> | <code>object</code> | Allow VMDirectPath Gen2 on the ports this policy applies to. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingAverageBandwidth">EgressShapingAverageBandwidth</a></code> | <code>double</code> | The average egress bandwidth in bits per second if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingBurstSize">EgressShapingBurstSize</a></code> | <code>double</code> | The maximum egress burst size allowed in bytes if egress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingEnabled">EgressShapingEnabled</a></code> | <code>object</code> | True if the traffic shaper is enabled for egress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingPeakBandwidth">EgressShapingPeakBandwidth</a></code> | <code>double</code> | The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.failback">Failback</a></code> | <code>object</code> | If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#id DistributedPortGroup#id}. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingAverageBandwidth">IngressShapingAverageBandwidth</a></code> | <code>double</code> | The average ingress bandwidth in bits per second if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingBurstSize">IngressShapingBurstSize</a></code> | <code>double</code> | The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingEnabled">IngressShapingEnabled</a></code> | <code>object</code> | True if the traffic shaper is enabled for ingress traffic on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingPeakBandwidth">IngressShapingPeakBandwidth</a></code> | <code>double</code> | The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpEnabled">LacpEnabled</a></code> | <code>object</code> | Whether or not to enable LACP on all uplink ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpMode">LacpMode</a></code> | <code>string</code> | The uplink LACP mode to use. Can be one of active or passive. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.livePortMovingAllowed">LivePortMovingAllowed</a></code> | <code>object</code> | Allow a live port to be moved in and out of the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowEnabled">NetflowEnabled</a></code> | <code>object</code> | Indicates whether to enable netflow on all ports. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowOverrideAllowed">NetflowOverrideAllowed</a></code> | <code>object</code> | Allow the enabling or disabling of Netflow on a port, contrary to the policy in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolKey">NetworkResourcePoolKey</a></code> | <code>string</code> | The key of a network resource pool to associate with this portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolOverrideAllowed">NetworkResourcePoolOverrideAllowed</a></code> | <code>object</code> | Allow the network resource pool of an individual port to override the setting in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.notifySwitches">NotifySwitches</a></code> | <code>object</code> | If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.numberOfPorts">NumberOfPorts</a></code> | <code>double</code> | The number of ports in this portgroup. The DVS will expand and shrink by modifying this setting. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portConfigResetAtDisconnect">PortConfigResetAtDisconnect</a></code> | <code>object</code> | Reset the setting of any ports in this portgroup back to the default setting when the port disconnects. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portNameFormat">PortNameFormat</a></code> | <code>string</code> | A template string to use when creating ports in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portPrivateSecondaryVlanId">PortPrivateSecondaryVlanId</a></code> | <code>double</code> | The secondary VLAN ID for this port. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.securityPolicyOverrideAllowed">SecurityPolicyOverrideAllowed</a></code> | <code>object</code> | Allow security policy settings on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.shapingOverrideAllowed">ShapingOverrideAllowed</a></code> | <code>object</code> | Allow the traffic shaping policies of an individual port to override the settings in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.standbyUplinks">StandbyUplinks</a></code> | <code>string[]</code> | List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.teamingPolicy">TeamingPolicy</a></code> | <code>string</code> | The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.trafficFilterOverrideAllowed">TrafficFilterOverrideAllowed</a></code> | <code>object</code> | Allow any filter policies set on the individual port to override those in the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.txUplink">TxUplink</a></code> | <code>object</code> | If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.type">Type</a></code> | <code>string</code> | The type of portgroup. Can be one of earlyBinding (static) or ephemeral. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.uplinkTeamingOverrideAllowed">UplinkTeamingOverrideAllowed</a></code> | <code>object</code> | Allow the uplink teaming policies on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanId">VlanId</a></code> | <code>double</code> | The VLAN ID for single VLAN mode. 0 denotes no VLAN. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanOverrideAllowed">VlanOverrideAllowed</a></code> | <code>object</code> | Allow the VLAN configuration on a port to override those on the portgroup. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanRange">VlanRange</a></code> | <code>object</code> | vlan_range block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DistributedVirtualSwitchUuid`<sup>Required</sup> <a name="DistributedVirtualSwitchUuid" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.distributedVirtualSwitchUuid"></a>

```csharp
public string DistributedVirtualSwitchUuid { get; set; }
```

- *Type:* string

The UUID of the DVS to attach this port group to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#distributed_virtual_switch_uuid DistributedPortGroup#distributed_virtual_switch_uuid}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#name DistributedPortGroup#name}

---

##### `ActiveUplinks`<sup>Optional</sup> <a name="ActiveUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.activeUplinks"></a>

```csharp
public string[] ActiveUplinks { get; set; }
```

- *Type:* string[]

List of active uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#active_uplinks DistributedPortGroup#active_uplinks}

---

##### `AllowForgedTransmits`<sup>Optional</sup> <a name="AllowForgedTransmits" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowForgedTransmits"></a>

```csharp
public object AllowForgedTransmits { get; set; }
```

- *Type:* object

Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC address than that of its own.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#allow_forged_transmits DistributedPortGroup#allow_forged_transmits}

---

##### `AllowMacChanges`<sup>Optional</sup> <a name="AllowMacChanges" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowMacChanges"></a>

```csharp
public object AllowMacChanges { get; set; }
```

- *Type:* object

Controls whether or not the Media Access Control (MAC) address can be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#allow_mac_changes DistributedPortGroup#allow_mac_changes}

---

##### `AllowPromiscuous`<sup>Optional</sup> <a name="AllowPromiscuous" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.allowPromiscuous"></a>

```csharp
public object AllowPromiscuous { get; set; }
```

- *Type:* object

Enable promiscuous mode on the network.

This flag indicates whether or not all traffic is seen on a given port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#allow_promiscuous DistributedPortGroup#allow_promiscuous}

---

##### `AutoExpand`<sup>Optional</sup> <a name="AutoExpand" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.autoExpand"></a>

```csharp
public object AutoExpand { get; set; }
```

- *Type:* object

Auto-expands the port group beyond the port count configured in number_of_ports when necessary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#auto_expand DistributedPortGroup#auto_expand}

---

##### `BlockAllPorts`<sup>Optional</sup> <a name="BlockAllPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockAllPorts"></a>

```csharp
public object BlockAllPorts { get; set; }
```

- *Type:* object

Indicates whether to block all ports by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#block_all_ports DistributedPortGroup#block_all_ports}

---

##### `BlockOverrideAllowed`<sup>Optional</sup> <a name="BlockOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.blockOverrideAllowed"></a>

```csharp
public object BlockOverrideAllowed { get; set; }
```

- *Type:* object

Allow the blocked setting of an individual port to override the setting in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#block_override_allowed DistributedPortGroup#block_override_allowed}

---

##### `CheckBeacon`<sup>Optional</sup> <a name="CheckBeacon" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.checkBeacon"></a>

```csharp
public object CheckBeacon { get; set; }
```

- *Type:* object

Enable beacon probing on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#check_beacon DistributedPortGroup#check_beacon}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#custom_attributes DistributedPortGroup#custom_attributes}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#description DistributedPortGroup#description}

---

##### `DirectpathGen2Allowed`<sup>Optional</sup> <a name="DirectpathGen2Allowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.directpathGen2Allowed"></a>

```csharp
public object DirectpathGen2Allowed { get; set; }
```

- *Type:* object

Allow VMDirectPath Gen2 on the ports this policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#directpath_gen2_allowed DistributedPortGroup#directpath_gen2_allowed}

---

##### `EgressShapingAverageBandwidth`<sup>Optional</sup> <a name="EgressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingAverageBandwidth"></a>

```csharp
public double EgressShapingAverageBandwidth { get; set; }
```

- *Type:* double

The average egress bandwidth in bits per second if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#egress_shaping_average_bandwidth DistributedPortGroup#egress_shaping_average_bandwidth}

---

##### `EgressShapingBurstSize`<sup>Optional</sup> <a name="EgressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingBurstSize"></a>

```csharp
public double EgressShapingBurstSize { get; set; }
```

- *Type:* double

The maximum egress burst size allowed in bytes if egress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#egress_shaping_burst_size DistributedPortGroup#egress_shaping_burst_size}

---

##### `EgressShapingEnabled`<sup>Optional</sup> <a name="EgressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingEnabled"></a>

```csharp
public object EgressShapingEnabled { get; set; }
```

- *Type:* object

True if the traffic shaper is enabled for egress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#egress_shaping_enabled DistributedPortGroup#egress_shaping_enabled}

---

##### `EgressShapingPeakBandwidth`<sup>Optional</sup> <a name="EgressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.egressShapingPeakBandwidth"></a>

```csharp
public double EgressShapingPeakBandwidth { get; set; }
```

- *Type:* double

The peak egress bandwidth during bursts in bits per second if egress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#egress_shaping_peak_bandwidth DistributedPortGroup#egress_shaping_peak_bandwidth}

---

##### `Failback`<sup>Optional</sup> <a name="Failback" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.failback"></a>

```csharp
public object Failback { get; set; }
```

- *Type:* object

If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#failback DistributedPortGroup#failback}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#id DistributedPortGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressShapingAverageBandwidth`<sup>Optional</sup> <a name="IngressShapingAverageBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingAverageBandwidth"></a>

```csharp
public double IngressShapingAverageBandwidth { get; set; }
```

- *Type:* double

The average ingress bandwidth in bits per second if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#ingress_shaping_average_bandwidth DistributedPortGroup#ingress_shaping_average_bandwidth}

---

##### `IngressShapingBurstSize`<sup>Optional</sup> <a name="IngressShapingBurstSize" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingBurstSize"></a>

```csharp
public double IngressShapingBurstSize { get; set; }
```

- *Type:* double

The maximum ingress burst size allowed in bytes if ingress shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#ingress_shaping_burst_size DistributedPortGroup#ingress_shaping_burst_size}

---

##### `IngressShapingEnabled`<sup>Optional</sup> <a name="IngressShapingEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingEnabled"></a>

```csharp
public object IngressShapingEnabled { get; set; }
```

- *Type:* object

True if the traffic shaper is enabled for ingress traffic on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#ingress_shaping_enabled DistributedPortGroup#ingress_shaping_enabled}

---

##### `IngressShapingPeakBandwidth`<sup>Optional</sup> <a name="IngressShapingPeakBandwidth" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.ingressShapingPeakBandwidth"></a>

```csharp
public double IngressShapingPeakBandwidth { get; set; }
```

- *Type:* double

The peak ingress bandwidth during bursts in bits per second if ingress traffic shaping is enabled on the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#ingress_shaping_peak_bandwidth DistributedPortGroup#ingress_shaping_peak_bandwidth}

---

##### `LacpEnabled`<sup>Optional</sup> <a name="LacpEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpEnabled"></a>

```csharp
public object LacpEnabled { get; set; }
```

- *Type:* object

Whether or not to enable LACP on all uplink ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#lacp_enabled DistributedPortGroup#lacp_enabled}

---

##### `LacpMode`<sup>Optional</sup> <a name="LacpMode" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.lacpMode"></a>

```csharp
public string LacpMode { get; set; }
```

- *Type:* string

The uplink LACP mode to use. Can be one of active or passive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#lacp_mode DistributedPortGroup#lacp_mode}

---

##### `LivePortMovingAllowed`<sup>Optional</sup> <a name="LivePortMovingAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.livePortMovingAllowed"></a>

```csharp
public object LivePortMovingAllowed { get; set; }
```

- *Type:* object

Allow a live port to be moved in and out of the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#live_port_moving_allowed DistributedPortGroup#live_port_moving_allowed}

---

##### `NetflowEnabled`<sup>Optional</sup> <a name="NetflowEnabled" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowEnabled"></a>

```csharp
public object NetflowEnabled { get; set; }
```

- *Type:* object

Indicates whether to enable netflow on all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#netflow_enabled DistributedPortGroup#netflow_enabled}

---

##### `NetflowOverrideAllowed`<sup>Optional</sup> <a name="NetflowOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.netflowOverrideAllowed"></a>

```csharp
public object NetflowOverrideAllowed { get; set; }
```

- *Type:* object

Allow the enabling or disabling of Netflow on a port, contrary to the policy in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#netflow_override_allowed DistributedPortGroup#netflow_override_allowed}

---

##### `NetworkResourcePoolKey`<sup>Optional</sup> <a name="NetworkResourcePoolKey" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolKey"></a>

```csharp
public string NetworkResourcePoolKey { get; set; }
```

- *Type:* string

The key of a network resource pool to associate with this portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#network_resource_pool_key DistributedPortGroup#network_resource_pool_key}

---

##### `NetworkResourcePoolOverrideAllowed`<sup>Optional</sup> <a name="NetworkResourcePoolOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.networkResourcePoolOverrideAllowed"></a>

```csharp
public object NetworkResourcePoolOverrideAllowed { get; set; }
```

- *Type:* object

Allow the network resource pool of an individual port to override the setting in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#network_resource_pool_override_allowed DistributedPortGroup#network_resource_pool_override_allowed}

---

##### `NotifySwitches`<sup>Optional</sup> <a name="NotifySwitches" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.notifySwitches"></a>

```csharp
public object NotifySwitches { get; set; }
```

- *Type:* object

If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#notify_switches DistributedPortGroup#notify_switches}

---

##### `NumberOfPorts`<sup>Optional</sup> <a name="NumberOfPorts" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.numberOfPorts"></a>

```csharp
public double NumberOfPorts { get; set; }
```

- *Type:* double

The number of ports in this portgroup. The DVS will expand and shrink by modifying this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#number_of_ports DistributedPortGroup#number_of_ports}

---

##### `PortConfigResetAtDisconnect`<sup>Optional</sup> <a name="PortConfigResetAtDisconnect" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portConfigResetAtDisconnect"></a>

```csharp
public object PortConfigResetAtDisconnect { get; set; }
```

- *Type:* object

Reset the setting of any ports in this portgroup back to the default setting when the port disconnects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#port_config_reset_at_disconnect DistributedPortGroup#port_config_reset_at_disconnect}

---

##### `PortNameFormat`<sup>Optional</sup> <a name="PortNameFormat" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portNameFormat"></a>

```csharp
public string PortNameFormat { get; set; }
```

- *Type:* string

A template string to use when creating ports in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#port_name_format DistributedPortGroup#port_name_format}

---

##### `PortPrivateSecondaryVlanId`<sup>Optional</sup> <a name="PortPrivateSecondaryVlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.portPrivateSecondaryVlanId"></a>

```csharp
public double PortPrivateSecondaryVlanId { get; set; }
```

- *Type:* double

The secondary VLAN ID for this port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#port_private_secondary_vlan_id DistributedPortGroup#port_private_secondary_vlan_id}

---

##### `SecurityPolicyOverrideAllowed`<sup>Optional</sup> <a name="SecurityPolicyOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.securityPolicyOverrideAllowed"></a>

```csharp
public object SecurityPolicyOverrideAllowed { get; set; }
```

- *Type:* object

Allow security policy settings on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#security_policy_override_allowed DistributedPortGroup#security_policy_override_allowed}

---

##### `ShapingOverrideAllowed`<sup>Optional</sup> <a name="ShapingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.shapingOverrideAllowed"></a>

```csharp
public object ShapingOverrideAllowed { get; set; }
```

- *Type:* object

Allow the traffic shaping policies of an individual port to override the settings in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#shaping_override_allowed DistributedPortGroup#shaping_override_allowed}

---

##### `StandbyUplinks`<sup>Optional</sup> <a name="StandbyUplinks" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.standbyUplinks"></a>

```csharp
public string[] StandbyUplinks { get; set; }
```

- *Type:* string[]

List of standby uplinks used for load balancing, matching the names of the uplinks assigned in the DVS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#standby_uplinks DistributedPortGroup#standby_uplinks}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#tags DistributedPortGroup#tags}

---

##### `TeamingPolicy`<sup>Optional</sup> <a name="TeamingPolicy" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.teamingPolicy"></a>

```csharp
public string TeamingPolicy { get; set; }
```

- *Type:* string

The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, or loadbalance_loadbased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#teaming_policy DistributedPortGroup#teaming_policy}

---

##### `TrafficFilterOverrideAllowed`<sup>Optional</sup> <a name="TrafficFilterOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.trafficFilterOverrideAllowed"></a>

```csharp
public object TrafficFilterOverrideAllowed { get; set; }
```

- *Type:* object

Allow any filter policies set on the individual port to override those in the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#traffic_filter_override_allowed DistributedPortGroup#traffic_filter_override_allowed}

---

##### `TxUplink`<sup>Optional</sup> <a name="TxUplink" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.txUplink"></a>

```csharp
public object TxUplink { get; set; }
```

- *Type:* object

If true, a copy of packets sent to the switch will always be forwarded to an uplink in addition to the regular packet forwarded done by the switch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#tx_uplink DistributedPortGroup#tx_uplink}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of portgroup. Can be one of earlyBinding (static) or ephemeral.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#type DistributedPortGroup#type}

---

##### `UplinkTeamingOverrideAllowed`<sup>Optional</sup> <a name="UplinkTeamingOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.uplinkTeamingOverrideAllowed"></a>

```csharp
public object UplinkTeamingOverrideAllowed { get; set; }
```

- *Type:* object

Allow the uplink teaming policies on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#uplink_teaming_override_allowed DistributedPortGroup#uplink_teaming_override_allowed}

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanId"></a>

```csharp
public double VlanId { get; set; }
```

- *Type:* double

The VLAN ID for single VLAN mode. 0 denotes no VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#vlan_id DistributedPortGroup#vlan_id}

---

##### `VlanOverrideAllowed`<sup>Optional</sup> <a name="VlanOverrideAllowed" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanOverrideAllowed"></a>

```csharp
public object VlanOverrideAllowed { get; set; }
```

- *Type:* object

Allow the VLAN configuration on a port to override those on the portgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#vlan_override_allowed DistributedPortGroup#vlan_override_allowed}

---

##### `VlanRange`<sup>Optional</sup> <a name="VlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupConfig.property.vlanRange"></a>

```csharp
public object VlanRange { get; set; }
```

- *Type:* object

vlan_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#vlan_range DistributedPortGroup#vlan_range}

---

### DistributedPortGroupVlanRange <a name="DistributedPortGroupVlanRange" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedPortGroupVlanRange {
    double MaxVlan,
    double MinVlan
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.maxVlan">MaxVlan</a></code> | <code>double</code> | The minimum VLAN to use in the range. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.minVlan">MinVlan</a></code> | <code>double</code> | The minimum VLAN to use in the range. |

---

##### `MaxVlan`<sup>Required</sup> <a name="MaxVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.maxVlan"></a>

```csharp
public double MaxVlan { get; set; }
```

- *Type:* double

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#max_vlan DistributedPortGroup#max_vlan}

---

##### `MinVlan`<sup>Required</sup> <a name="MinVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRange.property.minVlan"></a>

```csharp
public double MinVlan { get; set; }
```

- *Type:* double

The minimum VLAN to use in the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.3/docs/resources/distributed_port_group#min_vlan DistributedPortGroup#min_vlan}

---

## Classes <a name="Classes" id="Classes"></a>

### DistributedPortGroupVlanRangeList <a name="DistributedPortGroupVlanRangeList" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedPortGroupVlanRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get"></a>

```csharp
private DistributedPortGroupVlanRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DistributedPortGroupVlanRangeOutputReference <a name="DistributedPortGroupVlanRangeOutputReference" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DistributedPortGroupVlanRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlanInput">MaxVlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlanInput">MinVlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlan">MaxVlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlan">MinVlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxVlanInput`<sup>Optional</sup> <a name="MaxVlanInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlanInput"></a>

```csharp
public double MaxVlanInput { get; }
```

- *Type:* double

---

##### `MinVlanInput`<sup>Optional</sup> <a name="MinVlanInput" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlanInput"></a>

```csharp
public double MinVlanInput { get; }
```

- *Type:* double

---

##### `MaxVlan`<sup>Required</sup> <a name="MaxVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.maxVlan"></a>

```csharp
public double MaxVlan { get; }
```

- *Type:* double

---

##### `MinVlan`<sup>Required</sup> <a name="MinVlan" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.minVlan"></a>

```csharp
public double MinVlan { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.distributedPortGroup.DistributedPortGroupVlanRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



