# `virtualMachine` Submodule <a name="`virtualMachine` Submodule" id="@cdktf/provider-vsphere.virtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachine <a name="VirtualMachine" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine vsphere_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachine(Construct Scope, string Id, VirtualMachineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig">VirtualMachineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig">VirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom">PutCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone">PutClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk">PutDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy">PutOvfDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp">PutVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAlternateGuestName">ResetAlternateGuestName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAnnotation">ResetAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootDelay">ResetBootDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryDelay">ResetBootRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryEnabled">ResetBootRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCdrom">ResetCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetClone">ResetClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotAddEnabled">ResetCpuHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotRemoveEnabled">ResetCpuHotRemoveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuLimit">ResetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuPerformanceCountersEnabled">ResetCpuPerformanceCountersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuReservation">ResetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareCount">ResetCpuShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareLevel">ResetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatacenterId">ResetDatacenterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreClusterId">ResetDatastoreClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreId">ResetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDisk">ResetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEfiSecureBootEnabled">ResetEfiSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableDiskUuid">ResetEnableDiskUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEptRviMode">ResetEptRviMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfig">ResetExtraConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfigRebootRequired">ResetExtraConfigRebootRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFirmware">ResetFirmware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetForcePowerOff">ResetForcePowerOff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetGuestId">ResetGuestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHardwareVersion">ResetHardwareVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHostSystemId">ResetHostSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHvMode">ResetHvMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIdeControllerCount">ResetIdeControllerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIgnoredGuestIps">ResetIgnoredGuestIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetLatencySensitivity">ResetLatencySensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryHotAddEnabled">ResetMemoryHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryLimit">ResetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservation">ResetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareCount">ResetMemoryShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareLevel">ResetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMigrateWaitTimeout">ResetMigrateWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNestedHvEnabled">ResetNestedHvEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCoresPerSocket">ResetNumCoresPerSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCpus">ResetNumCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOvfDeploy">ResetOvfDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPciDeviceId">ResetPciDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPoweronTimeout">ResetPoweronTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetReplaceTrigger">ResetReplaceTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterPowerOn">ResetRunToolsScriptsAfterPowerOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterResume">ResetRunToolsScriptsAfterResume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestReboot">ResetRunToolsScriptsBeforeGuestReboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestShutdown">ResetRunToolsScriptsBeforeGuestShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestStandby">ResetRunToolsScriptsBeforeGuestStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSataControllerCount">ResetSataControllerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiBusSharing">ResetScsiBusSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiControllerCount">ResetScsiControllerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiType">ResetScsiType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetShutdownWaitTimeout">ResetShutdownWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetStoragePolicyId">ResetStoragePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSwapPlacementPolicy">ResetSwapPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHost">ResetSyncTimeWithHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHostPeriodically">ResetSyncTimeWithHostPeriodically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetToolsUpgradePolicy">ResetToolsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVapp">ResetVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVbsEnabled">ResetVbsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVvtdEnabled">ResetVvtdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestIpTimeout">ResetWaitForGuestIpTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetRoutable">ResetWaitForGuestNetRoutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetTimeout">ResetWaitForGuestNetTimeout</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutCdrom` <a name="PutCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom"></a>

```csharp
private void PutCdrom(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom.parameter.value"></a>

- *Type:* object

---

##### `PutClone` <a name="PutClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone"></a>

```csharp
private void PutClone(VirtualMachineClone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---

##### `PutDisk` <a name="PutDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk"></a>

```csharp
private void PutDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutOvfDeploy` <a name="PutOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy"></a>

```csharp
private void PutOvfDeploy(VirtualMachineOvfDeploy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---

##### `PutVapp` <a name="PutVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp"></a>

```csharp
private void PutVapp(VirtualMachineVapp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---

##### `ResetAlternateGuestName` <a name="ResetAlternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAlternateGuestName"></a>

```csharp
private void ResetAlternateGuestName()
```

##### `ResetAnnotation` <a name="ResetAnnotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAnnotation"></a>

```csharp
private void ResetAnnotation()
```

##### `ResetBootDelay` <a name="ResetBootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootDelay"></a>

```csharp
private void ResetBootDelay()
```

##### `ResetBootRetryDelay` <a name="ResetBootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryDelay"></a>

```csharp
private void ResetBootRetryDelay()
```

##### `ResetBootRetryEnabled` <a name="ResetBootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryEnabled"></a>

```csharp
private void ResetBootRetryEnabled()
```

##### `ResetCdrom` <a name="ResetCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCdrom"></a>

```csharp
private void ResetCdrom()
```

##### `ResetClone` <a name="ResetClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetClone"></a>

```csharp
private void ResetClone()
```

##### `ResetCpuHotAddEnabled` <a name="ResetCpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotAddEnabled"></a>

```csharp
private void ResetCpuHotAddEnabled()
```

##### `ResetCpuHotRemoveEnabled` <a name="ResetCpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotRemoveEnabled"></a>

```csharp
private void ResetCpuHotRemoveEnabled()
```

##### `ResetCpuLimit` <a name="ResetCpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuLimit"></a>

```csharp
private void ResetCpuLimit()
```

##### `ResetCpuPerformanceCountersEnabled` <a name="ResetCpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuPerformanceCountersEnabled"></a>

```csharp
private void ResetCpuPerformanceCountersEnabled()
```

##### `ResetCpuReservation` <a name="ResetCpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuReservation"></a>

```csharp
private void ResetCpuReservation()
```

##### `ResetCpuShareCount` <a name="ResetCpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareCount"></a>

```csharp
private void ResetCpuShareCount()
```

##### `ResetCpuShareLevel` <a name="ResetCpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareLevel"></a>

```csharp
private void ResetCpuShareLevel()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetDatacenterId` <a name="ResetDatacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatacenterId"></a>

```csharp
private void ResetDatacenterId()
```

##### `ResetDatastoreClusterId` <a name="ResetDatastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreClusterId"></a>

```csharp
private void ResetDatastoreClusterId()
```

##### `ResetDatastoreId` <a name="ResetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreId"></a>

```csharp
private void ResetDatastoreId()
```

##### `ResetDisk` <a name="ResetDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDisk"></a>

```csharp
private void ResetDisk()
```

##### `ResetEfiSecureBootEnabled` <a name="ResetEfiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEfiSecureBootEnabled"></a>

```csharp
private void ResetEfiSecureBootEnabled()
```

##### `ResetEnableDiskUuid` <a name="ResetEnableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableDiskUuid"></a>

```csharp
private void ResetEnableDiskUuid()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableLogging"></a>

```csharp
private void ResetEnableLogging()
```

##### `ResetEptRviMode` <a name="ResetEptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEptRviMode"></a>

```csharp
private void ResetEptRviMode()
```

##### `ResetExtraConfig` <a name="ResetExtraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfig"></a>

```csharp
private void ResetExtraConfig()
```

##### `ResetExtraConfigRebootRequired` <a name="ResetExtraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfigRebootRequired"></a>

```csharp
private void ResetExtraConfigRebootRequired()
```

##### `ResetFirmware` <a name="ResetFirmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFirmware"></a>

```csharp
private void ResetFirmware()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetForcePowerOff` <a name="ResetForcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetForcePowerOff"></a>

```csharp
private void ResetForcePowerOff()
```

##### `ResetGuestId` <a name="ResetGuestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetGuestId"></a>

```csharp
private void ResetGuestId()
```

##### `ResetHardwareVersion` <a name="ResetHardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHardwareVersion"></a>

```csharp
private void ResetHardwareVersion()
```

##### `ResetHostSystemId` <a name="ResetHostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHostSystemId"></a>

```csharp
private void ResetHostSystemId()
```

##### `ResetHvMode` <a name="ResetHvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHvMode"></a>

```csharp
private void ResetHvMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdeControllerCount` <a name="ResetIdeControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIdeControllerCount"></a>

```csharp
private void ResetIdeControllerCount()
```

##### `ResetIgnoredGuestIps` <a name="ResetIgnoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIgnoredGuestIps"></a>

```csharp
private void ResetIgnoredGuestIps()
```

##### `ResetLatencySensitivity` <a name="ResetLatencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetLatencySensitivity"></a>

```csharp
private void ResetLatencySensitivity()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetMemoryHotAddEnabled` <a name="ResetMemoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryHotAddEnabled"></a>

```csharp
private void ResetMemoryHotAddEnabled()
```

##### `ResetMemoryLimit` <a name="ResetMemoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryLimit"></a>

```csharp
private void ResetMemoryLimit()
```

##### `ResetMemoryReservation` <a name="ResetMemoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservation"></a>

```csharp
private void ResetMemoryReservation()
```

##### `ResetMemoryShareCount` <a name="ResetMemoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareCount"></a>

```csharp
private void ResetMemoryShareCount()
```

##### `ResetMemoryShareLevel` <a name="ResetMemoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareLevel"></a>

```csharp
private void ResetMemoryShareLevel()
```

##### `ResetMigrateWaitTimeout` <a name="ResetMigrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMigrateWaitTimeout"></a>

```csharp
private void ResetMigrateWaitTimeout()
```

##### `ResetNestedHvEnabled` <a name="ResetNestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNestedHvEnabled"></a>

```csharp
private void ResetNestedHvEnabled()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNetworkInterface"></a>

```csharp
private void ResetNetworkInterface()
```

##### `ResetNumCoresPerSocket` <a name="ResetNumCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCoresPerSocket"></a>

```csharp
private void ResetNumCoresPerSocket()
```

##### `ResetNumCpus` <a name="ResetNumCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCpus"></a>

```csharp
private void ResetNumCpus()
```

##### `ResetOvfDeploy` <a name="ResetOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOvfDeploy"></a>

```csharp
private void ResetOvfDeploy()
```

##### `ResetPciDeviceId` <a name="ResetPciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPciDeviceId"></a>

```csharp
private void ResetPciDeviceId()
```

##### `ResetPoweronTimeout` <a name="ResetPoweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPoweronTimeout"></a>

```csharp
private void ResetPoweronTimeout()
```

##### `ResetReplaceTrigger` <a name="ResetReplaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetReplaceTrigger"></a>

```csharp
private void ResetReplaceTrigger()
```

##### `ResetRunToolsScriptsAfterPowerOn` <a name="ResetRunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterPowerOn"></a>

```csharp
private void ResetRunToolsScriptsAfterPowerOn()
```

##### `ResetRunToolsScriptsAfterResume` <a name="ResetRunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterResume"></a>

```csharp
private void ResetRunToolsScriptsAfterResume()
```

##### `ResetRunToolsScriptsBeforeGuestReboot` <a name="ResetRunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestReboot"></a>

```csharp
private void ResetRunToolsScriptsBeforeGuestReboot()
```

##### `ResetRunToolsScriptsBeforeGuestShutdown` <a name="ResetRunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestShutdown"></a>

```csharp
private void ResetRunToolsScriptsBeforeGuestShutdown()
```

##### `ResetRunToolsScriptsBeforeGuestStandby` <a name="ResetRunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestStandby"></a>

```csharp
private void ResetRunToolsScriptsBeforeGuestStandby()
```

##### `ResetSataControllerCount` <a name="ResetSataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSataControllerCount"></a>

```csharp
private void ResetSataControllerCount()
```

##### `ResetScsiBusSharing` <a name="ResetScsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiBusSharing"></a>

```csharp
private void ResetScsiBusSharing()
```

##### `ResetScsiControllerCount` <a name="ResetScsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiControllerCount"></a>

```csharp
private void ResetScsiControllerCount()
```

##### `ResetScsiType` <a name="ResetScsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiType"></a>

```csharp
private void ResetScsiType()
```

##### `ResetShutdownWaitTimeout` <a name="ResetShutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetShutdownWaitTimeout"></a>

```csharp
private void ResetShutdownWaitTimeout()
```

##### `ResetStoragePolicyId` <a name="ResetStoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetStoragePolicyId"></a>

```csharp
private void ResetStoragePolicyId()
```

##### `ResetSwapPlacementPolicy` <a name="ResetSwapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSwapPlacementPolicy"></a>

```csharp
private void ResetSwapPlacementPolicy()
```

##### `ResetSyncTimeWithHost` <a name="ResetSyncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHost"></a>

```csharp
private void ResetSyncTimeWithHost()
```

##### `ResetSyncTimeWithHostPeriodically` <a name="ResetSyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHostPeriodically"></a>

```csharp
private void ResetSyncTimeWithHostPeriodically()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetToolsUpgradePolicy` <a name="ResetToolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetToolsUpgradePolicy"></a>

```csharp
private void ResetToolsUpgradePolicy()
```

##### `ResetVapp` <a name="ResetVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVapp"></a>

```csharp
private void ResetVapp()
```

##### `ResetVbsEnabled` <a name="ResetVbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVbsEnabled"></a>

```csharp
private void ResetVbsEnabled()
```

##### `ResetVvtdEnabled` <a name="ResetVvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVvtdEnabled"></a>

```csharp
private void ResetVvtdEnabled()
```

##### `ResetWaitForGuestIpTimeout` <a name="ResetWaitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestIpTimeout"></a>

```csharp
private void ResetWaitForGuestIpTimeout()
```

##### `ResetWaitForGuestNetRoutable` <a name="ResetWaitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetRoutable"></a>

```csharp
private void ResetWaitForGuestNetRoutable()
```

##### `ResetWaitForGuestNetTimeout` <a name="ResetWaitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetTimeout"></a>

```csharp
private void ResetWaitForGuestNetTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

VirtualMachine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdrom">Cdrom</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList">VirtualMachineCdromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.changeVersion">ChangeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference">VirtualMachineCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.defaultIpAddress">DefaultIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.disk">Disk</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList">VirtualMachineDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIpAddresses">GuestIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.imported">Imported</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.moid">Moid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList">VirtualMachineNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeploy">OvfDeploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference">VirtualMachineOvfDeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.powerState">PowerState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.rebootRequired">RebootRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vapp">Vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference">VirtualMachineVappOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappTransport">VappTransport</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmwareToolsStatus">VmwareToolsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmxPath">VmxPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestNameInput">AlternateGuestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotationInput">AnnotationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelayInput">BootDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelayInput">BootRetryDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabledInput">BootRetryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdromInput">CdromInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cloneInput">CloneInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabledInput">CpuHotAddEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabledInput">CpuHotRemoveEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimitInput">CpuLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabledInput">CpuPerformanceCountersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservationInput">CpuReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCountInput">CpuShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevelInput">CpuShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributesInput">CustomAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterIdInput">DatastoreClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreIdInput">DatastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.diskInput">DiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabledInput">EfiSecureBootEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuidInput">EnableDiskUuidInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviModeInput">EptRviModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigInput">ExtraConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequiredInput">ExtraConfigRebootRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmwareInput">FirmwareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOffInput">ForcePowerOffInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIdInput">GuestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersionInput">HardwareVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemIdInput">HostSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvModeInput">HvModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCountInput">IdeControllerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIpsInput">IgnoredGuestIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivityInput">LatencySensitivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabledInput">MemoryHotAddEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimitInput">MemoryLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationInput">MemoryReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCountInput">MemoryShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevelInput">MemoryShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeoutInput">MigrateWaitTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabledInput">NestedHvEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocketInput">NumCoresPerSocketInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpusInput">NumCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeployInput">OvfDeployInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceIdInput">PciDeviceIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeoutInput">PoweronTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTriggerInput">ReplaceTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolIdInput">ResourcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOnInput">RunToolsScriptsAfterPowerOnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResumeInput">RunToolsScriptsAfterResumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestRebootInput">RunToolsScriptsBeforeGuestRebootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput">RunToolsScriptsBeforeGuestShutdownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput">RunToolsScriptsBeforeGuestStandbyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCountInput">SataControllerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharingInput">ScsiBusSharingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCountInput">ScsiControllerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiTypeInput">ScsiTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeoutInput">ShutdownWaitTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyIdInput">StoragePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicyInput">SwapPlacementPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostInput">SyncTimeWithHostInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodicallyInput">SyncTimeWithHostPeriodicallyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicyInput">ToolsUpgradePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappInput">VappInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabledInput">VbsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabledInput">VvtdEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeoutInput">WaitForGuestIpTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutableInput">WaitForGuestNetRoutableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeoutInput">WaitForGuestNetTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestName">AlternateGuestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotation">Annotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelay">BootDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelay">BootRetryDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabled">BootRetryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabled">CpuHotAddEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabled">CpuHotRemoveEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimit">CpuLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabled">CpuPerformanceCountersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservation">CpuReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCount">CpuShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevel">CpuShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreId">DatastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabled">EfiSecureBootEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuid">EnableDiskUuid</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLogging">EnableLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviMode">EptRviMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfig">ExtraConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequired">ExtraConfigRebootRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmware">Firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOff">ForcePowerOff</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestId">GuestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersion">HardwareVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemId">HostSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvMode">HvMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCount">IdeControllerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIps">IgnoredGuestIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivity">LatencySensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabled">MemoryHotAddEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCount">MemoryShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeout">MigrateWaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabled">NestedHvEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocket">NumCoresPerSocket</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpus">NumCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceId">PciDeviceId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeout">PoweronTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTrigger">ReplaceTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolId">ResourcePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOn">RunToolsScriptsAfterPowerOn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResume">RunToolsScriptsAfterResume</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestReboot">RunToolsScriptsBeforeGuestReboot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdown">RunToolsScriptsBeforeGuestShutdown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandby">RunToolsScriptsBeforeGuestStandby</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCount">SataControllerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharing">ScsiBusSharing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCount">ScsiControllerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiType">ScsiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeout">ShutdownWaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyId">StoragePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicy">SwapPlacementPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHost">SyncTimeWithHost</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodically">SyncTimeWithHostPeriodically</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicy">ToolsUpgradePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabled">VbsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabled">VvtdEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeout">WaitForGuestIpTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutable">WaitForGuestNetRoutable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeout">WaitForGuestNetTimeout</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Cdrom`<sup>Required</sup> <a name="Cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdrom"></a>

```csharp
public VirtualMachineCdromList Cdrom { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList">VirtualMachineCdromList</a>

---

##### `ChangeVersion`<sup>Required</sup> <a name="ChangeVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.changeVersion"></a>

```csharp
public string ChangeVersion { get; }
```

- *Type:* string

---

##### `Clone`<sup>Required</sup> <a name="Clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.clone"></a>

```csharp
public VirtualMachineCloneOutputReference Clone { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference">VirtualMachineCloneOutputReference</a>

---

##### `DefaultIpAddress`<sup>Required</sup> <a name="DefaultIpAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.defaultIpAddress"></a>

```csharp
public string DefaultIpAddress { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.disk"></a>

```csharp
public VirtualMachineDiskList Disk { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList">VirtualMachineDiskList</a>

---

##### `GuestIpAddresses`<sup>Required</sup> <a name="GuestIpAddresses" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIpAddresses"></a>

```csharp
public string[] GuestIpAddresses { get; }
```

- *Type:* string[]

---

##### `Imported`<sup>Required</sup> <a name="Imported" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.imported"></a>

```csharp
public IResolvable Imported { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Moid`<sup>Required</sup> <a name="Moid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.moid"></a>

```csharp
public string Moid { get; }
```

- *Type:* string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterface"></a>

```csharp
public VirtualMachineNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList">VirtualMachineNetworkInterfaceList</a>

---

##### `OvfDeploy`<sup>Required</sup> <a name="OvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeploy"></a>

```csharp
public VirtualMachineOvfDeployOutputReference OvfDeploy { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference">VirtualMachineOvfDeployOutputReference</a>

---

##### `PowerState`<sup>Required</sup> <a name="PowerState" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.powerState"></a>

```csharp
public string PowerState { get; }
```

- *Type:* string

---

##### `RebootRequired`<sup>Required</sup> <a name="RebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.rebootRequired"></a>

```csharp
public IResolvable RebootRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `Vapp`<sup>Required</sup> <a name="Vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vapp"></a>

```csharp
public VirtualMachineVappOutputReference Vapp { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference">VirtualMachineVappOutputReference</a>

---

##### `VappTransport`<sup>Required</sup> <a name="VappTransport" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappTransport"></a>

```csharp
public string[] VappTransport { get; }
```

- *Type:* string[]

---

##### `VmwareToolsStatus`<sup>Required</sup> <a name="VmwareToolsStatus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmwareToolsStatus"></a>

```csharp
public string VmwareToolsStatus { get; }
```

- *Type:* string

---

##### `VmxPath`<sup>Required</sup> <a name="VmxPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmxPath"></a>

```csharp
public string VmxPath { get; }
```

- *Type:* string

---

##### `AlternateGuestNameInput`<sup>Optional</sup> <a name="AlternateGuestNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestNameInput"></a>

```csharp
public string AlternateGuestNameInput { get; }
```

- *Type:* string

---

##### `AnnotationInput`<sup>Optional</sup> <a name="AnnotationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotationInput"></a>

```csharp
public string AnnotationInput { get; }
```

- *Type:* string

---

##### `BootDelayInput`<sup>Optional</sup> <a name="BootDelayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelayInput"></a>

```csharp
public double BootDelayInput { get; }
```

- *Type:* double

---

##### `BootRetryDelayInput`<sup>Optional</sup> <a name="BootRetryDelayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelayInput"></a>

```csharp
public double BootRetryDelayInput { get; }
```

- *Type:* double

---

##### `BootRetryEnabledInput`<sup>Optional</sup> <a name="BootRetryEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabledInput"></a>

```csharp
public object BootRetryEnabledInput { get; }
```

- *Type:* object

---

##### `CdromInput`<sup>Optional</sup> <a name="CdromInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdromInput"></a>

```csharp
public object CdromInput { get; }
```

- *Type:* object

---

##### `CloneInput`<sup>Optional</sup> <a name="CloneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cloneInput"></a>

```csharp
public VirtualMachineClone CloneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---

##### `CpuHotAddEnabledInput`<sup>Optional</sup> <a name="CpuHotAddEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabledInput"></a>

```csharp
public object CpuHotAddEnabledInput { get; }
```

- *Type:* object

---

##### `CpuHotRemoveEnabledInput`<sup>Optional</sup> <a name="CpuHotRemoveEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabledInput"></a>

```csharp
public object CpuHotRemoveEnabledInput { get; }
```

- *Type:* object

---

##### `CpuLimitInput`<sup>Optional</sup> <a name="CpuLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimitInput"></a>

```csharp
public double CpuLimitInput { get; }
```

- *Type:* double

---

##### `CpuPerformanceCountersEnabledInput`<sup>Optional</sup> <a name="CpuPerformanceCountersEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabledInput"></a>

```csharp
public object CpuPerformanceCountersEnabledInput { get; }
```

- *Type:* object

---

##### `CpuReservationInput`<sup>Optional</sup> <a name="CpuReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservationInput"></a>

```csharp
public double CpuReservationInput { get; }
```

- *Type:* double

---

##### `CpuShareCountInput`<sup>Optional</sup> <a name="CpuShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCountInput"></a>

```csharp
public double CpuShareCountInput { get; }
```

- *Type:* double

---

##### `CpuShareLevelInput`<sup>Optional</sup> <a name="CpuShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevelInput"></a>

```csharp
public string CpuShareLevelInput { get; }
```

- *Type:* string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `DatastoreClusterIdInput`<sup>Optional</sup> <a name="DatastoreClusterIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterIdInput"></a>

```csharp
public string DatastoreClusterIdInput { get; }
```

- *Type:* string

---

##### `DatastoreIdInput`<sup>Optional</sup> <a name="DatastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreIdInput"></a>

```csharp
public string DatastoreIdInput { get; }
```

- *Type:* string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.diskInput"></a>

```csharp
public object DiskInput { get; }
```

- *Type:* object

---

##### `EfiSecureBootEnabledInput`<sup>Optional</sup> <a name="EfiSecureBootEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabledInput"></a>

```csharp
public object EfiSecureBootEnabledInput { get; }
```

- *Type:* object

---

##### `EnableDiskUuidInput`<sup>Optional</sup> <a name="EnableDiskUuidInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuidInput"></a>

```csharp
public object EnableDiskUuidInput { get; }
```

- *Type:* object

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLoggingInput"></a>

```csharp
public object EnableLoggingInput { get; }
```

- *Type:* object

---

##### `EptRviModeInput`<sup>Optional</sup> <a name="EptRviModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviModeInput"></a>

```csharp
public string EptRviModeInput { get; }
```

- *Type:* string

---

##### `ExtraConfigInput`<sup>Optional</sup> <a name="ExtraConfigInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExtraConfigRebootRequiredInput`<sup>Optional</sup> <a name="ExtraConfigRebootRequiredInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequiredInput"></a>

```csharp
public object ExtraConfigRebootRequiredInput { get; }
```

- *Type:* object

---

##### `FirmwareInput`<sup>Optional</sup> <a name="FirmwareInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmwareInput"></a>

```csharp
public string FirmwareInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `ForcePowerOffInput`<sup>Optional</sup> <a name="ForcePowerOffInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOffInput"></a>

```csharp
public object ForcePowerOffInput { get; }
```

- *Type:* object

---

##### `GuestIdInput`<sup>Optional</sup> <a name="GuestIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIdInput"></a>

```csharp
public string GuestIdInput { get; }
```

- *Type:* string

---

##### `HardwareVersionInput`<sup>Optional</sup> <a name="HardwareVersionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersionInput"></a>

```csharp
public double HardwareVersionInput { get; }
```

- *Type:* double

---

##### `HostSystemIdInput`<sup>Optional</sup> <a name="HostSystemIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemIdInput"></a>

```csharp
public string HostSystemIdInput { get; }
```

- *Type:* string

---

##### `HvModeInput`<sup>Optional</sup> <a name="HvModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvModeInput"></a>

```csharp
public string HvModeInput { get; }
```

- *Type:* string

---

##### `IdeControllerCountInput`<sup>Optional</sup> <a name="IdeControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCountInput"></a>

```csharp
public double IdeControllerCountInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoredGuestIpsInput`<sup>Optional</sup> <a name="IgnoredGuestIpsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIpsInput"></a>

```csharp
public string[] IgnoredGuestIpsInput { get; }
```

- *Type:* string[]

---

##### `LatencySensitivityInput`<sup>Optional</sup> <a name="LatencySensitivityInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivityInput"></a>

```csharp
public string LatencySensitivityInput { get; }
```

- *Type:* string

---

##### `MemoryHotAddEnabledInput`<sup>Optional</sup> <a name="MemoryHotAddEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabledInput"></a>

```csharp
public object MemoryHotAddEnabledInput { get; }
```

- *Type:* object

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `MemoryLimitInput`<sup>Optional</sup> <a name="MemoryLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimitInput"></a>

```csharp
public double MemoryLimitInput { get; }
```

- *Type:* double

---

##### `MemoryReservationInput`<sup>Optional</sup> <a name="MemoryReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationInput"></a>

```csharp
public double MemoryReservationInput { get; }
```

- *Type:* double

---

##### `MemoryShareCountInput`<sup>Optional</sup> <a name="MemoryShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCountInput"></a>

```csharp
public double MemoryShareCountInput { get; }
```

- *Type:* double

---

##### `MemoryShareLevelInput`<sup>Optional</sup> <a name="MemoryShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevelInput"></a>

```csharp
public string MemoryShareLevelInput { get; }
```

- *Type:* string

---

##### `MigrateWaitTimeoutInput`<sup>Optional</sup> <a name="MigrateWaitTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeoutInput"></a>

```csharp
public double MigrateWaitTimeoutInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NestedHvEnabledInput`<sup>Optional</sup> <a name="NestedHvEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabledInput"></a>

```csharp
public object NestedHvEnabledInput { get; }
```

- *Type:* object

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `NumCoresPerSocketInput`<sup>Optional</sup> <a name="NumCoresPerSocketInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocketInput"></a>

```csharp
public double NumCoresPerSocketInput { get; }
```

- *Type:* double

---

##### `NumCpusInput`<sup>Optional</sup> <a name="NumCpusInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpusInput"></a>

```csharp
public double NumCpusInput { get; }
```

- *Type:* double

---

##### `OvfDeployInput`<sup>Optional</sup> <a name="OvfDeployInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeployInput"></a>

```csharp
public VirtualMachineOvfDeploy OvfDeployInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---

##### `PciDeviceIdInput`<sup>Optional</sup> <a name="PciDeviceIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceIdInput"></a>

```csharp
public string[] PciDeviceIdInput { get; }
```

- *Type:* string[]

---

##### `PoweronTimeoutInput`<sup>Optional</sup> <a name="PoweronTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeoutInput"></a>

```csharp
public double PoweronTimeoutInput { get; }
```

- *Type:* double

---

##### `ReplaceTriggerInput`<sup>Optional</sup> <a name="ReplaceTriggerInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTriggerInput"></a>

```csharp
public string ReplaceTriggerInput { get; }
```

- *Type:* string

---

##### `ResourcePoolIdInput`<sup>Optional</sup> <a name="ResourcePoolIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolIdInput"></a>

```csharp
public string ResourcePoolIdInput { get; }
```

- *Type:* string

---

##### `RunToolsScriptsAfterPowerOnInput`<sup>Optional</sup> <a name="RunToolsScriptsAfterPowerOnInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOnInput"></a>

```csharp
public object RunToolsScriptsAfterPowerOnInput { get; }
```

- *Type:* object

---

##### `RunToolsScriptsAfterResumeInput`<sup>Optional</sup> <a name="RunToolsScriptsAfterResumeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResumeInput"></a>

```csharp
public object RunToolsScriptsAfterResumeInput { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestRebootInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestRebootInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestRebootInput"></a>

```csharp
public object RunToolsScriptsBeforeGuestRebootInput { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestShutdownInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestShutdownInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput"></a>

```csharp
public object RunToolsScriptsBeforeGuestShutdownInput { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestStandbyInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestStandbyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput"></a>

```csharp
public object RunToolsScriptsBeforeGuestStandbyInput { get; }
```

- *Type:* object

---

##### `SataControllerCountInput`<sup>Optional</sup> <a name="SataControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCountInput"></a>

```csharp
public double SataControllerCountInput { get; }
```

- *Type:* double

---

##### `ScsiBusSharingInput`<sup>Optional</sup> <a name="ScsiBusSharingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharingInput"></a>

```csharp
public string ScsiBusSharingInput { get; }
```

- *Type:* string

---

##### `ScsiControllerCountInput`<sup>Optional</sup> <a name="ScsiControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCountInput"></a>

```csharp
public double ScsiControllerCountInput { get; }
```

- *Type:* double

---

##### `ScsiTypeInput`<sup>Optional</sup> <a name="ScsiTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiTypeInput"></a>

```csharp
public string ScsiTypeInput { get; }
```

- *Type:* string

---

##### `ShutdownWaitTimeoutInput`<sup>Optional</sup> <a name="ShutdownWaitTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeoutInput"></a>

```csharp
public double ShutdownWaitTimeoutInput { get; }
```

- *Type:* double

---

##### `StoragePolicyIdInput`<sup>Optional</sup> <a name="StoragePolicyIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyIdInput"></a>

```csharp
public string StoragePolicyIdInput { get; }
```

- *Type:* string

---

##### `SwapPlacementPolicyInput`<sup>Optional</sup> <a name="SwapPlacementPolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicyInput"></a>

```csharp
public string SwapPlacementPolicyInput { get; }
```

- *Type:* string

---

##### `SyncTimeWithHostInput`<sup>Optional</sup> <a name="SyncTimeWithHostInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostInput"></a>

```csharp
public object SyncTimeWithHostInput { get; }
```

- *Type:* object

---

##### `SyncTimeWithHostPeriodicallyInput`<sup>Optional</sup> <a name="SyncTimeWithHostPeriodicallyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodicallyInput"></a>

```csharp
public object SyncTimeWithHostPeriodicallyInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `ToolsUpgradePolicyInput`<sup>Optional</sup> <a name="ToolsUpgradePolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicyInput"></a>

```csharp
public string ToolsUpgradePolicyInput { get; }
```

- *Type:* string

---

##### `VappInput`<sup>Optional</sup> <a name="VappInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappInput"></a>

```csharp
public VirtualMachineVapp VappInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---

##### `VbsEnabledInput`<sup>Optional</sup> <a name="VbsEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabledInput"></a>

```csharp
public object VbsEnabledInput { get; }
```

- *Type:* object

---

##### `VvtdEnabledInput`<sup>Optional</sup> <a name="VvtdEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabledInput"></a>

```csharp
public object VvtdEnabledInput { get; }
```

- *Type:* object

---

##### `WaitForGuestIpTimeoutInput`<sup>Optional</sup> <a name="WaitForGuestIpTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeoutInput"></a>

```csharp
public double WaitForGuestIpTimeoutInput { get; }
```

- *Type:* double

---

##### `WaitForGuestNetRoutableInput`<sup>Optional</sup> <a name="WaitForGuestNetRoutableInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutableInput"></a>

```csharp
public object WaitForGuestNetRoutableInput { get; }
```

- *Type:* object

---

##### `WaitForGuestNetTimeoutInput`<sup>Optional</sup> <a name="WaitForGuestNetTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeoutInput"></a>

```csharp
public double WaitForGuestNetTimeoutInput { get; }
```

- *Type:* double

---

##### `AlternateGuestName`<sup>Required</sup> <a name="AlternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestName"></a>

```csharp
public string AlternateGuestName { get; }
```

- *Type:* string

---

##### `Annotation`<sup>Required</sup> <a name="Annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotation"></a>

```csharp
public string Annotation { get; }
```

- *Type:* string

---

##### `BootDelay`<sup>Required</sup> <a name="BootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelay"></a>

```csharp
public double BootDelay { get; }
```

- *Type:* double

---

##### `BootRetryDelay`<sup>Required</sup> <a name="BootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelay"></a>

```csharp
public double BootRetryDelay { get; }
```

- *Type:* double

---

##### `BootRetryEnabled`<sup>Required</sup> <a name="BootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabled"></a>

```csharp
public object BootRetryEnabled { get; }
```

- *Type:* object

---

##### `CpuHotAddEnabled`<sup>Required</sup> <a name="CpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabled"></a>

```csharp
public object CpuHotAddEnabled { get; }
```

- *Type:* object

---

##### `CpuHotRemoveEnabled`<sup>Required</sup> <a name="CpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabled"></a>

```csharp
public object CpuHotRemoveEnabled { get; }
```

- *Type:* object

---

##### `CpuLimit`<sup>Required</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimit"></a>

```csharp
public double CpuLimit { get; }
```

- *Type:* double

---

##### `CpuPerformanceCountersEnabled`<sup>Required</sup> <a name="CpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabled"></a>

```csharp
public object CpuPerformanceCountersEnabled { get; }
```

- *Type:* object

---

##### `CpuReservation`<sup>Required</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservation"></a>

```csharp
public double CpuReservation { get; }
```

- *Type:* double

---

##### `CpuShareCount`<sup>Required</sup> <a name="CpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCount"></a>

```csharp
public double CpuShareCount { get; }
```

- *Type:* double

---

##### `CpuShareLevel`<sup>Required</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevel"></a>

```csharp
public string CpuShareLevel { get; }
```

- *Type:* string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `DatastoreClusterId`<sup>Required</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterId"></a>

```csharp
public string DatastoreClusterId { get; }
```

- *Type:* string

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreId"></a>

```csharp
public string DatastoreId { get; }
```

- *Type:* string

---

##### `EfiSecureBootEnabled`<sup>Required</sup> <a name="EfiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabled"></a>

```csharp
public object EfiSecureBootEnabled { get; }
```

- *Type:* object

---

##### `EnableDiskUuid`<sup>Required</sup> <a name="EnableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuid"></a>

```csharp
public object EnableDiskUuid { get; }
```

- *Type:* object

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLogging"></a>

```csharp
public object EnableLogging { get; }
```

- *Type:* object

---

##### `EptRviMode`<sup>Required</sup> <a name="EptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviMode"></a>

```csharp
public string EptRviMode { get; }
```

- *Type:* string

---

##### `ExtraConfig`<sup>Required</sup> <a name="ExtraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExtraConfigRebootRequired`<sup>Required</sup> <a name="ExtraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequired"></a>

```csharp
public object ExtraConfigRebootRequired { get; }
```

- *Type:* object

---

##### `Firmware`<sup>Required</sup> <a name="Firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmware"></a>

```csharp
public string Firmware { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `ForcePowerOff`<sup>Required</sup> <a name="ForcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOff"></a>

```csharp
public object ForcePowerOff { get; }
```

- *Type:* object

---

##### `GuestId`<sup>Required</sup> <a name="GuestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestId"></a>

```csharp
public string GuestId { get; }
```

- *Type:* string

---

##### `HardwareVersion`<sup>Required</sup> <a name="HardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersion"></a>

```csharp
public double HardwareVersion { get; }
```

- *Type:* double

---

##### `HostSystemId`<sup>Required</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemId"></a>

```csharp
public string HostSystemId { get; }
```

- *Type:* string

---

##### `HvMode`<sup>Required</sup> <a name="HvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvMode"></a>

```csharp
public string HvMode { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdeControllerCount`<sup>Required</sup> <a name="IdeControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCount"></a>

```csharp
public double IdeControllerCount { get; }
```

- *Type:* double

---

##### `IgnoredGuestIps`<sup>Required</sup> <a name="IgnoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIps"></a>

```csharp
public string[] IgnoredGuestIps { get; }
```

- *Type:* string[]

---

##### `LatencySensitivity`<sup>Required</sup> <a name="LatencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivity"></a>

```csharp
public string LatencySensitivity { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `MemoryHotAddEnabled`<sup>Required</sup> <a name="MemoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabled"></a>

```csharp
public object MemoryHotAddEnabled { get; }
```

- *Type:* object

---

##### `MemoryLimit`<sup>Required</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; }
```

- *Type:* double

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; }
```

- *Type:* double

---

##### `MemoryShareCount`<sup>Required</sup> <a name="MemoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCount"></a>

```csharp
public double MemoryShareCount { get; }
```

- *Type:* double

---

##### `MemoryShareLevel`<sup>Required</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevel"></a>

```csharp
public string MemoryShareLevel { get; }
```

- *Type:* string

---

##### `MigrateWaitTimeout`<sup>Required</sup> <a name="MigrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeout"></a>

```csharp
public double MigrateWaitTimeout { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NestedHvEnabled`<sup>Required</sup> <a name="NestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabled"></a>

```csharp
public object NestedHvEnabled { get; }
```

- *Type:* object

---

##### `NumCoresPerSocket`<sup>Required</sup> <a name="NumCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocket"></a>

```csharp
public double NumCoresPerSocket { get; }
```

- *Type:* double

---

##### `NumCpus`<sup>Required</sup> <a name="NumCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpus"></a>

```csharp
public double NumCpus { get; }
```

- *Type:* double

---

##### `PciDeviceId`<sup>Required</sup> <a name="PciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceId"></a>

```csharp
public string[] PciDeviceId { get; }
```

- *Type:* string[]

---

##### `PoweronTimeout`<sup>Required</sup> <a name="PoweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeout"></a>

```csharp
public double PoweronTimeout { get; }
```

- *Type:* double

---

##### `ReplaceTrigger`<sup>Required</sup> <a name="ReplaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTrigger"></a>

```csharp
public string ReplaceTrigger { get; }
```

- *Type:* string

---

##### `ResourcePoolId`<sup>Required</sup> <a name="ResourcePoolId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolId"></a>

```csharp
public string ResourcePoolId { get; }
```

- *Type:* string

---

##### `RunToolsScriptsAfterPowerOn`<sup>Required</sup> <a name="RunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOn"></a>

```csharp
public object RunToolsScriptsAfterPowerOn { get; }
```

- *Type:* object

---

##### `RunToolsScriptsAfterResume`<sup>Required</sup> <a name="RunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResume"></a>

```csharp
public object RunToolsScriptsAfterResume { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestReboot`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestReboot"></a>

```csharp
public object RunToolsScriptsBeforeGuestReboot { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestShutdown`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdown"></a>

```csharp
public object RunToolsScriptsBeforeGuestShutdown { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestStandby`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandby"></a>

```csharp
public object RunToolsScriptsBeforeGuestStandby { get; }
```

- *Type:* object

---

##### `SataControllerCount`<sup>Required</sup> <a name="SataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCount"></a>

```csharp
public double SataControllerCount { get; }
```

- *Type:* double

---

##### `ScsiBusSharing`<sup>Required</sup> <a name="ScsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharing"></a>

```csharp
public string ScsiBusSharing { get; }
```

- *Type:* string

---

##### `ScsiControllerCount`<sup>Required</sup> <a name="ScsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCount"></a>

```csharp
public double ScsiControllerCount { get; }
```

- *Type:* double

---

##### `ScsiType`<sup>Required</sup> <a name="ScsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiType"></a>

```csharp
public string ScsiType { get; }
```

- *Type:* string

---

##### `ShutdownWaitTimeout`<sup>Required</sup> <a name="ShutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeout"></a>

```csharp
public double ShutdownWaitTimeout { get; }
```

- *Type:* double

---

##### `StoragePolicyId`<sup>Required</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyId"></a>

```csharp
public string StoragePolicyId { get; }
```

- *Type:* string

---

##### `SwapPlacementPolicy`<sup>Required</sup> <a name="SwapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicy"></a>

```csharp
public string SwapPlacementPolicy { get; }
```

- *Type:* string

---

##### `SyncTimeWithHost`<sup>Required</sup> <a name="SyncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHost"></a>

```csharp
public object SyncTimeWithHost { get; }
```

- *Type:* object

---

##### `SyncTimeWithHostPeriodically`<sup>Required</sup> <a name="SyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodically"></a>

```csharp
public object SyncTimeWithHostPeriodically { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `ToolsUpgradePolicy`<sup>Required</sup> <a name="ToolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicy"></a>

```csharp
public string ToolsUpgradePolicy { get; }
```

- *Type:* string

---

##### `VbsEnabled`<sup>Required</sup> <a name="VbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabled"></a>

```csharp
public object VbsEnabled { get; }
```

- *Type:* object

---

##### `VvtdEnabled`<sup>Required</sup> <a name="VvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabled"></a>

```csharp
public object VvtdEnabled { get; }
```

- *Type:* object

---

##### `WaitForGuestIpTimeout`<sup>Required</sup> <a name="WaitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeout"></a>

```csharp
public double WaitForGuestIpTimeout { get; }
```

- *Type:* double

---

##### `WaitForGuestNetRoutable`<sup>Required</sup> <a name="WaitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutable"></a>

```csharp
public object WaitForGuestNetRoutable { get; }
```

- *Type:* object

---

##### `WaitForGuestNetTimeout`<sup>Required</sup> <a name="WaitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeout"></a>

```csharp
public double WaitForGuestNetTimeout { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineCdrom <a name="VirtualMachineCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCdrom {
    object ClientDevice = null,
    string DatastoreId = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.clientDevice">ClientDevice</a></code> | <code>object</code> | Indicates whether the device should be mapped to a remote client device. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.datastoreId">DatastoreId</a></code> | <code>string</code> | The datastore ID the ISO is located on. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.path">Path</a></code> | <code>string</code> | The path to the ISO file on the datastore. |

---

##### `ClientDevice`<sup>Optional</sup> <a name="ClientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.clientDevice"></a>

```csharp
public object ClientDevice { get; set; }
```

- *Type:* object

Indicates whether the device should be mapped to a remote client device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#client_device VirtualMachine#client_device}

---

##### `DatastoreId`<sup>Optional</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.datastoreId"></a>

```csharp
public string DatastoreId { get; set; }
```

- *Type:* string

The datastore ID the ISO is located on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path to the ISO file on the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#path VirtualMachine#path}

---

### VirtualMachineClone <a name="VirtualMachineClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineClone {
    string TemplateUuid,
    VirtualMachineCloneCustomizationSpec CustomizationSpec = null,
    VirtualMachineCloneCustomize Customize = null,
    object LinkedClone = null,
    System.Collections.Generic.IDictionary<string, string> OvfNetworkMap = null,
    System.Collections.Generic.IDictionary<string, string> OvfStorageMap = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.templateUuid">TemplateUuid</a></code> | <code>string</code> | The UUID of the source virtual machine or template. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customizationSpec">CustomizationSpec</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | customization_spec block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customize">Customize</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | customize block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.linkedClone">LinkedClone</a></code> | <code>object</code> | Whether or not to create a linked clone when cloning. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping of ovf networks to the networks to use in vSphere. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfStorageMap">OvfStorageMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping of ovf storage to the datastores to use in vSphere. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.timeout">Timeout</a></code> | <code>double</code> | The timeout, in minutes, to wait for the virtual machine clone to complete. |

---

##### `TemplateUuid`<sup>Required</sup> <a name="TemplateUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.templateUuid"></a>

```csharp
public string TemplateUuid { get; set; }
```

- *Type:* string

The UUID of the source virtual machine or template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#template_uuid VirtualMachine#template_uuid}

---

##### `CustomizationSpec`<sup>Optional</sup> <a name="CustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customizationSpec"></a>

```csharp
public VirtualMachineCloneCustomizationSpec CustomizationSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

customization_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#customization_spec VirtualMachine#customization_spec}

---

##### `Customize`<sup>Optional</sup> <a name="Customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customize"></a>

```csharp
public VirtualMachineCloneCustomize Customize { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

customize block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#customize VirtualMachine#customize}

---

##### `LinkedClone`<sup>Optional</sup> <a name="LinkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.linkedClone"></a>

```csharp
public object LinkedClone { get; set; }
```

- *Type:* object

Whether or not to create a linked clone when cloning.

When this option is used, the source VM must have a single snapshot associated with it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#linked_clone VirtualMachine#linked_clone}

---

##### `OvfNetworkMap`<sup>Optional</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfNetworkMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfNetworkMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping of ovf networks to the networks to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

##### `OvfStorageMap`<sup>Optional</sup> <a name="OvfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfStorageMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfStorageMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping of ovf storage to the datastores to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ovf_storage_map VirtualMachine#ovf_storage_map}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

The timeout, in minutes, to wait for the virtual machine clone to complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

### VirtualMachineCloneCustomizationSpec <a name="VirtualMachineCloneCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneCustomizationSpec {
    string Id,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.id">Id</a></code> | <code>string</code> | The unique identifier of the customization specification is its name and is unique per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.timeout">Timeout</a></code> | <code>double</code> | The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique identifier of the customization specification is its name and is unique per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#id VirtualMachine#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

### VirtualMachineCloneCustomize <a name="VirtualMachineCloneCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneCustomize {
    string[] DnsServerList = null,
    string[] DnsSuffixList = null,
    string Ipv4Gateway = null,
    string Ipv6Gateway = null,
    VirtualMachineCloneCustomizeLinuxOptions LinuxOptions = null,
    object NetworkInterface = null,
    double Timeout = null,
    VirtualMachineCloneCustomizeWindowsOptions WindowsOptions = null,
    string WindowsSysprepText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsServerList">DnsServerList</a></code> | <code>string[]</code> | The list of DNS servers for a virtual network adapter with a static IP address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsSuffixList">DnsSuffixList</a></code> | <code>string[]</code> | A list of DNS search domains to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv4Gateway">Ipv4Gateway</a></code> | <code>string</code> | The IPv4 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv6Gateway">Ipv6Gateway</a></code> | <code>string</code> | The IPv6 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.linuxOptions">LinuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | linux_options block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.timeout">Timeout</a></code> | <code>double</code> | The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsOptions">WindowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | windows_options block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsSysprepText">WindowsSysprepText</a></code> | <code>string</code> | Use this option to specify a windows sysprep file directly. |

---

##### `DnsServerList`<sup>Optional</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsServerList"></a>

```csharp
public string[] DnsServerList { get; set; }
```

- *Type:* string[]

The list of DNS servers for a virtual network adapter with a static IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}

---

##### `DnsSuffixList`<sup>Optional</sup> <a name="DnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsSuffixList"></a>

```csharp
public string[] DnsSuffixList { get; set; }
```

- *Type:* string[]

A list of DNS search domains to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#dns_suffix_list VirtualMachine#dns_suffix_list}

---

##### `Ipv4Gateway`<sup>Optional</sup> <a name="Ipv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv4Gateway"></a>

```csharp
public string Ipv4Gateway { get; set; }
```

- *Type:* string

The IPv4 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ipv4_gateway VirtualMachine#ipv4_gateway}

---

##### `Ipv6Gateway`<sup>Optional</sup> <a name="Ipv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv6Gateway"></a>

```csharp
public string Ipv6Gateway { get; set; }
```

- *Type:* string

The IPv6 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ipv6_gateway VirtualMachine#ipv6_gateway}

---

##### `LinuxOptions`<sup>Optional</sup> <a name="LinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.linuxOptions"></a>

```csharp
public VirtualMachineCloneCustomizeLinuxOptions LinuxOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#linux_options VirtualMachine#linux_options}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

##### `WindowsOptions`<sup>Optional</sup> <a name="WindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsOptions"></a>

```csharp
public VirtualMachineCloneCustomizeWindowsOptions WindowsOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

windows_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#windows_options VirtualMachine#windows_options}

---

##### `WindowsSysprepText`<sup>Optional</sup> <a name="WindowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsSysprepText"></a>

```csharp
public string WindowsSysprepText { get; set; }
```

- *Type:* string

Use this option to specify a windows sysprep file directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#windows_sysprep_text VirtualMachine#windows_sysprep_text}

---

### VirtualMachineCloneCustomizeLinuxOptions <a name="VirtualMachineCloneCustomizeLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneCustomizeLinuxOptions {
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
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.domain">Domain</a></code> | <code>string</code> | The domain name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hostName">HostName</a></code> | <code>string</code> | The hostname for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hwClockUtc">HwClockUtc</a></code> | <code>object</code> | Specifies whether or not the hardware clock should be in UTC or not. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.scriptText">ScriptText</a></code> | <code>string</code> | The customization script to run before and or after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.timeZone">TimeZone</a></code> | <code>string</code> | Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The domain name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#domain VirtualMachine#domain}

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

The hostname for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#host_name VirtualMachine#host_name}

---

##### `HwClockUtc`<sup>Optional</sup> <a name="HwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hwClockUtc"></a>

```csharp
public object HwClockUtc { get; set; }
```

- *Type:* object

Specifies whether or not the hardware clock should be in UTC or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#hw_clock_utc VirtualMachine#hw_clock_utc}

---

##### `ScriptText`<sup>Optional</sup> <a name="ScriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.scriptText"></a>

```csharp
public string ScriptText { get; set; }
```

- *Type:* string

The customization script to run before and or after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#script_text VirtualMachine#script_text}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

### VirtualMachineCloneCustomizeNetworkInterface <a name="VirtualMachineCloneCustomizeNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneCustomizeNetworkInterface {
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
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsDomain">DnsDomain</a></code> | <code>string</code> | A DNS search domain to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsServerList">DnsServerList</a></code> | <code>string[]</code> | Network-interface specific DNS settings for Windows operating systems. Ignored on Linux. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | The IPv4 address assigned to this network adapter. If left blank, DHCP is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Netmask">Ipv4Netmask</a></code> | <code>double</code> | The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Netmask">Ipv6Netmask</a></code> | <code>double</code> | The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected. |

---

##### `DnsDomain`<sup>Optional</sup> <a name="DnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsDomain"></a>

```csharp
public string DnsDomain { get; set; }
```

- *Type:* string

A DNS search domain to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#dns_domain VirtualMachine#dns_domain}

---

##### `DnsServerList`<sup>Optional</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsServerList"></a>

```csharp
public string[] DnsServerList { get; set; }
```

- *Type:* string[]

Network-interface specific DNS settings for Windows operating systems. Ignored on Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}

---

##### `Ipv4Address`<sup>Optional</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; set; }
```

- *Type:* string

The IPv4 address assigned to this network adapter. If left blank, DHCP is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ipv4_address VirtualMachine#ipv4_address}

---

##### `Ipv4Netmask`<sup>Optional</sup> <a name="Ipv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Netmask"></a>

```csharp
public double Ipv4Netmask { get; set; }
```

- *Type:* double

The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ipv4_netmask VirtualMachine#ipv4_netmask}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ipv6_address VirtualMachine#ipv6_address}

---

##### `Ipv6Netmask`<sup>Optional</sup> <a name="Ipv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Netmask"></a>

```csharp
public double Ipv6Netmask { get; set; }
```

- *Type:* double

The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ipv6_netmask VirtualMachine#ipv6_netmask}

---

### VirtualMachineCloneCustomizeWindowsOptions <a name="VirtualMachineCloneCustomizeWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneCustomizeWindowsOptions {
    string ComputerName,
    string AdminPassword = null,
    object AutoLogon = null,
    double AutoLogonCount = null,
    string DomainAdminPassword = null,
    string DomainAdminUser = null,
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
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.computerName">ComputerName</a></code> | <code>string</code> | The host name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.adminPassword">AdminPassword</a></code> | <code>string</code> | The new administrator password for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogon">AutoLogon</a></code> | <code>object</code> | Specifies whether or not the VM automatically logs on as Administrator. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogonCount">AutoLogonCount</a></code> | <code>double</code> | Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminPassword">DomainAdminPassword</a></code> | <code>string</code> | The password of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminUser">DomainAdminUser</a></code> | <code>string</code> | The user account of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.fullName">FullName</a></code> | <code>string</code> | The full name of the user of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.joinDomain">JoinDomain</a></code> | <code>string</code> | The domain that the virtual machine should join. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.organizationName">OrganizationName</a></code> | <code>string</code> | The organization name this virtual machine is being installed for. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.productKey">ProductKey</a></code> | <code>string</code> | The product key for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.runOnceCommandList">RunOnceCommandList</a></code> | <code>string[]</code> | A list of commands to run at first user logon, after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.timeZone">TimeZone</a></code> | <code>double</code> | The new time zone for the virtual machine. This is a sysprep-dictated timezone code. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.workgroup">Workgroup</a></code> | <code>string</code> | The workgroup for this virtual machine if not joining a domain. |

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.computerName"></a>

```csharp
public string ComputerName { get; set; }
```

- *Type:* string

The host name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

The new administrator password for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}

---

##### `AutoLogon`<sup>Optional</sup> <a name="AutoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogon"></a>

```csharp
public object AutoLogon { get; set; }
```

- *Type:* object

Specifies whether or not the VM automatically logs on as Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#auto_logon VirtualMachine#auto_logon}

---

##### `AutoLogonCount`<sup>Optional</sup> <a name="AutoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogonCount"></a>

```csharp
public double AutoLogonCount { get; set; }
```

- *Type:* double

Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#auto_logon_count VirtualMachine#auto_logon_count}

---

##### `DomainAdminPassword`<sup>Optional</sup> <a name="DomainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminPassword"></a>

```csharp
public string DomainAdminPassword { get; set; }
```

- *Type:* string

The password of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#domain_admin_password VirtualMachine#domain_admin_password}

---

##### `DomainAdminUser`<sup>Optional</sup> <a name="DomainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminUser"></a>

```csharp
public string DomainAdminUser { get; set; }
```

- *Type:* string

The user account of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#domain_admin_user VirtualMachine#domain_admin_user}

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

The full name of the user of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#full_name VirtualMachine#full_name}

---

##### `JoinDomain`<sup>Optional</sup> <a name="JoinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.joinDomain"></a>

```csharp
public string JoinDomain { get; set; }
```

- *Type:* string

The domain that the virtual machine should join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#join_domain VirtualMachine#join_domain}

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.organizationName"></a>

```csharp
public string OrganizationName { get; set; }
```

- *Type:* string

The organization name this virtual machine is being installed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#organization_name VirtualMachine#organization_name}

---

##### `ProductKey`<sup>Optional</sup> <a name="ProductKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.productKey"></a>

```csharp
public string ProductKey { get; set; }
```

- *Type:* string

The product key for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#product_key VirtualMachine#product_key}

---

##### `RunOnceCommandList`<sup>Optional</sup> <a name="RunOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.runOnceCommandList"></a>

```csharp
public string[] RunOnceCommandList { get; set; }
```

- *Type:* string[]

A list of commands to run at first user logon, after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#run_once_command_list VirtualMachine#run_once_command_list}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.timeZone"></a>

```csharp
public double TimeZone { get; set; }
```

- *Type:* double

The new time zone for the virtual machine. This is a sysprep-dictated timezone code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

##### `Workgroup`<sup>Optional</sup> <a name="Workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.workgroup"></a>

```csharp
public string Workgroup { get; set; }
```

- *Type:* string

The workgroup for this virtual machine if not joining a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#workgroup VirtualMachine#workgroup}

---

### VirtualMachineConfig <a name="VirtualMachineConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourcePoolId,
    string AlternateGuestName = null,
    string Annotation = null,
    double BootDelay = null,
    double BootRetryDelay = null,
    object BootRetryEnabled = null,
    object Cdrom = null,
    VirtualMachineClone Clone = null,
    object CpuHotAddEnabled = null,
    object CpuHotRemoveEnabled = null,
    double CpuLimit = null,
    object CpuPerformanceCountersEnabled = null,
    double CpuReservation = null,
    double CpuShareCount = null,
    string CpuShareLevel = null,
    System.Collections.Generic.IDictionary<string, string> CustomAttributes = null,
    string DatacenterId = null,
    string DatastoreClusterId = null,
    string DatastoreId = null,
    object Disk = null,
    object EfiSecureBootEnabled = null,
    object EnableDiskUuid = null,
    object EnableLogging = null,
    string EptRviMode = null,
    System.Collections.Generic.IDictionary<string, string> ExtraConfig = null,
    object ExtraConfigRebootRequired = null,
    string Firmware = null,
    string Folder = null,
    object ForcePowerOff = null,
    string GuestId = null,
    double HardwareVersion = null,
    string HostSystemId = null,
    string HvMode = null,
    string Id = null,
    double IdeControllerCount = null,
    string[] IgnoredGuestIps = null,
    string LatencySensitivity = null,
    double Memory = null,
    object MemoryHotAddEnabled = null,
    double MemoryLimit = null,
    double MemoryReservation = null,
    double MemoryShareCount = null,
    string MemoryShareLevel = null,
    double MigrateWaitTimeout = null,
    object NestedHvEnabled = null,
    object NetworkInterface = null,
    double NumCoresPerSocket = null,
    double NumCpus = null,
    VirtualMachineOvfDeploy OvfDeploy = null,
    string[] PciDeviceId = null,
    double PoweronTimeout = null,
    string ReplaceTrigger = null,
    object RunToolsScriptsAfterPowerOn = null,
    object RunToolsScriptsAfterResume = null,
    object RunToolsScriptsBeforeGuestReboot = null,
    object RunToolsScriptsBeforeGuestShutdown = null,
    object RunToolsScriptsBeforeGuestStandby = null,
    double SataControllerCount = null,
    string ScsiBusSharing = null,
    double ScsiControllerCount = null,
    string ScsiType = null,
    double ShutdownWaitTimeout = null,
    string StoragePolicyId = null,
    string SwapPlacementPolicy = null,
    object SyncTimeWithHost = null,
    object SyncTimeWithHostPeriodically = null,
    string[] Tags = null,
    string ToolsUpgradePolicy = null,
    VirtualMachineVapp Vapp = null,
    object VbsEnabled = null,
    object VvtdEnabled = null,
    double WaitForGuestIpTimeout = null,
    object WaitForGuestNetRoutable = null,
    double WaitForGuestNetTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.name">Name</a></code> | <code>string</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.resourcePoolId">ResourcePoolId</a></code> | <code>string</code> | The ID of a resource pool to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.alternateGuestName">AlternateGuestName</a></code> | <code>string</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.annotation">Annotation</a></code> | <code>string</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootDelay">BootDelay</a></code> | <code>double</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryDelay">BootRetryDelay</a></code> | <code>double</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryEnabled">BootRetryEnabled</a></code> | <code>object</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cdrom">Cdrom</a></code> | <code>object</code> | cdrom block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.clone">Clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotAddEnabled">CpuHotAddEnabled</a></code> | <code>object</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotRemoveEnabled">CpuHotRemoveEnabled</a></code> | <code>object</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuLimit">CpuLimit</a></code> | <code>double</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuPerformanceCountersEnabled">CpuPerformanceCountersEnabled</a></code> | <code>object</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuReservation">CpuReservation</a></code> | <code>double</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareCount">CpuShareCount</a></code> | <code>double</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareLevel">CpuShareLevel</a></code> | <code>string</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.customAttributes">CustomAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datacenterId">DatacenterId</a></code> | <code>string</code> | The ID of the datacenter where the VM is to be created. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreClusterId">DatastoreClusterId</a></code> | <code>string</code> | The ID of a datastore cluster to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreId">DatastoreId</a></code> | <code>string</code> | The ID of the virtual machine's datastore. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.disk">Disk</a></code> | <code>object</code> | disk block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.efiSecureBootEnabled">EfiSecureBootEnabled</a></code> | <code>object</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableDiskUuid">EnableDiskUuid</a></code> | <code>object</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableLogging">EnableLogging</a></code> | <code>object</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.eptRviMode">EptRviMode</a></code> | <code>string</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfig">ExtraConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfigRebootRequired">ExtraConfigRebootRequired</a></code> | <code>object</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.firmware">Firmware</a></code> | <code>string</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.folder">Folder</a></code> | <code>string</code> | The name of the folder to locate the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forcePowerOff">ForcePowerOff</a></code> | <code>object</code> | Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.guestId">GuestId</a></code> | <code>string</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hardwareVersion">HardwareVersion</a></code> | <code>double</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hostSystemId">HostSystemId</a></code> | <code>string</code> | The ID of an optional host system to pin the virtual machine to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hvMode">HvMode</a></code> | <code>string</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ideControllerCount">IdeControllerCount</a></code> | <code>double</code> | The number of IDE controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ignoredGuestIps">IgnoredGuestIps</a></code> | <code>string[]</code> | List of IP addresses and CIDR networks to ignore while waiting for an IP. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.latencySensitivity">LatencySensitivity</a></code> | <code>string</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memory">Memory</a></code> | <code>double</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryHotAddEnabled">MemoryHotAddEnabled</a></code> | <code>object</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareCount">MemoryShareCount</a></code> | <code>double</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>string</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.migrateWaitTimeout">MigrateWaitTimeout</a></code> | <code>double</code> | The amount of time, in minutes, to wait for a vMotion operation to complete before failing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.nestedHvEnabled">NestedHvEnabled</a></code> | <code>object</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCoresPerSocket">NumCoresPerSocket</a></code> | <code>double</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCpus">NumCpus</a></code> | <code>double</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ovfDeploy">OvfDeploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | ovf_deploy block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.pciDeviceId">PciDeviceId</a></code> | <code>string[]</code> | A list of PCI passthrough devices. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.poweronTimeout">PoweronTimeout</a></code> | <code>double</code> | The amount of time, in seconds, that we will be trying to power on a VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.replaceTrigger">ReplaceTrigger</a></code> | <code>string</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterPowerOn">RunToolsScriptsAfterPowerOn</a></code> | <code>object</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterResume">RunToolsScriptsAfterResume</a></code> | <code>object</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot">RunToolsScriptsBeforeGuestReboot</a></code> | <code>object</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown">RunToolsScriptsBeforeGuestShutdown</a></code> | <code>object</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby">RunToolsScriptsBeforeGuestStandby</a></code> | <code>object</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.sataControllerCount">SataControllerCount</a></code> | <code>double</code> | The number of SATA controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiBusSharing">ScsiBusSharing</a></code> | <code>string</code> | Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiControllerCount">ScsiControllerCount</a></code> | <code>double</code> | The number of SCSI controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiType">ScsiType</a></code> | <code>string</code> | The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.shutdownWaitTimeout">ShutdownWaitTimeout</a></code> | <code>double</code> | The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.storagePolicyId">StoragePolicyId</a></code> | <code>string</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.swapPlacementPolicy">SwapPlacementPolicy</a></code> | <code>string</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHost">SyncTimeWithHost</a></code> | <code>object</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHostPeriodically">SyncTimeWithHostPeriodically</a></code> | <code>object</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.toolsUpgradePolicy">ToolsUpgradePolicy</a></code> | <code>string</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vapp">Vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vbsEnabled">VbsEnabled</a></code> | <code>object</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vvtdEnabled">VvtdEnabled</a></code> | <code>object</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestIpTimeout">WaitForGuestIpTimeout</a></code> | <code>double</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetRoutable">WaitForGuestNetRoutable</a></code> | <code>object</code> | Controls whether or not the guest network waiter waits for a routable address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetTimeout">WaitForGuestNetTimeout</a></code> | <code>double</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#name VirtualMachine#name}

---

##### `ResourcePoolId`<sup>Required</sup> <a name="ResourcePoolId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.resourcePoolId"></a>

```csharp
public string ResourcePoolId { get; set; }
```

- *Type:* string

The ID of a resource pool to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#resource_pool_id VirtualMachine#resource_pool_id}

---

##### `AlternateGuestName`<sup>Optional</sup> <a name="AlternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.alternateGuestName"></a>

```csharp
public string AlternateGuestName { get; set; }
```

- *Type:* string

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#alternate_guest_name VirtualMachine#alternate_guest_name}

---

##### `Annotation`<sup>Optional</sup> <a name="Annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.annotation"></a>

```csharp
public string Annotation { get; set; }
```

- *Type:* string

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#annotation VirtualMachine#annotation}

---

##### `BootDelay`<sup>Optional</sup> <a name="BootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootDelay"></a>

```csharp
public double BootDelay { get; set; }
```

- *Type:* double

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#boot_delay VirtualMachine#boot_delay}

---

##### `BootRetryDelay`<sup>Optional</sup> <a name="BootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryDelay"></a>

```csharp
public double BootRetryDelay { get; set; }
```

- *Type:* double

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#boot_retry_delay VirtualMachine#boot_retry_delay}

---

##### `BootRetryEnabled`<sup>Optional</sup> <a name="BootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryEnabled"></a>

```csharp
public object BootRetryEnabled { get; set; }
```

- *Type:* object

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#boot_retry_enabled VirtualMachine#boot_retry_enabled}

---

##### `Cdrom`<sup>Optional</sup> <a name="Cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cdrom"></a>

```csharp
public object Cdrom { get; set; }
```

- *Type:* object

cdrom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#cdrom VirtualMachine#cdrom}

---

##### `Clone`<sup>Optional</sup> <a name="Clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.clone"></a>

```csharp
public VirtualMachineClone Clone { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#clone VirtualMachine#clone}

---

##### `CpuHotAddEnabled`<sup>Optional</sup> <a name="CpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotAddEnabled"></a>

```csharp
public object CpuHotAddEnabled { get; set; }
```

- *Type:* object

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#cpu_hot_add_enabled VirtualMachine#cpu_hot_add_enabled}

---

##### `CpuHotRemoveEnabled`<sup>Optional</sup> <a name="CpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotRemoveEnabled"></a>

```csharp
public object CpuHotRemoveEnabled { get; set; }
```

- *Type:* object

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#cpu_hot_remove_enabled VirtualMachine#cpu_hot_remove_enabled}

---

##### `CpuLimit`<sup>Optional</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuLimit"></a>

```csharp
public double CpuLimit { get; set; }
```

- *Type:* double

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#cpu_limit VirtualMachine#cpu_limit}

---

##### `CpuPerformanceCountersEnabled`<sup>Optional</sup> <a name="CpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuPerformanceCountersEnabled"></a>

```csharp
public object CpuPerformanceCountersEnabled { get; set; }
```

- *Type:* object

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#cpu_performance_counters_enabled VirtualMachine#cpu_performance_counters_enabled}

---

##### `CpuReservation`<sup>Optional</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuReservation"></a>

```csharp
public double CpuReservation { get; set; }
```

- *Type:* double

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#cpu_reservation VirtualMachine#cpu_reservation}

---

##### `CpuShareCount`<sup>Optional</sup> <a name="CpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareCount"></a>

```csharp
public double CpuShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#cpu_share_count VirtualMachine#cpu_share_count}

---

##### `CpuShareLevel`<sup>Optional</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareLevel"></a>

```csharp
public string CpuShareLevel { get; set; }
```

- *Type:* string

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#cpu_share_level VirtualMachine#cpu_share_level}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.customAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#custom_attributes VirtualMachine#custom_attributes}

---

##### `DatacenterId`<sup>Optional</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

The ID of the datacenter where the VM is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#datacenter_id VirtualMachine#datacenter_id}

---

##### `DatastoreClusterId`<sup>Optional</sup> <a name="DatastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreClusterId"></a>

```csharp
public string DatastoreClusterId { get; set; }
```

- *Type:* string

The ID of a datastore cluster to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#datastore_cluster_id VirtualMachine#datastore_cluster_id}

---

##### `DatastoreId`<sup>Optional</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreId"></a>

```csharp
public string DatastoreId { get; set; }
```

- *Type:* string

The ID of the virtual machine's datastore.

The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.disk"></a>

```csharp
public object Disk { get; set; }
```

- *Type:* object

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#disk VirtualMachine#disk}

---

##### `EfiSecureBootEnabled`<sup>Optional</sup> <a name="EfiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.efiSecureBootEnabled"></a>

```csharp
public object EfiSecureBootEnabled { get; set; }
```

- *Type:* object

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#efi_secure_boot_enabled VirtualMachine#efi_secure_boot_enabled}

---

##### `EnableDiskUuid`<sup>Optional</sup> <a name="EnableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableDiskUuid"></a>

```csharp
public object EnableDiskUuid { get; set; }
```

- *Type:* object

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#enable_disk_uuid VirtualMachine#enable_disk_uuid}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableLogging"></a>

```csharp
public object EnableLogging { get; set; }
```

- *Type:* object

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#enable_logging VirtualMachine#enable_logging}

---

##### `EptRviMode`<sup>Optional</sup> <a name="EptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.eptRviMode"></a>

```csharp
public string EptRviMode { get; set; }
```

- *Type:* string

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ept_rvi_mode VirtualMachine#ept_rvi_mode}

---

##### `ExtraConfig`<sup>Optional</sup> <a name="ExtraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#extra_config VirtualMachine#extra_config}

---

##### `ExtraConfigRebootRequired`<sup>Optional</sup> <a name="ExtraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfigRebootRequired"></a>

```csharp
public object ExtraConfigRebootRequired { get; set; }
```

- *Type:* object

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#extra_config_reboot_required VirtualMachine#extra_config_reboot_required}

---

##### `Firmware`<sup>Optional</sup> <a name="Firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.firmware"></a>

```csharp
public string Firmware { get; set; }
```

- *Type:* string

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#firmware VirtualMachine#firmware}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The name of the folder to locate the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#folder VirtualMachine#folder}

---

##### `ForcePowerOff`<sup>Optional</sup> <a name="ForcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forcePowerOff"></a>

```csharp
public object ForcePowerOff { get; set; }
```

- *Type:* object

Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#force_power_off VirtualMachine#force_power_off}

---

##### `GuestId`<sup>Optional</sup> <a name="GuestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.guestId"></a>

```csharp
public string GuestId { get; set; }
```

- *Type:* string

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#guest_id VirtualMachine#guest_id}

---

##### `HardwareVersion`<sup>Optional</sup> <a name="HardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hardwareVersion"></a>

```csharp
public double HardwareVersion { get; set; }
```

- *Type:* double

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#hardware_version VirtualMachine#hardware_version}

---

##### `HostSystemId`<sup>Optional</sup> <a name="HostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hostSystemId"></a>

```csharp
public string HostSystemId { get; set; }
```

- *Type:* string

The ID of an optional host system to pin the virtual machine to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#host_system_id VirtualMachine#host_system_id}

---

##### `HvMode`<sup>Optional</sup> <a name="HvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hvMode"></a>

```csharp
public string HvMode { get; set; }
```

- *Type:* string

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#hv_mode VirtualMachine#hv_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdeControllerCount`<sup>Optional</sup> <a name="IdeControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ideControllerCount"></a>

```csharp
public double IdeControllerCount { get; set; }
```

- *Type:* double

The number of IDE controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ide_controller_count VirtualMachine#ide_controller_count}

---

##### `IgnoredGuestIps`<sup>Optional</sup> <a name="IgnoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ignoredGuestIps"></a>

```csharp
public string[] IgnoredGuestIps { get; set; }
```

- *Type:* string[]

List of IP addresses and CIDR networks to ignore while waiting for an IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ignored_guest_ips VirtualMachine#ignored_guest_ips}

---

##### `LatencySensitivity`<sup>Optional</sup> <a name="LatencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.latencySensitivity"></a>

```csharp
public string LatencySensitivity { get; set; }
```

- *Type:* string

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#latency_sensitivity VirtualMachine#latency_sensitivity}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#memory VirtualMachine#memory}

---

##### `MemoryHotAddEnabled`<sup>Optional</sup> <a name="MemoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryHotAddEnabled"></a>

```csharp
public object MemoryHotAddEnabled { get; set; }
```

- *Type:* object

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#memory_hot_add_enabled VirtualMachine#memory_hot_add_enabled}

---

##### `MemoryLimit`<sup>Optional</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; set; }
```

- *Type:* double

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#memory_limit VirtualMachine#memory_limit}

---

##### `MemoryReservation`<sup>Optional</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; set; }
```

- *Type:* double

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#memory_reservation VirtualMachine#memory_reservation}

---

##### `MemoryShareCount`<sup>Optional</sup> <a name="MemoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareCount"></a>

```csharp
public double MemoryShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#memory_share_count VirtualMachine#memory_share_count}

---

##### `MemoryShareLevel`<sup>Optional</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareLevel"></a>

```csharp
public string MemoryShareLevel { get; set; }
```

- *Type:* string

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#memory_share_level VirtualMachine#memory_share_level}

---

##### `MigrateWaitTimeout`<sup>Optional</sup> <a name="MigrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.migrateWaitTimeout"></a>

```csharp
public double MigrateWaitTimeout { get; set; }
```

- *Type:* double

The amount of time, in minutes, to wait for a vMotion operation to complete before failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#migrate_wait_timeout VirtualMachine#migrate_wait_timeout}

---

##### `NestedHvEnabled`<sup>Optional</sup> <a name="NestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.nestedHvEnabled"></a>

```csharp
public object NestedHvEnabled { get; set; }
```

- *Type:* object

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#nested_hv_enabled VirtualMachine#nested_hv_enabled}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `NumCoresPerSocket`<sup>Optional</sup> <a name="NumCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCoresPerSocket"></a>

```csharp
public double NumCoresPerSocket { get; set; }
```

- *Type:* double

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#num_cores_per_socket VirtualMachine#num_cores_per_socket}

---

##### `NumCpus`<sup>Optional</sup> <a name="NumCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCpus"></a>

```csharp
public double NumCpus { get; set; }
```

- *Type:* double

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#num_cpus VirtualMachine#num_cpus}

---

##### `OvfDeploy`<sup>Optional</sup> <a name="OvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ovfDeploy"></a>

```csharp
public VirtualMachineOvfDeploy OvfDeploy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

ovf_deploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ovf_deploy VirtualMachine#ovf_deploy}

---

##### `PciDeviceId`<sup>Optional</sup> <a name="PciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.pciDeviceId"></a>

```csharp
public string[] PciDeviceId { get; set; }
```

- *Type:* string[]

A list of PCI passthrough devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#pci_device_id VirtualMachine#pci_device_id}

---

##### `PoweronTimeout`<sup>Optional</sup> <a name="PoweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.poweronTimeout"></a>

```csharp
public double PoweronTimeout { get; set; }
```

- *Type:* double

The amount of time, in seconds, that we will be trying to power on a VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#poweron_timeout VirtualMachine#poweron_timeout}

---

##### `ReplaceTrigger`<sup>Optional</sup> <a name="ReplaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.replaceTrigger"></a>

```csharp
public string ReplaceTrigger { get; set; }
```

- *Type:* string

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#replace_trigger VirtualMachine#replace_trigger}

---

##### `RunToolsScriptsAfterPowerOn`<sup>Optional</sup> <a name="RunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterPowerOn"></a>

```csharp
public object RunToolsScriptsAfterPowerOn { get; set; }
```

- *Type:* object

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#run_tools_scripts_after_power_on VirtualMachine#run_tools_scripts_after_power_on}

---

##### `RunToolsScriptsAfterResume`<sup>Optional</sup> <a name="RunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterResume"></a>

```csharp
public object RunToolsScriptsAfterResume { get; set; }
```

- *Type:* object

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#run_tools_scripts_after_resume VirtualMachine#run_tools_scripts_after_resume}

---

##### `RunToolsScriptsBeforeGuestReboot`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot"></a>

```csharp
public object RunToolsScriptsBeforeGuestReboot { get; set; }
```

- *Type:* object

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_reboot VirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `RunToolsScriptsBeforeGuestShutdown`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown"></a>

```csharp
public object RunToolsScriptsBeforeGuestShutdown { get; set; }
```

- *Type:* object

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_shutdown VirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `RunToolsScriptsBeforeGuestStandby`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby"></a>

```csharp
public object RunToolsScriptsBeforeGuestStandby { get; set; }
```

- *Type:* object

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_standby VirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `SataControllerCount`<sup>Optional</sup> <a name="SataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.sataControllerCount"></a>

```csharp
public double SataControllerCount { get; set; }
```

- *Type:* double

The number of SATA controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#sata_controller_count VirtualMachine#sata_controller_count}

---

##### `ScsiBusSharing`<sup>Optional</sup> <a name="ScsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiBusSharing"></a>

```csharp
public string ScsiBusSharing { get; set; }
```

- *Type:* string

Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#scsi_bus_sharing VirtualMachine#scsi_bus_sharing}

---

##### `ScsiControllerCount`<sup>Optional</sup> <a name="ScsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiControllerCount"></a>

```csharp
public double ScsiControllerCount { get; set; }
```

- *Type:* double

The number of SCSI controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#scsi_controller_count VirtualMachine#scsi_controller_count}

---

##### `ScsiType`<sup>Optional</sup> <a name="ScsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiType"></a>

```csharp
public string ScsiType { get; set; }
```

- *Type:* string

The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#scsi_type VirtualMachine#scsi_type}

---

##### `ShutdownWaitTimeout`<sup>Optional</sup> <a name="ShutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.shutdownWaitTimeout"></a>

```csharp
public double ShutdownWaitTimeout { get; set; }
```

- *Type:* double

The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#shutdown_wait_timeout VirtualMachine#shutdown_wait_timeout}

---

##### `StoragePolicyId`<sup>Optional</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.storagePolicyId"></a>

```csharp
public string StoragePolicyId { get; set; }
```

- *Type:* string

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `SwapPlacementPolicy`<sup>Optional</sup> <a name="SwapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.swapPlacementPolicy"></a>

```csharp
public string SwapPlacementPolicy { get; set; }
```

- *Type:* string

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#swap_placement_policy VirtualMachine#swap_placement_policy}

---

##### `SyncTimeWithHost`<sup>Optional</sup> <a name="SyncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHost"></a>

```csharp
public object SyncTimeWithHost { get; set; }
```

- *Type:* object

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#sync_time_with_host VirtualMachine#sync_time_with_host}

---

##### `SyncTimeWithHostPeriodically`<sup>Optional</sup> <a name="SyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHostPeriodically"></a>

```csharp
public object SyncTimeWithHostPeriodically { get; set; }
```

- *Type:* object

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#sync_time_with_host_periodically VirtualMachine#sync_time_with_host_periodically}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#tags VirtualMachine#tags}

---

##### `ToolsUpgradePolicy`<sup>Optional</sup> <a name="ToolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.toolsUpgradePolicy"></a>

```csharp
public string ToolsUpgradePolicy { get; set; }
```

- *Type:* string

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#tools_upgrade_policy VirtualMachine#tools_upgrade_policy}

---

##### `Vapp`<sup>Optional</sup> <a name="Vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vapp"></a>

```csharp
public VirtualMachineVapp Vapp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#vapp VirtualMachine#vapp}

---

##### `VbsEnabled`<sup>Optional</sup> <a name="VbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vbsEnabled"></a>

```csharp
public object VbsEnabled { get; set; }
```

- *Type:* object

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#vbs_enabled VirtualMachine#vbs_enabled}

---

##### `VvtdEnabled`<sup>Optional</sup> <a name="VvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vvtdEnabled"></a>

```csharp
public object VvtdEnabled { get; set; }
```

- *Type:* object

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#vvtd_enabled VirtualMachine#vvtd_enabled}

---

##### `WaitForGuestIpTimeout`<sup>Optional</sup> <a name="WaitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestIpTimeout"></a>

```csharp
public double WaitForGuestIpTimeout { get; set; }
```

- *Type:* double

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#wait_for_guest_ip_timeout VirtualMachine#wait_for_guest_ip_timeout}

---

##### `WaitForGuestNetRoutable`<sup>Optional</sup> <a name="WaitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetRoutable"></a>

```csharp
public object WaitForGuestNetRoutable { get; set; }
```

- *Type:* object

Controls whether or not the guest network waiter waits for a routable address.

When false, the waiter does not wait for a default gateway, nor are IP addresses checked against any discovered default gateways as part of its success criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#wait_for_guest_net_routable VirtualMachine#wait_for_guest_net_routable}

---

##### `WaitForGuestNetTimeout`<sup>Optional</sup> <a name="WaitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetTimeout"></a>

```csharp
public double WaitForGuestNetTimeout { get; set; }
```

- *Type:* double

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#wait_for_guest_net_timeout VirtualMachine#wait_for_guest_net_timeout}

---

### VirtualMachineDisk <a name="VirtualMachineDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineDisk {
    string Label,
    object Attach = null,
    string ControllerType = null,
    string DatastoreId = null,
    string DiskMode = null,
    string DiskSharing = null,
    object EagerlyScrub = null,
    double IoLimit = null,
    double IoReservation = null,
    double IoShareCount = null,
    string IoShareLevel = null,
    object KeepOnRemove = null,
    string Path = null,
    double Size = null,
    string StoragePolicyId = null,
    object ThinProvisioned = null,
    double UnitNumber = null,
    object WriteThrough = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.label">Label</a></code> | <code>string</code> | A unique label for this disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.attach">Attach</a></code> | <code>object</code> | If this is true, the disk is attached instead of created. Implies keep_on_remove. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.controllerType">ControllerType</a></code> | <code>string</code> | The type of controller the disk should be connected to. Must be 'scsi', 'sata', or 'ide'. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.datastoreId">DatastoreId</a></code> | <code>string</code> | The datastore ID for this virtual disk, if different than the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskMode">DiskMode</a></code> | <code>string</code> | The mode of this this virtual disk for purposes of writes and snapshotting. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskSharing">DiskSharing</a></code> | <code>string</code> | The sharing mode of this virtual disk. Can be one of sharingMultiWriter or sharingNone. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.eagerlyScrub">EagerlyScrub</a></code> | <code>object</code> | The virtual disk file zeroing policy when thin_provision is not true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioLimit">IoLimit</a></code> | <code>double</code> | The upper limit of IOPS that this disk can use. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioReservation">IoReservation</a></code> | <code>double</code> | The I/O guarantee that this disk has, in IOPS. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareCount">IoShareCount</a></code> | <code>double</code> | The share count for this disk when the share level is custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareLevel">IoShareLevel</a></code> | <code>string</code> | The share allocation level for this disk. Can be one of low, normal, high, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.keepOnRemove">KeepOnRemove</a></code> | <code>object</code> | Set to true to keep the underlying VMDK file when removing this virtual disk from configuration. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.path">Path</a></code> | <code>string</code> | The full path of the virtual disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.size">Size</a></code> | <code>double</code> | The size of the disk, in GB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.storagePolicyId">StoragePolicyId</a></code> | <code>string</code> | The ID of the storage policy to assign to the virtual disk in VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.thinProvisioned">ThinProvisioned</a></code> | <code>object</code> | If true, this disk is thin provisioned, with space for the file being allocated on an as-needed basis. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.unitNumber">UnitNumber</a></code> | <code>double</code> | The unique device number for this disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.writeThrough">WriteThrough</a></code> | <code>object</code> | If true, writes for this disk are sent directly to the filesystem immediately instead of being buffered. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

A unique label for this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#label VirtualMachine#label}

---

##### `Attach`<sup>Optional</sup> <a name="Attach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.attach"></a>

```csharp
public object Attach { get; set; }
```

- *Type:* object

If this is true, the disk is attached instead of created. Implies keep_on_remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#attach VirtualMachine#attach}

---

##### `ControllerType`<sup>Optional</sup> <a name="ControllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.controllerType"></a>

```csharp
public string ControllerType { get; set; }
```

- *Type:* string

The type of controller the disk should be connected to. Must be 'scsi', 'sata', or 'ide'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#controller_type VirtualMachine#controller_type}

---

##### `DatastoreId`<sup>Optional</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.datastoreId"></a>

```csharp
public string DatastoreId { get; set; }
```

- *Type:* string

The datastore ID for this virtual disk, if different than the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `DiskMode`<sup>Optional</sup> <a name="DiskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskMode"></a>

```csharp
public string DiskMode { get; set; }
```

- *Type:* string

The mode of this this virtual disk for purposes of writes and snapshotting.

Can be one of append, independent_nonpersistent, independent_persistent, nonpersistent, persistent, or undoable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#disk_mode VirtualMachine#disk_mode}

---

##### `DiskSharing`<sup>Optional</sup> <a name="DiskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskSharing"></a>

```csharp
public string DiskSharing { get; set; }
```

- *Type:* string

The sharing mode of this virtual disk. Can be one of sharingMultiWriter or sharingNone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#disk_sharing VirtualMachine#disk_sharing}

---

##### `EagerlyScrub`<sup>Optional</sup> <a name="EagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.eagerlyScrub"></a>

```csharp
public object EagerlyScrub { get; set; }
```

- *Type:* object

The virtual disk file zeroing policy when thin_provision is not true.

The default is false, which lazily-zeros the disk, speeding up thick-provisioned disk creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#eagerly_scrub VirtualMachine#eagerly_scrub}

---

##### `IoLimit`<sup>Optional</sup> <a name="IoLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioLimit"></a>

```csharp
public double IoLimit { get; set; }
```

- *Type:* double

The upper limit of IOPS that this disk can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#io_limit VirtualMachine#io_limit}

---

##### `IoReservation`<sup>Optional</sup> <a name="IoReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioReservation"></a>

```csharp
public double IoReservation { get; set; }
```

- *Type:* double

The I/O guarantee that this disk has, in IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#io_reservation VirtualMachine#io_reservation}

---

##### `IoShareCount`<sup>Optional</sup> <a name="IoShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareCount"></a>

```csharp
public double IoShareCount { get; set; }
```

- *Type:* double

The share count for this disk when the share level is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#io_share_count VirtualMachine#io_share_count}

---

##### `IoShareLevel`<sup>Optional</sup> <a name="IoShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareLevel"></a>

```csharp
public string IoShareLevel { get; set; }
```

- *Type:* string

The share allocation level for this disk. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#io_share_level VirtualMachine#io_share_level}

---

##### `KeepOnRemove`<sup>Optional</sup> <a name="KeepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.keepOnRemove"></a>

```csharp
public object KeepOnRemove { get; set; }
```

- *Type:* object

Set to true to keep the underlying VMDK file when removing this virtual disk from configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#keep_on_remove VirtualMachine#keep_on_remove}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The full path of the virtual disk.

This can only be provided if attach is set to true, otherwise it is a read-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#path VirtualMachine#path}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

The size of the disk, in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#size VirtualMachine#size}

---

##### `StoragePolicyId`<sup>Optional</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.storagePolicyId"></a>

```csharp
public string StoragePolicyId { get; set; }
```

- *Type:* string

The ID of the storage policy to assign to the virtual disk in VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `ThinProvisioned`<sup>Optional</sup> <a name="ThinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.thinProvisioned"></a>

```csharp
public object ThinProvisioned { get; set; }
```

- *Type:* object

If true, this disk is thin provisioned, with space for the file being allocated on an as-needed basis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#thin_provisioned VirtualMachine#thin_provisioned}

---

##### `UnitNumber`<sup>Optional</sup> <a name="UnitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.unitNumber"></a>

```csharp
public double UnitNumber { get; set; }
```

- *Type:* double

The unique device number for this disk.

This number determines where on the SCSI bus this device will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#unit_number VirtualMachine#unit_number}

---

##### `WriteThrough`<sup>Optional</sup> <a name="WriteThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.writeThrough"></a>

```csharp
public object WriteThrough { get; set; }
```

- *Type:* object

If true, writes for this disk are sent directly to the filesystem immediately instead of being buffered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#write_through VirtualMachine#write_through}

---

### VirtualMachineNetworkInterface <a name="VirtualMachineNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineNetworkInterface {
    string NetworkId,
    string AdapterType = null,
    double BandwidthLimit = null,
    double BandwidthReservation = null,
    double BandwidthShareCount = null,
    string BandwidthShareLevel = null,
    string MacAddress = null,
    string OvfMapping = null,
    string PhysicalFunction = null,
    object UseStaticMac = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.networkId">NetworkId</a></code> | <code>string</code> | The ID of the network to connect this network interface to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.adapterType">AdapterType</a></code> | <code>string</code> | The controller type. Can be one of e1000, e1000e, sriov, vmxnet3, or vrdma. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthLimit">BandwidthLimit</a></code> | <code>double</code> | The upper bandwidth limit of this network interface, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthReservation">BandwidthReservation</a></code> | <code>double</code> | The bandwidth reservation of this network interface, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareCount">BandwidthShareCount</a></code> | <code>double</code> | The share count for this network interface when the share level is custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareLevel">BandwidthShareLevel</a></code> | <code>string</code> | The bandwidth share allocation level for this interface. Can be one of low, normal, high, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.macAddress">MacAddress</a></code> | <code>string</code> | The MAC address of this network interface. Can only be manually set if use_static_mac is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.ovfMapping">OvfMapping</a></code> | <code>string</code> | Mapping of network interface to OVF network. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.physicalFunction">PhysicalFunction</a></code> | <code>string</code> | The ID of the Physical SR-IOV NIC to attach to, e.g. '0000:d8:00.0'. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.useStaticMac">UseStaticMac</a></code> | <code>object</code> | If true, the mac_address field is treated as a static MAC address and set accordingly. |

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.networkId"></a>

```csharp
public string NetworkId { get; set; }
```

- *Type:* string

The ID of the network to connect this network interface to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#network_id VirtualMachine#network_id}

---

##### `AdapterType`<sup>Optional</sup> <a name="AdapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.adapterType"></a>

```csharp
public string AdapterType { get; set; }
```

- *Type:* string

The controller type. Can be one of e1000, e1000e, sriov, vmxnet3, or vrdma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#adapter_type VirtualMachine#adapter_type}

---

##### `BandwidthLimit`<sup>Optional</sup> <a name="BandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthLimit"></a>

```csharp
public double BandwidthLimit { get; set; }
```

- *Type:* double

The upper bandwidth limit of this network interface, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#bandwidth_limit VirtualMachine#bandwidth_limit}

---

##### `BandwidthReservation`<sup>Optional</sup> <a name="BandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthReservation"></a>

```csharp
public double BandwidthReservation { get; set; }
```

- *Type:* double

The bandwidth reservation of this network interface, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#bandwidth_reservation VirtualMachine#bandwidth_reservation}

---

##### `BandwidthShareCount`<sup>Optional</sup> <a name="BandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareCount"></a>

```csharp
public double BandwidthShareCount { get; set; }
```

- *Type:* double

The share count for this network interface when the share level is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#bandwidth_share_count VirtualMachine#bandwidth_share_count}

---

##### `BandwidthShareLevel`<sup>Optional</sup> <a name="BandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareLevel"></a>

```csharp
public string BandwidthShareLevel { get; set; }
```

- *Type:* string

The bandwidth share allocation level for this interface. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#bandwidth_share_level VirtualMachine#bandwidth_share_level}

---

##### `MacAddress`<sup>Optional</sup> <a name="MacAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.macAddress"></a>

```csharp
public string MacAddress { get; set; }
```

- *Type:* string

The MAC address of this network interface. Can only be manually set if use_static_mac is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#mac_address VirtualMachine#mac_address}

---

##### `OvfMapping`<sup>Optional</sup> <a name="OvfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.ovfMapping"></a>

```csharp
public string OvfMapping { get; set; }
```

- *Type:* string

Mapping of network interface to OVF network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ovf_mapping VirtualMachine#ovf_mapping}

---

##### `PhysicalFunction`<sup>Optional</sup> <a name="PhysicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.physicalFunction"></a>

```csharp
public string PhysicalFunction { get; set; }
```

- *Type:* string

The ID of the Physical SR-IOV NIC to attach to, e.g. '0000:d8:00.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#physical_function VirtualMachine#physical_function}

---

##### `UseStaticMac`<sup>Optional</sup> <a name="UseStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.useStaticMac"></a>

```csharp
public object UseStaticMac { get; set; }
```

- *Type:* object

If true, the mac_address field is treated as a static MAC address and set accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#use_static_mac VirtualMachine#use_static_mac}

---

### VirtualMachineOvfDeploy <a name="VirtualMachineOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineOvfDeploy {
    object AllowUnverifiedSslCert = null,
    string DeploymentOption = null,
    string DiskProvisioning = null,
    object EnableHiddenProperties = null,
    string IpAllocationPolicy = null,
    string IpProtocol = null,
    string LocalOvfPath = null,
    System.Collections.Generic.IDictionary<string, string> OvfNetworkMap = null,
    string RemoteOvfUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.allowUnverifiedSslCert">AllowUnverifiedSslCert</a></code> | <code>object</code> | Allow unverified ssl certificates while deploying ovf/ova from url. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.deploymentOption">DeploymentOption</a></code> | <code>string</code> | The Deployment option to be chosen. If empty, the default option is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.diskProvisioning">DiskProvisioning</a></code> | <code>string</code> | An optional disk provisioning. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.enableHiddenProperties">EnableHiddenProperties</a></code> | <code>object</code> | Allow properties with ovf:userConfigurable=false to be set. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code>string</code> | The IP allocation policy. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The IP protocol. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.localOvfPath">LocalOvfPath</a></code> | <code>string</code> | The absolute path to the ovf/ova file in the local system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.remoteOvfUrl">RemoteOvfUrl</a></code> | <code>string</code> | URL to the remote ovf/ova file to be deployed. |

---

##### `AllowUnverifiedSslCert`<sup>Optional</sup> <a name="AllowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.allowUnverifiedSslCert"></a>

```csharp
public object AllowUnverifiedSslCert { get; set; }
```

- *Type:* object

Allow unverified ssl certificates while deploying ovf/ova from url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#allow_unverified_ssl_cert VirtualMachine#allow_unverified_ssl_cert}

---

##### `DeploymentOption`<sup>Optional</sup> <a name="DeploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.deploymentOption"></a>

```csharp
public string DeploymentOption { get; set; }
```

- *Type:* string

The Deployment option to be chosen. If empty, the default option is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#deployment_option VirtualMachine#deployment_option}

---

##### `DiskProvisioning`<sup>Optional</sup> <a name="DiskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.diskProvisioning"></a>

```csharp
public string DiskProvisioning { get; set; }
```

- *Type:* string

An optional disk provisioning.

If set, all the disks in the deployed ovf will have the same specified disk type (e.g., thin provisioned).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#disk_provisioning VirtualMachine#disk_provisioning}

---

##### `EnableHiddenProperties`<sup>Optional</sup> <a name="EnableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.enableHiddenProperties"></a>

```csharp
public object EnableHiddenProperties { get; set; }
```

- *Type:* object

Allow properties with ovf:userConfigurable=false to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#enable_hidden_properties VirtualMachine#enable_hidden_properties}

---

##### `IpAllocationPolicy`<sup>Optional</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipAllocationPolicy"></a>

```csharp
public string IpAllocationPolicy { get; set; }
```

- *Type:* string

The IP allocation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ip_allocation_policy VirtualMachine#ip_allocation_policy}

---

##### `IpProtocol`<sup>Optional</sup> <a name="IpProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ip_protocol VirtualMachine#ip_protocol}

---

##### `LocalOvfPath`<sup>Optional</sup> <a name="LocalOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.localOvfPath"></a>

```csharp
public string LocalOvfPath { get; set; }
```

- *Type:* string

The absolute path to the ovf/ova file in the local system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#local_ovf_path VirtualMachine#local_ovf_path}

---

##### `OvfNetworkMap`<sup>Optional</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ovfNetworkMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfNetworkMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

##### `RemoteOvfUrl`<sup>Optional</sup> <a name="RemoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.remoteOvfUrl"></a>

```csharp
public string RemoteOvfUrl { get; set; }
```

- *Type:* string

URL to the remote ovf/ova file to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#remote_ovf_url VirtualMachine#remote_ovf_url}

---

### VirtualMachineVapp <a name="VirtualMachineVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineVapp {
    System.Collections.Generic.IDictionary<string, string> Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of customizable vApp properties and their values. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.6.0/docs/resources/virtual_machine#properties VirtualMachine#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineCdromList <a name="VirtualMachineCdromList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCdromList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get"></a>

```csharp
private VirtualMachineCdromOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineCdromOutputReference <a name="VirtualMachineCdromOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCdromOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetClientDevice">ResetClientDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetDatastoreId">ResetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientDevice` <a name="ResetClientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetClientDevice"></a>

```csharp
private void ResetClientDevice()
```

##### `ResetDatastoreId` <a name="ResetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetDatastoreId"></a>

```csharp
private void ResetDatastoreId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.deviceAddress">DeviceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.key">Key</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDeviceInput">ClientDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreIdInput">DatastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDevice">ClientDevice</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreId">DatastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceAddress`<sup>Required</sup> <a name="DeviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.deviceAddress"></a>

```csharp
public string DeviceAddress { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.key"></a>

```csharp
public double Key { get; }
```

- *Type:* double

---

##### `ClientDeviceInput`<sup>Optional</sup> <a name="ClientDeviceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDeviceInput"></a>

```csharp
public object ClientDeviceInput { get; }
```

- *Type:* object

---

##### `DatastoreIdInput`<sup>Optional</sup> <a name="DatastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreIdInput"></a>

```csharp
public string DatastoreIdInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ClientDevice`<sup>Required</sup> <a name="ClientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDevice"></a>

```csharp
public object ClientDevice { get; }
```

- *Type:* object

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreId"></a>

```csharp
public string DatastoreId { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineCloneCustomizationSpecOutputReference <a name="VirtualMachineCloneCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneCustomizationSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineCloneCustomizationSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---


### VirtualMachineCloneCustomizeLinuxOptionsOutputReference <a name="VirtualMachineCloneCustomizeLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneCustomizeLinuxOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetHwClockUtc">ResetHwClockUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetScriptText">ResetScriptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHwClockUtc` <a name="ResetHwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetHwClockUtc"></a>

```csharp
private void ResetHwClockUtc()
```

##### `ResetScriptText` <a name="ResetScriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetScriptText"></a>

```csharp
private void ResetScriptText()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtcInput">HwClockUtcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptTextInput">ScriptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtc">HwClockUtc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptText">ScriptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `HwClockUtcInput`<sup>Optional</sup> <a name="HwClockUtcInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtcInput"></a>

```csharp
public object HwClockUtcInput { get; }
```

- *Type:* object

---

##### `ScriptTextInput`<sup>Optional</sup> <a name="ScriptTextInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptTextInput"></a>

```csharp
public string ScriptTextInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `HwClockUtc`<sup>Required</sup> <a name="HwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtc"></a>

```csharp
public object HwClockUtc { get; }
```

- *Type:* object

---

##### `ScriptText`<sup>Required</sup> <a name="ScriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptText"></a>

```csharp
public string ScriptText { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineCloneCustomizeLinuxOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---


### VirtualMachineCloneCustomizeNetworkInterfaceList <a name="VirtualMachineCloneCustomizeNetworkInterfaceList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneCustomizeNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get"></a>

```csharp
private VirtualMachineCloneCustomizeNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineCloneCustomizeNetworkInterfaceOutputReference <a name="VirtualMachineCloneCustomizeNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneCustomizeNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsDomain">ResetDnsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsServerList">ResetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Address">ResetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Netmask">ResetIpv4Netmask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Netmask">ResetIpv6Netmask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsDomain` <a name="ResetDnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsDomain"></a>

```csharp
private void ResetDnsDomain()
```

##### `ResetDnsServerList` <a name="ResetDnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsServerList"></a>

```csharp
private void ResetDnsServerList()
```

##### `ResetIpv4Address` <a name="ResetIpv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Address"></a>

```csharp
private void ResetIpv4Address()
```

##### `ResetIpv4Netmask` <a name="ResetIpv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Netmask"></a>

```csharp
private void ResetIpv4Netmask()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```

##### `ResetIpv6Netmask` <a name="ResetIpv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Netmask"></a>

```csharp
private void ResetIpv6Netmask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomainInput">DnsDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerListInput">DnsServerListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4NetmaskInput">Ipv4NetmaskInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6NetmaskInput">Ipv6NetmaskInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomain">DnsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Netmask">Ipv4Netmask</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Netmask">Ipv6Netmask</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsDomainInput`<sup>Optional</sup> <a name="DnsDomainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomainInput"></a>

```csharp
public string DnsDomainInput { get; }
```

- *Type:* string

---

##### `DnsServerListInput`<sup>Optional</sup> <a name="DnsServerListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerListInput"></a>

```csharp
public string[] DnsServerListInput { get; }
```

- *Type:* string[]

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4AddressInput"></a>

```csharp
public string Ipv4AddressInput { get; }
```

- *Type:* string

---

##### `Ipv4NetmaskInput`<sup>Optional</sup> <a name="Ipv4NetmaskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4NetmaskInput"></a>

```csharp
public double Ipv4NetmaskInput { get; }
```

- *Type:* double

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `Ipv6NetmaskInput`<sup>Optional</sup> <a name="Ipv6NetmaskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6NetmaskInput"></a>

```csharp
public double Ipv6NetmaskInput { get; }
```

- *Type:* double

---

##### `DnsDomain`<sup>Required</sup> <a name="DnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomain"></a>

```csharp
public string DnsDomain { get; }
```

- *Type:* string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerList"></a>

```csharp
public string[] DnsServerList { get; }
```

- *Type:* string[]

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; }
```

- *Type:* string

---

##### `Ipv4Netmask`<sup>Required</sup> <a name="Ipv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```csharp
public double Ipv4Netmask { get; }
```

- *Type:* double

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Ipv6Netmask`<sup>Required</sup> <a name="Ipv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```csharp
public double Ipv6Netmask { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineCloneCustomizeOutputReference <a name="VirtualMachineCloneCustomizeOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneCustomizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions">PutLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions">PutWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsServerList">ResetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsSuffixList">ResetDnsSuffixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv4Gateway">ResetIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv6Gateway">ResetIpv6Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetLinuxOptions">ResetLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsOptions">ResetWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsSysprepText">ResetWindowsSysprepText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinuxOptions` <a name="PutLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions"></a>

```csharp
private void PutLinuxOptions(VirtualMachineCloneCustomizeLinuxOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutWindowsOptions` <a name="PutWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions"></a>

```csharp
private void PutWindowsOptions(VirtualMachineCloneCustomizeWindowsOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---

##### `ResetDnsServerList` <a name="ResetDnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsServerList"></a>

```csharp
private void ResetDnsServerList()
```

##### `ResetDnsSuffixList` <a name="ResetDnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsSuffixList"></a>

```csharp
private void ResetDnsSuffixList()
```

##### `ResetIpv4Gateway` <a name="ResetIpv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv4Gateway"></a>

```csharp
private void ResetIpv4Gateway()
```

##### `ResetIpv6Gateway` <a name="ResetIpv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv6Gateway"></a>

```csharp
private void ResetIpv6Gateway()
```

##### `ResetLinuxOptions` <a name="ResetLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetLinuxOptions"></a>

```csharp
private void ResetLinuxOptions()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetNetworkInterface"></a>

```csharp
private void ResetNetworkInterface()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetWindowsOptions` <a name="ResetWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsOptions"></a>

```csharp
private void ResetWindowsOptions()
```

##### `ResetWindowsSysprepText` <a name="ResetWindowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsSysprepText"></a>

```csharp
private void ResetWindowsSysprepText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptions">LinuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference">VirtualMachineCloneCustomizeLinuxOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList">VirtualMachineCloneCustomizeNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptions">WindowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference">VirtualMachineCloneCustomizeWindowsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerListInput">DnsServerListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixListInput">DnsSuffixListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4GatewayInput">Ipv4GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6GatewayInput">Ipv6GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptionsInput">LinuxOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptionsInput">WindowsOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepTextInput">WindowsSysprepTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerList">DnsServerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixList">DnsSuffixList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4Gateway">Ipv4Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6Gateway">Ipv6Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepText">WindowsSysprepText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinuxOptions`<sup>Required</sup> <a name="LinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptions"></a>

```csharp
public VirtualMachineCloneCustomizeLinuxOptionsOutputReference LinuxOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference">VirtualMachineCloneCustomizeLinuxOptionsOutputReference</a>

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterface"></a>

```csharp
public VirtualMachineCloneCustomizeNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList">VirtualMachineCloneCustomizeNetworkInterfaceList</a>

---

##### `WindowsOptions`<sup>Required</sup> <a name="WindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptions"></a>

```csharp
public VirtualMachineCloneCustomizeWindowsOptionsOutputReference WindowsOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference">VirtualMachineCloneCustomizeWindowsOptionsOutputReference</a>

---

##### `DnsServerListInput`<sup>Optional</sup> <a name="DnsServerListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerListInput"></a>

```csharp
public string[] DnsServerListInput { get; }
```

- *Type:* string[]

---

##### `DnsSuffixListInput`<sup>Optional</sup> <a name="DnsSuffixListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixListInput"></a>

```csharp
public string[] DnsSuffixListInput { get; }
```

- *Type:* string[]

---

##### `Ipv4GatewayInput`<sup>Optional</sup> <a name="Ipv4GatewayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4GatewayInput"></a>

```csharp
public string Ipv4GatewayInput { get; }
```

- *Type:* string

---

##### `Ipv6GatewayInput`<sup>Optional</sup> <a name="Ipv6GatewayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6GatewayInput"></a>

```csharp
public string Ipv6GatewayInput { get; }
```

- *Type:* string

---

##### `LinuxOptionsInput`<sup>Optional</sup> <a name="LinuxOptionsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptionsInput"></a>

```csharp
public VirtualMachineCloneCustomizeLinuxOptions LinuxOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `WindowsOptionsInput`<sup>Optional</sup> <a name="WindowsOptionsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptionsInput"></a>

```csharp
public VirtualMachineCloneCustomizeWindowsOptions WindowsOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---

##### `WindowsSysprepTextInput`<sup>Optional</sup> <a name="WindowsSysprepTextInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepTextInput"></a>

```csharp
public string WindowsSysprepTextInput { get; }
```

- *Type:* string

---

##### `DnsServerList`<sup>Required</sup> <a name="DnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerList"></a>

```csharp
public string[] DnsServerList { get; }
```

- *Type:* string[]

---

##### `DnsSuffixList`<sup>Required</sup> <a name="DnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixList"></a>

```csharp
public string[] DnsSuffixList { get; }
```

- *Type:* string[]

---

##### `Ipv4Gateway`<sup>Required</sup> <a name="Ipv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4Gateway"></a>

```csharp
public string Ipv4Gateway { get; }
```

- *Type:* string

---

##### `Ipv6Gateway`<sup>Required</sup> <a name="Ipv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6Gateway"></a>

```csharp
public string Ipv6Gateway { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `WindowsSysprepText`<sup>Required</sup> <a name="WindowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepText"></a>

```csharp
public string WindowsSysprepText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineCloneCustomize InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---


### VirtualMachineCloneCustomizeWindowsOptionsOutputReference <a name="VirtualMachineCloneCustomizeWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneCustomizeWindowsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogon">ResetAutoLogon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogonCount">ResetAutoLogonCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminPassword">ResetDomainAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminUser">ResetDomainAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetJoinDomain">ResetJoinDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetProductKey">ResetProductKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetRunOnceCommandList">ResetRunOnceCommandList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetWorkgroup">ResetWorkgroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetAutoLogon` <a name="ResetAutoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogon"></a>

```csharp
private void ResetAutoLogon()
```

##### `ResetAutoLogonCount` <a name="ResetAutoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogonCount"></a>

```csharp
private void ResetAutoLogonCount()
```

##### `ResetDomainAdminPassword` <a name="ResetDomainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminPassword"></a>

```csharp
private void ResetDomainAdminPassword()
```

##### `ResetDomainAdminUser` <a name="ResetDomainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminUser"></a>

```csharp
private void ResetDomainAdminUser()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetFullName"></a>

```csharp
private void ResetFullName()
```

##### `ResetJoinDomain` <a name="ResetJoinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetJoinDomain"></a>

```csharp
private void ResetJoinDomain()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetOrganizationName"></a>

```csharp
private void ResetOrganizationName()
```

##### `ResetProductKey` <a name="ResetProductKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetProductKey"></a>

```csharp
private void ResetProductKey()
```

##### `ResetRunOnceCommandList` <a name="ResetRunOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetRunOnceCommandList"></a>

```csharp
private void ResetRunOnceCommandList()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

##### `ResetWorkgroup` <a name="ResetWorkgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetWorkgroup"></a>

```csharp
private void ResetWorkgroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCountInput">AutoLogonCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonInput">AutoLogonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerNameInput">ComputerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPasswordInput">DomainAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUserInput">DomainAdminUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomainInput">JoinDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKeyInput">ProductKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandListInput">RunOnceCommandListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroupInput">WorkgroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogon">AutoLogon</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCount">AutoLogonCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerName">ComputerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPassword">DomainAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUser">DomainAdminUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomain">JoinDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKey">ProductKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandList">RunOnceCommandList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZone">TimeZone</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroup">Workgroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AutoLogonCountInput`<sup>Optional</sup> <a name="AutoLogonCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCountInput"></a>

```csharp
public double AutoLogonCountInput { get; }
```

- *Type:* double

---

##### `AutoLogonInput`<sup>Optional</sup> <a name="AutoLogonInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonInput"></a>

```csharp
public object AutoLogonInput { get; }
```

- *Type:* object

---

##### `ComputerNameInput`<sup>Optional</sup> <a name="ComputerNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerNameInput"></a>

```csharp
public string ComputerNameInput { get; }
```

- *Type:* string

---

##### `DomainAdminPasswordInput`<sup>Optional</sup> <a name="DomainAdminPasswordInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPasswordInput"></a>

```csharp
public string DomainAdminPasswordInput { get; }
```

- *Type:* string

---

##### `DomainAdminUserInput`<sup>Optional</sup> <a name="DomainAdminUserInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUserInput"></a>

```csharp
public string DomainAdminUserInput { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `JoinDomainInput`<sup>Optional</sup> <a name="JoinDomainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomainInput"></a>

```csharp
public string JoinDomainInput { get; }
```

- *Type:* string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationNameInput"></a>

```csharp
public string OrganizationNameInput { get; }
```

- *Type:* string

---

##### `ProductKeyInput`<sup>Optional</sup> <a name="ProductKeyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKeyInput"></a>

```csharp
public string ProductKeyInput { get; }
```

- *Type:* string

---

##### `RunOnceCommandListInput`<sup>Optional</sup> <a name="RunOnceCommandListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandListInput"></a>

```csharp
public string[] RunOnceCommandListInput { get; }
```

- *Type:* string[]

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZoneInput"></a>

```csharp
public double TimeZoneInput { get; }
```

- *Type:* double

---

##### `WorkgroupInput`<sup>Optional</sup> <a name="WorkgroupInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroupInput"></a>

```csharp
public string WorkgroupInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AutoLogon`<sup>Required</sup> <a name="AutoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogon"></a>

```csharp
public object AutoLogon { get; }
```

- *Type:* object

---

##### `AutoLogonCount`<sup>Required</sup> <a name="AutoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCount"></a>

```csharp
public double AutoLogonCount { get; }
```

- *Type:* double

---

##### `ComputerName`<sup>Required</sup> <a name="ComputerName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerName"></a>

```csharp
public string ComputerName { get; }
```

- *Type:* string

---

##### `DomainAdminPassword`<sup>Required</sup> <a name="DomainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```csharp
public string DomainAdminPassword { get; }
```

- *Type:* string

---

##### `DomainAdminUser`<sup>Required</sup> <a name="DomainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUser"></a>

```csharp
public string DomainAdminUser { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `JoinDomain`<sup>Required</sup> <a name="JoinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomain"></a>

```csharp
public string JoinDomain { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `ProductKey`<sup>Required</sup> <a name="ProductKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKey"></a>

```csharp
public string ProductKey { get; }
```

- *Type:* string

---

##### `RunOnceCommandList`<sup>Required</sup> <a name="RunOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```csharp
public string[] RunOnceCommandList { get; }
```

- *Type:* string[]

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZone"></a>

```csharp
public double TimeZone { get; }
```

- *Type:* double

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroup"></a>

```csharp
public string Workgroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineCloneCustomizeWindowsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---


### VirtualMachineCloneOutputReference <a name="VirtualMachineCloneOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineCloneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec">PutCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize">PutCustomize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomizationSpec">ResetCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomize">ResetCustomize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetLinkedClone">ResetLinkedClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfNetworkMap">ResetOvfNetworkMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfStorageMap">ResetOvfStorageMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomizationSpec` <a name="PutCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec"></a>

```csharp
private void PutCustomizationSpec(VirtualMachineCloneCustomizationSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---

##### `PutCustomize` <a name="PutCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize"></a>

```csharp
private void PutCustomize(VirtualMachineCloneCustomize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---

##### `ResetCustomizationSpec` <a name="ResetCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomizationSpec"></a>

```csharp
private void ResetCustomizationSpec()
```

##### `ResetCustomize` <a name="ResetCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomize"></a>

```csharp
private void ResetCustomize()
```

##### `ResetLinkedClone` <a name="ResetLinkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetLinkedClone"></a>

```csharp
private void ResetLinkedClone()
```

##### `ResetOvfNetworkMap` <a name="ResetOvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfNetworkMap"></a>

```csharp
private void ResetOvfNetworkMap()
```

##### `ResetOvfStorageMap` <a name="ResetOvfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfStorageMap"></a>

```csharp
private void ResetOvfStorageMap()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpec">CustomizationSpec</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference">VirtualMachineCloneCustomizationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customize">Customize</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference">VirtualMachineCloneCustomizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpecInput">CustomizationSpecInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizeInput">CustomizeInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedCloneInput">LinkedCloneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMapInput">OvfNetworkMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMapInput">OvfStorageMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuidInput">TemplateUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedClone">LinkedClone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMap">OvfStorageMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuid">TemplateUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomizationSpec`<sup>Required</sup> <a name="CustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpec"></a>

```csharp
public VirtualMachineCloneCustomizationSpecOutputReference CustomizationSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference">VirtualMachineCloneCustomizationSpecOutputReference</a>

---

##### `Customize`<sup>Required</sup> <a name="Customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customize"></a>

```csharp
public VirtualMachineCloneCustomizeOutputReference Customize { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference">VirtualMachineCloneCustomizeOutputReference</a>

---

##### `CustomizationSpecInput`<sup>Optional</sup> <a name="CustomizationSpecInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpecInput"></a>

```csharp
public VirtualMachineCloneCustomizationSpec CustomizationSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---

##### `CustomizeInput`<sup>Optional</sup> <a name="CustomizeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizeInput"></a>

```csharp
public VirtualMachineCloneCustomize CustomizeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---

##### `LinkedCloneInput`<sup>Optional</sup> <a name="LinkedCloneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedCloneInput"></a>

```csharp
public object LinkedCloneInput { get; }
```

- *Type:* object

---

##### `OvfNetworkMapInput`<sup>Optional</sup> <a name="OvfNetworkMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfNetworkMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OvfStorageMapInput`<sup>Optional</sup> <a name="OvfStorageMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfStorageMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateUuidInput`<sup>Optional</sup> <a name="TemplateUuidInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuidInput"></a>

```csharp
public string TemplateUuidInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `LinkedClone`<sup>Required</sup> <a name="LinkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedClone"></a>

```csharp
public object LinkedClone { get; }
```

- *Type:* object

---

##### `OvfNetworkMap`<sup>Required</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfNetworkMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OvfStorageMap`<sup>Required</sup> <a name="OvfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfStorageMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateUuid`<sup>Required</sup> <a name="TemplateUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuid"></a>

```csharp
public string TemplateUuid { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineClone InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---


### VirtualMachineDiskList <a name="VirtualMachineDiskList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get"></a>

```csharp
private VirtualMachineDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineDiskOutputReference <a name="VirtualMachineDiskOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetAttach">ResetAttach</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetControllerType">ResetControllerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDatastoreId">ResetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskMode">ResetDiskMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskSharing">ResetDiskSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetEagerlyScrub">ResetEagerlyScrub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoLimit">ResetIoLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoReservation">ResetIoReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareCount">ResetIoShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareLevel">ResetIoShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetKeepOnRemove">ResetKeepOnRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetStoragePolicyId">ResetStoragePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetThinProvisioned">ResetThinProvisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetUnitNumber">ResetUnitNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetWriteThrough">ResetWriteThrough</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttach` <a name="ResetAttach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetAttach"></a>

```csharp
private void ResetAttach()
```

##### `ResetControllerType` <a name="ResetControllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetControllerType"></a>

```csharp
private void ResetControllerType()
```

##### `ResetDatastoreId` <a name="ResetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDatastoreId"></a>

```csharp
private void ResetDatastoreId()
```

##### `ResetDiskMode` <a name="ResetDiskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskMode"></a>

```csharp
private void ResetDiskMode()
```

##### `ResetDiskSharing` <a name="ResetDiskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskSharing"></a>

```csharp
private void ResetDiskSharing()
```

##### `ResetEagerlyScrub` <a name="ResetEagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetEagerlyScrub"></a>

```csharp
private void ResetEagerlyScrub()
```

##### `ResetIoLimit` <a name="ResetIoLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoLimit"></a>

```csharp
private void ResetIoLimit()
```

##### `ResetIoReservation` <a name="ResetIoReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoReservation"></a>

```csharp
private void ResetIoReservation()
```

##### `ResetIoShareCount` <a name="ResetIoShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareCount"></a>

```csharp
private void ResetIoShareCount()
```

##### `ResetIoShareLevel` <a name="ResetIoShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareLevel"></a>

```csharp
private void ResetIoShareLevel()
```

##### `ResetKeepOnRemove` <a name="ResetKeepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetKeepOnRemove"></a>

```csharp
private void ResetKeepOnRemove()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetStoragePolicyId` <a name="ResetStoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetStoragePolicyId"></a>

```csharp
private void ResetStoragePolicyId()
```

##### `ResetThinProvisioned` <a name="ResetThinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetThinProvisioned"></a>

```csharp
private void ResetThinProvisioned()
```

##### `ResetUnitNumber` <a name="ResetUnitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetUnitNumber"></a>

```csharp
private void ResetUnitNumber()
```

##### `ResetWriteThrough` <a name="ResetWriteThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetWriteThrough"></a>

```csharp
private void ResetWriteThrough()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.deviceAddress">DeviceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.key">Key</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attachInput">AttachInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerTypeInput">ControllerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreIdInput">DatastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskModeInput">DiskModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharingInput">DiskSharingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrubInput">EagerlyScrubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimitInput">IoLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservationInput">IoReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCountInput">IoShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevelInput">IoShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemoveInput">KeepOnRemoveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyIdInput">StoragePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisionedInput">ThinProvisionedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumberInput">UnitNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThroughInput">WriteThroughInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attach">Attach</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerType">ControllerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreId">DatastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskMode">DiskMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharing">DiskSharing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrub">EagerlyScrub</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimit">IoLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservation">IoReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCount">IoShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevel">IoShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemove">KeepOnRemove</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyId">StoragePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisioned">ThinProvisioned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumber">UnitNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThrough">WriteThrough</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceAddress`<sup>Required</sup> <a name="DeviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.deviceAddress"></a>

```csharp
public string DeviceAddress { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.key"></a>

```csharp
public double Key { get; }
```

- *Type:* double

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `AttachInput`<sup>Optional</sup> <a name="AttachInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attachInput"></a>

```csharp
public object AttachInput { get; }
```

- *Type:* object

---

##### `ControllerTypeInput`<sup>Optional</sup> <a name="ControllerTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerTypeInput"></a>

```csharp
public string ControllerTypeInput { get; }
```

- *Type:* string

---

##### `DatastoreIdInput`<sup>Optional</sup> <a name="DatastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreIdInput"></a>

```csharp
public string DatastoreIdInput { get; }
```

- *Type:* string

---

##### `DiskModeInput`<sup>Optional</sup> <a name="DiskModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskModeInput"></a>

```csharp
public string DiskModeInput { get; }
```

- *Type:* string

---

##### `DiskSharingInput`<sup>Optional</sup> <a name="DiskSharingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharingInput"></a>

```csharp
public string DiskSharingInput { get; }
```

- *Type:* string

---

##### `EagerlyScrubInput`<sup>Optional</sup> <a name="EagerlyScrubInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrubInput"></a>

```csharp
public object EagerlyScrubInput { get; }
```

- *Type:* object

---

##### `IoLimitInput`<sup>Optional</sup> <a name="IoLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimitInput"></a>

```csharp
public double IoLimitInput { get; }
```

- *Type:* double

---

##### `IoReservationInput`<sup>Optional</sup> <a name="IoReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservationInput"></a>

```csharp
public double IoReservationInput { get; }
```

- *Type:* double

---

##### `IoShareCountInput`<sup>Optional</sup> <a name="IoShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCountInput"></a>

```csharp
public double IoShareCountInput { get; }
```

- *Type:* double

---

##### `IoShareLevelInput`<sup>Optional</sup> <a name="IoShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevelInput"></a>

```csharp
public string IoShareLevelInput { get; }
```

- *Type:* string

---

##### `KeepOnRemoveInput`<sup>Optional</sup> <a name="KeepOnRemoveInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemoveInput"></a>

```csharp
public object KeepOnRemoveInput { get; }
```

- *Type:* object

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `StoragePolicyIdInput`<sup>Optional</sup> <a name="StoragePolicyIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyIdInput"></a>

```csharp
public string StoragePolicyIdInput { get; }
```

- *Type:* string

---

##### `ThinProvisionedInput`<sup>Optional</sup> <a name="ThinProvisionedInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisionedInput"></a>

```csharp
public object ThinProvisionedInput { get; }
```

- *Type:* object

---

##### `UnitNumberInput`<sup>Optional</sup> <a name="UnitNumberInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumberInput"></a>

```csharp
public double UnitNumberInput { get; }
```

- *Type:* double

---

##### `WriteThroughInput`<sup>Optional</sup> <a name="WriteThroughInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThroughInput"></a>

```csharp
public object WriteThroughInput { get; }
```

- *Type:* object

---

##### `Attach`<sup>Required</sup> <a name="Attach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attach"></a>

```csharp
public object Attach { get; }
```

- *Type:* object

---

##### `ControllerType`<sup>Required</sup> <a name="ControllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerType"></a>

```csharp
public string ControllerType { get; }
```

- *Type:* string

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreId"></a>

```csharp
public string DatastoreId { get; }
```

- *Type:* string

---

##### `DiskMode`<sup>Required</sup> <a name="DiskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskMode"></a>

```csharp
public string DiskMode { get; }
```

- *Type:* string

---

##### `DiskSharing`<sup>Required</sup> <a name="DiskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharing"></a>

```csharp
public string DiskSharing { get; }
```

- *Type:* string

---

##### `EagerlyScrub`<sup>Required</sup> <a name="EagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrub"></a>

```csharp
public object EagerlyScrub { get; }
```

- *Type:* object

---

##### `IoLimit`<sup>Required</sup> <a name="IoLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimit"></a>

```csharp
public double IoLimit { get; }
```

- *Type:* double

---

##### `IoReservation`<sup>Required</sup> <a name="IoReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservation"></a>

```csharp
public double IoReservation { get; }
```

- *Type:* double

---

##### `IoShareCount`<sup>Required</sup> <a name="IoShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCount"></a>

```csharp
public double IoShareCount { get; }
```

- *Type:* double

---

##### `IoShareLevel`<sup>Required</sup> <a name="IoShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevel"></a>

```csharp
public string IoShareLevel { get; }
```

- *Type:* string

---

##### `KeepOnRemove`<sup>Required</sup> <a name="KeepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemove"></a>

```csharp
public object KeepOnRemove { get; }
```

- *Type:* object

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `StoragePolicyId`<sup>Required</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyId"></a>

```csharp
public string StoragePolicyId { get; }
```

- *Type:* string

---

##### `ThinProvisioned`<sup>Required</sup> <a name="ThinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisioned"></a>

```csharp
public object ThinProvisioned { get; }
```

- *Type:* object

---

##### `UnitNumber`<sup>Required</sup> <a name="UnitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumber"></a>

```csharp
public double UnitNumber { get; }
```

- *Type:* double

---

##### `WriteThrough`<sup>Required</sup> <a name="WriteThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThrough"></a>

```csharp
public object WriteThrough { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineNetworkInterfaceList <a name="VirtualMachineNetworkInterfaceList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get"></a>

```csharp
private VirtualMachineNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineNetworkInterfaceOutputReference <a name="VirtualMachineNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetAdapterType">ResetAdapterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthLimit">ResetBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthReservation">ResetBandwidthReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareCount">ResetBandwidthShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareLevel">ResetBandwidthShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetMacAddress">ResetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetOvfMapping">ResetOvfMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetPhysicalFunction">ResetPhysicalFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetUseStaticMac">ResetUseStaticMac</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdapterType` <a name="ResetAdapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetAdapterType"></a>

```csharp
private void ResetAdapterType()
```

##### `ResetBandwidthLimit` <a name="ResetBandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthLimit"></a>

```csharp
private void ResetBandwidthLimit()
```

##### `ResetBandwidthReservation` <a name="ResetBandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthReservation"></a>

```csharp
private void ResetBandwidthReservation()
```

##### `ResetBandwidthShareCount` <a name="ResetBandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareCount"></a>

```csharp
private void ResetBandwidthShareCount()
```

##### `ResetBandwidthShareLevel` <a name="ResetBandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareLevel"></a>

```csharp
private void ResetBandwidthShareLevel()
```

##### `ResetMacAddress` <a name="ResetMacAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetMacAddress"></a>

```csharp
private void ResetMacAddress()
```

##### `ResetOvfMapping` <a name="ResetOvfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetOvfMapping"></a>

```csharp
private void ResetOvfMapping()
```

##### `ResetPhysicalFunction` <a name="ResetPhysicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetPhysicalFunction"></a>

```csharp
private void ResetPhysicalFunction()
```

##### `ResetUseStaticMac` <a name="ResetUseStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetUseStaticMac"></a>

```csharp
private void ResetUseStaticMac()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.deviceAddress">DeviceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.key">Key</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterTypeInput">AdapterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimitInput">BandwidthLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservationInput">BandwidthReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCountInput">BandwidthShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevelInput">BandwidthShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddressInput">MacAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkIdInput">NetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMappingInput">OvfMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunctionInput">PhysicalFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMacInput">UseStaticMacInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterType">AdapterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimit">BandwidthLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservation">BandwidthReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCount">BandwidthShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevel">BandwidthShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddress">MacAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMapping">OvfMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunction">PhysicalFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMac">UseStaticMac</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceAddress`<sup>Required</sup> <a name="DeviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.deviceAddress"></a>

```csharp
public string DeviceAddress { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.key"></a>

```csharp
public double Key { get; }
```

- *Type:* double

---

##### `AdapterTypeInput`<sup>Optional</sup> <a name="AdapterTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterTypeInput"></a>

```csharp
public string AdapterTypeInput { get; }
```

- *Type:* string

---

##### `BandwidthLimitInput`<sup>Optional</sup> <a name="BandwidthLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimitInput"></a>

```csharp
public double BandwidthLimitInput { get; }
```

- *Type:* double

---

##### `BandwidthReservationInput`<sup>Optional</sup> <a name="BandwidthReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservationInput"></a>

```csharp
public double BandwidthReservationInput { get; }
```

- *Type:* double

---

##### `BandwidthShareCountInput`<sup>Optional</sup> <a name="BandwidthShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCountInput"></a>

```csharp
public double BandwidthShareCountInput { get; }
```

- *Type:* double

---

##### `BandwidthShareLevelInput`<sup>Optional</sup> <a name="BandwidthShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevelInput"></a>

```csharp
public string BandwidthShareLevelInput { get; }
```

- *Type:* string

---

##### `MacAddressInput`<sup>Optional</sup> <a name="MacAddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddressInput"></a>

```csharp
public string MacAddressInput { get; }
```

- *Type:* string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkIdInput"></a>

```csharp
public string NetworkIdInput { get; }
```

- *Type:* string

---

##### `OvfMappingInput`<sup>Optional</sup> <a name="OvfMappingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMappingInput"></a>

```csharp
public string OvfMappingInput { get; }
```

- *Type:* string

---

##### `PhysicalFunctionInput`<sup>Optional</sup> <a name="PhysicalFunctionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunctionInput"></a>

```csharp
public string PhysicalFunctionInput { get; }
```

- *Type:* string

---

##### `UseStaticMacInput`<sup>Optional</sup> <a name="UseStaticMacInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMacInput"></a>

```csharp
public object UseStaticMacInput { get; }
```

- *Type:* object

---

##### `AdapterType`<sup>Required</sup> <a name="AdapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterType"></a>

```csharp
public string AdapterType { get; }
```

- *Type:* string

---

##### `BandwidthLimit`<sup>Required</sup> <a name="BandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimit"></a>

```csharp
public double BandwidthLimit { get; }
```

- *Type:* double

---

##### `BandwidthReservation`<sup>Required</sup> <a name="BandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservation"></a>

```csharp
public double BandwidthReservation { get; }
```

- *Type:* double

---

##### `BandwidthShareCount`<sup>Required</sup> <a name="BandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCount"></a>

```csharp
public double BandwidthShareCount { get; }
```

- *Type:* double

---

##### `BandwidthShareLevel`<sup>Required</sup> <a name="BandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevel"></a>

```csharp
public string BandwidthShareLevel { get; }
```

- *Type:* string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddress"></a>

```csharp
public string MacAddress { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `OvfMapping`<sup>Required</sup> <a name="OvfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMapping"></a>

```csharp
public string OvfMapping { get; }
```

- *Type:* string

---

##### `PhysicalFunction`<sup>Required</sup> <a name="PhysicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunction"></a>

```csharp
public string PhysicalFunction { get; }
```

- *Type:* string

---

##### `UseStaticMac`<sup>Required</sup> <a name="UseStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMac"></a>

```csharp
public object UseStaticMac { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualMachineOvfDeployOutputReference <a name="VirtualMachineOvfDeployOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineOvfDeployOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetAllowUnverifiedSslCert">ResetAllowUnverifiedSslCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDeploymentOption">ResetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDiskProvisioning">ResetDiskProvisioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetEnableHiddenProperties">ResetEnableHiddenProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpAllocationPolicy">ResetIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpProtocol">ResetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetLocalOvfPath">ResetLocalOvfPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetOvfNetworkMap">ResetOvfNetworkMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetRemoteOvfUrl">ResetRemoteOvfUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowUnverifiedSslCert` <a name="ResetAllowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetAllowUnverifiedSslCert"></a>

```csharp
private void ResetAllowUnverifiedSslCert()
```

##### `ResetDeploymentOption` <a name="ResetDeploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDeploymentOption"></a>

```csharp
private void ResetDeploymentOption()
```

##### `ResetDiskProvisioning` <a name="ResetDiskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDiskProvisioning"></a>

```csharp
private void ResetDiskProvisioning()
```

##### `ResetEnableHiddenProperties` <a name="ResetEnableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetEnableHiddenProperties"></a>

```csharp
private void ResetEnableHiddenProperties()
```

##### `ResetIpAllocationPolicy` <a name="ResetIpAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpAllocationPolicy"></a>

```csharp
private void ResetIpAllocationPolicy()
```

##### `ResetIpProtocol` <a name="ResetIpProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpProtocol"></a>

```csharp
private void ResetIpProtocol()
```

##### `ResetLocalOvfPath` <a name="ResetLocalOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetLocalOvfPath"></a>

```csharp
private void ResetLocalOvfPath()
```

##### `ResetOvfNetworkMap` <a name="ResetOvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetOvfNetworkMap"></a>

```csharp
private void ResetOvfNetworkMap()
```

##### `ResetRemoteOvfUrl` <a name="ResetRemoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetRemoteOvfUrl"></a>

```csharp
private void ResetRemoteOvfUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCertInput">AllowUnverifiedSslCertInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOptionInput">DeploymentOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioningInput">DiskProvisioningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenPropertiesInput">EnableHiddenPropertiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicyInput">IpAllocationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPathInput">LocalOvfPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMapInput">OvfNetworkMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrlInput">RemoteOvfUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCert">AllowUnverifiedSslCert</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOption">DeploymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioning">DiskProvisioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenProperties">EnableHiddenProperties</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicy">IpAllocationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPath">LocalOvfPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMap">OvfNetworkMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrl">RemoteOvfUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowUnverifiedSslCertInput`<sup>Optional</sup> <a name="AllowUnverifiedSslCertInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCertInput"></a>

```csharp
public object AllowUnverifiedSslCertInput { get; }
```

- *Type:* object

---

##### `DeploymentOptionInput`<sup>Optional</sup> <a name="DeploymentOptionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOptionInput"></a>

```csharp
public string DeploymentOptionInput { get; }
```

- *Type:* string

---

##### `DiskProvisioningInput`<sup>Optional</sup> <a name="DiskProvisioningInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioningInput"></a>

```csharp
public string DiskProvisioningInput { get; }
```

- *Type:* string

---

##### `EnableHiddenPropertiesInput`<sup>Optional</sup> <a name="EnableHiddenPropertiesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenPropertiesInput"></a>

```csharp
public object EnableHiddenPropertiesInput { get; }
```

- *Type:* object

---

##### `IpAllocationPolicyInput`<sup>Optional</sup> <a name="IpAllocationPolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicyInput"></a>

```csharp
public string IpAllocationPolicyInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `LocalOvfPathInput`<sup>Optional</sup> <a name="LocalOvfPathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPathInput"></a>

```csharp
public string LocalOvfPathInput { get; }
```

- *Type:* string

---

##### `OvfNetworkMapInput`<sup>Optional</sup> <a name="OvfNetworkMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfNetworkMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RemoteOvfUrlInput`<sup>Optional</sup> <a name="RemoteOvfUrlInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrlInput"></a>

```csharp
public string RemoteOvfUrlInput { get; }
```

- *Type:* string

---

##### `AllowUnverifiedSslCert`<sup>Required</sup> <a name="AllowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCert"></a>

```csharp
public object AllowUnverifiedSslCert { get; }
```

- *Type:* object

---

##### `DeploymentOption`<sup>Required</sup> <a name="DeploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOption"></a>

```csharp
public string DeploymentOption { get; }
```

- *Type:* string

---

##### `DiskProvisioning`<sup>Required</sup> <a name="DiskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioning"></a>

```csharp
public string DiskProvisioning { get; }
```

- *Type:* string

---

##### `EnableHiddenProperties`<sup>Required</sup> <a name="EnableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenProperties"></a>

```csharp
public object EnableHiddenProperties { get; }
```

- *Type:* object

---

##### `IpAllocationPolicy`<sup>Required</sup> <a name="IpAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicy"></a>

```csharp
public string IpAllocationPolicy { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `LocalOvfPath`<sup>Required</sup> <a name="LocalOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPath"></a>

```csharp
public string LocalOvfPath { get; }
```

- *Type:* string

---

##### `OvfNetworkMap`<sup>Required</sup> <a name="OvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OvfNetworkMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RemoteOvfUrl`<sup>Required</sup> <a name="RemoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrl"></a>

```csharp
public string RemoteOvfUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineOvfDeploy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---


### VirtualMachineVappOutputReference <a name="VirtualMachineVappOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new VirtualMachineVappOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.internalValue"></a>

```csharp
public VirtualMachineVapp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---



