# `datastoreCluster` Submodule <a name="`datastoreCluster` Submodule" id="@cdktf/provider-vsphere.datastoreCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastoreCluster <a name="DatastoreCluster" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster"></a>

Represents a {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster vsphere_datastore_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DatastoreCluster(Construct Scope, string Id, DatastoreClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig">DatastoreClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig">DatastoreClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAdvancedOptions">ResetSdrsAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAutomationLevel">ResetSdrsAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsDefaultIntraVmAffinity">ResetSdrsDefaultIntraVmAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsEnabled">ResetSdrsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThreshold">ResetSdrsFreeSpaceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThresholdMode">ResetSdrsFreeSpaceThresholdMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceUtilizationDifference">ResetSdrsFreeSpaceUtilizationDifference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoBalanceAutomationLevel">ResetSdrsIoBalanceAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLatencyThreshold">ResetSdrsIoLatencyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadBalanceEnabled">ResetSdrsIoLoadBalanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadImbalanceThreshold">ResetSdrsIoLoadImbalanceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableIopsThreshold">ResetSdrsIoReservableIopsThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservablePercentThreshold">ResetSdrsIoReservablePercentThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableThresholdMode">ResetSdrsIoReservableThresholdMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsLoadBalanceInterval">ResetSdrsLoadBalanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsPolicyEnforcementAutomationLevel">ResetSdrsPolicyEnforcementAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsRuleEnforcementAutomationLevel">ResetSdrsRuleEnforcementAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceBalanceAutomationLevel">ResetSdrsSpaceBalanceAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceUtilizationThreshold">ResetSdrsSpaceUtilizationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsVmEvacuationAutomationLevel">ResetSdrsVmEvacuationAutomationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSdrsAdvancedOptions` <a name="ResetSdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAdvancedOptions"></a>

```csharp
private void ResetSdrsAdvancedOptions()
```

##### `ResetSdrsAutomationLevel` <a name="ResetSdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsAutomationLevel"></a>

```csharp
private void ResetSdrsAutomationLevel()
```

##### `ResetSdrsDefaultIntraVmAffinity` <a name="ResetSdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsDefaultIntraVmAffinity"></a>

```csharp
private void ResetSdrsDefaultIntraVmAffinity()
```

##### `ResetSdrsEnabled` <a name="ResetSdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsEnabled"></a>

```csharp
private void ResetSdrsEnabled()
```

##### `ResetSdrsFreeSpaceThreshold` <a name="ResetSdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThreshold"></a>

```csharp
private void ResetSdrsFreeSpaceThreshold()
```

##### `ResetSdrsFreeSpaceThresholdMode` <a name="ResetSdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceThresholdMode"></a>

```csharp
private void ResetSdrsFreeSpaceThresholdMode()
```

##### `ResetSdrsFreeSpaceUtilizationDifference` <a name="ResetSdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsFreeSpaceUtilizationDifference"></a>

```csharp
private void ResetSdrsFreeSpaceUtilizationDifference()
```

##### `ResetSdrsIoBalanceAutomationLevel` <a name="ResetSdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoBalanceAutomationLevel"></a>

```csharp
private void ResetSdrsIoBalanceAutomationLevel()
```

##### `ResetSdrsIoLatencyThreshold` <a name="ResetSdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLatencyThreshold"></a>

```csharp
private void ResetSdrsIoLatencyThreshold()
```

##### `ResetSdrsIoLoadBalanceEnabled` <a name="ResetSdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadBalanceEnabled"></a>

```csharp
private void ResetSdrsIoLoadBalanceEnabled()
```

##### `ResetSdrsIoLoadImbalanceThreshold` <a name="ResetSdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoLoadImbalanceThreshold"></a>

```csharp
private void ResetSdrsIoLoadImbalanceThreshold()
```

##### `ResetSdrsIoReservableIopsThreshold` <a name="ResetSdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableIopsThreshold"></a>

```csharp
private void ResetSdrsIoReservableIopsThreshold()
```

##### `ResetSdrsIoReservablePercentThreshold` <a name="ResetSdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservablePercentThreshold"></a>

```csharp
private void ResetSdrsIoReservablePercentThreshold()
```

##### `ResetSdrsIoReservableThresholdMode` <a name="ResetSdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsIoReservableThresholdMode"></a>

```csharp
private void ResetSdrsIoReservableThresholdMode()
```

##### `ResetSdrsLoadBalanceInterval` <a name="ResetSdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsLoadBalanceInterval"></a>

```csharp
private void ResetSdrsLoadBalanceInterval()
```

##### `ResetSdrsPolicyEnforcementAutomationLevel` <a name="ResetSdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsPolicyEnforcementAutomationLevel"></a>

```csharp
private void ResetSdrsPolicyEnforcementAutomationLevel()
```

##### `ResetSdrsRuleEnforcementAutomationLevel` <a name="ResetSdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsRuleEnforcementAutomationLevel"></a>

```csharp
private void ResetSdrsRuleEnforcementAutomationLevel()
```

##### `ResetSdrsSpaceBalanceAutomationLevel` <a name="ResetSdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceBalanceAutomationLevel"></a>

```csharp
private void ResetSdrsSpaceBalanceAutomationLevel()
```

##### `ResetSdrsSpaceUtilizationThreshold` <a name="ResetSdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsSpaceUtilizationThreshold"></a>

```csharp
private void ResetSdrsSpaceUtilizationThreshold()
```

##### `ResetSdrsVmEvacuationAutomationLevel` <a name="ResetSdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetSdrsVmEvacuationAutomationLevel"></a>

```csharp
private void ResetSdrsVmEvacuationAutomationLevel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatastoreCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DatastoreCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DatastoreCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DatastoreCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DatastoreCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatastoreCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatastoreCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatastoreCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatastoreCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributesInput">CustomAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptionsInput">SdrsAdvancedOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevelInput">SdrsAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinityInput">SdrsDefaultIntraVmAffinityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabledInput">SdrsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdInput">SdrsFreeSpaceThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdModeInput">SdrsFreeSpaceThresholdModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifferenceInput">SdrsFreeSpaceUtilizationDifferenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevelInput">SdrsIoBalanceAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThresholdInput">SdrsIoLatencyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabledInput">SdrsIoLoadBalanceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThresholdInput">SdrsIoLoadImbalanceThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThresholdInput">SdrsIoReservableIopsThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThresholdInput">SdrsIoReservablePercentThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdModeInput">SdrsIoReservableThresholdModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceIntervalInput">SdrsLoadBalanceIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevelInput">SdrsPolicyEnforcementAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevelInput">SdrsRuleEnforcementAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevelInput">SdrsSpaceBalanceAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThresholdInput">SdrsSpaceUtilizationThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevelInput">SdrsVmEvacuationAutomationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptions">SdrsAdvancedOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevel">SdrsAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinity">SdrsDefaultIntraVmAffinity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabled">SdrsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThreshold">SdrsFreeSpaceThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdMode">SdrsFreeSpaceThresholdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifference">SdrsFreeSpaceUtilizationDifference</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevel">SdrsIoBalanceAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThreshold">SdrsIoLatencyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabled">SdrsIoLoadBalanceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThreshold">SdrsIoLoadImbalanceThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThreshold">SdrsIoReservableIopsThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThreshold">SdrsIoReservablePercentThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdMode">SdrsIoReservableThresholdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceInterval">SdrsLoadBalanceInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevel">SdrsPolicyEnforcementAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevel">SdrsRuleEnforcementAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevel">SdrsSpaceBalanceAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThreshold">SdrsSpaceUtilizationThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevel">SdrsVmEvacuationAutomationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SdrsAdvancedOptionsInput`<sup>Optional</sup> <a name="SdrsAdvancedOptionsInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SdrsAdvancedOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SdrsAutomationLevelInput`<sup>Optional</sup> <a name="SdrsAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevelInput"></a>

```csharp
public string SdrsAutomationLevelInput { get; }
```

- *Type:* string

---

##### `SdrsDefaultIntraVmAffinityInput`<sup>Optional</sup> <a name="SdrsDefaultIntraVmAffinityInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinityInput"></a>

```csharp
public object SdrsDefaultIntraVmAffinityInput { get; }
```

- *Type:* object

---

##### `SdrsEnabledInput`<sup>Optional</sup> <a name="SdrsEnabledInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabledInput"></a>

```csharp
public object SdrsEnabledInput { get; }
```

- *Type:* object

---

##### `SdrsFreeSpaceThresholdInput`<sup>Optional</sup> <a name="SdrsFreeSpaceThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdInput"></a>

```csharp
public double SdrsFreeSpaceThresholdInput { get; }
```

- *Type:* double

---

##### `SdrsFreeSpaceThresholdModeInput`<sup>Optional</sup> <a name="SdrsFreeSpaceThresholdModeInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdModeInput"></a>

```csharp
public string SdrsFreeSpaceThresholdModeInput { get; }
```

- *Type:* string

---

##### `SdrsFreeSpaceUtilizationDifferenceInput`<sup>Optional</sup> <a name="SdrsFreeSpaceUtilizationDifferenceInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifferenceInput"></a>

```csharp
public double SdrsFreeSpaceUtilizationDifferenceInput { get; }
```

- *Type:* double

---

##### `SdrsIoBalanceAutomationLevelInput`<sup>Optional</sup> <a name="SdrsIoBalanceAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevelInput"></a>

```csharp
public string SdrsIoBalanceAutomationLevelInput { get; }
```

- *Type:* string

---

##### `SdrsIoLatencyThresholdInput`<sup>Optional</sup> <a name="SdrsIoLatencyThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThresholdInput"></a>

```csharp
public double SdrsIoLatencyThresholdInput { get; }
```

- *Type:* double

---

##### `SdrsIoLoadBalanceEnabledInput`<sup>Optional</sup> <a name="SdrsIoLoadBalanceEnabledInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabledInput"></a>

```csharp
public object SdrsIoLoadBalanceEnabledInput { get; }
```

- *Type:* object

---

##### `SdrsIoLoadImbalanceThresholdInput`<sup>Optional</sup> <a name="SdrsIoLoadImbalanceThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThresholdInput"></a>

```csharp
public double SdrsIoLoadImbalanceThresholdInput { get; }
```

- *Type:* double

---

##### `SdrsIoReservableIopsThresholdInput`<sup>Optional</sup> <a name="SdrsIoReservableIopsThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThresholdInput"></a>

```csharp
public double SdrsIoReservableIopsThresholdInput { get; }
```

- *Type:* double

---

##### `SdrsIoReservablePercentThresholdInput`<sup>Optional</sup> <a name="SdrsIoReservablePercentThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThresholdInput"></a>

```csharp
public double SdrsIoReservablePercentThresholdInput { get; }
```

- *Type:* double

---

##### `SdrsIoReservableThresholdModeInput`<sup>Optional</sup> <a name="SdrsIoReservableThresholdModeInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdModeInput"></a>

```csharp
public string SdrsIoReservableThresholdModeInput { get; }
```

- *Type:* string

---

##### `SdrsLoadBalanceIntervalInput`<sup>Optional</sup> <a name="SdrsLoadBalanceIntervalInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceIntervalInput"></a>

```csharp
public double SdrsLoadBalanceIntervalInput { get; }
```

- *Type:* double

---

##### `SdrsPolicyEnforcementAutomationLevelInput`<sup>Optional</sup> <a name="SdrsPolicyEnforcementAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevelInput"></a>

```csharp
public string SdrsPolicyEnforcementAutomationLevelInput { get; }
```

- *Type:* string

---

##### `SdrsRuleEnforcementAutomationLevelInput`<sup>Optional</sup> <a name="SdrsRuleEnforcementAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevelInput"></a>

```csharp
public string SdrsRuleEnforcementAutomationLevelInput { get; }
```

- *Type:* string

---

##### `SdrsSpaceBalanceAutomationLevelInput`<sup>Optional</sup> <a name="SdrsSpaceBalanceAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevelInput"></a>

```csharp
public string SdrsSpaceBalanceAutomationLevelInput { get; }
```

- *Type:* string

---

##### `SdrsSpaceUtilizationThresholdInput`<sup>Optional</sup> <a name="SdrsSpaceUtilizationThresholdInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThresholdInput"></a>

```csharp
public double SdrsSpaceUtilizationThresholdInput { get; }
```

- *Type:* double

---

##### `SdrsVmEvacuationAutomationLevelInput`<sup>Optional</sup> <a name="SdrsVmEvacuationAutomationLevelInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevelInput"></a>

```csharp
public string SdrsVmEvacuationAutomationLevelInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SdrsAdvancedOptions`<sup>Required</sup> <a name="SdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAdvancedOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SdrsAdvancedOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SdrsAutomationLevel`<sup>Required</sup> <a name="SdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsAutomationLevel"></a>

```csharp
public string SdrsAutomationLevel { get; }
```

- *Type:* string

---

##### `SdrsDefaultIntraVmAffinity`<sup>Required</sup> <a name="SdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsDefaultIntraVmAffinity"></a>

```csharp
public object SdrsDefaultIntraVmAffinity { get; }
```

- *Type:* object

---

##### `SdrsEnabled`<sup>Required</sup> <a name="SdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsEnabled"></a>

```csharp
public object SdrsEnabled { get; }
```

- *Type:* object

---

##### `SdrsFreeSpaceThreshold`<sup>Required</sup> <a name="SdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThreshold"></a>

```csharp
public double SdrsFreeSpaceThreshold { get; }
```

- *Type:* double

---

##### `SdrsFreeSpaceThresholdMode`<sup>Required</sup> <a name="SdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceThresholdMode"></a>

```csharp
public string SdrsFreeSpaceThresholdMode { get; }
```

- *Type:* string

---

##### `SdrsFreeSpaceUtilizationDifference`<sup>Required</sup> <a name="SdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsFreeSpaceUtilizationDifference"></a>

```csharp
public double SdrsFreeSpaceUtilizationDifference { get; }
```

- *Type:* double

---

##### `SdrsIoBalanceAutomationLevel`<sup>Required</sup> <a name="SdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoBalanceAutomationLevel"></a>

```csharp
public string SdrsIoBalanceAutomationLevel { get; }
```

- *Type:* string

---

##### `SdrsIoLatencyThreshold`<sup>Required</sup> <a name="SdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLatencyThreshold"></a>

```csharp
public double SdrsIoLatencyThreshold { get; }
```

- *Type:* double

---

##### `SdrsIoLoadBalanceEnabled`<sup>Required</sup> <a name="SdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadBalanceEnabled"></a>

```csharp
public object SdrsIoLoadBalanceEnabled { get; }
```

- *Type:* object

---

##### `SdrsIoLoadImbalanceThreshold`<sup>Required</sup> <a name="SdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoLoadImbalanceThreshold"></a>

```csharp
public double SdrsIoLoadImbalanceThreshold { get; }
```

- *Type:* double

---

##### `SdrsIoReservableIopsThreshold`<sup>Required</sup> <a name="SdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableIopsThreshold"></a>

```csharp
public double SdrsIoReservableIopsThreshold { get; }
```

- *Type:* double

---

##### `SdrsIoReservablePercentThreshold`<sup>Required</sup> <a name="SdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservablePercentThreshold"></a>

```csharp
public double SdrsIoReservablePercentThreshold { get; }
```

- *Type:* double

---

##### `SdrsIoReservableThresholdMode`<sup>Required</sup> <a name="SdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsIoReservableThresholdMode"></a>

```csharp
public string SdrsIoReservableThresholdMode { get; }
```

- *Type:* string

---

##### `SdrsLoadBalanceInterval`<sup>Required</sup> <a name="SdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsLoadBalanceInterval"></a>

```csharp
public double SdrsLoadBalanceInterval { get; }
```

- *Type:* double

---

##### `SdrsPolicyEnforcementAutomationLevel`<sup>Required</sup> <a name="SdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsPolicyEnforcementAutomationLevel"></a>

```csharp
public string SdrsPolicyEnforcementAutomationLevel { get; }
```

- *Type:* string

---

##### `SdrsRuleEnforcementAutomationLevel`<sup>Required</sup> <a name="SdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsRuleEnforcementAutomationLevel"></a>

```csharp
public string SdrsRuleEnforcementAutomationLevel { get; }
```

- *Type:* string

---

##### `SdrsSpaceBalanceAutomationLevel`<sup>Required</sup> <a name="SdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceBalanceAutomationLevel"></a>

```csharp
public string SdrsSpaceBalanceAutomationLevel { get; }
```

- *Type:* string

---

##### `SdrsSpaceUtilizationThreshold`<sup>Required</sup> <a name="SdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsSpaceUtilizationThreshold"></a>

```csharp
public double SdrsSpaceUtilizationThreshold { get; }
```

- *Type:* double

---

##### `SdrsVmEvacuationAutomationLevel`<sup>Required</sup> <a name="SdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.sdrsVmEvacuationAutomationLevel"></a>

```csharp
public string SdrsVmEvacuationAutomationLevel { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatastoreClusterConfig <a name="DatastoreClusterConfig" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DatastoreClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatacenterId,
    string Name,
    System.Collections.Generic.IDictionary<string, string> CustomAttributes = null,
    string Folder = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> SdrsAdvancedOptions = null,
    string SdrsAutomationLevel = null,
    object SdrsDefaultIntraVmAffinity = null,
    object SdrsEnabled = null,
    double SdrsFreeSpaceThreshold = null,
    string SdrsFreeSpaceThresholdMode = null,
    double SdrsFreeSpaceUtilizationDifference = null,
    string SdrsIoBalanceAutomationLevel = null,
    double SdrsIoLatencyThreshold = null,
    object SdrsIoLoadBalanceEnabled = null,
    double SdrsIoLoadImbalanceThreshold = null,
    double SdrsIoReservableIopsThreshold = null,
    double SdrsIoReservablePercentThreshold = null,
    string SdrsIoReservableThresholdMode = null,
    double SdrsLoadBalanceInterval = null,
    string SdrsPolicyEnforcementAutomationLevel = null,
    string SdrsRuleEnforcementAutomationLevel = null,
    string SdrsSpaceBalanceAutomationLevel = null,
    double SdrsSpaceUtilizationThreshold = null,
    string SdrsVmEvacuationAutomationLevel = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.datacenterId">DatacenterId</a></code> | <code>string</code> | The managed object ID of the datacenter to put the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.name">Name</a></code> | <code>string</code> | Name for the new storage pod. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.folder">Folder</a></code> | <code>string</code> | The name of the folder to locate the datastore cluster in. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#id DatastoreCluster#id}. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAdvancedOptions">SdrsAdvancedOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Advanced configuration options for storage DRS. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAutomationLevel">SdrsAutomationLevel</a></code> | <code>string</code> | The default automation level for all virtual machines in this storage cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsDefaultIntraVmAffinity">SdrsDefaultIntraVmAffinity</a></code> | <code>object</code> | When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsEnabled">SdrsEnabled</a></code> | <code>object</code> | Enable storage DRS for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThreshold">SdrsFreeSpaceThreshold</a></code> | <code>double</code> | The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThresholdMode">SdrsFreeSpaceThresholdMode</a></code> | <code>string</code> | The free space threshold to use. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceUtilizationDifference">SdrsFreeSpaceUtilizationDifference</a></code> | <code>double</code> | The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoBalanceAutomationLevel">SdrsIoBalanceAutomationLevel</a></code> | <code>string</code> | Overrides the default automation settings when correcting I/O load imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLatencyThreshold">SdrsIoLatencyThreshold</a></code> | <code>double</code> | The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadBalanceEnabled">SdrsIoLoadBalanceEnabled</a></code> | <code>object</code> | Enable I/O load balancing for this datastore cluster. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadImbalanceThreshold">SdrsIoLoadImbalanceThreshold</a></code> | <code>double</code> | The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableIopsThreshold">SdrsIoReservableIopsThreshold</a></code> | <code>double</code> | The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservablePercentThreshold">SdrsIoReservablePercentThreshold</a></code> | <code>double</code> | The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableThresholdMode">SdrsIoReservableThresholdMode</a></code> | <code>string</code> | The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsLoadBalanceInterval">SdrsLoadBalanceInterval</a></code> | <code>double</code> | The storage DRS poll interval, in minutes. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsPolicyEnforcementAutomationLevel">SdrsPolicyEnforcementAutomationLevel</a></code> | <code>string</code> | Overrides the default automation settings when correcting storage and VM policy violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsRuleEnforcementAutomationLevel">SdrsRuleEnforcementAutomationLevel</a></code> | <code>string</code> | Overrides the default automation settings when correcting affinity rule violations. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceBalanceAutomationLevel">SdrsSpaceBalanceAutomationLevel</a></code> | <code>string</code> | Overrides the default automation settings when correcting disk space imbalances. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceUtilizationThreshold">SdrsSpaceUtilizationThreshold</a></code> | <code>double</code> | The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsVmEvacuationAutomationLevel">SdrsVmEvacuationAutomationLevel</a></code> | <code>string</code> | Overrides the default automation settings when generating recommendations for datastore evacuation. |
| <code><a href="#@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

The managed object ID of the datacenter to put the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#datacenter_id DatastoreCluster#datacenter_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name for the new storage pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#name DatastoreCluster#name}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#custom_attributes DatastoreCluster#custom_attributes}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The name of the folder to locate the datastore cluster in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#folder DatastoreCluster#folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#id DatastoreCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SdrsAdvancedOptions`<sup>Optional</sup> <a name="SdrsAdvancedOptions" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAdvancedOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SdrsAdvancedOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Advanced configuration options for storage DRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_advanced_options DatastoreCluster#sdrs_advanced_options}

---

##### `SdrsAutomationLevel`<sup>Optional</sup> <a name="SdrsAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsAutomationLevel"></a>

```csharp
public string SdrsAutomationLevel { get; set; }
```

- *Type:* string

The default automation level for all virtual machines in this storage cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_automation_level DatastoreCluster#sdrs_automation_level}

---

##### `SdrsDefaultIntraVmAffinity`<sup>Optional</sup> <a name="SdrsDefaultIntraVmAffinity" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsDefaultIntraVmAffinity"></a>

```csharp
public object SdrsDefaultIntraVmAffinity { get; set; }
```

- *Type:* object

When true, storage DRS keeps VMDKs for individual VMs on the same datastore by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_default_intra_vm_affinity DatastoreCluster#sdrs_default_intra_vm_affinity}

---

##### `SdrsEnabled`<sup>Optional</sup> <a name="SdrsEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsEnabled"></a>

```csharp
public object SdrsEnabled { get; set; }
```

- *Type:* object

Enable storage DRS for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_enabled DatastoreCluster#sdrs_enabled}

---

##### `SdrsFreeSpaceThreshold`<sup>Optional</sup> <a name="SdrsFreeSpaceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThreshold"></a>

```csharp
public double SdrsFreeSpaceThreshold { get; set; }
```

- *Type:* double

The threshold, in GB, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_free_space_threshold DatastoreCluster#sdrs_free_space_threshold}

---

##### `SdrsFreeSpaceThresholdMode`<sup>Optional</sup> <a name="SdrsFreeSpaceThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceThresholdMode"></a>

```csharp
public string SdrsFreeSpaceThresholdMode { get; set; }
```

- *Type:* string

The free space threshold to use.

When set to utilization, drs_space_utilization_threshold is used, and when set to freeSpace, drs_free_space_threshold is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_free_space_threshold_mode DatastoreCluster#sdrs_free_space_threshold_mode}

---

##### `SdrsFreeSpaceUtilizationDifference`<sup>Optional</sup> <a name="SdrsFreeSpaceUtilizationDifference" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsFreeSpaceUtilizationDifference"></a>

```csharp
public double SdrsFreeSpaceUtilizationDifference { get; set; }
```

- *Type:* double

The threshold, in percent, of difference between space utilization in datastores before storage DRS makes decisions to balance the space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_free_space_utilization_difference DatastoreCluster#sdrs_free_space_utilization_difference}

---

##### `SdrsIoBalanceAutomationLevel`<sup>Optional</sup> <a name="SdrsIoBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoBalanceAutomationLevel"></a>

```csharp
public string SdrsIoBalanceAutomationLevel { get; set; }
```

- *Type:* string

Overrides the default automation settings when correcting I/O load imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_io_balance_automation_level DatastoreCluster#sdrs_io_balance_automation_level}

---

##### `SdrsIoLatencyThreshold`<sup>Optional</sup> <a name="SdrsIoLatencyThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLatencyThreshold"></a>

```csharp
public double SdrsIoLatencyThreshold { get; set; }
```

- *Type:* double

The I/O latency threshold, in milliseconds, that storage DRS uses to make recommendations to move disks from this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_io_latency_threshold DatastoreCluster#sdrs_io_latency_threshold}

---

##### `SdrsIoLoadBalanceEnabled`<sup>Optional</sup> <a name="SdrsIoLoadBalanceEnabled" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadBalanceEnabled"></a>

```csharp
public object SdrsIoLoadBalanceEnabled { get; set; }
```

- *Type:* object

Enable I/O load balancing for this datastore cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_io_load_balance_enabled DatastoreCluster#sdrs_io_load_balance_enabled}

---

##### `SdrsIoLoadImbalanceThreshold`<sup>Optional</sup> <a name="SdrsIoLoadImbalanceThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoLoadImbalanceThreshold"></a>

```csharp
public double SdrsIoLoadImbalanceThreshold { get; set; }
```

- *Type:* double

The difference between load in datastores in the cluster before storage DRS makes recommendations to balance the load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_io_load_imbalance_threshold DatastoreCluster#sdrs_io_load_imbalance_threshold}

---

##### `SdrsIoReservableIopsThreshold`<sup>Optional</sup> <a name="SdrsIoReservableIopsThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableIopsThreshold"></a>

```csharp
public double SdrsIoReservableIopsThreshold { get; set; }
```

- *Type:* double

The threshold of reservable IOPS of all virtual machines on the datastore before storage DRS makes recommendations to move VMs off of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_io_reservable_iops_threshold DatastoreCluster#sdrs_io_reservable_iops_threshold}

---

##### `SdrsIoReservablePercentThreshold`<sup>Optional</sup> <a name="SdrsIoReservablePercentThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservablePercentThreshold"></a>

```csharp
public double SdrsIoReservablePercentThreshold { get; set; }
```

- *Type:* double

The threshold, in percent, of actual estimated performance of the datastore (in IOPS) that storage DRS uses to make recommendations to move VMs off of a datastore when the total reservable IOPS exceeds the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_io_reservable_percent_threshold DatastoreCluster#sdrs_io_reservable_percent_threshold}

---

##### `SdrsIoReservableThresholdMode`<sup>Optional</sup> <a name="SdrsIoReservableThresholdMode" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsIoReservableThresholdMode"></a>

```csharp
public string SdrsIoReservableThresholdMode { get; set; }
```

- *Type:* string

The reservable IOPS threshold to use, percent in the event of automatic, or manual threshold in the event of manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_io_reservable_threshold_mode DatastoreCluster#sdrs_io_reservable_threshold_mode}

---

##### `SdrsLoadBalanceInterval`<sup>Optional</sup> <a name="SdrsLoadBalanceInterval" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsLoadBalanceInterval"></a>

```csharp
public double SdrsLoadBalanceInterval { get; set; }
```

- *Type:* double

The storage DRS poll interval, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_load_balance_interval DatastoreCluster#sdrs_load_balance_interval}

---

##### `SdrsPolicyEnforcementAutomationLevel`<sup>Optional</sup> <a name="SdrsPolicyEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsPolicyEnforcementAutomationLevel"></a>

```csharp
public string SdrsPolicyEnforcementAutomationLevel { get; set; }
```

- *Type:* string

Overrides the default automation settings when correcting storage and VM policy violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_policy_enforcement_automation_level DatastoreCluster#sdrs_policy_enforcement_automation_level}

---

##### `SdrsRuleEnforcementAutomationLevel`<sup>Optional</sup> <a name="SdrsRuleEnforcementAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsRuleEnforcementAutomationLevel"></a>

```csharp
public string SdrsRuleEnforcementAutomationLevel { get; set; }
```

- *Type:* string

Overrides the default automation settings when correcting affinity rule violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_rule_enforcement_automation_level DatastoreCluster#sdrs_rule_enforcement_automation_level}

---

##### `SdrsSpaceBalanceAutomationLevel`<sup>Optional</sup> <a name="SdrsSpaceBalanceAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceBalanceAutomationLevel"></a>

```csharp
public string SdrsSpaceBalanceAutomationLevel { get; set; }
```

- *Type:* string

Overrides the default automation settings when correcting disk space imbalances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_space_balance_automation_level DatastoreCluster#sdrs_space_balance_automation_level}

---

##### `SdrsSpaceUtilizationThreshold`<sup>Optional</sup> <a name="SdrsSpaceUtilizationThreshold" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsSpaceUtilizationThreshold"></a>

```csharp
public double SdrsSpaceUtilizationThreshold { get; set; }
```

- *Type:* double

The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_space_utilization_threshold DatastoreCluster#sdrs_space_utilization_threshold}

---

##### `SdrsVmEvacuationAutomationLevel`<sup>Optional</sup> <a name="SdrsVmEvacuationAutomationLevel" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.sdrsVmEvacuationAutomationLevel"></a>

```csharp
public string SdrsVmEvacuationAutomationLevel { get; set; }
```

- *Type:* string

Overrides the default automation settings when generating recommendations for datastore evacuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#sdrs_vm_evacuation_automation_level DatastoreCluster#sdrs_vm_evacuation_automation_level}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.datastoreCluster.DatastoreClusterConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vsphere/2.14.1/docs/resources/datastore_cluster#tags DatastoreCluster#tags}

---



