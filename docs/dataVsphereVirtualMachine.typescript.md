# `dataVsphereVirtualMachine` Submodule <a name="`dataVsphereVirtualMachine` Submodule" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVsphereVirtualMachine <a name="DataVsphereVirtualMachine" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine vsphere_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

new dataVsphereVirtualMachine.DataVsphereVirtualMachine(scope: Construct, id: string, config?: DataVsphereVirtualMachineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig">DataVsphereVirtualMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig">DataVsphereVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp">putVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAlternateGuestName">resetAlternateGuestName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAnnotation">resetAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootDelay">resetBootDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryDelay">resetBootRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryEnabled">resetBootRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotAddEnabled">resetCpuHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotRemoveEnabled">resetCpuHotRemoveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuLimit">resetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuPerformanceCountersEnabled">resetCpuPerformanceCountersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuReservation">resetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareCount">resetCpuShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareLevel">resetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetDatacenterId">resetDatacenterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEfiSecureBootEnabled">resetEfiSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableDiskUuid">resetEnableDiskUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEptRviMode">resetEptRviMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfig">resetExtraConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfigRebootRequired">resetExtraConfigRebootRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFirmware">resetFirmware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetGuestId">resetGuestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHardwareVersion">resetHardwareVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHvMode">resetHvMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetIdeControllerScanCount">resetIdeControllerScanCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetLatencySensitivity">resetLatencySensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryHotAddEnabled">resetMemoryHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservation">resetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservationLockedToMax">resetMemoryReservationLockedToMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareCount">resetMemoryShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareLevel">resetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMoid">resetMoid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNestedHvEnabled">resetNestedHvEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCoresPerSocket">resetNumCoresPerSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCpus">resetNumCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetReplaceTrigger">resetReplaceTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterPowerOn">resetRunToolsScriptsAfterPowerOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterResume">resetRunToolsScriptsAfterResume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestReboot">resetRunToolsScriptsBeforeGuestReboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestShutdown">resetRunToolsScriptsBeforeGuestShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestStandby">resetRunToolsScriptsBeforeGuestStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSataControllerScanCount">resetSataControllerScanCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetScsiControllerScanCount">resetScsiControllerScanCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetStoragePolicyId">resetStoragePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSwapPlacementPolicy">resetSwapPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHost">resetSyncTimeWithHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHostPeriodically">resetSyncTimeWithHostPeriodically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetToolsUpgradePolicy">resetToolsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetUuid">resetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVapp">resetVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVbsEnabled">resetVbsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVvtdEnabled">resetVvtdEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putVapp` <a name="putVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp"></a>

```typescript
public putVapp(value: DataVsphereVirtualMachineVapp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.putVapp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---

##### `resetAlternateGuestName` <a name="resetAlternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAlternateGuestName"></a>

```typescript
public resetAlternateGuestName(): void
```

##### `resetAnnotation` <a name="resetAnnotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetAnnotation"></a>

```typescript
public resetAnnotation(): void
```

##### `resetBootDelay` <a name="resetBootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootDelay"></a>

```typescript
public resetBootDelay(): void
```

##### `resetBootRetryDelay` <a name="resetBootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryDelay"></a>

```typescript
public resetBootRetryDelay(): void
```

##### `resetBootRetryEnabled` <a name="resetBootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetBootRetryEnabled"></a>

```typescript
public resetBootRetryEnabled(): void
```

##### `resetCpuHotAddEnabled` <a name="resetCpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotAddEnabled"></a>

```typescript
public resetCpuHotAddEnabled(): void
```

##### `resetCpuHotRemoveEnabled` <a name="resetCpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuHotRemoveEnabled"></a>

```typescript
public resetCpuHotRemoveEnabled(): void
```

##### `resetCpuLimit` <a name="resetCpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuLimit"></a>

```typescript
public resetCpuLimit(): void
```

##### `resetCpuPerformanceCountersEnabled` <a name="resetCpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuPerformanceCountersEnabled"></a>

```typescript
public resetCpuPerformanceCountersEnabled(): void
```

##### `resetCpuReservation` <a name="resetCpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuReservation"></a>

```typescript
public resetCpuReservation(): void
```

##### `resetCpuShareCount` <a name="resetCpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareCount"></a>

```typescript
public resetCpuShareCount(): void
```

##### `resetCpuShareLevel` <a name="resetCpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetCpuShareLevel"></a>

```typescript
public resetCpuShareLevel(): void
```

##### `resetDatacenterId` <a name="resetDatacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetDatacenterId"></a>

```typescript
public resetDatacenterId(): void
```

##### `resetEfiSecureBootEnabled` <a name="resetEfiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEfiSecureBootEnabled"></a>

```typescript
public resetEfiSecureBootEnabled(): void
```

##### `resetEnableDiskUuid` <a name="resetEnableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableDiskUuid"></a>

```typescript
public resetEnableDiskUuid(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetEptRviMode` <a name="resetEptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetEptRviMode"></a>

```typescript
public resetEptRviMode(): void
```

##### `resetExtraConfig` <a name="resetExtraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfig"></a>

```typescript
public resetExtraConfig(): void
```

##### `resetExtraConfigRebootRequired` <a name="resetExtraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetExtraConfigRebootRequired"></a>

```typescript
public resetExtraConfigRebootRequired(): void
```

##### `resetFirmware` <a name="resetFirmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFirmware"></a>

```typescript
public resetFirmware(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetGuestId` <a name="resetGuestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetGuestId"></a>

```typescript
public resetGuestId(): void
```

##### `resetHardwareVersion` <a name="resetHardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHardwareVersion"></a>

```typescript
public resetHardwareVersion(): void
```

##### `resetHvMode` <a name="resetHvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetHvMode"></a>

```typescript
public resetHvMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdeControllerScanCount` <a name="resetIdeControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetIdeControllerScanCount"></a>

```typescript
public resetIdeControllerScanCount(): void
```

##### `resetLatencySensitivity` <a name="resetLatencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetLatencySensitivity"></a>

```typescript
public resetLatencySensitivity(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetMemoryHotAddEnabled` <a name="resetMemoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryHotAddEnabled"></a>

```typescript
public resetMemoryHotAddEnabled(): void
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryLimit"></a>

```typescript
public resetMemoryLimit(): void
```

##### `resetMemoryReservation` <a name="resetMemoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservation"></a>

```typescript
public resetMemoryReservation(): void
```

##### `resetMemoryReservationLockedToMax` <a name="resetMemoryReservationLockedToMax" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryReservationLockedToMax"></a>

```typescript
public resetMemoryReservationLockedToMax(): void
```

##### `resetMemoryShareCount` <a name="resetMemoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareCount"></a>

```typescript
public resetMemoryShareCount(): void
```

##### `resetMemoryShareLevel` <a name="resetMemoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMemoryShareLevel"></a>

```typescript
public resetMemoryShareLevel(): void
```

##### `resetMoid` <a name="resetMoid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetMoid"></a>

```typescript
public resetMoid(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNestedHvEnabled` <a name="resetNestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNestedHvEnabled"></a>

```typescript
public resetNestedHvEnabled(): void
```

##### `resetNumCoresPerSocket` <a name="resetNumCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCoresPerSocket"></a>

```typescript
public resetNumCoresPerSocket(): void
```

##### `resetNumCpus` <a name="resetNumCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetNumCpus"></a>

```typescript
public resetNumCpus(): void
```

##### `resetReplaceTrigger` <a name="resetReplaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetReplaceTrigger"></a>

```typescript
public resetReplaceTrigger(): void
```

##### `resetRunToolsScriptsAfterPowerOn` <a name="resetRunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterPowerOn"></a>

```typescript
public resetRunToolsScriptsAfterPowerOn(): void
```

##### `resetRunToolsScriptsAfterResume` <a name="resetRunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsAfterResume"></a>

```typescript
public resetRunToolsScriptsAfterResume(): void
```

##### `resetRunToolsScriptsBeforeGuestReboot` <a name="resetRunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestReboot"></a>

```typescript
public resetRunToolsScriptsBeforeGuestReboot(): void
```

##### `resetRunToolsScriptsBeforeGuestShutdown` <a name="resetRunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestShutdown"></a>

```typescript
public resetRunToolsScriptsBeforeGuestShutdown(): void
```

##### `resetRunToolsScriptsBeforeGuestStandby` <a name="resetRunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetRunToolsScriptsBeforeGuestStandby"></a>

```typescript
public resetRunToolsScriptsBeforeGuestStandby(): void
```

##### `resetSataControllerScanCount` <a name="resetSataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSataControllerScanCount"></a>

```typescript
public resetSataControllerScanCount(): void
```

##### `resetScsiControllerScanCount` <a name="resetScsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetScsiControllerScanCount"></a>

```typescript
public resetScsiControllerScanCount(): void
```

##### `resetStoragePolicyId` <a name="resetStoragePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetStoragePolicyId"></a>

```typescript
public resetStoragePolicyId(): void
```

##### `resetSwapPlacementPolicy` <a name="resetSwapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSwapPlacementPolicy"></a>

```typescript
public resetSwapPlacementPolicy(): void
```

##### `resetSyncTimeWithHost` <a name="resetSyncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHost"></a>

```typescript
public resetSyncTimeWithHost(): void
```

##### `resetSyncTimeWithHostPeriodically` <a name="resetSyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetSyncTimeWithHostPeriodically"></a>

```typescript
public resetSyncTimeWithHostPeriodically(): void
```

##### `resetToolsUpgradePolicy` <a name="resetToolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetToolsUpgradePolicy"></a>

```typescript
public resetToolsUpgradePolicy(): void
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetUuid"></a>

```typescript
public resetUuid(): void
```

##### `resetVapp` <a name="resetVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVapp"></a>

```typescript
public resetVapp(): void
```

##### `resetVbsEnabled` <a name="resetVbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVbsEnabled"></a>

```typescript
public resetVbsEnabled(): void
```

##### `resetVvtdEnabled` <a name="resetVvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.resetVvtdEnabled"></a>

```typescript
public resetVvtdEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVsphereVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataVsphereVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVsphereVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVsphereVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVsphereVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.changeVersion">changeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.defaultIpAddress">defaultIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.disks">disks</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList">DataVsphereVirtualMachineDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIpAddresses">guestIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.instanceUuid">instanceUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList">DataVsphereVirtualMachineNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaceTypes">networkInterfaceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiBusSharing">scsiBusSharing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiType">scsiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference">DataVsphereVirtualMachineVappOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappTransport">vappTransport</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestNameInput">alternateGuestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotationInput">annotationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelayInput">bootDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelayInput">bootRetryDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabledInput">bootRetryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabledInput">cpuHotAddEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabledInput">cpuHotRemoveEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimitInput">cpuLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabledInput">cpuPerformanceCountersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservationInput">cpuReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCountInput">cpuShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevelInput">cpuShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabledInput">efiSecureBootEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuidInput">enableDiskUuidInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviModeInput">eptRviModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigInput">extraConfigInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequiredInput">extraConfigRebootRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmwareInput">firmwareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIdInput">guestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersionInput">hardwareVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvModeInput">hvModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCountInput">ideControllerScanCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivityInput">latencySensitivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabledInput">memoryHotAddEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimitInput">memoryLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationInput">memoryReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMaxInput">memoryReservationLockedToMaxInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCountInput">memoryShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevelInput">memoryShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moidInput">moidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabledInput">nestedHvEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocketInput">numCoresPerSocketInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpusInput">numCpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTriggerInput">replaceTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOnInput">runToolsScriptsAfterPowerOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResumeInput">runToolsScriptsAfterResumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestRebootInput">runToolsScriptsBeforeGuestRebootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput">runToolsScriptsBeforeGuestShutdownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput">runToolsScriptsBeforeGuestStandbyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCountInput">sataControllerScanCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCountInput">scsiControllerScanCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyIdInput">storagePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicyInput">swapPlacementPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostInput">syncTimeWithHostInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodicallyInput">syncTimeWithHostPeriodicallyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicyInput">toolsUpgradePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappInput">vappInput</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabledInput">vbsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabledInput">vvtdEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestName">alternateGuestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotation">annotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelay">bootDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelay">bootRetryDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabled">bootRetryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabled">cpuHotAddEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabled">cpuHotRemoveEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimit">cpuLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabled">cpuPerformanceCountersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservation">cpuReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCount">cpuShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevel">cpuShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabled">efiSecureBootEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuid">enableDiskUuid</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviMode">eptRviMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfig">extraConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequired">extraConfigRebootRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmware">firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestId">guestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersion">hardwareVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvMode">hvMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCount">ideControllerScanCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivity">latencySensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabled">memoryHotAddEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMax">memoryReservationLockedToMax</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCount">memoryShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevel">memoryShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moid">moid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabled">nestedHvEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocket">numCoresPerSocket</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpus">numCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTrigger">replaceTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOn">runToolsScriptsAfterPowerOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResume">runToolsScriptsAfterResume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestReboot">runToolsScriptsBeforeGuestReboot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdown">runToolsScriptsBeforeGuestShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandby">runToolsScriptsBeforeGuestStandby</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCount">sataControllerScanCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCount">scsiControllerScanCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyId">storagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicy">swapPlacementPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHost">syncTimeWithHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodically">syncTimeWithHostPeriodically</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicy">toolsUpgradePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabled">vbsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabled">vvtdEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `changeVersion`<sup>Required</sup> <a name="changeVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.changeVersion"></a>

```typescript
public readonly changeVersion: string;
```

- *Type:* string

---

##### `defaultIpAddress`<sup>Required</sup> <a name="defaultIpAddress" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.defaultIpAddress"></a>

```typescript
public readonly defaultIpAddress: string;
```

- *Type:* string

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.disks"></a>

```typescript
public readonly disks: DataVsphereVirtualMachineDisksList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList">DataVsphereVirtualMachineDisksList</a>

---

##### `guestIpAddresses`<sup>Required</sup> <a name="guestIpAddresses" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIpAddresses"></a>

```typescript
public readonly guestIpAddresses: string[];
```

- *Type:* string[]

---

##### `instanceUuid`<sup>Required</sup> <a name="instanceUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.instanceUuid"></a>

```typescript
public readonly instanceUuid: string;
```

- *Type:* string

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: DataVsphereVirtualMachineNetworkInterfacesList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList">DataVsphereVirtualMachineNetworkInterfacesList</a>

---

##### `networkInterfaceTypes`<sup>Required</sup> <a name="networkInterfaceTypes" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.networkInterfaceTypes"></a>

```typescript
public readonly networkInterfaceTypes: string[];
```

- *Type:* string[]

---

##### `scsiBusSharing`<sup>Required</sup> <a name="scsiBusSharing" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiBusSharing"></a>

```typescript
public readonly scsiBusSharing: string;
```

- *Type:* string

---

##### `scsiType`<sup>Required</sup> <a name="scsiType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiType"></a>

```typescript
public readonly scsiType: string;
```

- *Type:* string

---

##### `vapp`<sup>Required</sup> <a name="vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vapp"></a>

```typescript
public readonly vapp: DataVsphereVirtualMachineVappOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference">DataVsphereVirtualMachineVappOutputReference</a>

---

##### `vappTransport`<sup>Required</sup> <a name="vappTransport" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappTransport"></a>

```typescript
public readonly vappTransport: string[];
```

- *Type:* string[]

---

##### `alternateGuestNameInput`<sup>Optional</sup> <a name="alternateGuestNameInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestNameInput"></a>

```typescript
public readonly alternateGuestNameInput: string;
```

- *Type:* string

---

##### `annotationInput`<sup>Optional</sup> <a name="annotationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotationInput"></a>

```typescript
public readonly annotationInput: string;
```

- *Type:* string

---

##### `bootDelayInput`<sup>Optional</sup> <a name="bootDelayInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelayInput"></a>

```typescript
public readonly bootDelayInput: number;
```

- *Type:* number

---

##### `bootRetryDelayInput`<sup>Optional</sup> <a name="bootRetryDelayInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelayInput"></a>

```typescript
public readonly bootRetryDelayInput: number;
```

- *Type:* number

---

##### `bootRetryEnabledInput`<sup>Optional</sup> <a name="bootRetryEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabledInput"></a>

```typescript
public readonly bootRetryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuHotAddEnabledInput`<sup>Optional</sup> <a name="cpuHotAddEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabledInput"></a>

```typescript
public readonly cpuHotAddEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuHotRemoveEnabledInput`<sup>Optional</sup> <a name="cpuHotRemoveEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabledInput"></a>

```typescript
public readonly cpuHotRemoveEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuLimitInput`<sup>Optional</sup> <a name="cpuLimitInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimitInput"></a>

```typescript
public readonly cpuLimitInput: number;
```

- *Type:* number

---

##### `cpuPerformanceCountersEnabledInput`<sup>Optional</sup> <a name="cpuPerformanceCountersEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabledInput"></a>

```typescript
public readonly cpuPerformanceCountersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuReservationInput`<sup>Optional</sup> <a name="cpuReservationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservationInput"></a>

```typescript
public readonly cpuReservationInput: number;
```

- *Type:* number

---

##### `cpuShareCountInput`<sup>Optional</sup> <a name="cpuShareCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCountInput"></a>

```typescript
public readonly cpuShareCountInput: number;
```

- *Type:* number

---

##### `cpuShareLevelInput`<sup>Optional</sup> <a name="cpuShareLevelInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevelInput"></a>

```typescript
public readonly cpuShareLevelInput: string;
```

- *Type:* string

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `efiSecureBootEnabledInput`<sup>Optional</sup> <a name="efiSecureBootEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabledInput"></a>

```typescript
public readonly efiSecureBootEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDiskUuidInput`<sup>Optional</sup> <a name="enableDiskUuidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuidInput"></a>

```typescript
public readonly enableDiskUuidInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eptRviModeInput`<sup>Optional</sup> <a name="eptRviModeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviModeInput"></a>

```typescript
public readonly eptRviModeInput: string;
```

- *Type:* string

---

##### `extraConfigInput`<sup>Optional</sup> <a name="extraConfigInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigInput"></a>

```typescript
public readonly extraConfigInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extraConfigRebootRequiredInput`<sup>Optional</sup> <a name="extraConfigRebootRequiredInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequiredInput"></a>

```typescript
public readonly extraConfigRebootRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firmwareInput`<sup>Optional</sup> <a name="firmwareInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmwareInput"></a>

```typescript
public readonly firmwareInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `guestIdInput`<sup>Optional</sup> <a name="guestIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestIdInput"></a>

```typescript
public readonly guestIdInput: string;
```

- *Type:* string

---

##### `hardwareVersionInput`<sup>Optional</sup> <a name="hardwareVersionInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersionInput"></a>

```typescript
public readonly hardwareVersionInput: number;
```

- *Type:* number

---

##### `hvModeInput`<sup>Optional</sup> <a name="hvModeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvModeInput"></a>

```typescript
public readonly hvModeInput: string;
```

- *Type:* string

---

##### `ideControllerScanCountInput`<sup>Optional</sup> <a name="ideControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCountInput"></a>

```typescript
public readonly ideControllerScanCountInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `latencySensitivityInput`<sup>Optional</sup> <a name="latencySensitivityInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivityInput"></a>

```typescript
public readonly latencySensitivityInput: string;
```

- *Type:* string

---

##### `memoryHotAddEnabledInput`<sup>Optional</sup> <a name="memoryHotAddEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabledInput"></a>

```typescript
public readonly memoryHotAddEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimitInput"></a>

```typescript
public readonly memoryLimitInput: number;
```

- *Type:* number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationInput"></a>

```typescript
public readonly memoryReservationInput: number;
```

- *Type:* number

---

##### `memoryReservationLockedToMaxInput`<sup>Optional</sup> <a name="memoryReservationLockedToMaxInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMaxInput"></a>

```typescript
public readonly memoryReservationLockedToMaxInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryShareCountInput`<sup>Optional</sup> <a name="memoryShareCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCountInput"></a>

```typescript
public readonly memoryShareCountInput: number;
```

- *Type:* number

---

##### `memoryShareLevelInput`<sup>Optional</sup> <a name="memoryShareLevelInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevelInput"></a>

```typescript
public readonly memoryShareLevelInput: string;
```

- *Type:* string

---

##### `moidInput`<sup>Optional</sup> <a name="moidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moidInput"></a>

```typescript
public readonly moidInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nestedHvEnabledInput`<sup>Optional</sup> <a name="nestedHvEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabledInput"></a>

```typescript
public readonly nestedHvEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numCoresPerSocketInput`<sup>Optional</sup> <a name="numCoresPerSocketInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocketInput"></a>

```typescript
public readonly numCoresPerSocketInput: number;
```

- *Type:* number

---

##### `numCpusInput`<sup>Optional</sup> <a name="numCpusInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpusInput"></a>

```typescript
public readonly numCpusInput: number;
```

- *Type:* number

---

##### `replaceTriggerInput`<sup>Optional</sup> <a name="replaceTriggerInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTriggerInput"></a>

```typescript
public readonly replaceTriggerInput: string;
```

- *Type:* string

---

##### `runToolsScriptsAfterPowerOnInput`<sup>Optional</sup> <a name="runToolsScriptsAfterPowerOnInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOnInput"></a>

```typescript
public readonly runToolsScriptsAfterPowerOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsAfterResumeInput`<sup>Optional</sup> <a name="runToolsScriptsAfterResumeInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResumeInput"></a>

```typescript
public readonly runToolsScriptsAfterResumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestRebootInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestRebootInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestRebootInput"></a>

```typescript
public readonly runToolsScriptsBeforeGuestRebootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestShutdownInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestShutdownInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput"></a>

```typescript
public readonly runToolsScriptsBeforeGuestShutdownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestStandbyInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestStandbyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput"></a>

```typescript
public readonly runToolsScriptsBeforeGuestStandbyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sataControllerScanCountInput`<sup>Optional</sup> <a name="sataControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCountInput"></a>

```typescript
public readonly sataControllerScanCountInput: number;
```

- *Type:* number

---

##### `scsiControllerScanCountInput`<sup>Optional</sup> <a name="scsiControllerScanCountInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCountInput"></a>

```typescript
public readonly scsiControllerScanCountInput: number;
```

- *Type:* number

---

##### `storagePolicyIdInput`<sup>Optional</sup> <a name="storagePolicyIdInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyIdInput"></a>

```typescript
public readonly storagePolicyIdInput: string;
```

- *Type:* string

---

##### `swapPlacementPolicyInput`<sup>Optional</sup> <a name="swapPlacementPolicyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicyInput"></a>

```typescript
public readonly swapPlacementPolicyInput: string;
```

- *Type:* string

---

##### `syncTimeWithHostInput`<sup>Optional</sup> <a name="syncTimeWithHostInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostInput"></a>

```typescript
public readonly syncTimeWithHostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncTimeWithHostPeriodicallyInput`<sup>Optional</sup> <a name="syncTimeWithHostPeriodicallyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodicallyInput"></a>

```typescript
public readonly syncTimeWithHostPeriodicallyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `toolsUpgradePolicyInput`<sup>Optional</sup> <a name="toolsUpgradePolicyInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicyInput"></a>

```typescript
public readonly toolsUpgradePolicyInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `vappInput`<sup>Optional</sup> <a name="vappInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vappInput"></a>

```typescript
public readonly vappInput: DataVsphereVirtualMachineVapp;
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---

##### `vbsEnabledInput`<sup>Optional</sup> <a name="vbsEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabledInput"></a>

```typescript
public readonly vbsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vvtdEnabledInput`<sup>Optional</sup> <a name="vvtdEnabledInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabledInput"></a>

```typescript
public readonly vvtdEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `alternateGuestName`<sup>Required</sup> <a name="alternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.alternateGuestName"></a>

```typescript
public readonly alternateGuestName: string;
```

- *Type:* string

---

##### `annotation`<sup>Required</sup> <a name="annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.annotation"></a>

```typescript
public readonly annotation: string;
```

- *Type:* string

---

##### `bootDelay`<sup>Required</sup> <a name="bootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootDelay"></a>

```typescript
public readonly bootDelay: number;
```

- *Type:* number

---

##### `bootRetryDelay`<sup>Required</sup> <a name="bootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryDelay"></a>

```typescript
public readonly bootRetryDelay: number;
```

- *Type:* number

---

##### `bootRetryEnabled`<sup>Required</sup> <a name="bootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.bootRetryEnabled"></a>

```typescript
public readonly bootRetryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuHotAddEnabled`<sup>Required</sup> <a name="cpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotAddEnabled"></a>

```typescript
public readonly cpuHotAddEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuHotRemoveEnabled`<sup>Required</sup> <a name="cpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuHotRemoveEnabled"></a>

```typescript
public readonly cpuHotRemoveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuLimit`<sup>Required</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuLimit"></a>

```typescript
public readonly cpuLimit: number;
```

- *Type:* number

---

##### `cpuPerformanceCountersEnabled`<sup>Required</sup> <a name="cpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuPerformanceCountersEnabled"></a>

```typescript
public readonly cpuPerformanceCountersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuReservation`<sup>Required</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuReservation"></a>

```typescript
public readonly cpuReservation: number;
```

- *Type:* number

---

##### `cpuShareCount`<sup>Required</sup> <a name="cpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareCount"></a>

```typescript
public readonly cpuShareCount: number;
```

- *Type:* number

---

##### `cpuShareLevel`<sup>Required</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.cpuShareLevel"></a>

```typescript
public readonly cpuShareLevel: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `efiSecureBootEnabled`<sup>Required</sup> <a name="efiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.efiSecureBootEnabled"></a>

```typescript
public readonly efiSecureBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDiskUuid`<sup>Required</sup> <a name="enableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableDiskUuid"></a>

```typescript
public readonly enableDiskUuid: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eptRviMode`<sup>Required</sup> <a name="eptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.eptRviMode"></a>

```typescript
public readonly eptRviMode: string;
```

- *Type:* string

---

##### `extraConfig`<sup>Required</sup> <a name="extraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfig"></a>

```typescript
public readonly extraConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extraConfigRebootRequired`<sup>Required</sup> <a name="extraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.extraConfigRebootRequired"></a>

```typescript
public readonly extraConfigRebootRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.firmware"></a>

```typescript
public readonly firmware: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `guestId`<sup>Required</sup> <a name="guestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.guestId"></a>

```typescript
public readonly guestId: string;
```

- *Type:* string

---

##### `hardwareVersion`<sup>Required</sup> <a name="hardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hardwareVersion"></a>

```typescript
public readonly hardwareVersion: number;
```

- *Type:* number

---

##### `hvMode`<sup>Required</sup> <a name="hvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.hvMode"></a>

```typescript
public readonly hvMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ideControllerScanCount`<sup>Required</sup> <a name="ideControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.ideControllerScanCount"></a>

```typescript
public readonly ideControllerScanCount: number;
```

- *Type:* number

---

##### `latencySensitivity`<sup>Required</sup> <a name="latencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.latencySensitivity"></a>

```typescript
public readonly latencySensitivity: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `memoryHotAddEnabled`<sup>Required</sup> <a name="memoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryHotAddEnabled"></a>

```typescript
public readonly memoryHotAddEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

---

##### `memoryReservationLockedToMax`<sup>Required</sup> <a name="memoryReservationLockedToMax" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryReservationLockedToMax"></a>

```typescript
public readonly memoryReservationLockedToMax: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryShareCount`<sup>Required</sup> <a name="memoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareCount"></a>

```typescript
public readonly memoryShareCount: number;
```

- *Type:* number

---

##### `memoryShareLevel`<sup>Required</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.memoryShareLevel"></a>

```typescript
public readonly memoryShareLevel: string;
```

- *Type:* string

---

##### `moid`<sup>Required</sup> <a name="moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.moid"></a>

```typescript
public readonly moid: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nestedHvEnabled`<sup>Required</sup> <a name="nestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.nestedHvEnabled"></a>

```typescript
public readonly nestedHvEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numCoresPerSocket`<sup>Required</sup> <a name="numCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCoresPerSocket"></a>

```typescript
public readonly numCoresPerSocket: number;
```

- *Type:* number

---

##### `numCpus`<sup>Required</sup> <a name="numCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.numCpus"></a>

```typescript
public readonly numCpus: number;
```

- *Type:* number

---

##### `replaceTrigger`<sup>Required</sup> <a name="replaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.replaceTrigger"></a>

```typescript
public readonly replaceTrigger: string;
```

- *Type:* string

---

##### `runToolsScriptsAfterPowerOn`<sup>Required</sup> <a name="runToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterPowerOn"></a>

```typescript
public readonly runToolsScriptsAfterPowerOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsAfterResume`<sup>Required</sup> <a name="runToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsAfterResume"></a>

```typescript
public readonly runToolsScriptsAfterResume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestReboot`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestReboot"></a>

```typescript
public readonly runToolsScriptsBeforeGuestReboot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestShutdown`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestShutdown"></a>

```typescript
public readonly runToolsScriptsBeforeGuestShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestStandby`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.runToolsScriptsBeforeGuestStandby"></a>

```typescript
public readonly runToolsScriptsBeforeGuestStandby: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sataControllerScanCount`<sup>Required</sup> <a name="sataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.sataControllerScanCount"></a>

```typescript
public readonly sataControllerScanCount: number;
```

- *Type:* number

---

##### `scsiControllerScanCount`<sup>Required</sup> <a name="scsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.scsiControllerScanCount"></a>

```typescript
public readonly scsiControllerScanCount: number;
```

- *Type:* number

---

##### `storagePolicyId`<sup>Required</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.storagePolicyId"></a>

```typescript
public readonly storagePolicyId: string;
```

- *Type:* string

---

##### `swapPlacementPolicy`<sup>Required</sup> <a name="swapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.swapPlacementPolicy"></a>

```typescript
public readonly swapPlacementPolicy: string;
```

- *Type:* string

---

##### `syncTimeWithHost`<sup>Required</sup> <a name="syncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHost"></a>

```typescript
public readonly syncTimeWithHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncTimeWithHostPeriodically`<sup>Required</sup> <a name="syncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.syncTimeWithHostPeriodically"></a>

```typescript
public readonly syncTimeWithHostPeriodically: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `toolsUpgradePolicy`<sup>Required</sup> <a name="toolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.toolsUpgradePolicy"></a>

```typescript
public readonly toolsUpgradePolicy: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `vbsEnabled`<sup>Required</sup> <a name="vbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vbsEnabled"></a>

```typescript
public readonly vbsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vvtdEnabled`<sup>Required</sup> <a name="vvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.vvtdEnabled"></a>

```typescript
public readonly vvtdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVsphereVirtualMachineConfig <a name="DataVsphereVirtualMachineConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.Initializer"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

const dataVsphereVirtualMachineConfig: dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.alternateGuestName">alternateGuestName</a></code> | <code>string</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.annotation">annotation</a></code> | <code>string</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootDelay">bootDelay</a></code> | <code>number</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryDelay">bootRetryDelay</a></code> | <code>number</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryEnabled">bootRetryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotAddEnabled">cpuHotAddEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotRemoveEnabled">cpuHotRemoveEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuLimit">cpuLimit</a></code> | <code>number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuPerformanceCountersEnabled">cpuPerformanceCountersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuReservation">cpuReservation</a></code> | <code>number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareCount">cpuShareCount</a></code> | <code>number</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareLevel">cpuShareLevel</a></code> | <code>string</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | The managed object ID of the datacenter the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.efiSecureBootEnabled">efiSecureBootEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableDiskUuid">enableDiskUuid</a></code> | <code>boolean \| cdktf.IResolvable</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.eptRviMode">eptRviMode</a></code> | <code>string</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfig">extraConfig</a></code> | <code>{[ key: string ]: string}</code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfigRebootRequired">extraConfigRebootRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.firmware">firmware</a></code> | <code>string</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.folder">folder</a></code> | <code>string</code> | The name of the folder the virtual machine is in. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.guestId">guestId</a></code> | <code>string</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hardwareVersion">hardwareVersion</a></code> | <code>number</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hvMode">hvMode</a></code> | <code>string</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.ideControllerScanCount">ideControllerScanCount</a></code> | <code>number</code> | The number of IDE controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.latencySensitivity">latencySensitivity</a></code> | <code>string</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memory">memory</a></code> | <code>number</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryHotAddEnabled">memoryHotAddEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservationLockedToMax">memoryReservationLockedToMax</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareCount">memoryShareCount</a></code> | <code>number</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareLevel">memoryShareLevel</a></code> | <code>string</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.moid">moid</a></code> | <code>string</code> | The machine object ID from VMware vSphere. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.name">name</a></code> | <code>string</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.nestedHvEnabled">nestedHvEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCoresPerSocket">numCoresPerSocket</a></code> | <code>number</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCpus">numCpus</a></code> | <code>number</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.replaceTrigger">replaceTrigger</a></code> | <code>string</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterPowerOn">runToolsScriptsAfterPowerOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterResume">runToolsScriptsAfterResume</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot">runToolsScriptsBeforeGuestReboot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown">runToolsScriptsBeforeGuestShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby">runToolsScriptsBeforeGuestStandby</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.sataControllerScanCount">sataControllerScanCount</a></code> | <code>number</code> | The number of SATA controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.scsiControllerScanCount">scsiControllerScanCount</a></code> | <code>number</code> | The number of SCSI controllers to scan for disk sizes and controller types on. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.storagePolicyId">storagePolicyId</a></code> | <code>string</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.swapPlacementPolicy">swapPlacementPolicy</a></code> | <code>string</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHost">syncTimeWithHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHostPeriodically">syncTimeWithHostPeriodically</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.toolsUpgradePolicy">toolsUpgradePolicy</a></code> | <code>string</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.uuid">uuid</a></code> | <code>string</code> | The UUID of the virtual machine. Also exposed as the ID of the resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vbsEnabled">vbsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vvtdEnabled">vvtdEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alternateGuestName`<sup>Optional</sup> <a name="alternateGuestName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.alternateGuestName"></a>

```typescript
public readonly alternateGuestName: string;
```

- *Type:* string

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#alternate_guest_name DataVsphereVirtualMachine#alternate_guest_name}

---

##### `annotation`<sup>Optional</sup> <a name="annotation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.annotation"></a>

```typescript
public readonly annotation: string;
```

- *Type:* string

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#annotation DataVsphereVirtualMachine#annotation}

---

##### `bootDelay`<sup>Optional</sup> <a name="bootDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootDelay"></a>

```typescript
public readonly bootDelay: number;
```

- *Type:* number

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#boot_delay DataVsphereVirtualMachine#boot_delay}

---

##### `bootRetryDelay`<sup>Optional</sup> <a name="bootRetryDelay" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryDelay"></a>

```typescript
public readonly bootRetryDelay: number;
```

- *Type:* number

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#boot_retry_delay DataVsphereVirtualMachine#boot_retry_delay}

---

##### `bootRetryEnabled`<sup>Optional</sup> <a name="bootRetryEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.bootRetryEnabled"></a>

```typescript
public readonly bootRetryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#boot_retry_enabled DataVsphereVirtualMachine#boot_retry_enabled}

---

##### `cpuHotAddEnabled`<sup>Optional</sup> <a name="cpuHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotAddEnabled"></a>

```typescript
public readonly cpuHotAddEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#cpu_hot_add_enabled DataVsphereVirtualMachine#cpu_hot_add_enabled}

---

##### `cpuHotRemoveEnabled`<sup>Optional</sup> <a name="cpuHotRemoveEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuHotRemoveEnabled"></a>

```typescript
public readonly cpuHotRemoveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#cpu_hot_remove_enabled DataVsphereVirtualMachine#cpu_hot_remove_enabled}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuLimit"></a>

```typescript
public readonly cpuLimit: number;
```

- *Type:* number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#cpu_limit DataVsphereVirtualMachine#cpu_limit}

---

##### `cpuPerformanceCountersEnabled`<sup>Optional</sup> <a name="cpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuPerformanceCountersEnabled"></a>

```typescript
public readonly cpuPerformanceCountersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#cpu_performance_counters_enabled DataVsphereVirtualMachine#cpu_performance_counters_enabled}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuReservation"></a>

```typescript
public readonly cpuReservation: number;
```

- *Type:* number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#cpu_reservation DataVsphereVirtualMachine#cpu_reservation}

---

##### `cpuShareCount`<sup>Optional</sup> <a name="cpuShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareCount"></a>

```typescript
public readonly cpuShareCount: number;
```

- *Type:* number

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#cpu_share_count DataVsphereVirtualMachine#cpu_share_count}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.cpuShareLevel"></a>

```typescript
public readonly cpuShareLevel: string;
```

- *Type:* string

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#cpu_share_level DataVsphereVirtualMachine#cpu_share_level}

---

##### `datacenterId`<sup>Optional</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

The managed object ID of the datacenter the virtual machine is in.

This is not required when using ESXi directly, or if there is only one datacenter in your infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#datacenter_id DataVsphereVirtualMachine#datacenter_id}

---

##### `efiSecureBootEnabled`<sup>Optional</sup> <a name="efiSecureBootEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.efiSecureBootEnabled"></a>

```typescript
public readonly efiSecureBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#efi_secure_boot_enabled DataVsphereVirtualMachine#efi_secure_boot_enabled}

---

##### `enableDiskUuid`<sup>Optional</sup> <a name="enableDiskUuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableDiskUuid"></a>

```typescript
public readonly enableDiskUuid: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#enable_disk_uuid DataVsphereVirtualMachine#enable_disk_uuid}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#enable_logging DataVsphereVirtualMachine#enable_logging}

---

##### `eptRviMode`<sup>Optional</sup> <a name="eptRviMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.eptRviMode"></a>

```typescript
public readonly eptRviMode: string;
```

- *Type:* string

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#ept_rvi_mode DataVsphereVirtualMachine#ept_rvi_mode}

---

##### `extraConfig`<sup>Optional</sup> <a name="extraConfig" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfig"></a>

```typescript
public readonly extraConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#extra_config DataVsphereVirtualMachine#extra_config}

---

##### `extraConfigRebootRequired`<sup>Optional</sup> <a name="extraConfigRebootRequired" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.extraConfigRebootRequired"></a>

```typescript
public readonly extraConfigRebootRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#extra_config_reboot_required DataVsphereVirtualMachine#extra_config_reboot_required}

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.firmware"></a>

```typescript
public readonly firmware: string;
```

- *Type:* string

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#firmware DataVsphereVirtualMachine#firmware}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The name of the folder the virtual machine is in.

Allows distinguishing virtual machines with the same name in different folder paths

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#folder DataVsphereVirtualMachine#folder}

---

##### `guestId`<sup>Optional</sup> <a name="guestId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.guestId"></a>

```typescript
public readonly guestId: string;
```

- *Type:* string

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#guest_id DataVsphereVirtualMachine#guest_id}

---

##### `hardwareVersion`<sup>Optional</sup> <a name="hardwareVersion" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hardwareVersion"></a>

```typescript
public readonly hardwareVersion: number;
```

- *Type:* number

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#hardware_version DataVsphereVirtualMachine#hardware_version}

---

##### `hvMode`<sup>Optional</sup> <a name="hvMode" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.hvMode"></a>

```typescript
public readonly hvMode: string;
```

- *Type:* string

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#hv_mode DataVsphereVirtualMachine#hv_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#id DataVsphereVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ideControllerScanCount`<sup>Optional</sup> <a name="ideControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.ideControllerScanCount"></a>

```typescript
public readonly ideControllerScanCount: number;
```

- *Type:* number

The number of IDE controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#ide_controller_scan_count DataVsphereVirtualMachine#ide_controller_scan_count}

---

##### `latencySensitivity`<sup>Optional</sup> <a name="latencySensitivity" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.latencySensitivity"></a>

```typescript
public readonly latencySensitivity: string;
```

- *Type:* string

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#latency_sensitivity DataVsphereVirtualMachine#latency_sensitivity}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#memory DataVsphereVirtualMachine#memory}

---

##### `memoryHotAddEnabled`<sup>Optional</sup> <a name="memoryHotAddEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryHotAddEnabled"></a>

```typescript
public readonly memoryHotAddEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#memory_hot_add_enabled DataVsphereVirtualMachine#memory_hot_add_enabled}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#memory_limit DataVsphereVirtualMachine#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#memory_reservation DataVsphereVirtualMachine#memory_reservation}

---

##### `memoryReservationLockedToMax`<sup>Optional</sup> <a name="memoryReservationLockedToMax" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryReservationLockedToMax"></a>

```typescript
public readonly memoryReservationLockedToMax: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#memory_reservation_locked_to_max DataVsphereVirtualMachine#memory_reservation_locked_to_max}

---

##### `memoryShareCount`<sup>Optional</sup> <a name="memoryShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareCount"></a>

```typescript
public readonly memoryShareCount: number;
```

- *Type:* number

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#memory_share_count DataVsphereVirtualMachine#memory_share_count}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.memoryShareLevel"></a>

```typescript
public readonly memoryShareLevel: string;
```

- *Type:* string

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#memory_share_level DataVsphereVirtualMachine#memory_share_level}

---

##### `moid`<sup>Optional</sup> <a name="moid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.moid"></a>

```typescript
public readonly moid: string;
```

- *Type:* string

The machine object ID from VMware vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#moid DataVsphereVirtualMachine#moid}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#name DataVsphereVirtualMachine#name}

---

##### `nestedHvEnabled`<sup>Optional</sup> <a name="nestedHvEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.nestedHvEnabled"></a>

```typescript
public readonly nestedHvEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#nested_hv_enabled DataVsphereVirtualMachine#nested_hv_enabled}

---

##### `numCoresPerSocket`<sup>Optional</sup> <a name="numCoresPerSocket" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCoresPerSocket"></a>

```typescript
public readonly numCoresPerSocket: number;
```

- *Type:* number

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#num_cores_per_socket DataVsphereVirtualMachine#num_cores_per_socket}

---

##### `numCpus`<sup>Optional</sup> <a name="numCpus" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.numCpus"></a>

```typescript
public readonly numCpus: number;
```

- *Type:* number

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#num_cpus DataVsphereVirtualMachine#num_cpus}

---

##### `replaceTrigger`<sup>Optional</sup> <a name="replaceTrigger" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.replaceTrigger"></a>

```typescript
public readonly replaceTrigger: string;
```

- *Type:* string

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#replace_trigger DataVsphereVirtualMachine#replace_trigger}

---

##### `runToolsScriptsAfterPowerOn`<sup>Optional</sup> <a name="runToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterPowerOn"></a>

```typescript
public readonly runToolsScriptsAfterPowerOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#run_tools_scripts_after_power_on DataVsphereVirtualMachine#run_tools_scripts_after_power_on}

---

##### `runToolsScriptsAfterResume`<sup>Optional</sup> <a name="runToolsScriptsAfterResume" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsAfterResume"></a>

```typescript
public readonly runToolsScriptsAfterResume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#run_tools_scripts_after_resume DataVsphereVirtualMachine#run_tools_scripts_after_resume}

---

##### `runToolsScriptsBeforeGuestReboot`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot"></a>

```typescript
public readonly runToolsScriptsBeforeGuestReboot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_reboot DataVsphereVirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `runToolsScriptsBeforeGuestShutdown`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown"></a>

```typescript
public readonly runToolsScriptsBeforeGuestShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_shutdown DataVsphereVirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `runToolsScriptsBeforeGuestStandby`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby"></a>

```typescript
public readonly runToolsScriptsBeforeGuestStandby: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#run_tools_scripts_before_guest_standby DataVsphereVirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `sataControllerScanCount`<sup>Optional</sup> <a name="sataControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.sataControllerScanCount"></a>

```typescript
public readonly sataControllerScanCount: number;
```

- *Type:* number

The number of SATA controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#sata_controller_scan_count DataVsphereVirtualMachine#sata_controller_scan_count}

---

##### `scsiControllerScanCount`<sup>Optional</sup> <a name="scsiControllerScanCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.scsiControllerScanCount"></a>

```typescript
public readonly scsiControllerScanCount: number;
```

- *Type:* number

The number of SCSI controllers to scan for disk sizes and controller types on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#scsi_controller_scan_count DataVsphereVirtualMachine#scsi_controller_scan_count}

---

##### `storagePolicyId`<sup>Optional</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.storagePolicyId"></a>

```typescript
public readonly storagePolicyId: string;
```

- *Type:* string

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#storage_policy_id DataVsphereVirtualMachine#storage_policy_id}

---

##### `swapPlacementPolicy`<sup>Optional</sup> <a name="swapPlacementPolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.swapPlacementPolicy"></a>

```typescript
public readonly swapPlacementPolicy: string;
```

- *Type:* string

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#swap_placement_policy DataVsphereVirtualMachine#swap_placement_policy}

---

##### `syncTimeWithHost`<sup>Optional</sup> <a name="syncTimeWithHost" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHost"></a>

```typescript
public readonly syncTimeWithHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#sync_time_with_host DataVsphereVirtualMachine#sync_time_with_host}

---

##### `syncTimeWithHostPeriodically`<sup>Optional</sup> <a name="syncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.syncTimeWithHostPeriodically"></a>

```typescript
public readonly syncTimeWithHostPeriodically: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#sync_time_with_host_periodically DataVsphereVirtualMachine#sync_time_with_host_periodically}

---

##### `toolsUpgradePolicy`<sup>Optional</sup> <a name="toolsUpgradePolicy" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.toolsUpgradePolicy"></a>

```typescript
public readonly toolsUpgradePolicy: string;
```

- *Type:* string

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#tools_upgrade_policy DataVsphereVirtualMachine#tools_upgrade_policy}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID of the virtual machine. Also exposed as the ID of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#uuid DataVsphereVirtualMachine#uuid}

---

##### `vapp`<sup>Optional</sup> <a name="vapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vapp"></a>

```typescript
public readonly vapp: DataVsphereVirtualMachineVapp;
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#vapp DataVsphereVirtualMachine#vapp}

---

##### `vbsEnabled`<sup>Optional</sup> <a name="vbsEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vbsEnabled"></a>

```typescript
public readonly vbsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#vbs_enabled DataVsphereVirtualMachine#vbs_enabled}

---

##### `vvtdEnabled`<sup>Optional</sup> <a name="vvtdEnabled" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineConfig.property.vvtdEnabled"></a>

```typescript
public readonly vvtdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#vvtd_enabled DataVsphereVirtualMachine#vvtd_enabled}

---

### DataVsphereVirtualMachineDisks <a name="DataVsphereVirtualMachineDisks" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks.Initializer"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

const dataVsphereVirtualMachineDisks: dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks = { ... }
```


### DataVsphereVirtualMachineNetworkInterfaces <a name="DataVsphereVirtualMachineNetworkInterfaces" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces.Initializer"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

const dataVsphereVirtualMachineNetworkInterfaces: dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces = { ... }
```


### DataVsphereVirtualMachineVapp <a name="DataVsphereVirtualMachineVapp" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.Initializer"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

const dataVsphereVirtualMachineVapp: dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | A map of customizable vApp properties and their values. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.9.2/docs/data-sources/virtual_machine#properties DataVsphereVirtualMachine#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVsphereVirtualMachineDisksList <a name="DataVsphereVirtualMachineDisksList" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

new dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get"></a>

```typescript
public get(index: number): DataVsphereVirtualMachineDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataVsphereVirtualMachineDisksOutputReference <a name="DataVsphereVirtualMachineDisksOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

new dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.eagerlyScrub">eagerlyScrub</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.thinProvisioned">thinProvisioned</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.unitNumber">unitNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks">DataVsphereVirtualMachineDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eagerlyScrub`<sup>Required</sup> <a name="eagerlyScrub" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.eagerlyScrub"></a>

```typescript
public readonly eagerlyScrub: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `thinProvisioned`<sup>Required</sup> <a name="thinProvisioned" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.thinProvisioned"></a>

```typescript
public readonly thinProvisioned: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.unitNumber"></a>

```typescript
public readonly unitNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataVsphereVirtualMachineDisks;
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineDisks">DataVsphereVirtualMachineDisks</a>

---


### DataVsphereVirtualMachineNetworkInterfacesList <a name="DataVsphereVirtualMachineNetworkInterfacesList" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

new dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get"></a>

```typescript
public get(index: number): DataVsphereVirtualMachineNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataVsphereVirtualMachineNetworkInterfacesOutputReference <a name="DataVsphereVirtualMachineNetworkInterfacesOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

new dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.adapterType">adapterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthLimit">bandwidthLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthReservation">bandwidthReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareCount">bandwidthShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareLevel">bandwidthShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.physicalFunction">physicalFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces">DataVsphereVirtualMachineNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adapterType`<sup>Required</sup> <a name="adapterType" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.adapterType"></a>

```typescript
public readonly adapterType: string;
```

- *Type:* string

---

##### `bandwidthLimit`<sup>Required</sup> <a name="bandwidthLimit" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthLimit"></a>

```typescript
public readonly bandwidthLimit: number;
```

- *Type:* number

---

##### `bandwidthReservation`<sup>Required</sup> <a name="bandwidthReservation" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthReservation"></a>

```typescript
public readonly bandwidthReservation: number;
```

- *Type:* number

---

##### `bandwidthShareCount`<sup>Required</sup> <a name="bandwidthShareCount" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareCount"></a>

```typescript
public readonly bandwidthShareCount: number;
```

- *Type:* number

---

##### `bandwidthShareLevel`<sup>Required</sup> <a name="bandwidthShareLevel" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.bandwidthShareLevel"></a>

```typescript
public readonly bandwidthShareLevel: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `physicalFunction`<sup>Required</sup> <a name="physicalFunction" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.physicalFunction"></a>

```typescript
public readonly physicalFunction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataVsphereVirtualMachineNetworkInterfaces;
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineNetworkInterfaces">DataVsphereVirtualMachineNetworkInterfaces</a>

---


### DataVsphereVirtualMachineVappOutputReference <a name="DataVsphereVirtualMachineVappOutputReference" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer"></a>

```typescript
import { dataVsphereVirtualMachine } from '@cdktf/provider-vsphere'

new dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVappOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataVsphereVirtualMachineVapp;
```

- *Type:* <a href="#@cdktf/provider-vsphere.dataVsphereVirtualMachine.DataVsphereVirtualMachineVapp">DataVsphereVirtualMachineVapp</a>

---



