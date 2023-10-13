# `data_vsphere_virtual_machine`

Refer to the Terraform Registory for docs: [`data_vsphere_virtual_machine`](https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine).

# `dataVsphereVirtualMachine` Submodule <a name="`dataVsphereVirtualMachine` Submodule" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereVirtualMachine <a name="DataVsphereVirtualMachine" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine vsphere_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereVirtualMachine(Construct Scope, string Id, DataVsphereVirtualMachineConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig">DataVsphereVirtualMachineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig">DataVsphereVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp">PutVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAlternateGuestName">ResetAlternateGuestName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAnnotation">ResetAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootDelay">ResetBootDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryDelay">ResetBootRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryEnabled">ResetBootRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotAddEnabled">ResetCpuHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotRemoveEnabled">ResetCpuHotRemoveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuLimit">ResetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuPerformanceCountersEnabled">ResetCpuPerformanceCountersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuReservation">ResetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareCount">ResetCpuShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareLevel">ResetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetDatacenterId">ResetDatacenterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEfiSecureBootEnabled">ResetEfiSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableDiskUuid">ResetEnableDiskUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEptRviMode">ResetEptRviMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfig">ResetExtraConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfigRebootRequired">ResetExtraConfigRebootRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFirmware">ResetFirmware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetGuestId">ResetGuestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHardwareVersion">ResetHardwareVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHvMode">ResetHvMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetIdeControllerScanCount">ResetIdeControllerScanCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetLatencySensitivity">ResetLatencySensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryHotAddEnabled">ResetMemoryHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryLimit">ResetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservation">ResetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareCount">ResetMemoryShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareLevel">ResetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMoid">ResetMoid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNestedHvEnabled">ResetNestedHvEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCoresPerSocket">ResetNumCoresPerSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCpus">ResetNumCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetReplaceTrigger">ResetReplaceTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterPowerOn">ResetRunToolsScriptsAfterPowerOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterResume">ResetRunToolsScriptsAfterResume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestReboot">ResetRunToolsScriptsBeforeGuestReboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestShutdown">ResetRunToolsScriptsBeforeGuestShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestStandby">ResetRunToolsScriptsBeforeGuestStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSataControllerScanCount">ResetSataControllerScanCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetScsiControllerScanCount">ResetScsiControllerScanCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetStoragePolicyId">ResetStoragePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSwapPlacementPolicy">ResetSwapPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHost">ResetSyncTimeWithHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHostPeriodically">ResetSyncTimeWithHostPeriodically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetToolsUpgradePolicy">ResetToolsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetUuid">ResetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVapp">ResetVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVbsEnabled">ResetVbsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVvtdEnabled">ResetVvtdEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutVapp` <a name="PutVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp"></a>

```csharp
private void PutVapp(DataVsphereVirtualMachineVapp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---

##### `ResetAlternateGuestName` <a name="ResetAlternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAlternateGuestName"></a>

```csharp
private void ResetAlternateGuestName()
```

##### `ResetAnnotation` <a name="ResetAnnotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAnnotation"></a>

```csharp
private void ResetAnnotation()
```

##### `ResetBootDelay` <a name="ResetBootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootDelay"></a>

```csharp
private void ResetBootDelay()
```

##### `ResetBootRetryDelay` <a name="ResetBootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryDelay"></a>

```csharp
private void ResetBootRetryDelay()
```

##### `ResetBootRetryEnabled` <a name="ResetBootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryEnabled"></a>

```csharp
private void ResetBootRetryEnabled()
```

##### `ResetCpuHotAddEnabled` <a name="ResetCpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotAddEnabled"></a>

```csharp
private void ResetCpuHotAddEnabled()
```

##### `ResetCpuHotRemoveEnabled` <a name="ResetCpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotRemoveEnabled"></a>

```csharp
private void ResetCpuHotRemoveEnabled()
```

##### `ResetCpuLimit` <a name="ResetCpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuLimit"></a>

```csharp
private void ResetCpuLimit()
```

##### `ResetCpuPerformanceCountersEnabled` <a name="ResetCpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuPerformanceCountersEnabled"></a>

```csharp
private void ResetCpuPerformanceCountersEnabled()
```

##### `ResetCpuReservation` <a name="ResetCpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuReservation"></a>

```csharp
private void ResetCpuReservation()
```

##### `ResetCpuShareCount` <a name="ResetCpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareCount"></a>

```csharp
private void ResetCpuShareCount()
```

##### `ResetCpuShareLevel` <a name="ResetCpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareLevel"></a>

```csharp
private void ResetCpuShareLevel()
```

##### `ResetDatacenterId` <a name="ResetDatacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetDatacenterId"></a>

```csharp
private void ResetDatacenterId()
```

##### `ResetEfiSecureBootEnabled` <a name="ResetEfiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEfiSecureBootEnabled"></a>

```csharp
private void ResetEfiSecureBootEnabled()
```

##### `ResetEnableDiskUuid` <a name="ResetEnableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableDiskUuid"></a>

```csharp
private void ResetEnableDiskUuid()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableLogging"></a>

```csharp
private void ResetEnableLogging()
```

##### `ResetEptRviMode` <a name="ResetEptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEptRviMode"></a>

```csharp
private void ResetEptRviMode()
```

##### `ResetExtraConfig` <a name="ResetExtraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfig"></a>

```csharp
private void ResetExtraConfig()
```

##### `ResetExtraConfigRebootRequired` <a name="ResetExtraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfigRebootRequired"></a>

```csharp
private void ResetExtraConfigRebootRequired()
```

##### `ResetFirmware` <a name="ResetFirmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFirmware"></a>

```csharp
private void ResetFirmware()
```

##### `ResetGuestId` <a name="ResetGuestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetGuestId"></a>

```csharp
private void ResetGuestId()
```

##### `ResetHardwareVersion` <a name="ResetHardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHardwareVersion"></a>

```csharp
private void ResetHardwareVersion()
```

##### `ResetHvMode` <a name="ResetHvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHvMode"></a>

```csharp
private void ResetHvMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdeControllerScanCount` <a name="ResetIdeControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetIdeControllerScanCount"></a>

```csharp
private void ResetIdeControllerScanCount()
```

##### `ResetLatencySensitivity` <a name="ResetLatencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetLatencySensitivity"></a>

```csharp
private void ResetLatencySensitivity()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetMemoryHotAddEnabled` <a name="ResetMemoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryHotAddEnabled"></a>

```csharp
private void ResetMemoryHotAddEnabled()
```

##### `ResetMemoryLimit` <a name="ResetMemoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryLimit"></a>

```csharp
private void ResetMemoryLimit()
```

##### `ResetMemoryReservation` <a name="ResetMemoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservation"></a>

```csharp
private void ResetMemoryReservation()
```

##### `ResetMemoryShareCount` <a name="ResetMemoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareCount"></a>

```csharp
private void ResetMemoryShareCount()
```

##### `ResetMemoryShareLevel` <a name="ResetMemoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareLevel"></a>

```csharp
private void ResetMemoryShareLevel()
```

##### `ResetMoid` <a name="ResetMoid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMoid"></a>

```csharp
private void ResetMoid()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNestedHvEnabled` <a name="ResetNestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNestedHvEnabled"></a>

```csharp
private void ResetNestedHvEnabled()
```

##### `ResetNumCoresPerSocket` <a name="ResetNumCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCoresPerSocket"></a>

```csharp
private void ResetNumCoresPerSocket()
```

##### `ResetNumCpus` <a name="ResetNumCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCpus"></a>

```csharp
private void ResetNumCpus()
```

##### `ResetReplaceTrigger` <a name="ResetReplaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetReplaceTrigger"></a>

```csharp
private void ResetReplaceTrigger()
```

##### `ResetRunToolsScriptsAfterPowerOn` <a name="ResetRunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterPowerOn"></a>

```csharp
private void ResetRunToolsScriptsAfterPowerOn()
```

##### `ResetRunToolsScriptsAfterResume` <a name="ResetRunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterResume"></a>

```csharp
private void ResetRunToolsScriptsAfterResume()
```

##### `ResetRunToolsScriptsBeforeGuestReboot` <a name="ResetRunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestReboot"></a>

```csharp
private void ResetRunToolsScriptsBeforeGuestReboot()
```

##### `ResetRunToolsScriptsBeforeGuestShutdown` <a name="ResetRunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestShutdown"></a>

```csharp
private void ResetRunToolsScriptsBeforeGuestShutdown()
```

##### `ResetRunToolsScriptsBeforeGuestStandby` <a name="ResetRunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestStandby"></a>

```csharp
private void ResetRunToolsScriptsBeforeGuestStandby()
```

##### `ResetSataControllerScanCount` <a name="ResetSataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSataControllerScanCount"></a>

```csharp
private void ResetSataControllerScanCount()
```

##### `ResetScsiControllerScanCount` <a name="ResetScsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetScsiControllerScanCount"></a>

```csharp
private void ResetScsiControllerScanCount()
```

##### `ResetStoragePolicyId` <a name="ResetStoragePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetStoragePolicyId"></a>

```csharp
private void ResetStoragePolicyId()
```

##### `ResetSwapPlacementPolicy` <a name="ResetSwapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSwapPlacementPolicy"></a>

```csharp
private void ResetSwapPlacementPolicy()
```

##### `ResetSyncTimeWithHost` <a name="ResetSyncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHost"></a>

```csharp
private void ResetSyncTimeWithHost()
```

##### `ResetSyncTimeWithHostPeriodically` <a name="ResetSyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHostPeriodically"></a>

```csharp
private void ResetSyncTimeWithHostPeriodically()
```

##### `ResetToolsUpgradePolicy` <a name="ResetToolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetToolsUpgradePolicy"></a>

```csharp
private void ResetToolsUpgradePolicy()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetUuid"></a>

```csharp
private void ResetUuid()
```

##### `ResetVapp` <a name="ResetVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVapp"></a>

```csharp
private void ResetVapp()
```

##### `ResetVbsEnabled` <a name="ResetVbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVbsEnabled"></a>

```csharp
private void ResetVbsEnabled()
```

##### `ResetVvtdEnabled` <a name="ResetVvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVvtdEnabled"></a>

```csharp
private void ResetVvtdEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereVirtualMachine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereVirtualMachine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

DataVsphereVirtualMachine.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.changeVersion">ChangeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.defaultIpAddress">DefaultIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.disks">Disks</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList">DataVsphereVirtualMachineDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIpAddresses">GuestIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList">DataVsphereVirtualMachineNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaceTypes">NetworkInterfaceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiBusSharing">ScsiBusSharing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiType">ScsiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vapp">Vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference">DataVsphereVirtualMachineVappOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappTransport">VappTransport</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestNameInput">AlternateGuestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotationInput">AnnotationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelayInput">BootDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelayInput">BootRetryDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabledInput">BootRetryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabledInput">CpuHotAddEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabledInput">CpuHotRemoveEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimitInput">CpuLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabledInput">CpuPerformanceCountersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservationInput">CpuReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCountInput">CpuShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevelInput">CpuShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabledInput">EfiSecureBootEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuidInput">EnableDiskUuidInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviModeInput">EptRviModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigInput">ExtraConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequiredInput">ExtraConfigRebootRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmwareInput">FirmwareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIdInput">GuestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersionInput">HardwareVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvModeInput">HvModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCountInput">IdeControllerScanCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivityInput">LatencySensitivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabledInput">MemoryHotAddEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimitInput">MemoryLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationInput">MemoryReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCountInput">MemoryShareCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevelInput">MemoryShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moidInput">MoidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabledInput">NestedHvEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocketInput">NumCoresPerSocketInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpusInput">NumCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTriggerInput">ReplaceTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOnInput">RunToolsScriptsAfterPowerOnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResumeInput">RunToolsScriptsAfterResumeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestRebootInput">RunToolsScriptsBeforeGuestRebootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput">RunToolsScriptsBeforeGuestShutdownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput">RunToolsScriptsBeforeGuestStandbyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCountInput">SataControllerScanCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCountInput">ScsiControllerScanCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyIdInput">StoragePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicyInput">SwapPlacementPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostInput">SyncTimeWithHostInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodicallyInput">SyncTimeWithHostPeriodicallyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicyInput">ToolsUpgradePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappInput">VappInput</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabledInput">VbsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabledInput">VvtdEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestName">AlternateGuestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotation">Annotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelay">BootDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelay">BootRetryDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabled">BootRetryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabled">CpuHotAddEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabled">CpuHotRemoveEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimit">CpuLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabled">CpuPerformanceCountersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservation">CpuReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCount">CpuShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevel">CpuShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabled">EfiSecureBootEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuid">EnableDiskUuid</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLogging">EnableLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviMode">EptRviMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfig">ExtraConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequired">ExtraConfigRebootRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmware">Firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestId">GuestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersion">HardwareVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvMode">HvMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCount">IdeControllerScanCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivity">LatencySensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabled">MemoryHotAddEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCount">MemoryShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moid">Moid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabled">NestedHvEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocket">NumCoresPerSocket</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpus">NumCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTrigger">ReplaceTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOn">RunToolsScriptsAfterPowerOn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResume">RunToolsScriptsAfterResume</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestReboot">RunToolsScriptsBeforeGuestReboot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdown">RunToolsScriptsBeforeGuestShutdown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandby">RunToolsScriptsBeforeGuestStandby</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCount">SataControllerScanCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCount">ScsiControllerScanCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyId">StoragePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicy">SwapPlacementPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHost">SyncTimeWithHost</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodically">SyncTimeWithHostPeriodically</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicy">ToolsUpgradePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabled">VbsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabled">VvtdEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ChangeVersion`<sup>Required</sup> <a name="ChangeVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.changeVersion"></a>

```csharp
public string ChangeVersion { get; }
```

- *Type:* string

---

##### `DefaultIpAddress`<sup>Required</sup> <a name="DefaultIpAddress" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.defaultIpAddress"></a>

```csharp
public string DefaultIpAddress { get; }
```

- *Type:* string

---

##### `Disks`<sup>Required</sup> <a name="Disks" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.disks"></a>

```csharp
public DataVsphereVirtualMachineDisksList Disks { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList">DataVsphereVirtualMachineDisksList</a>

---

##### `GuestIpAddresses`<sup>Required</sup> <a name="GuestIpAddresses" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIpAddresses"></a>

```csharp
public string[] GuestIpAddresses { get; }
```

- *Type:* string[]

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaces"></a>

```csharp
public DataVsphereVirtualMachineNetworkInterfacesList NetworkInterfaces { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList">DataVsphereVirtualMachineNetworkInterfacesList</a>

---

##### `NetworkInterfaceTypes`<sup>Required</sup> <a name="NetworkInterfaceTypes" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaceTypes"></a>

```csharp
public string[] NetworkInterfaceTypes { get; }
```

- *Type:* string[]

---

##### `ScsiBusSharing`<sup>Required</sup> <a name="ScsiBusSharing" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiBusSharing"></a>

```csharp
public string ScsiBusSharing { get; }
```

- *Type:* string

---

##### `ScsiType`<sup>Required</sup> <a name="ScsiType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiType"></a>

```csharp
public string ScsiType { get; }
```

- *Type:* string

---

##### `Vapp`<sup>Required</sup> <a name="Vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vapp"></a>

```csharp
public DataVsphereVirtualMachineVappOutputReference Vapp { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference">DataVsphereVirtualMachineVappOutputReference</a>

---

##### `VappTransport`<sup>Required</sup> <a name="VappTransport" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappTransport"></a>

```csharp
public string[] VappTransport { get; }
```

- *Type:* string[]

---

##### `AlternateGuestNameInput`<sup>Optional</sup> <a name="AlternateGuestNameInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestNameInput"></a>

```csharp
public string AlternateGuestNameInput { get; }
```

- *Type:* string

---

##### `AnnotationInput`<sup>Optional</sup> <a name="AnnotationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotationInput"></a>

```csharp
public string AnnotationInput { get; }
```

- *Type:* string

---

##### `BootDelayInput`<sup>Optional</sup> <a name="BootDelayInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelayInput"></a>

```csharp
public double BootDelayInput { get; }
```

- *Type:* double

---

##### `BootRetryDelayInput`<sup>Optional</sup> <a name="BootRetryDelayInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelayInput"></a>

```csharp
public double BootRetryDelayInput { get; }
```

- *Type:* double

---

##### `BootRetryEnabledInput`<sup>Optional</sup> <a name="BootRetryEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabledInput"></a>

```csharp
public object BootRetryEnabledInput { get; }
```

- *Type:* object

---

##### `CpuHotAddEnabledInput`<sup>Optional</sup> <a name="CpuHotAddEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabledInput"></a>

```csharp
public object CpuHotAddEnabledInput { get; }
```

- *Type:* object

---

##### `CpuHotRemoveEnabledInput`<sup>Optional</sup> <a name="CpuHotRemoveEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabledInput"></a>

```csharp
public object CpuHotRemoveEnabledInput { get; }
```

- *Type:* object

---

##### `CpuLimitInput`<sup>Optional</sup> <a name="CpuLimitInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimitInput"></a>

```csharp
public double CpuLimitInput { get; }
```

- *Type:* double

---

##### `CpuPerformanceCountersEnabledInput`<sup>Optional</sup> <a name="CpuPerformanceCountersEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabledInput"></a>

```csharp
public object CpuPerformanceCountersEnabledInput { get; }
```

- *Type:* object

---

##### `CpuReservationInput`<sup>Optional</sup> <a name="CpuReservationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservationInput"></a>

```csharp
public double CpuReservationInput { get; }
```

- *Type:* double

---

##### `CpuShareCountInput`<sup>Optional</sup> <a name="CpuShareCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCountInput"></a>

```csharp
public double CpuShareCountInput { get; }
```

- *Type:* double

---

##### `CpuShareLevelInput`<sup>Optional</sup> <a name="CpuShareLevelInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevelInput"></a>

```csharp
public string CpuShareLevelInput { get; }
```

- *Type:* string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `EfiSecureBootEnabledInput`<sup>Optional</sup> <a name="EfiSecureBootEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabledInput"></a>

```csharp
public object EfiSecureBootEnabledInput { get; }
```

- *Type:* object

---

##### `EnableDiskUuidInput`<sup>Optional</sup> <a name="EnableDiskUuidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuidInput"></a>

```csharp
public object EnableDiskUuidInput { get; }
```

- *Type:* object

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLoggingInput"></a>

```csharp
public object EnableLoggingInput { get; }
```

- *Type:* object

---

##### `EptRviModeInput`<sup>Optional</sup> <a name="EptRviModeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviModeInput"></a>

```csharp
public string EptRviModeInput { get; }
```

- *Type:* string

---

##### `ExtraConfigInput`<sup>Optional</sup> <a name="ExtraConfigInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExtraConfigRebootRequiredInput`<sup>Optional</sup> <a name="ExtraConfigRebootRequiredInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequiredInput"></a>

```csharp
public object ExtraConfigRebootRequiredInput { get; }
```

- *Type:* object

---

##### `FirmwareInput`<sup>Optional</sup> <a name="FirmwareInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmwareInput"></a>

```csharp
public string FirmwareInput { get; }
```

- *Type:* string

---

##### `GuestIdInput`<sup>Optional</sup> <a name="GuestIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIdInput"></a>

```csharp
public string GuestIdInput { get; }
```

- *Type:* string

---

##### `HardwareVersionInput`<sup>Optional</sup> <a name="HardwareVersionInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersionInput"></a>

```csharp
public double HardwareVersionInput { get; }
```

- *Type:* double

---

##### `HvModeInput`<sup>Optional</sup> <a name="HvModeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvModeInput"></a>

```csharp
public string HvModeInput { get; }
```

- *Type:* string

---

##### `IdeControllerScanCountInput`<sup>Optional</sup> <a name="IdeControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCountInput"></a>

```csharp
public double IdeControllerScanCountInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LatencySensitivityInput`<sup>Optional</sup> <a name="LatencySensitivityInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivityInput"></a>

```csharp
public string LatencySensitivityInput { get; }
```

- *Type:* string

---

##### `MemoryHotAddEnabledInput`<sup>Optional</sup> <a name="MemoryHotAddEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabledInput"></a>

```csharp
public object MemoryHotAddEnabledInput { get; }
```

- *Type:* object

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `MemoryLimitInput`<sup>Optional</sup> <a name="MemoryLimitInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimitInput"></a>

```csharp
public double MemoryLimitInput { get; }
```

- *Type:* double

---

##### `MemoryReservationInput`<sup>Optional</sup> <a name="MemoryReservationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationInput"></a>

```csharp
public double MemoryReservationInput { get; }
```

- *Type:* double

---

##### `MemoryShareCountInput`<sup>Optional</sup> <a name="MemoryShareCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCountInput"></a>

```csharp
public double MemoryShareCountInput { get; }
```

- *Type:* double

---

##### `MemoryShareLevelInput`<sup>Optional</sup> <a name="MemoryShareLevelInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevelInput"></a>

```csharp
public string MemoryShareLevelInput { get; }
```

- *Type:* string

---

##### `MoidInput`<sup>Optional</sup> <a name="MoidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moidInput"></a>

```csharp
public string MoidInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NestedHvEnabledInput`<sup>Optional</sup> <a name="NestedHvEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabledInput"></a>

```csharp
public object NestedHvEnabledInput { get; }
```

- *Type:* object

---

##### `NumCoresPerSocketInput`<sup>Optional</sup> <a name="NumCoresPerSocketInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocketInput"></a>

```csharp
public double NumCoresPerSocketInput { get; }
```

- *Type:* double

---

##### `NumCpusInput`<sup>Optional</sup> <a name="NumCpusInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpusInput"></a>

```csharp
public double NumCpusInput { get; }
```

- *Type:* double

---

##### `ReplaceTriggerInput`<sup>Optional</sup> <a name="ReplaceTriggerInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTriggerInput"></a>

```csharp
public string ReplaceTriggerInput { get; }
```

- *Type:* string

---

##### `RunToolsScriptsAfterPowerOnInput`<sup>Optional</sup> <a name="RunToolsScriptsAfterPowerOnInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOnInput"></a>

```csharp
public object RunToolsScriptsAfterPowerOnInput { get; }
```

- *Type:* object

---

##### `RunToolsScriptsAfterResumeInput`<sup>Optional</sup> <a name="RunToolsScriptsAfterResumeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResumeInput"></a>

```csharp
public object RunToolsScriptsAfterResumeInput { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestRebootInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestRebootInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestRebootInput"></a>

```csharp
public object RunToolsScriptsBeforeGuestRebootInput { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestShutdownInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestShutdownInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput"></a>

```csharp
public object RunToolsScriptsBeforeGuestShutdownInput { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestStandbyInput`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestStandbyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput"></a>

```csharp
public object RunToolsScriptsBeforeGuestStandbyInput { get; }
```

- *Type:* object

---

##### `SataControllerScanCountInput`<sup>Optional</sup> <a name="SataControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCountInput"></a>

```csharp
public double SataControllerScanCountInput { get; }
```

- *Type:* double

---

##### `ScsiControllerScanCountInput`<sup>Optional</sup> <a name="ScsiControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCountInput"></a>

```csharp
public double ScsiControllerScanCountInput { get; }
```

- *Type:* double

---

##### `StoragePolicyIdInput`<sup>Optional</sup> <a name="StoragePolicyIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyIdInput"></a>

```csharp
public string StoragePolicyIdInput { get; }
```

- *Type:* string

---

##### `SwapPlacementPolicyInput`<sup>Optional</sup> <a name="SwapPlacementPolicyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicyInput"></a>

```csharp
public string SwapPlacementPolicyInput { get; }
```

- *Type:* string

---

##### `SyncTimeWithHostInput`<sup>Optional</sup> <a name="SyncTimeWithHostInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostInput"></a>

```csharp
public object SyncTimeWithHostInput { get; }
```

- *Type:* object

---

##### `SyncTimeWithHostPeriodicallyInput`<sup>Optional</sup> <a name="SyncTimeWithHostPeriodicallyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodicallyInput"></a>

```csharp
public object SyncTimeWithHostPeriodicallyInput { get; }
```

- *Type:* object

---

##### `ToolsUpgradePolicyInput`<sup>Optional</sup> <a name="ToolsUpgradePolicyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicyInput"></a>

```csharp
public string ToolsUpgradePolicyInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `VappInput`<sup>Optional</sup> <a name="VappInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappInput"></a>

```csharp
public DataVsphereVirtualMachineVapp VappInput { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---

##### `VbsEnabledInput`<sup>Optional</sup> <a name="VbsEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabledInput"></a>

```csharp
public object VbsEnabledInput { get; }
```

- *Type:* object

---

##### `VvtdEnabledInput`<sup>Optional</sup> <a name="VvtdEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabledInput"></a>

```csharp
public object VvtdEnabledInput { get; }
```

- *Type:* object

---

##### `AlternateGuestName`<sup>Required</sup> <a name="AlternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestName"></a>

```csharp
public string AlternateGuestName { get; }
```

- *Type:* string

---

##### `Annotation`<sup>Required</sup> <a name="Annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotation"></a>

```csharp
public string Annotation { get; }
```

- *Type:* string

---

##### `BootDelay`<sup>Required</sup> <a name="BootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelay"></a>

```csharp
public double BootDelay { get; }
```

- *Type:* double

---

##### `BootRetryDelay`<sup>Required</sup> <a name="BootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelay"></a>

```csharp
public double BootRetryDelay { get; }
```

- *Type:* double

---

##### `BootRetryEnabled`<sup>Required</sup> <a name="BootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabled"></a>

```csharp
public object BootRetryEnabled { get; }
```

- *Type:* object

---

##### `CpuHotAddEnabled`<sup>Required</sup> <a name="CpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabled"></a>

```csharp
public object CpuHotAddEnabled { get; }
```

- *Type:* object

---

##### `CpuHotRemoveEnabled`<sup>Required</sup> <a name="CpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabled"></a>

```csharp
public object CpuHotRemoveEnabled { get; }
```

- *Type:* object

---

##### `CpuLimit`<sup>Required</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimit"></a>

```csharp
public double CpuLimit { get; }
```

- *Type:* double

---

##### `CpuPerformanceCountersEnabled`<sup>Required</sup> <a name="CpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabled"></a>

```csharp
public object CpuPerformanceCountersEnabled { get; }
```

- *Type:* object

---

##### `CpuReservation`<sup>Required</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservation"></a>

```csharp
public double CpuReservation { get; }
```

- *Type:* double

---

##### `CpuShareCount`<sup>Required</sup> <a name="CpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCount"></a>

```csharp
public double CpuShareCount { get; }
```

- *Type:* double

---

##### `CpuShareLevel`<sup>Required</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevel"></a>

```csharp
public string CpuShareLevel { get; }
```

- *Type:* string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `EfiSecureBootEnabled`<sup>Required</sup> <a name="EfiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabled"></a>

```csharp
public object EfiSecureBootEnabled { get; }
```

- *Type:* object

---

##### `EnableDiskUuid`<sup>Required</sup> <a name="EnableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuid"></a>

```csharp
public object EnableDiskUuid { get; }
```

- *Type:* object

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLogging"></a>

```csharp
public object EnableLogging { get; }
```

- *Type:* object

---

##### `EptRviMode`<sup>Required</sup> <a name="EptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviMode"></a>

```csharp
public string EptRviMode { get; }
```

- *Type:* string

---

##### `ExtraConfig`<sup>Required</sup> <a name="ExtraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExtraConfigRebootRequired`<sup>Required</sup> <a name="ExtraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequired"></a>

```csharp
public object ExtraConfigRebootRequired { get; }
```

- *Type:* object

---

##### `Firmware`<sup>Required</sup> <a name="Firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmware"></a>

```csharp
public string Firmware { get; }
```

- *Type:* string

---

##### `GuestId`<sup>Required</sup> <a name="GuestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestId"></a>

```csharp
public string GuestId { get; }
```

- *Type:* string

---

##### `HardwareVersion`<sup>Required</sup> <a name="HardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersion"></a>

```csharp
public double HardwareVersion { get; }
```

- *Type:* double

---

##### `HvMode`<sup>Required</sup> <a name="HvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvMode"></a>

```csharp
public string HvMode { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdeControllerScanCount`<sup>Required</sup> <a name="IdeControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCount"></a>

```csharp
public double IdeControllerScanCount { get; }
```

- *Type:* double

---

##### `LatencySensitivity`<sup>Required</sup> <a name="LatencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivity"></a>

```csharp
public string LatencySensitivity { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `MemoryHotAddEnabled`<sup>Required</sup> <a name="MemoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabled"></a>

```csharp
public object MemoryHotAddEnabled { get; }
```

- *Type:* object

---

##### `MemoryLimit`<sup>Required</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; }
```

- *Type:* double

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; }
```

- *Type:* double

---

##### `MemoryShareCount`<sup>Required</sup> <a name="MemoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCount"></a>

```csharp
public double MemoryShareCount { get; }
```

- *Type:* double

---

##### `MemoryShareLevel`<sup>Required</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevel"></a>

```csharp
public string MemoryShareLevel { get; }
```

- *Type:* string

---

##### `Moid`<sup>Required</sup> <a name="Moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moid"></a>

```csharp
public string Moid { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NestedHvEnabled`<sup>Required</sup> <a name="NestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabled"></a>

```csharp
public object NestedHvEnabled { get; }
```

- *Type:* object

---

##### `NumCoresPerSocket`<sup>Required</sup> <a name="NumCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocket"></a>

```csharp
public double NumCoresPerSocket { get; }
```

- *Type:* double

---

##### `NumCpus`<sup>Required</sup> <a name="NumCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpus"></a>

```csharp
public double NumCpus { get; }
```

- *Type:* double

---

##### `ReplaceTrigger`<sup>Required</sup> <a name="ReplaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTrigger"></a>

```csharp
public string ReplaceTrigger { get; }
```

- *Type:* string

---

##### `RunToolsScriptsAfterPowerOn`<sup>Required</sup> <a name="RunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOn"></a>

```csharp
public object RunToolsScriptsAfterPowerOn { get; }
```

- *Type:* object

---

##### `RunToolsScriptsAfterResume`<sup>Required</sup> <a name="RunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResume"></a>

```csharp
public object RunToolsScriptsAfterResume { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestReboot`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestReboot"></a>

```csharp
public object RunToolsScriptsBeforeGuestReboot { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestShutdown`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdown"></a>

```csharp
public object RunToolsScriptsBeforeGuestShutdown { get; }
```

- *Type:* object

---

##### `RunToolsScriptsBeforeGuestStandby`<sup>Required</sup> <a name="RunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandby"></a>

```csharp
public object RunToolsScriptsBeforeGuestStandby { get; }
```

- *Type:* object

---

##### `SataControllerScanCount`<sup>Required</sup> <a name="SataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCount"></a>

```csharp
public double SataControllerScanCount { get; }
```

- *Type:* double

---

##### `ScsiControllerScanCount`<sup>Required</sup> <a name="ScsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCount"></a>

```csharp
public double ScsiControllerScanCount { get; }
```

- *Type:* double

---

##### `StoragePolicyId`<sup>Required</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyId"></a>

```csharp
public string StoragePolicyId { get; }
```

- *Type:* string

---

##### `SwapPlacementPolicy`<sup>Required</sup> <a name="SwapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicy"></a>

```csharp
public string SwapPlacementPolicy { get; }
```

- *Type:* string

---

##### `SyncTimeWithHost`<sup>Required</sup> <a name="SyncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHost"></a>

```csharp
public object SyncTimeWithHost { get; }
```

- *Type:* object

---

##### `SyncTimeWithHostPeriodically`<sup>Required</sup> <a name="SyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodically"></a>

```csharp
public object SyncTimeWithHostPeriodically { get; }
```

- *Type:* object

---

##### `ToolsUpgradePolicy`<sup>Required</sup> <a name="ToolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicy"></a>

```csharp
public string ToolsUpgradePolicy { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `VbsEnabled`<sup>Required</sup> <a name="VbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabled"></a>

```csharp
public object VbsEnabled { get; }
```

- *Type:* object

---

##### `VvtdEnabled`<sup>Required</sup> <a name="VvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabled"></a>

```csharp
public object VvtdEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereVirtualMachineConfig <a name="DataVsphereVirtualMachineConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereVirtualMachineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AlternateGuestName = null,
    string Annotation = null,
    double BootDelay = null,
    double BootRetryDelay = null,
    object BootRetryEnabled = null,
    object CpuHotAddEnabled = null,
    object CpuHotRemoveEnabled = null,
    double CpuLimit = null,
    object CpuPerformanceCountersEnabled = null,
    double CpuReservation = null,
    double CpuShareCount = null,
    string CpuShareLevel = null,
    string DatacenterId = null,
    object EfiSecureBootEnabled = null,
    object EnableDiskUuid = null,
    object EnableLogging = null,
    string EptRviMode = null,
    System.Collections.Generic.IDictionary<string, string> ExtraConfig = null,
    object ExtraConfigRebootRequired = null,
    string Firmware = null,
    string GuestId = null,
    double HardwareVersion = null,
    string HvMode = null,
    string Id = null,
    double IdeControllerScanCount = null,
    string LatencySensitivity = null,
    double Memory = null,
    object MemoryHotAddEnabled = null,
    double MemoryLimit = null,
    double MemoryReservation = null,
    double MemoryShareCount = null,
    string MemoryShareLevel = null,
    string Moid = null,
    string Name = null,
    object NestedHvEnabled = null,
    double NumCoresPerSocket = null,
    double NumCpus = null,
    string ReplaceTrigger = null,
    object RunToolsScriptsAfterPowerOn = null,
    object RunToolsScriptsAfterResume = null,
    object RunToolsScriptsBeforeGuestReboot = null,
    object RunToolsScriptsBeforeGuestShutdown = null,
    object RunToolsScriptsBeforeGuestStandby = null,
    double SataControllerScanCount = null,
    double ScsiControllerScanCount = null,
    string StoragePolicyId = null,
    string SwapPlacementPolicy = null,
    object SyncTimeWithHost = null,
    object SyncTimeWithHostPeriodically = null,
    string ToolsUpgradePolicy = null,
    string Uuid = null,
    DataVsphereVirtualMachineVapp Vapp = null,
    object VbsEnabled = null,
    object VvtdEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.alternateGuestName">AlternateGuestName</a></code> | <code>string</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.annotation">Annotation</a></code> | <code>string</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootDelay">BootDelay</a></code> | <code>double</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryDelay">BootRetryDelay</a></code> | <code>double</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryEnabled">BootRetryEnabled</a></code> | <code>object</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotAddEnabled">CpuHotAddEnabled</a></code> | <code>object</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotRemoveEnabled">CpuHotRemoveEnabled</a></code> | <code>object</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuLimit">CpuLimit</a></code> | <code>double</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuPerformanceCountersEnabled">CpuPerformanceCountersEnabled</a></code> | <code>object</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuReservation">CpuReservation</a></code> | <code>double</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareCount">CpuShareCount</a></code> | <code>double</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareLevel">CpuShareLevel</a></code> | <code>string</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.datacenterId">DatacenterId</a></code> | <code>string</code> | The managed object ID of the datacenter the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.efiSecureBootEnabled">EfiSecureBootEnabled</a></code> | <code>object</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableDiskUuid">EnableDiskUuid</a></code> | <code>object</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableLogging">EnableLogging</a></code> | <code>object</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.eptRviMode">EptRviMode</a></code> | <code>string</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfig">ExtraConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfigRebootRequired">ExtraConfigRebootRequired</a></code> | <code>object</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.firmware">Firmware</a></code> | <code>string</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.guestId">GuestId</a></code> | <code>string</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hardwareVersion">HardwareVersion</a></code> | <code>double</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hvMode">HvMode</a></code> | <code>string</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.ideControllerScanCount">IdeControllerScanCount</a></code> | <code>double</code> | The number of IDE controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.latencySensitivity">LatencySensitivity</a></code> | <code>string</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memory">Memory</a></code> | <code>double</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryHotAddEnabled">MemoryHotAddEnabled</a></code> | <code>object</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareCount">MemoryShareCount</a></code> | <code>double</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareLevel">MemoryShareLevel</a></code> | <code>string</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.moid">Moid</a></code> | <code>string</code> | The machine object ID from VMware vSphere. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.name">Name</a></code> | <code>string</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.nestedHvEnabled">NestedHvEnabled</a></code> | <code>object</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCoresPerSocket">NumCoresPerSocket</a></code> | <code>double</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCpus">NumCpus</a></code> | <code>double</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.replaceTrigger">ReplaceTrigger</a></code> | <code>string</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterPowerOn">RunToolsScriptsAfterPowerOn</a></code> | <code>object</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterResume">RunToolsScriptsAfterResume</a></code> | <code>object</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot">RunToolsScriptsBeforeGuestReboot</a></code> | <code>object</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown">RunToolsScriptsBeforeGuestShutdown</a></code> | <code>object</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby">RunToolsScriptsBeforeGuestStandby</a></code> | <code>object</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.sataControllerScanCount">SataControllerScanCount</a></code> | <code>double</code> | The number of SATA controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.scsiControllerScanCount">ScsiControllerScanCount</a></code> | <code>double</code> | The number of SCSI controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.storagePolicyId">StoragePolicyId</a></code> | <code>string</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.swapPlacementPolicy">SwapPlacementPolicy</a></code> | <code>string</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHost">SyncTimeWithHost</a></code> | <code>object</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHostPeriodically">SyncTimeWithHostPeriodically</a></code> | <code>object</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.toolsUpgradePolicy">ToolsUpgradePolicy</a></code> | <code>string</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.uuid">Uuid</a></code> | <code>string</code> | The UUID of the virtual machine. Also exposed as the ID of the resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vapp">Vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vbsEnabled">VbsEnabled</a></code> | <code>object</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vvtdEnabled">VvtdEnabled</a></code> | <code>object</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AlternateGuestName`<sup>Optional</sup> <a name="AlternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.alternateGuestName"></a>

```csharp
public string AlternateGuestName { get; set; }
```

- *Type:* string

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#alternate_guest_name DataVsphereVirtualMachine#alternate_guest_name}

---

##### `Annotation`<sup>Optional</sup> <a name="Annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.annotation"></a>

```csharp
public string Annotation { get; set; }
```

- *Type:* string

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#annotation DataVsphereVirtualMachine#annotation}

---

##### `BootDelay`<sup>Optional</sup> <a name="BootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootDelay"></a>

```csharp
public double BootDelay { get; set; }
```

- *Type:* double

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#boot_delay DataVsphereVirtualMachine#boot_delay}

---

##### `BootRetryDelay`<sup>Optional</sup> <a name="BootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryDelay"></a>

```csharp
public double BootRetryDelay { get; set; }
```

- *Type:* double

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#boot_retry_delay DataVsphereVirtualMachine#boot_retry_delay}

---

##### `BootRetryEnabled`<sup>Optional</sup> <a name="BootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryEnabled"></a>

```csharp
public object BootRetryEnabled { get; set; }
```

- *Type:* object

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#boot_retry_enabled DataVsphereVirtualMachine#boot_retry_enabled}

---

##### `CpuHotAddEnabled`<sup>Optional</sup> <a name="CpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotAddEnabled"></a>

```csharp
public object CpuHotAddEnabled { get; set; }
```

- *Type:* object

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#cpu_hot_add_enabled DataVsphereVirtualMachine#cpu_hot_add_enabled}

---

##### `CpuHotRemoveEnabled`<sup>Optional</sup> <a name="CpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotRemoveEnabled"></a>

```csharp
public object CpuHotRemoveEnabled { get; set; }
```

- *Type:* object

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#cpu_hot_remove_enabled DataVsphereVirtualMachine#cpu_hot_remove_enabled}

---

##### `CpuLimit`<sup>Optional</sup> <a name="CpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuLimit"></a>

```csharp
public double CpuLimit { get; set; }
```

- *Type:* double

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#cpu_limit DataVsphereVirtualMachine#cpu_limit}

---

##### `CpuPerformanceCountersEnabled`<sup>Optional</sup> <a name="CpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuPerformanceCountersEnabled"></a>

```csharp
public object CpuPerformanceCountersEnabled { get; set; }
```

- *Type:* object

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#cpu_performance_counters_enabled DataVsphereVirtualMachine#cpu_performance_counters_enabled}

---

##### `CpuReservation`<sup>Optional</sup> <a name="CpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuReservation"></a>

```csharp
public double CpuReservation { get; set; }
```

- *Type:* double

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#cpu_reservation DataVsphereVirtualMachine#cpu_reservation}

---

##### `CpuShareCount`<sup>Optional</sup> <a name="CpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareCount"></a>

```csharp
public double CpuShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#cpu_share_count DataVsphereVirtualMachine#cpu_share_count}

---

##### `CpuShareLevel`<sup>Optional</sup> <a name="CpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareLevel"></a>

```csharp
public string CpuShareLevel { get; set; }
```

- *Type:* string

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#cpu_share_level DataVsphereVirtualMachine#cpu_share_level}

---

##### `DatacenterId`<sup>Optional</sup> <a name="DatacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

The managed object ID of the datacenter the virtual machine is in.

This is not required when using ESXi directly, or if there is only one datacenter in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#datacenter_id DataVsphereVirtualMachine#datacenter_id}

---

##### `EfiSecureBootEnabled`<sup>Optional</sup> <a name="EfiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.efiSecureBootEnabled"></a>

```csharp
public object EfiSecureBootEnabled { get; set; }
```

- *Type:* object

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#efi_secure_boot_enabled DataVsphereVirtualMachine#efi_secure_boot_enabled}

---

##### `EnableDiskUuid`<sup>Optional</sup> <a name="EnableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableDiskUuid"></a>

```csharp
public object EnableDiskUuid { get; set; }
```

- *Type:* object

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#enable_disk_uuid DataVsphereVirtualMachine#enable_disk_uuid}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableLogging"></a>

```csharp
public object EnableLogging { get; set; }
```

- *Type:* object

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#enable_logging DataVsphereVirtualMachine#enable_logging}

---

##### `EptRviMode`<sup>Optional</sup> <a name="EptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.eptRviMode"></a>

```csharp
public string EptRviMode { get; set; }
```

- *Type:* string

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#ept_rvi_mode DataVsphereVirtualMachine#ept_rvi_mode}

---

##### `ExtraConfig`<sup>Optional</sup> <a name="ExtraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#extra_config DataVsphereVirtualMachine#extra_config}

---

##### `ExtraConfigRebootRequired`<sup>Optional</sup> <a name="ExtraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfigRebootRequired"></a>

```csharp
public object ExtraConfigRebootRequired { get; set; }
```

- *Type:* object

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#extra_config_reboot_required DataVsphereVirtualMachine#extra_config_reboot_required}

---

##### `Firmware`<sup>Optional</sup> <a name="Firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.firmware"></a>

```csharp
public string Firmware { get; set; }
```

- *Type:* string

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#firmware DataVsphereVirtualMachine#firmware}

---

##### `GuestId`<sup>Optional</sup> <a name="GuestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.guestId"></a>

```csharp
public string GuestId { get; set; }
```

- *Type:* string

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#guest_id DataVsphereVirtualMachine#guest_id}

---

##### `HardwareVersion`<sup>Optional</sup> <a name="HardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hardwareVersion"></a>

```csharp
public double HardwareVersion { get; set; }
```

- *Type:* double

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#hardware_version DataVsphereVirtualMachine#hardware_version}

---

##### `HvMode`<sup>Optional</sup> <a name="HvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hvMode"></a>

```csharp
public string HvMode { get; set; }
```

- *Type:* string

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#hv_mode DataVsphereVirtualMachine#hv_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdeControllerScanCount`<sup>Optional</sup> <a name="IdeControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.ideControllerScanCount"></a>

```csharp
public double IdeControllerScanCount { get; set; }
```

- *Type:* double

The number of IDE controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#ide_controller_scan_count DataVsphereVirtualMachine#ide_controller_scan_count}

---

##### `LatencySensitivity`<sup>Optional</sup> <a name="LatencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.latencySensitivity"></a>

```csharp
public string LatencySensitivity { get; set; }
```

- *Type:* string

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#latency_sensitivity DataVsphereVirtualMachine#latency_sensitivity}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#memory DataVsphereVirtualMachine#memory}

---

##### `MemoryHotAddEnabled`<sup>Optional</sup> <a name="MemoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryHotAddEnabled"></a>

```csharp
public object MemoryHotAddEnabled { get; set; }
```

- *Type:* object

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#memory_hot_add_enabled DataVsphereVirtualMachine#memory_hot_add_enabled}

---

##### `MemoryLimit`<sup>Optional</sup> <a name="MemoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; set; }
```

- *Type:* double

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#memory_limit DataVsphereVirtualMachine#memory_limit}

---

##### `MemoryReservation`<sup>Optional</sup> <a name="MemoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; set; }
```

- *Type:* double

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#memory_reservation DataVsphereVirtualMachine#memory_reservation}

---

##### `MemoryShareCount`<sup>Optional</sup> <a name="MemoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareCount"></a>

```csharp
public double MemoryShareCount { get; set; }
```

- *Type:* double

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#memory_share_count DataVsphereVirtualMachine#memory_share_count}

---

##### `MemoryShareLevel`<sup>Optional</sup> <a name="MemoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareLevel"></a>

```csharp
public string MemoryShareLevel { get; set; }
```

- *Type:* string

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#memory_share_level DataVsphereVirtualMachine#memory_share_level}

---

##### `Moid`<sup>Optional</sup> <a name="Moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.moid"></a>

```csharp
public string Moid { get; set; }
```

- *Type:* string

The machine object ID from VMware vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#moid DataVsphereVirtualMachine#moid}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#name DataVsphereVirtualMachine#name}

---

##### `NestedHvEnabled`<sup>Optional</sup> <a name="NestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.nestedHvEnabled"></a>

```csharp
public object NestedHvEnabled { get; set; }
```

- *Type:* object

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#nested_hv_enabled DataVsphereVirtualMachine#nested_hv_enabled}

---

##### `NumCoresPerSocket`<sup>Optional</sup> <a name="NumCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCoresPerSocket"></a>

```csharp
public double NumCoresPerSocket { get; set; }
```

- *Type:* double

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#num_cores_per_socket DataVsphereVirtualMachine#num_cores_per_socket}

---

##### `NumCpus`<sup>Optional</sup> <a name="NumCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCpus"></a>

```csharp
public double NumCpus { get; set; }
```

- *Type:* double

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#num_cpus DataVsphereVirtualMachine#num_cpus}

---

##### `ReplaceTrigger`<sup>Optional</sup> <a name="ReplaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.replaceTrigger"></a>

```csharp
public string ReplaceTrigger { get; set; }
```

- *Type:* string

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#replace_trigger DataVsphereVirtualMachine#replace_trigger}

---

##### `RunToolsScriptsAfterPowerOn`<sup>Optional</sup> <a name="RunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterPowerOn"></a>

```csharp
public object RunToolsScriptsAfterPowerOn { get; set; }
```

- *Type:* object

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#run_tools_scripts_after_power_on DataVsphereVirtualMachine#run_tools_scripts_after_power_on}

---

##### `RunToolsScriptsAfterResume`<sup>Optional</sup> <a name="RunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterResume"></a>

```csharp
public object RunToolsScriptsAfterResume { get; set; }
```

- *Type:* object

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#run_tools_scripts_after_resume DataVsphereVirtualMachine#run_tools_scripts_after_resume}

---

##### `RunToolsScriptsBeforeGuestReboot`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot"></a>

```csharp
public object RunToolsScriptsBeforeGuestReboot { get; set; }
```

- *Type:* object

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_reboot DataVsphereVirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `RunToolsScriptsBeforeGuestShutdown`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown"></a>

```csharp
public object RunToolsScriptsBeforeGuestShutdown { get; set; }
```

- *Type:* object

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_shutdown DataVsphereVirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `RunToolsScriptsBeforeGuestStandby`<sup>Optional</sup> <a name="RunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby"></a>

```csharp
public object RunToolsScriptsBeforeGuestStandby { get; set; }
```

- *Type:* object

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_standby DataVsphereVirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `SataControllerScanCount`<sup>Optional</sup> <a name="SataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.sataControllerScanCount"></a>

```csharp
public double SataControllerScanCount { get; set; }
```

- *Type:* double

The number of SATA controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#sata_controller_scan_count DataVsphereVirtualMachine#sata_controller_scan_count}

---

##### `ScsiControllerScanCount`<sup>Optional</sup> <a name="ScsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.scsiControllerScanCount"></a>

```csharp
public double ScsiControllerScanCount { get; set; }
```

- *Type:* double

The number of SCSI controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#scsi_controller_scan_count DataVsphereVirtualMachine#scsi_controller_scan_count}

---

##### `StoragePolicyId`<sup>Optional</sup> <a name="StoragePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.storagePolicyId"></a>

```csharp
public string StoragePolicyId { get; set; }
```

- *Type:* string

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#storage_policy_id DataVsphereVirtualMachine#storage_policy_id}

---

##### `SwapPlacementPolicy`<sup>Optional</sup> <a name="SwapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.swapPlacementPolicy"></a>

```csharp
public string SwapPlacementPolicy { get; set; }
```

- *Type:* string

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#swap_placement_policy DataVsphereVirtualMachine#swap_placement_policy}

---

##### `SyncTimeWithHost`<sup>Optional</sup> <a name="SyncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHost"></a>

```csharp
public object SyncTimeWithHost { get; set; }
```

- *Type:* object

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#sync_time_with_host DataVsphereVirtualMachine#sync_time_with_host}

---

##### `SyncTimeWithHostPeriodically`<sup>Optional</sup> <a name="SyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHostPeriodically"></a>

```csharp
public object SyncTimeWithHostPeriodically { get; set; }
```

- *Type:* object

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#sync_time_with_host_periodically DataVsphereVirtualMachine#sync_time_with_host_periodically}

---

##### `ToolsUpgradePolicy`<sup>Optional</sup> <a name="ToolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.toolsUpgradePolicy"></a>

```csharp
public string ToolsUpgradePolicy { get; set; }
```

- *Type:* string

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#tools_upgrade_policy DataVsphereVirtualMachine#tools_upgrade_policy}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

The UUID of the virtual machine. Also exposed as the ID of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#uuid DataVsphereVirtualMachine#uuid}

---

##### `Vapp`<sup>Optional</sup> <a name="Vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vapp"></a>

```csharp
public DataVsphereVirtualMachineVapp Vapp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#vapp DataVsphereVirtualMachine#vapp}

---

##### `VbsEnabled`<sup>Optional</sup> <a name="VbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vbsEnabled"></a>

```csharp
public object VbsEnabled { get; set; }
```

- *Type:* object

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#vbs_enabled DataVsphereVirtualMachine#vbs_enabled}

---

##### `VvtdEnabled`<sup>Optional</sup> <a name="VvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vvtdEnabled"></a>

```csharp
public object VvtdEnabled { get; set; }
```

- *Type:* object

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#vvtd_enabled DataVsphereVirtualMachine#vvtd_enabled}

---

### DataVsphereVirtualMachineDisks <a name="DataVsphereVirtualMachineDisks" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereVirtualMachineDisks {

};
```


### DataVsphereVirtualMachineNetworkInterfaces <a name="DataVsphereVirtualMachineNetworkInterfaces" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereVirtualMachineNetworkInterfaces {

};
```


### DataVsphereVirtualMachineVapp <a name="DataVsphereVirtualMachineVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereVirtualMachineVapp {
    System.Collections.Generic.IDictionary<string, string> Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of customizable vApp properties and their values. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.5.1/docs/data-sources/virtual_machine#properties DataVsphereVirtualMachine#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVsphereVirtualMachineDisksList <a name="DataVsphereVirtualMachineDisksList" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereVirtualMachineDisksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get"></a>

```csharp
private DataVsphereVirtualMachineDisksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataVsphereVirtualMachineDisksOutputReference <a name="DataVsphereVirtualMachineDisksOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereVirtualMachineDisksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.eagerlyScrub">EagerlyScrub</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.thinProvisioned">ThinProvisioned</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.unitNumber">UnitNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks">DataVsphereVirtualMachineDisks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EagerlyScrub`<sup>Required</sup> <a name="EagerlyScrub" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.eagerlyScrub"></a>

```csharp
public IResolvable EagerlyScrub { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `ThinProvisioned`<sup>Required</sup> <a name="ThinProvisioned" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.thinProvisioned"></a>

```csharp
public IResolvable ThinProvisioned { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `UnitNumber`<sup>Required</sup> <a name="UnitNumber" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.unitNumber"></a>

```csharp
public double UnitNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.internalValue"></a>

```csharp
public DataVsphereVirtualMachineDisks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks">DataVsphereVirtualMachineDisks</a>

---


### DataVsphereVirtualMachineNetworkInterfacesList <a name="DataVsphereVirtualMachineNetworkInterfacesList" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereVirtualMachineNetworkInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get"></a>

```csharp
private DataVsphereVirtualMachineNetworkInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataVsphereVirtualMachineNetworkInterfacesOutputReference <a name="DataVsphereVirtualMachineNetworkInterfacesOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereVirtualMachineNetworkInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.adapterType">AdapterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthLimit">BandwidthLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthReservation">BandwidthReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareCount">BandwidthShareCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareLevel">BandwidthShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.macAddress">MacAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces">DataVsphereVirtualMachineNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdapterType`<sup>Required</sup> <a name="AdapterType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.adapterType"></a>

```csharp
public string AdapterType { get; }
```

- *Type:* string

---

##### `BandwidthLimit`<sup>Required</sup> <a name="BandwidthLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthLimit"></a>

```csharp
public double BandwidthLimit { get; }
```

- *Type:* double

---

##### `BandwidthReservation`<sup>Required</sup> <a name="BandwidthReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthReservation"></a>

```csharp
public double BandwidthReservation { get; }
```

- *Type:* double

---

##### `BandwidthShareCount`<sup>Required</sup> <a name="BandwidthShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareCount"></a>

```csharp
public double BandwidthShareCount { get; }
```

- *Type:* double

---

##### `BandwidthShareLevel`<sup>Required</sup> <a name="BandwidthShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareLevel"></a>

```csharp
public string BandwidthShareLevel { get; }
```

- *Type:* string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.macAddress"></a>

```csharp
public string MacAddress { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.internalValue"></a>

```csharp
public DataVsphereVirtualMachineNetworkInterfaces InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces">DataVsphereVirtualMachineNetworkInterfaces</a>

---


### DataVsphereVirtualMachineVappOutputReference <a name="DataVsphereVirtualMachineVappOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Vsphere;

new DataVsphereVirtualMachineVappOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.internalValue"></a>

```csharp
public DataVsphereVirtualMachineVapp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---



