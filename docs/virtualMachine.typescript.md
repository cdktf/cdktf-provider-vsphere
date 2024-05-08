# `virtualMachine` Submodule <a name="`virtualMachine` Submodule" id="@cdktf/provider-vsphere.virtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachine <a name="VirtualMachine" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine vsphere_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachine(scope: Construct, id: string, config: VirtualMachineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig">VirtualMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig">VirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom">putCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone">putClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy">putOvfDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp">putVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAlternateGuestName">resetAlternateGuestName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAnnotation">resetAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootDelay">resetBootDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryDelay">resetBootRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryEnabled">resetBootRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCdrom">resetCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetClone">resetClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotAddEnabled">resetCpuHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotRemoveEnabled">resetCpuHotRemoveEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuLimit">resetCpuLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuPerformanceCountersEnabled">resetCpuPerformanceCountersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuReservation">resetCpuReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareCount">resetCpuShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareLevel">resetCpuShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatacenterId">resetDatacenterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreClusterId">resetDatastoreClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreId">resetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEfiSecureBootEnabled">resetEfiSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableDiskUuid">resetEnableDiskUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEptRviMode">resetEptRviMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfig">resetExtraConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfigRebootRequired">resetExtraConfigRebootRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFirmware">resetFirmware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetForcePowerOff">resetForcePowerOff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetGuestId">resetGuestId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHardwareVersion">resetHardwareVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHostSystemId">resetHostSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHvMode">resetHvMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIdeControllerCount">resetIdeControllerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIgnoredGuestIps">resetIgnoredGuestIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetLatencySensitivity">resetLatencySensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryHotAddEnabled">resetMemoryHotAddEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryLimit">resetMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservation">resetMemoryReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservationLockedToMax">resetMemoryReservationLockedToMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareCount">resetMemoryShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareLevel">resetMemoryShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMigrateWaitTimeout">resetMigrateWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNestedHvEnabled">resetNestedHvEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCoresPerSocket">resetNumCoresPerSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCpus">resetNumCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOvfDeploy">resetOvfDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPciDeviceId">resetPciDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPoweronTimeout">resetPoweronTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetReplaceTrigger">resetReplaceTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterPowerOn">resetRunToolsScriptsAfterPowerOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterResume">resetRunToolsScriptsAfterResume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestReboot">resetRunToolsScriptsBeforeGuestReboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestShutdown">resetRunToolsScriptsBeforeGuestShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestStandby">resetRunToolsScriptsBeforeGuestStandby</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSataControllerCount">resetSataControllerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiBusSharing">resetScsiBusSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiControllerCount">resetScsiControllerCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiType">resetScsiType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetShutdownWaitTimeout">resetShutdownWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetStoragePolicyId">resetStoragePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSwapPlacementPolicy">resetSwapPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHost">resetSyncTimeWithHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHostPeriodically">resetSyncTimeWithHostPeriodically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetToolsUpgradePolicy">resetToolsUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVapp">resetVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVbsEnabled">resetVbsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVvtdEnabled">resetVvtdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestIpTimeout">resetWaitForGuestIpTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetRoutable">resetWaitForGuestNetRoutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetTimeout">resetWaitForGuestNetTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCdrom` <a name="putCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom"></a>

```typescript
public putCdrom(value: IResolvable | VirtualMachineCdrom[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putCdrom.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>[]

---

##### `putClone` <a name="putClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone"></a>

```typescript
public putClone(value: VirtualMachineClone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putClone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---

##### `putDisk` <a name="putDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk"></a>

```typescript
public putDisk(value: IResolvable | VirtualMachineDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>[]

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | VirtualMachineNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>[]

---

##### `putOvfDeploy` <a name="putOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy"></a>

```typescript
public putOvfDeploy(value: VirtualMachineOvfDeploy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putOvfDeploy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---

##### `putVapp` <a name="putVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp"></a>

```typescript
public putVapp(value: VirtualMachineVapp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.putVapp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---

##### `resetAlternateGuestName` <a name="resetAlternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAlternateGuestName"></a>

```typescript
public resetAlternateGuestName(): void
```

##### `resetAnnotation` <a name="resetAnnotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetAnnotation"></a>

```typescript
public resetAnnotation(): void
```

##### `resetBootDelay` <a name="resetBootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootDelay"></a>

```typescript
public resetBootDelay(): void
```

##### `resetBootRetryDelay` <a name="resetBootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryDelay"></a>

```typescript
public resetBootRetryDelay(): void
```

##### `resetBootRetryEnabled` <a name="resetBootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetBootRetryEnabled"></a>

```typescript
public resetBootRetryEnabled(): void
```

##### `resetCdrom` <a name="resetCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCdrom"></a>

```typescript
public resetCdrom(): void
```

##### `resetClone` <a name="resetClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetClone"></a>

```typescript
public resetClone(): void
```

##### `resetCpuHotAddEnabled` <a name="resetCpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotAddEnabled"></a>

```typescript
public resetCpuHotAddEnabled(): void
```

##### `resetCpuHotRemoveEnabled` <a name="resetCpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuHotRemoveEnabled"></a>

```typescript
public resetCpuHotRemoveEnabled(): void
```

##### `resetCpuLimit` <a name="resetCpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuLimit"></a>

```typescript
public resetCpuLimit(): void
```

##### `resetCpuPerformanceCountersEnabled` <a name="resetCpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuPerformanceCountersEnabled"></a>

```typescript
public resetCpuPerformanceCountersEnabled(): void
```

##### `resetCpuReservation` <a name="resetCpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuReservation"></a>

```typescript
public resetCpuReservation(): void
```

##### `resetCpuShareCount` <a name="resetCpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareCount"></a>

```typescript
public resetCpuShareCount(): void
```

##### `resetCpuShareLevel` <a name="resetCpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCpuShareLevel"></a>

```typescript
public resetCpuShareLevel(): void
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetDatacenterId` <a name="resetDatacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatacenterId"></a>

```typescript
public resetDatacenterId(): void
```

##### `resetDatastoreClusterId` <a name="resetDatastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreClusterId"></a>

```typescript
public resetDatastoreClusterId(): void
```

##### `resetDatastoreId` <a name="resetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDatastoreId"></a>

```typescript
public resetDatastoreId(): void
```

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetDisk"></a>

```typescript
public resetDisk(): void
```

##### `resetEfiSecureBootEnabled` <a name="resetEfiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEfiSecureBootEnabled"></a>

```typescript
public resetEfiSecureBootEnabled(): void
```

##### `resetEnableDiskUuid` <a name="resetEnableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableDiskUuid"></a>

```typescript
public resetEnableDiskUuid(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetEptRviMode` <a name="resetEptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetEptRviMode"></a>

```typescript
public resetEptRviMode(): void
```

##### `resetExtraConfig` <a name="resetExtraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfig"></a>

```typescript
public resetExtraConfig(): void
```

##### `resetExtraConfigRebootRequired` <a name="resetExtraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetExtraConfigRebootRequired"></a>

```typescript
public resetExtraConfigRebootRequired(): void
```

##### `resetFirmware` <a name="resetFirmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFirmware"></a>

```typescript
public resetFirmware(): void
```

##### `resetFolder` <a name="resetFolder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetFolder"></a>

```typescript
public resetFolder(): void
```

##### `resetForcePowerOff` <a name="resetForcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetForcePowerOff"></a>

```typescript
public resetForcePowerOff(): void
```

##### `resetGuestId` <a name="resetGuestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetGuestId"></a>

```typescript
public resetGuestId(): void
```

##### `resetHardwareVersion` <a name="resetHardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHardwareVersion"></a>

```typescript
public resetHardwareVersion(): void
```

##### `resetHostSystemId` <a name="resetHostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHostSystemId"></a>

```typescript
public resetHostSystemId(): void
```

##### `resetHvMode` <a name="resetHvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetHvMode"></a>

```typescript
public resetHvMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdeControllerCount` <a name="resetIdeControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIdeControllerCount"></a>

```typescript
public resetIdeControllerCount(): void
```

##### `resetIgnoredGuestIps` <a name="resetIgnoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetIgnoredGuestIps"></a>

```typescript
public resetIgnoredGuestIps(): void
```

##### `resetLatencySensitivity` <a name="resetLatencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetLatencySensitivity"></a>

```typescript
public resetLatencySensitivity(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetMemoryHotAddEnabled` <a name="resetMemoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryHotAddEnabled"></a>

```typescript
public resetMemoryHotAddEnabled(): void
```

##### `resetMemoryLimit` <a name="resetMemoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryLimit"></a>

```typescript
public resetMemoryLimit(): void
```

##### `resetMemoryReservation` <a name="resetMemoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservation"></a>

```typescript
public resetMemoryReservation(): void
```

##### `resetMemoryReservationLockedToMax` <a name="resetMemoryReservationLockedToMax" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryReservationLockedToMax"></a>

```typescript
public resetMemoryReservationLockedToMax(): void
```

##### `resetMemoryShareCount` <a name="resetMemoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareCount"></a>

```typescript
public resetMemoryShareCount(): void
```

##### `resetMemoryShareLevel` <a name="resetMemoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMemoryShareLevel"></a>

```typescript
public resetMemoryShareLevel(): void
```

##### `resetMigrateWaitTimeout` <a name="resetMigrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetMigrateWaitTimeout"></a>

```typescript
public resetMigrateWaitTimeout(): void
```

##### `resetNestedHvEnabled` <a name="resetNestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNestedHvEnabled"></a>

```typescript
public resetNestedHvEnabled(): void
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNetworkInterface"></a>

```typescript
public resetNetworkInterface(): void
```

##### `resetNumCoresPerSocket` <a name="resetNumCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCoresPerSocket"></a>

```typescript
public resetNumCoresPerSocket(): void
```

##### `resetNumCpus` <a name="resetNumCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetNumCpus"></a>

```typescript
public resetNumCpus(): void
```

##### `resetOvfDeploy` <a name="resetOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetOvfDeploy"></a>

```typescript
public resetOvfDeploy(): void
```

##### `resetPciDeviceId` <a name="resetPciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPciDeviceId"></a>

```typescript
public resetPciDeviceId(): void
```

##### `resetPoweronTimeout` <a name="resetPoweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetPoweronTimeout"></a>

```typescript
public resetPoweronTimeout(): void
```

##### `resetReplaceTrigger` <a name="resetReplaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetReplaceTrigger"></a>

```typescript
public resetReplaceTrigger(): void
```

##### `resetRunToolsScriptsAfterPowerOn` <a name="resetRunToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterPowerOn"></a>

```typescript
public resetRunToolsScriptsAfterPowerOn(): void
```

##### `resetRunToolsScriptsAfterResume` <a name="resetRunToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsAfterResume"></a>

```typescript
public resetRunToolsScriptsAfterResume(): void
```

##### `resetRunToolsScriptsBeforeGuestReboot` <a name="resetRunToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestReboot"></a>

```typescript
public resetRunToolsScriptsBeforeGuestReboot(): void
```

##### `resetRunToolsScriptsBeforeGuestShutdown` <a name="resetRunToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestShutdown"></a>

```typescript
public resetRunToolsScriptsBeforeGuestShutdown(): void
```

##### `resetRunToolsScriptsBeforeGuestStandby` <a name="resetRunToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetRunToolsScriptsBeforeGuestStandby"></a>

```typescript
public resetRunToolsScriptsBeforeGuestStandby(): void
```

##### `resetSataControllerCount` <a name="resetSataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSataControllerCount"></a>

```typescript
public resetSataControllerCount(): void
```

##### `resetScsiBusSharing` <a name="resetScsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiBusSharing"></a>

```typescript
public resetScsiBusSharing(): void
```

##### `resetScsiControllerCount` <a name="resetScsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiControllerCount"></a>

```typescript
public resetScsiControllerCount(): void
```

##### `resetScsiType` <a name="resetScsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetScsiType"></a>

```typescript
public resetScsiType(): void
```

##### `resetShutdownWaitTimeout` <a name="resetShutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetShutdownWaitTimeout"></a>

```typescript
public resetShutdownWaitTimeout(): void
```

##### `resetStoragePolicyId` <a name="resetStoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetStoragePolicyId"></a>

```typescript
public resetStoragePolicyId(): void
```

##### `resetSwapPlacementPolicy` <a name="resetSwapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSwapPlacementPolicy"></a>

```typescript
public resetSwapPlacementPolicy(): void
```

##### `resetSyncTimeWithHost` <a name="resetSyncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHost"></a>

```typescript
public resetSyncTimeWithHost(): void
```

##### `resetSyncTimeWithHostPeriodically` <a name="resetSyncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetSyncTimeWithHostPeriodically"></a>

```typescript
public resetSyncTimeWithHostPeriodically(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetToolsUpgradePolicy` <a name="resetToolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetToolsUpgradePolicy"></a>

```typescript
public resetToolsUpgradePolicy(): void
```

##### `resetVapp` <a name="resetVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVapp"></a>

```typescript
public resetVapp(): void
```

##### `resetVbsEnabled` <a name="resetVbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVbsEnabled"></a>

```typescript
public resetVbsEnabled(): void
```

##### `resetVvtdEnabled` <a name="resetVvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetVvtdEnabled"></a>

```typescript
public resetVvtdEnabled(): void
```

##### `resetWaitForGuestIpTimeout` <a name="resetWaitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestIpTimeout"></a>

```typescript
public resetWaitForGuestIpTimeout(): void
```

##### `resetWaitForGuestNetRoutable` <a name="resetWaitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetRoutable"></a>

```typescript
public resetWaitForGuestNetRoutable(): void
```

##### `resetWaitForGuestNetTimeout` <a name="resetWaitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.resetWaitForGuestNetTimeout"></a>

```typescript
public resetWaitForGuestNetTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isConstruct"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

virtualMachine.VirtualMachine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

virtualMachine.VirtualMachine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

virtualMachine.VirtualMachine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

virtualMachine.VirtualMachine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdrom">cdrom</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList">VirtualMachineCdromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.changeVersion">changeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference">VirtualMachineCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.defaultIpAddress">defaultIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList">VirtualMachineDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIpAddresses">guestIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.imported">imported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.moid">moid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList">VirtualMachineNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeploy">ovfDeploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference">VirtualMachineOvfDeployOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.powerState">powerState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.rebootRequired">rebootRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference">VirtualMachineVappOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappTransport">vappTransport</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmwareToolsStatus">vmwareToolsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmxPath">vmxPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestNameInput">alternateGuestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotationInput">annotationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelayInput">bootDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelayInput">bootRetryDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabledInput">bootRetryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdromInput">cdromInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cloneInput">cloneInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabledInput">cpuHotAddEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabledInput">cpuHotRemoveEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimitInput">cpuLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabledInput">cpuPerformanceCountersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservationInput">cpuReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCountInput">cpuShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevelInput">cpuShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributesInput">customAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterIdInput">datastoreClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreIdInput">datastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.diskInput">diskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabledInput">efiSecureBootEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuidInput">enableDiskUuidInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviModeInput">eptRviModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigInput">extraConfigInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequiredInput">extraConfigRebootRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmwareInput">firmwareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOffInput">forcePowerOffInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIdInput">guestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersionInput">hardwareVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemIdInput">hostSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvModeInput">hvModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCountInput">ideControllerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIpsInput">ignoredGuestIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivityInput">latencySensitivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabledInput">memoryHotAddEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimitInput">memoryLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationInput">memoryReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMaxInput">memoryReservationLockedToMaxInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCountInput">memoryShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevelInput">memoryShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeoutInput">migrateWaitTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabledInput">nestedHvEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocketInput">numCoresPerSocketInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpusInput">numCpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeployInput">ovfDeployInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceIdInput">pciDeviceIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeoutInput">poweronTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTriggerInput">replaceTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolIdInput">resourcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOnInput">runToolsScriptsAfterPowerOnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResumeInput">runToolsScriptsAfterResumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestRebootInput">runToolsScriptsBeforeGuestRebootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput">runToolsScriptsBeforeGuestShutdownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput">runToolsScriptsBeforeGuestStandbyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCountInput">sataControllerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharingInput">scsiBusSharingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCountInput">scsiControllerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiTypeInput">scsiTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeoutInput">shutdownWaitTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyIdInput">storagePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicyInput">swapPlacementPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostInput">syncTimeWithHostInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodicallyInput">syncTimeWithHostPeriodicallyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicyInput">toolsUpgradePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappInput">vappInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabledInput">vbsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabledInput">vvtdEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeoutInput">waitForGuestIpTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutableInput">waitForGuestNetRoutableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeoutInput">waitForGuestNetTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestName">alternateGuestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotation">annotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelay">bootDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelay">bootRetryDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabled">bootRetryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabled">cpuHotAddEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabled">cpuHotRemoveEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimit">cpuLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabled">cpuPerformanceCountersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservation">cpuReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCount">cpuShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevel">cpuShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterId">datastoreClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreId">datastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabled">efiSecureBootEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuid">enableDiskUuid</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviMode">eptRviMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfig">extraConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequired">extraConfigRebootRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmware">firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOff">forcePowerOff</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestId">guestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersion">hardwareVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvMode">hvMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCount">ideControllerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIps">ignoredGuestIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivity">latencySensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabled">memoryHotAddEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMax">memoryReservationLockedToMax</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCount">memoryShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevel">memoryShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeout">migrateWaitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabled">nestedHvEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocket">numCoresPerSocket</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpus">numCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceId">pciDeviceId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeout">poweronTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTrigger">replaceTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolId">resourcePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOn">runToolsScriptsAfterPowerOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResume">runToolsScriptsAfterResume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestReboot">runToolsScriptsBeforeGuestReboot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdown">runToolsScriptsBeforeGuestShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandby">runToolsScriptsBeforeGuestStandby</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCount">sataControllerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharing">scsiBusSharing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCount">scsiControllerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiType">scsiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeout">shutdownWaitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyId">storagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicy">swapPlacementPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHost">syncTimeWithHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodically">syncTimeWithHostPeriodically</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicy">toolsUpgradePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabled">vbsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabled">vvtdEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeout">waitForGuestIpTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutable">waitForGuestNetRoutable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeout">waitForGuestNetTimeout</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cdrom`<sup>Required</sup> <a name="cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdrom"></a>

```typescript
public readonly cdrom: VirtualMachineCdromList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList">VirtualMachineCdromList</a>

---

##### `changeVersion`<sup>Required</sup> <a name="changeVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.changeVersion"></a>

```typescript
public readonly changeVersion: string;
```

- *Type:* string

---

##### `clone`<sup>Required</sup> <a name="clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.clone"></a>

```typescript
public readonly clone: VirtualMachineCloneOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference">VirtualMachineCloneOutputReference</a>

---

##### `defaultIpAddress`<sup>Required</sup> <a name="defaultIpAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.defaultIpAddress"></a>

```typescript
public readonly defaultIpAddress: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.disk"></a>

```typescript
public readonly disk: VirtualMachineDiskList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList">VirtualMachineDiskList</a>

---

##### `guestIpAddresses`<sup>Required</sup> <a name="guestIpAddresses" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIpAddresses"></a>

```typescript
public readonly guestIpAddresses: string[];
```

- *Type:* string[]

---

##### `imported`<sup>Required</sup> <a name="imported" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.imported"></a>

```typescript
public readonly imported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `moid`<sup>Required</sup> <a name="moid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.moid"></a>

```typescript
public readonly moid: string;
```

- *Type:* string

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterface"></a>

```typescript
public readonly networkInterface: VirtualMachineNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList">VirtualMachineNetworkInterfaceList</a>

---

##### `ovfDeploy`<sup>Required</sup> <a name="ovfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeploy"></a>

```typescript
public readonly ovfDeploy: VirtualMachineOvfDeployOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference">VirtualMachineOvfDeployOutputReference</a>

---

##### `powerState`<sup>Required</sup> <a name="powerState" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.powerState"></a>

```typescript
public readonly powerState: string;
```

- *Type:* string

---

##### `rebootRequired`<sup>Required</sup> <a name="rebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.rebootRequired"></a>

```typescript
public readonly rebootRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `vapp`<sup>Required</sup> <a name="vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vapp"></a>

```typescript
public readonly vapp: VirtualMachineVappOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference">VirtualMachineVappOutputReference</a>

---

##### `vappTransport`<sup>Required</sup> <a name="vappTransport" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappTransport"></a>

```typescript
public readonly vappTransport: string[];
```

- *Type:* string[]

---

##### `vmwareToolsStatus`<sup>Required</sup> <a name="vmwareToolsStatus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmwareToolsStatus"></a>

```typescript
public readonly vmwareToolsStatus: string;
```

- *Type:* string

---

##### `vmxPath`<sup>Required</sup> <a name="vmxPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vmxPath"></a>

```typescript
public readonly vmxPath: string;
```

- *Type:* string

---

##### `alternateGuestNameInput`<sup>Optional</sup> <a name="alternateGuestNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestNameInput"></a>

```typescript
public readonly alternateGuestNameInput: string;
```

- *Type:* string

---

##### `annotationInput`<sup>Optional</sup> <a name="annotationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotationInput"></a>

```typescript
public readonly annotationInput: string;
```

- *Type:* string

---

##### `bootDelayInput`<sup>Optional</sup> <a name="bootDelayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelayInput"></a>

```typescript
public readonly bootDelayInput: number;
```

- *Type:* number

---

##### `bootRetryDelayInput`<sup>Optional</sup> <a name="bootRetryDelayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelayInput"></a>

```typescript
public readonly bootRetryDelayInput: number;
```

- *Type:* number

---

##### `bootRetryEnabledInput`<sup>Optional</sup> <a name="bootRetryEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabledInput"></a>

```typescript
public readonly bootRetryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cdromInput`<sup>Optional</sup> <a name="cdromInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cdromInput"></a>

```typescript
public readonly cdromInput: IResolvable | VirtualMachineCdrom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>[]

---

##### `cloneInput`<sup>Optional</sup> <a name="cloneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cloneInput"></a>

```typescript
public readonly cloneInput: VirtualMachineClone;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---

##### `cpuHotAddEnabledInput`<sup>Optional</sup> <a name="cpuHotAddEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabledInput"></a>

```typescript
public readonly cpuHotAddEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuHotRemoveEnabledInput`<sup>Optional</sup> <a name="cpuHotRemoveEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabledInput"></a>

```typescript
public readonly cpuHotRemoveEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuLimitInput`<sup>Optional</sup> <a name="cpuLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimitInput"></a>

```typescript
public readonly cpuLimitInput: number;
```

- *Type:* number

---

##### `cpuPerformanceCountersEnabledInput`<sup>Optional</sup> <a name="cpuPerformanceCountersEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabledInput"></a>

```typescript
public readonly cpuPerformanceCountersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuReservationInput`<sup>Optional</sup> <a name="cpuReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservationInput"></a>

```typescript
public readonly cpuReservationInput: number;
```

- *Type:* number

---

##### `cpuShareCountInput`<sup>Optional</sup> <a name="cpuShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCountInput"></a>

```typescript
public readonly cpuShareCountInput: number;
```

- *Type:* number

---

##### `cpuShareLevelInput`<sup>Optional</sup> <a name="cpuShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevelInput"></a>

```typescript
public readonly cpuShareLevelInput: string;
```

- *Type:* string

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `datastoreClusterIdInput`<sup>Optional</sup> <a name="datastoreClusterIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterIdInput"></a>

```typescript
public readonly datastoreClusterIdInput: string;
```

- *Type:* string

---

##### `datastoreIdInput`<sup>Optional</sup> <a name="datastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreIdInput"></a>

```typescript
public readonly datastoreIdInput: string;
```

- *Type:* string

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.diskInput"></a>

```typescript
public readonly diskInput: IResolvable | VirtualMachineDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>[]

---

##### `efiSecureBootEnabledInput`<sup>Optional</sup> <a name="efiSecureBootEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabledInput"></a>

```typescript
public readonly efiSecureBootEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDiskUuidInput`<sup>Optional</sup> <a name="enableDiskUuidInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuidInput"></a>

```typescript
public readonly enableDiskUuidInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eptRviModeInput`<sup>Optional</sup> <a name="eptRviModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviModeInput"></a>

```typescript
public readonly eptRviModeInput: string;
```

- *Type:* string

---

##### `extraConfigInput`<sup>Optional</sup> <a name="extraConfigInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigInput"></a>

```typescript
public readonly extraConfigInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extraConfigRebootRequiredInput`<sup>Optional</sup> <a name="extraConfigRebootRequiredInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequiredInput"></a>

```typescript
public readonly extraConfigRebootRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firmwareInput`<sup>Optional</sup> <a name="firmwareInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmwareInput"></a>

```typescript
public readonly firmwareInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `forcePowerOffInput`<sup>Optional</sup> <a name="forcePowerOffInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOffInput"></a>

```typescript
public readonly forcePowerOffInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `guestIdInput`<sup>Optional</sup> <a name="guestIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestIdInput"></a>

```typescript
public readonly guestIdInput: string;
```

- *Type:* string

---

##### `hardwareVersionInput`<sup>Optional</sup> <a name="hardwareVersionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersionInput"></a>

```typescript
public readonly hardwareVersionInput: number;
```

- *Type:* number

---

##### `hostSystemIdInput`<sup>Optional</sup> <a name="hostSystemIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemIdInput"></a>

```typescript
public readonly hostSystemIdInput: string;
```

- *Type:* string

---

##### `hvModeInput`<sup>Optional</sup> <a name="hvModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvModeInput"></a>

```typescript
public readonly hvModeInput: string;
```

- *Type:* string

---

##### `ideControllerCountInput`<sup>Optional</sup> <a name="ideControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCountInput"></a>

```typescript
public readonly ideControllerCountInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoredGuestIpsInput`<sup>Optional</sup> <a name="ignoredGuestIpsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIpsInput"></a>

```typescript
public readonly ignoredGuestIpsInput: string[];
```

- *Type:* string[]

---

##### `latencySensitivityInput`<sup>Optional</sup> <a name="latencySensitivityInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivityInput"></a>

```typescript
public readonly latencySensitivityInput: string;
```

- *Type:* string

---

##### `memoryHotAddEnabledInput`<sup>Optional</sup> <a name="memoryHotAddEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabledInput"></a>

```typescript
public readonly memoryHotAddEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `memoryLimitInput`<sup>Optional</sup> <a name="memoryLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimitInput"></a>

```typescript
public readonly memoryLimitInput: number;
```

- *Type:* number

---

##### `memoryReservationInput`<sup>Optional</sup> <a name="memoryReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationInput"></a>

```typescript
public readonly memoryReservationInput: number;
```

- *Type:* number

---

##### `memoryReservationLockedToMaxInput`<sup>Optional</sup> <a name="memoryReservationLockedToMaxInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMaxInput"></a>

```typescript
public readonly memoryReservationLockedToMaxInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryShareCountInput`<sup>Optional</sup> <a name="memoryShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCountInput"></a>

```typescript
public readonly memoryShareCountInput: number;
```

- *Type:* number

---

##### `memoryShareLevelInput`<sup>Optional</sup> <a name="memoryShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevelInput"></a>

```typescript
public readonly memoryShareLevelInput: string;
```

- *Type:* string

---

##### `migrateWaitTimeoutInput`<sup>Optional</sup> <a name="migrateWaitTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeoutInput"></a>

```typescript
public readonly migrateWaitTimeoutInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nestedHvEnabledInput`<sup>Optional</sup> <a name="nestedHvEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabledInput"></a>

```typescript
public readonly nestedHvEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | VirtualMachineNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>[]

---

##### `numCoresPerSocketInput`<sup>Optional</sup> <a name="numCoresPerSocketInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocketInput"></a>

```typescript
public readonly numCoresPerSocketInput: number;
```

- *Type:* number

---

##### `numCpusInput`<sup>Optional</sup> <a name="numCpusInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpusInput"></a>

```typescript
public readonly numCpusInput: number;
```

- *Type:* number

---

##### `ovfDeployInput`<sup>Optional</sup> <a name="ovfDeployInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ovfDeployInput"></a>

```typescript
public readonly ovfDeployInput: VirtualMachineOvfDeploy;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---

##### `pciDeviceIdInput`<sup>Optional</sup> <a name="pciDeviceIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceIdInput"></a>

```typescript
public readonly pciDeviceIdInput: string[];
```

- *Type:* string[]

---

##### `poweronTimeoutInput`<sup>Optional</sup> <a name="poweronTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeoutInput"></a>

```typescript
public readonly poweronTimeoutInput: number;
```

- *Type:* number

---

##### `replaceTriggerInput`<sup>Optional</sup> <a name="replaceTriggerInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTriggerInput"></a>

```typescript
public readonly replaceTriggerInput: string;
```

- *Type:* string

---

##### `resourcePoolIdInput`<sup>Optional</sup> <a name="resourcePoolIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolIdInput"></a>

```typescript
public readonly resourcePoolIdInput: string;
```

- *Type:* string

---

##### `runToolsScriptsAfterPowerOnInput`<sup>Optional</sup> <a name="runToolsScriptsAfterPowerOnInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOnInput"></a>

```typescript
public readonly runToolsScriptsAfterPowerOnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsAfterResumeInput`<sup>Optional</sup> <a name="runToolsScriptsAfterResumeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResumeInput"></a>

```typescript
public readonly runToolsScriptsAfterResumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestRebootInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestRebootInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestRebootInput"></a>

```typescript
public readonly runToolsScriptsBeforeGuestRebootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestShutdownInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestShutdownInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdownInput"></a>

```typescript
public readonly runToolsScriptsBeforeGuestShutdownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestStandbyInput`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestStandbyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandbyInput"></a>

```typescript
public readonly runToolsScriptsBeforeGuestStandbyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sataControllerCountInput`<sup>Optional</sup> <a name="sataControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCountInput"></a>

```typescript
public readonly sataControllerCountInput: number;
```

- *Type:* number

---

##### `scsiBusSharingInput`<sup>Optional</sup> <a name="scsiBusSharingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharingInput"></a>

```typescript
public readonly scsiBusSharingInput: string;
```

- *Type:* string

---

##### `scsiControllerCountInput`<sup>Optional</sup> <a name="scsiControllerCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCountInput"></a>

```typescript
public readonly scsiControllerCountInput: number;
```

- *Type:* number

---

##### `scsiTypeInput`<sup>Optional</sup> <a name="scsiTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiTypeInput"></a>

```typescript
public readonly scsiTypeInput: string;
```

- *Type:* string

---

##### `shutdownWaitTimeoutInput`<sup>Optional</sup> <a name="shutdownWaitTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeoutInput"></a>

```typescript
public readonly shutdownWaitTimeoutInput: number;
```

- *Type:* number

---

##### `storagePolicyIdInput`<sup>Optional</sup> <a name="storagePolicyIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyIdInput"></a>

```typescript
public readonly storagePolicyIdInput: string;
```

- *Type:* string

---

##### `swapPlacementPolicyInput`<sup>Optional</sup> <a name="swapPlacementPolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicyInput"></a>

```typescript
public readonly swapPlacementPolicyInput: string;
```

- *Type:* string

---

##### `syncTimeWithHostInput`<sup>Optional</sup> <a name="syncTimeWithHostInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostInput"></a>

```typescript
public readonly syncTimeWithHostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncTimeWithHostPeriodicallyInput`<sup>Optional</sup> <a name="syncTimeWithHostPeriodicallyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodicallyInput"></a>

```typescript
public readonly syncTimeWithHostPeriodicallyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `toolsUpgradePolicyInput`<sup>Optional</sup> <a name="toolsUpgradePolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicyInput"></a>

```typescript
public readonly toolsUpgradePolicyInput: string;
```

- *Type:* string

---

##### `vappInput`<sup>Optional</sup> <a name="vappInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vappInput"></a>

```typescript
public readonly vappInput: VirtualMachineVapp;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---

##### `vbsEnabledInput`<sup>Optional</sup> <a name="vbsEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabledInput"></a>

```typescript
public readonly vbsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vvtdEnabledInput`<sup>Optional</sup> <a name="vvtdEnabledInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabledInput"></a>

```typescript
public readonly vvtdEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForGuestIpTimeoutInput`<sup>Optional</sup> <a name="waitForGuestIpTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeoutInput"></a>

```typescript
public readonly waitForGuestIpTimeoutInput: number;
```

- *Type:* number

---

##### `waitForGuestNetRoutableInput`<sup>Optional</sup> <a name="waitForGuestNetRoutableInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutableInput"></a>

```typescript
public readonly waitForGuestNetRoutableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForGuestNetTimeoutInput`<sup>Optional</sup> <a name="waitForGuestNetTimeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeoutInput"></a>

```typescript
public readonly waitForGuestNetTimeoutInput: number;
```

- *Type:* number

---

##### `alternateGuestName`<sup>Required</sup> <a name="alternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.alternateGuestName"></a>

```typescript
public readonly alternateGuestName: string;
```

- *Type:* string

---

##### `annotation`<sup>Required</sup> <a name="annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.annotation"></a>

```typescript
public readonly annotation: string;
```

- *Type:* string

---

##### `bootDelay`<sup>Required</sup> <a name="bootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootDelay"></a>

```typescript
public readonly bootDelay: number;
```

- *Type:* number

---

##### `bootRetryDelay`<sup>Required</sup> <a name="bootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryDelay"></a>

```typescript
public readonly bootRetryDelay: number;
```

- *Type:* number

---

##### `bootRetryEnabled`<sup>Required</sup> <a name="bootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.bootRetryEnabled"></a>

```typescript
public readonly bootRetryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuHotAddEnabled`<sup>Required</sup> <a name="cpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotAddEnabled"></a>

```typescript
public readonly cpuHotAddEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuHotRemoveEnabled`<sup>Required</sup> <a name="cpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuHotRemoveEnabled"></a>

```typescript
public readonly cpuHotRemoveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuLimit`<sup>Required</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuLimit"></a>

```typescript
public readonly cpuLimit: number;
```

- *Type:* number

---

##### `cpuPerformanceCountersEnabled`<sup>Required</sup> <a name="cpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuPerformanceCountersEnabled"></a>

```typescript
public readonly cpuPerformanceCountersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuReservation`<sup>Required</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuReservation"></a>

```typescript
public readonly cpuReservation: number;
```

- *Type:* number

---

##### `cpuShareCount`<sup>Required</sup> <a name="cpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareCount"></a>

```typescript
public readonly cpuShareCount: number;
```

- *Type:* number

---

##### `cpuShareLevel`<sup>Required</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.cpuShareLevel"></a>

```typescript
public readonly cpuShareLevel: string;
```

- *Type:* string

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `datastoreClusterId`<sup>Required</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreClusterId"></a>

```typescript
public readonly datastoreClusterId: string;
```

- *Type:* string

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

---

##### `efiSecureBootEnabled`<sup>Required</sup> <a name="efiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.efiSecureBootEnabled"></a>

```typescript
public readonly efiSecureBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDiskUuid`<sup>Required</sup> <a name="enableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableDiskUuid"></a>

```typescript
public readonly enableDiskUuid: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eptRviMode`<sup>Required</sup> <a name="eptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.eptRviMode"></a>

```typescript
public readonly eptRviMode: string;
```

- *Type:* string

---

##### `extraConfig`<sup>Required</sup> <a name="extraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfig"></a>

```typescript
public readonly extraConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extraConfigRebootRequired`<sup>Required</sup> <a name="extraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.extraConfigRebootRequired"></a>

```typescript
public readonly extraConfigRebootRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.firmware"></a>

```typescript
public readonly firmware: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `forcePowerOff`<sup>Required</sup> <a name="forcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.forcePowerOff"></a>

```typescript
public readonly forcePowerOff: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `guestId`<sup>Required</sup> <a name="guestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.guestId"></a>

```typescript
public readonly guestId: string;
```

- *Type:* string

---

##### `hardwareVersion`<sup>Required</sup> <a name="hardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hardwareVersion"></a>

```typescript
public readonly hardwareVersion: number;
```

- *Type:* number

---

##### `hostSystemId`<sup>Required</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

---

##### `hvMode`<sup>Required</sup> <a name="hvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.hvMode"></a>

```typescript
public readonly hvMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ideControllerCount`<sup>Required</sup> <a name="ideControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ideControllerCount"></a>

```typescript
public readonly ideControllerCount: number;
```

- *Type:* number

---

##### `ignoredGuestIps`<sup>Required</sup> <a name="ignoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.ignoredGuestIps"></a>

```typescript
public readonly ignoredGuestIps: string[];
```

- *Type:* string[]

---

##### `latencySensitivity`<sup>Required</sup> <a name="latencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.latencySensitivity"></a>

```typescript
public readonly latencySensitivity: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `memoryHotAddEnabled`<sup>Required</sup> <a name="memoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryHotAddEnabled"></a>

```typescript
public readonly memoryHotAddEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryLimit`<sup>Required</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

---

##### `memoryReservationLockedToMax`<sup>Required</sup> <a name="memoryReservationLockedToMax" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryReservationLockedToMax"></a>

```typescript
public readonly memoryReservationLockedToMax: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryShareCount`<sup>Required</sup> <a name="memoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareCount"></a>

```typescript
public readonly memoryShareCount: number;
```

- *Type:* number

---

##### `memoryShareLevel`<sup>Required</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.memoryShareLevel"></a>

```typescript
public readonly memoryShareLevel: string;
```

- *Type:* string

---

##### `migrateWaitTimeout`<sup>Required</sup> <a name="migrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.migrateWaitTimeout"></a>

```typescript
public readonly migrateWaitTimeout: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nestedHvEnabled`<sup>Required</sup> <a name="nestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.nestedHvEnabled"></a>

```typescript
public readonly nestedHvEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `numCoresPerSocket`<sup>Required</sup> <a name="numCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCoresPerSocket"></a>

```typescript
public readonly numCoresPerSocket: number;
```

- *Type:* number

---

##### `numCpus`<sup>Required</sup> <a name="numCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.numCpus"></a>

```typescript
public readonly numCpus: number;
```

- *Type:* number

---

##### `pciDeviceId`<sup>Required</sup> <a name="pciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.pciDeviceId"></a>

```typescript
public readonly pciDeviceId: string[];
```

- *Type:* string[]

---

##### `poweronTimeout`<sup>Required</sup> <a name="poweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.poweronTimeout"></a>

```typescript
public readonly poweronTimeout: number;
```

- *Type:* number

---

##### `replaceTrigger`<sup>Required</sup> <a name="replaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.replaceTrigger"></a>

```typescript
public readonly replaceTrigger: string;
```

- *Type:* string

---

##### `resourcePoolId`<sup>Required</sup> <a name="resourcePoolId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.resourcePoolId"></a>

```typescript
public readonly resourcePoolId: string;
```

- *Type:* string

---

##### `runToolsScriptsAfterPowerOn`<sup>Required</sup> <a name="runToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterPowerOn"></a>

```typescript
public readonly runToolsScriptsAfterPowerOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsAfterResume`<sup>Required</sup> <a name="runToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsAfterResume"></a>

```typescript
public readonly runToolsScriptsAfterResume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestReboot`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestReboot"></a>

```typescript
public readonly runToolsScriptsBeforeGuestReboot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestShutdown`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestShutdown"></a>

```typescript
public readonly runToolsScriptsBeforeGuestShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runToolsScriptsBeforeGuestStandby`<sup>Required</sup> <a name="runToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.runToolsScriptsBeforeGuestStandby"></a>

```typescript
public readonly runToolsScriptsBeforeGuestStandby: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sataControllerCount`<sup>Required</sup> <a name="sataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.sataControllerCount"></a>

```typescript
public readonly sataControllerCount: number;
```

- *Type:* number

---

##### `scsiBusSharing`<sup>Required</sup> <a name="scsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiBusSharing"></a>

```typescript
public readonly scsiBusSharing: string;
```

- *Type:* string

---

##### `scsiControllerCount`<sup>Required</sup> <a name="scsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiControllerCount"></a>

```typescript
public readonly scsiControllerCount: number;
```

- *Type:* number

---

##### `scsiType`<sup>Required</sup> <a name="scsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.scsiType"></a>

```typescript
public readonly scsiType: string;
```

- *Type:* string

---

##### `shutdownWaitTimeout`<sup>Required</sup> <a name="shutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.shutdownWaitTimeout"></a>

```typescript
public readonly shutdownWaitTimeout: number;
```

- *Type:* number

---

##### `storagePolicyId`<sup>Required</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.storagePolicyId"></a>

```typescript
public readonly storagePolicyId: string;
```

- *Type:* string

---

##### `swapPlacementPolicy`<sup>Required</sup> <a name="swapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.swapPlacementPolicy"></a>

```typescript
public readonly swapPlacementPolicy: string;
```

- *Type:* string

---

##### `syncTimeWithHost`<sup>Required</sup> <a name="syncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHost"></a>

```typescript
public readonly syncTimeWithHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `syncTimeWithHostPeriodically`<sup>Required</sup> <a name="syncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.syncTimeWithHostPeriodically"></a>

```typescript
public readonly syncTimeWithHostPeriodically: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `toolsUpgradePolicy`<sup>Required</sup> <a name="toolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.toolsUpgradePolicy"></a>

```typescript
public readonly toolsUpgradePolicy: string;
```

- *Type:* string

---

##### `vbsEnabled`<sup>Required</sup> <a name="vbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vbsEnabled"></a>

```typescript
public readonly vbsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vvtdEnabled`<sup>Required</sup> <a name="vvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.vvtdEnabled"></a>

```typescript
public readonly vvtdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForGuestIpTimeout`<sup>Required</sup> <a name="waitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestIpTimeout"></a>

```typescript
public readonly waitForGuestIpTimeout: number;
```

- *Type:* number

---

##### `waitForGuestNetRoutable`<sup>Required</sup> <a name="waitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetRoutable"></a>

```typescript
public readonly waitForGuestNetRoutable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForGuestNetTimeout`<sup>Required</sup> <a name="waitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.waitForGuestNetTimeout"></a>

```typescript
public readonly waitForGuestNetTimeout: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineCdrom <a name="VirtualMachineCdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineCdrom: virtualMachine.VirtualMachineCdrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.clientDevice">clientDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the device should be mapped to a remote client device. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.datastoreId">datastoreId</a></code> | <code>string</code> | The datastore ID the ISO is located on. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.path">path</a></code> | <code>string</code> | The path to the ISO file on the datastore. |

---

##### `clientDevice`<sup>Optional</sup> <a name="clientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.clientDevice"></a>

```typescript
public readonly clientDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the device should be mapped to a remote client device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#client_device VirtualMachine#client_device}

---

##### `datastoreId`<sup>Optional</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

The datastore ID the ISO is located on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the ISO file on the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#path VirtualMachine#path}

---

### VirtualMachineClone <a name="VirtualMachineClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineClone: virtualMachine.VirtualMachineClone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.templateUuid">templateUuid</a></code> | <code>string</code> | The UUID of the source virtual machine or template. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customizationSpec">customizationSpec</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | customization_spec block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customize">customize</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | customize block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.linkedClone">linkedClone</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to create a linked clone when cloning. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfNetworkMap">ovfNetworkMap</a></code> | <code>{[ key: string ]: string}</code> | Mapping of ovf networks to the networks to use in vSphere. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfStorageMap">ovfStorageMap</a></code> | <code>{[ key: string ]: string}</code> | Mapping of ovf storage to the datastores to use in vSphere. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.timeout">timeout</a></code> | <code>number</code> | The timeout, in minutes, to wait for the virtual machine clone to complete. |

---

##### `templateUuid`<sup>Required</sup> <a name="templateUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.templateUuid"></a>

```typescript
public readonly templateUuid: string;
```

- *Type:* string

The UUID of the source virtual machine or template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#template_uuid VirtualMachine#template_uuid}

---

##### `customizationSpec`<sup>Optional</sup> <a name="customizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customizationSpec"></a>

```typescript
public readonly customizationSpec: VirtualMachineCloneCustomizationSpec;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

customization_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#customization_spec VirtualMachine#customization_spec}

---

##### `customize`<sup>Optional</sup> <a name="customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.customize"></a>

```typescript
public readonly customize: VirtualMachineCloneCustomize;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

customize block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#customize VirtualMachine#customize}

---

##### `linkedClone`<sup>Optional</sup> <a name="linkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.linkedClone"></a>

```typescript
public readonly linkedClone: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to create a linked clone when cloning.

When this option is used, the source VM must have a single snapshot associated with it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#linked_clone VirtualMachine#linked_clone}

---

##### `ovfNetworkMap`<sup>Optional</sup> <a name="ovfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfNetworkMap"></a>

```typescript
public readonly ovfNetworkMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping of ovf networks to the networks to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

##### `ovfStorageMap`<sup>Optional</sup> <a name="ovfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.ovfStorageMap"></a>

```typescript
public readonly ovfStorageMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping of ovf storage to the datastores to use in vSphere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ovf_storage_map VirtualMachine#ovf_storage_map}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

The timeout, in minutes, to wait for the virtual machine clone to complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

### VirtualMachineCloneCustomizationSpec <a name="VirtualMachineCloneCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineCloneCustomizationSpec: virtualMachine.VirtualMachineCloneCustomizationSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.id">id</a></code> | <code>string</code> | The unique identifier of the customization specification is its name and is unique per vCenter Server instance. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.timeout">timeout</a></code> | <code>number</code> | The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of the customization specification is its name and is unique per vCenter Server instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#id VirtualMachine#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

### VirtualMachineCloneCustomize <a name="VirtualMachineCloneCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineCloneCustomize: virtualMachine.VirtualMachineCloneCustomize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsServerList">dnsServerList</a></code> | <code>string[]</code> | The list of DNS servers for a virtual network adapter with a static IP address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsSuffixList">dnsSuffixList</a></code> | <code>string[]</code> | A list of DNS search domains to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv4Gateway">ipv4Gateway</a></code> | <code>string</code> | The IPv4 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv6Gateway">ipv6Gateway</a></code> | <code>string</code> | The IPv6 default gateway when using network_interface customization on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.linuxOptions">linuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | linux_options block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.timeout">timeout</a></code> | <code>number</code> | The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsOptions">windowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | windows_options block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsSysprepText">windowsSysprepText</a></code> | <code>string</code> | Use this option to specify a windows sysprep file directly. |

---

##### `dnsServerList`<sup>Optional</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsServerList"></a>

```typescript
public readonly dnsServerList: string[];
```

- *Type:* string[]

The list of DNS servers for a virtual network adapter with a static IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}

---

##### `dnsSuffixList`<sup>Optional</sup> <a name="dnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.dnsSuffixList"></a>

```typescript
public readonly dnsSuffixList: string[];
```

- *Type:* string[]

A list of DNS search domains to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#dns_suffix_list VirtualMachine#dns_suffix_list}

---

##### `ipv4Gateway`<sup>Optional</sup> <a name="ipv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv4Gateway"></a>

```typescript
public readonly ipv4Gateway: string;
```

- *Type:* string

The IPv4 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ipv4_gateway VirtualMachine#ipv4_gateway}

---

##### `ipv6Gateway`<sup>Optional</sup> <a name="ipv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.ipv6Gateway"></a>

```typescript
public readonly ipv6Gateway: string;
```

- *Type:* string

The IPv6 default gateway when using network_interface customization on the virtual machine.

This address must be local to a static IPv4 address configured in an interface sub-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ipv6_gateway VirtualMachine#ipv6_gateway}

---

##### `linuxOptions`<sup>Optional</sup> <a name="linuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.linuxOptions"></a>

```typescript
public readonly linuxOptions: VirtualMachineCloneCustomizeLinuxOptions;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#linux_options VirtualMachine#linux_options}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | VirtualMachineCloneCustomizeNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

The amount of time, in minutes, to wait for guest OS customization to complete before returning with an error.

Setting this value to 0 or a negative value skips the waiter. Default: 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#timeout VirtualMachine#timeout}

---

##### `windowsOptions`<sup>Optional</sup> <a name="windowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsOptions"></a>

```typescript
public readonly windowsOptions: VirtualMachineCloneCustomizeWindowsOptions;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

windows_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#windows_options VirtualMachine#windows_options}

---

##### `windowsSysprepText`<sup>Optional</sup> <a name="windowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize.property.windowsSysprepText"></a>

```typescript
public readonly windowsSysprepText: string;
```

- *Type:* string

Use this option to specify a windows sysprep file directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#windows_sysprep_text VirtualMachine#windows_sysprep_text}

---

### VirtualMachineCloneCustomizeLinuxOptions <a name="VirtualMachineCloneCustomizeLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineCloneCustomizeLinuxOptions: virtualMachine.VirtualMachineCloneCustomizeLinuxOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.domain">domain</a></code> | <code>string</code> | The domain name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hostName">hostName</a></code> | <code>string</code> | The hostname for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hwClockUtc">hwClockUtc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether or not the hardware clock should be in UTC or not. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.scriptText">scriptText</a></code> | <code>string</code> | The customization script to run before and or after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.timeZone">timeZone</a></code> | <code>string</code> | Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The domain name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#domain VirtualMachine#domain}

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

The hostname for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#host_name VirtualMachine#host_name}

---

##### `hwClockUtc`<sup>Optional</sup> <a name="hwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.hwClockUtc"></a>

```typescript
public readonly hwClockUtc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether or not the hardware clock should be in UTC or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#hw_clock_utc VirtualMachine#hw_clock_utc}

---

##### `scriptText`<sup>Optional</sup> <a name="scriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.scriptText"></a>

```typescript
public readonly scriptText: string;
```

- *Type:* string

The customization script to run before and or after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#script_text VirtualMachine#script_text}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Customize the time zone on the VM. This should be a time zone-style entry, like America/Los_Angeles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

### VirtualMachineCloneCustomizeNetworkInterface <a name="VirtualMachineCloneCustomizeNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineCloneCustomizeNetworkInterface: virtualMachine.VirtualMachineCloneCustomizeNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsDomain">dnsDomain</a></code> | <code>string</code> | A DNS search domain to add to the DNS configuration on the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsServerList">dnsServerList</a></code> | <code>string[]</code> | Network-interface specific DNS settings for Windows operating systems. Ignored on Linux. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | The IPv4 address assigned to this network adapter. If left blank, DHCP is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Netmask">ipv4Netmask</a></code> | <code>number</code> | The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Netmask">ipv6Netmask</a></code> | <code>number</code> | The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected. |

---

##### `dnsDomain`<sup>Optional</sup> <a name="dnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsDomain"></a>

```typescript
public readonly dnsDomain: string;
```

- *Type:* string

A DNS search domain to add to the DNS configuration on the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#dns_domain VirtualMachine#dns_domain}

---

##### `dnsServerList`<sup>Optional</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.dnsServerList"></a>

```typescript
public readonly dnsServerList: string[];
```

- *Type:* string[]

Network-interface specific DNS settings for Windows operating systems. Ignored on Linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#dns_server_list VirtualMachine#dns_server_list}

---

##### `ipv4Address`<sup>Optional</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

The IPv4 address assigned to this network adapter. If left blank, DHCP is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ipv4_address VirtualMachine#ipv4_address}

---

##### `ipv4Netmask`<sup>Optional</sup> <a name="ipv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv4Netmask"></a>

```typescript
public readonly ipv4Netmask: number;
```

- *Type:* number

The IPv4 CIDR netmask for the supplied IP address. Ignored if DHCP is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ipv4_netmask VirtualMachine#ipv4_netmask}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

The IPv6 address assigned to this network adapter. If left blank, default auto-configuration is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ipv6_address VirtualMachine#ipv6_address}

---

##### `ipv6Netmask`<sup>Optional</sup> <a name="ipv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface.property.ipv6Netmask"></a>

```typescript
public readonly ipv6Netmask: number;
```

- *Type:* number

The IPv6 CIDR netmask for the supplied IP address. Ignored if auto-configuration is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ipv6_netmask VirtualMachine#ipv6_netmask}

---

### VirtualMachineCloneCustomizeWindowsOptions <a name="VirtualMachineCloneCustomizeWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineCloneCustomizeWindowsOptions: virtualMachine.VirtualMachineCloneCustomizeWindowsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.computerName">computerName</a></code> | <code>string</code> | The host name for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.adminPassword">adminPassword</a></code> | <code>string</code> | The new administrator password for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogon">autoLogon</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether or not the VM automatically logs on as Administrator. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogonCount">autoLogonCount</a></code> | <code>number</code> | Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminPassword">domainAdminPassword</a></code> | <code>string</code> | The password of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminUser">domainAdminUser</a></code> | <code>string</code> | The user account of the domain administrator used to join this virtual machine to the domain. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainOu">domainOu</a></code> | <code>string</code> | The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.fullName">fullName</a></code> | <code>string</code> | The full name of the user of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.joinDomain">joinDomain</a></code> | <code>string</code> | The domain that the virtual machine should join. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.organizationName">organizationName</a></code> | <code>string</code> | The organization name this virtual machine is being installed for. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.productKey">productKey</a></code> | <code>string</code> | The product key for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.runOnceCommandList">runOnceCommandList</a></code> | <code>string[]</code> | A list of commands to run at first user logon, after guest customization. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.timeZone">timeZone</a></code> | <code>number</code> | The new time zone for the virtual machine. This is a sysprep-dictated timezone code. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.workgroup">workgroup</a></code> | <code>string</code> | The workgroup for this virtual machine if not joining a domain. |

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.computerName"></a>

```typescript
public readonly computerName: string;
```

- *Type:* string

The host name for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#computer_name VirtualMachine#computer_name}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

The new administrator password for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#admin_password VirtualMachine#admin_password}

---

##### `autoLogon`<sup>Optional</sup> <a name="autoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogon"></a>

```typescript
public readonly autoLogon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether or not the VM automatically logs on as Administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#auto_logon VirtualMachine#auto_logon}

---

##### `autoLogonCount`<sup>Optional</sup> <a name="autoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.autoLogonCount"></a>

```typescript
public readonly autoLogonCount: number;
```

- *Type:* number

Specifies how many times the VM should auto-logon the Administrator account when auto_logon is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#auto_logon_count VirtualMachine#auto_logon_count}

---

##### `domainAdminPassword`<sup>Optional</sup> <a name="domainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminPassword"></a>

```typescript
public readonly domainAdminPassword: string;
```

- *Type:* string

The password of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#domain_admin_password VirtualMachine#domain_admin_password}

---

##### `domainAdminUser`<sup>Optional</sup> <a name="domainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainAdminUser"></a>

```typescript
public readonly domainAdminUser: string;
```

- *Type:* string

The user account of the domain administrator used to join this virtual machine to the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#domain_admin_user VirtualMachine#domain_admin_user}

---

##### `domainOu`<sup>Optional</sup> <a name="domainOu" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.domainOu"></a>

```typescript
public readonly domainOu: string;
```

- *Type:* string

The MachineObjectOU which specifies the full LDAP path name of the OU to which the virtual machine belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#domain_ou VirtualMachine#domain_ou}

---

##### `fullName`<sup>Optional</sup> <a name="fullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

The full name of the user of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#full_name VirtualMachine#full_name}

---

##### `joinDomain`<sup>Optional</sup> <a name="joinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.joinDomain"></a>

```typescript
public readonly joinDomain: string;
```

- *Type:* string

The domain that the virtual machine should join.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#join_domain VirtualMachine#join_domain}

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

The organization name this virtual machine is being installed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#organization_name VirtualMachine#organization_name}

---

##### `productKey`<sup>Optional</sup> <a name="productKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.productKey"></a>

```typescript
public readonly productKey: string;
```

- *Type:* string

The product key for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#product_key VirtualMachine#product_key}

---

##### `runOnceCommandList`<sup>Optional</sup> <a name="runOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.runOnceCommandList"></a>

```typescript
public readonly runOnceCommandList: string[];
```

- *Type:* string[]

A list of commands to run at first user logon, after guest customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#run_once_command_list VirtualMachine#run_once_command_list}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.timeZone"></a>

```typescript
public readonly timeZone: number;
```

- *Type:* number

The new time zone for the virtual machine. This is a sysprep-dictated timezone code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#time_zone VirtualMachine#time_zone}

---

##### `workgroup`<sup>Optional</sup> <a name="workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions.property.workgroup"></a>

```typescript
public readonly workgroup: string;
```

- *Type:* string

The workgroup for this virtual machine if not joining a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#workgroup VirtualMachine#workgroup}

---

### VirtualMachineConfig <a name="VirtualMachineConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineConfig: virtualMachine.VirtualMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.name">name</a></code> | <code>string</code> | The name of this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.resourcePoolId">resourcePoolId</a></code> | <code>string</code> | The ID of a resource pool to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.alternateGuestName">alternateGuestName</a></code> | <code>string</code> | The guest name for the operating system when guest_id is otherGuest or otherGuest64. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.annotation">annotation</a></code> | <code>string</code> | User-provided description of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootDelay">bootDelay</a></code> | <code>number</code> | The number of milliseconds to wait before starting the boot sequence. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryDelay">bootRetryDelay</a></code> | <code>number</code> | The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryEnabled">bootRetryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cdrom">cdrom</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>[]</code> | cdrom block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotAddEnabled">cpuHotAddEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotRemoveEnabled">cpuHotRemoveEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow CPUs to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuLimit">cpuLimit</a></code> | <code>number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuPerformanceCountersEnabled">cpuPerformanceCountersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable CPU performance counters on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuReservation">cpuReservation</a></code> | <code>number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareCount">cpuShareCount</a></code> | <code>number</code> | The amount of shares to allocate to cpu for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareLevel">cpuShareLevel</a></code> | <code>string</code> | The allocation level for cpu resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | A list of custom attributes to set on this resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | The ID of the datacenter where the VM is to be created. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreClusterId">datastoreClusterId</a></code> | <code>string</code> | The ID of a datastore cluster to put the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreId">datastoreId</a></code> | <code>string</code> | The ID of the virtual machine's datastore. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.disk">disk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>[]</code> | disk block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.efiSecureBootEnabled">efiSecureBootEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When the boot type set in firmware is efi, this enables EFI secure boot. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableDiskUuid">enableDiskUuid</a></code> | <code>boolean \| cdktf.IResolvable</code> | Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable logging on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.eptRviMode">eptRviMode</a></code> | <code>string</code> | The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfig">extraConfig</a></code> | <code>{[ key: string ]: string}</code> | Extra configuration data for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfigRebootRequired">extraConfigRebootRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow the virtual machine to be rebooted when a change to `extra_config` occurs. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.firmware">firmware</a></code> | <code>string</code> | The firmware interface to use on the virtual machine. Can be one of bios or efi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.folder">folder</a></code> | <code>string</code> | The name of the folder to locate the virtual machine in. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forcePowerOff">forcePowerOff</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.guestId">guestId</a></code> | <code>string</code> | The guest ID for the operating system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hardwareVersion">hardwareVersion</a></code> | <code>number</code> | The hardware version for the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hostSystemId">hostSystemId</a></code> | <code>string</code> | The ID of an optional host system to pin the virtual machine to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hvMode">hvMode</a></code> | <code>string</code> | The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#id VirtualMachine#id}. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ideControllerCount">ideControllerCount</a></code> | <code>number</code> | The number of IDE controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ignoredGuestIps">ignoredGuestIps</a></code> | <code>string[]</code> | List of IP addresses and CIDR networks to ignore while waiting for an IP. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.latencySensitivity">latencySensitivity</a></code> | <code>string</code> | Controls the scheduling delay of the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memory">memory</a></code> | <code>number</code> | The size of the virtual machine's memory, in MB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryHotAddEnabled">memoryHotAddEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow memory to be added to this virtual machine while it is running. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryLimit">memoryLimit</a></code> | <code>number</code> | The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservationLockedToMax">memoryReservationLockedToMax</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareCount">memoryShareCount</a></code> | <code>number</code> | The amount of shares to allocate to memory for a custom share level. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareLevel">memoryShareLevel</a></code> | <code>string</code> | The allocation level for memory resources. Can be one of high, low, normal, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.migrateWaitTimeout">migrateWaitTimeout</a></code> | <code>number</code> | The amount of time, in minutes, to wait for a vMotion operation to complete before failing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.nestedHvEnabled">nestedHvEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCoresPerSocket">numCoresPerSocket</a></code> | <code>number</code> | The number of cores to distribute amongst the CPUs in this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCpus">numCpus</a></code> | <code>number</code> | The number of virtual processors to assign to this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ovfDeploy">ovfDeploy</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | ovf_deploy block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.pciDeviceId">pciDeviceId</a></code> | <code>string[]</code> | A list of PCI passthrough devices. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.poweronTimeout">poweronTimeout</a></code> | <code>number</code> | The amount of time, in seconds, that we will be trying to power on a VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.replaceTrigger">replaceTrigger</a></code> | <code>string</code> | Triggers replacement of resource whenever it changes. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterPowerOn">runToolsScriptsAfterPowerOn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the run of scripts after virtual machine power-on when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterResume">runToolsScriptsAfterResume</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the run of scripts after virtual machine resume when when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot">runToolsScriptsBeforeGuestReboot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the run of scripts before guest operating system reboot when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown">runToolsScriptsBeforeGuestShutdown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the run of scripts before guest operating system shutdown when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby">runToolsScriptsBeforeGuestStandby</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the run of scripts before guest operating system standby when VMware Tools is installed. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.sataControllerCount">sataControllerCount</a></code> | <code>number</code> | The number of SATA controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiBusSharing">scsiBusSharing</a></code> | <code>string</code> | Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiControllerCount">scsiControllerCount</a></code> | <code>number</code> | The number of SCSI controllers that Terraform manages on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiType">scsiType</a></code> | <code>string</code> | The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.shutdownWaitTimeout">shutdownWaitTimeout</a></code> | <code>number</code> | The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.storagePolicyId">storagePolicyId</a></code> | <code>string</code> | The ID of the storage policy to assign to the virtual machine home directory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.swapPlacementPolicy">swapPlacementPolicy</a></code> | <code>string</code> | The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHost">syncTimeWithHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable guest clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHostPeriodically">syncTimeWithHostPeriodically</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable periodic clock synchronization with the host. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.tags">tags</a></code> | <code>string[]</code> | A list of tag IDs to apply to this object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.toolsUpgradePolicy">toolsUpgradePolicy</a></code> | <code>string</code> | Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vapp">vapp</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | vapp block. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vbsEnabled">vbsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to specify if Virtualization-based security is enabled for this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vvtdEnabled">vvtdEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestIpTimeout">waitForGuestIpTimeout</a></code> | <code>number</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetRoutable">waitForGuestNetRoutable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether or not the guest network waiter waits for a routable address. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetTimeout">waitForGuestNetTimeout</a></code> | <code>number</code> | The amount of time, in minutes, to wait for an available IP address on this virtual machine. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#name VirtualMachine#name}

---

##### `resourcePoolId`<sup>Required</sup> <a name="resourcePoolId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.resourcePoolId"></a>

```typescript
public readonly resourcePoolId: string;
```

- *Type:* string

The ID of a resource pool to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#resource_pool_id VirtualMachine#resource_pool_id}

---

##### `alternateGuestName`<sup>Optional</sup> <a name="alternateGuestName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.alternateGuestName"></a>

```typescript
public readonly alternateGuestName: string;
```

- *Type:* string

The guest name for the operating system when guest_id is otherGuest or otherGuest64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#alternate_guest_name VirtualMachine#alternate_guest_name}

---

##### `annotation`<sup>Optional</sup> <a name="annotation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.annotation"></a>

```typescript
public readonly annotation: string;
```

- *Type:* string

User-provided description of the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#annotation VirtualMachine#annotation}

---

##### `bootDelay`<sup>Optional</sup> <a name="bootDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootDelay"></a>

```typescript
public readonly bootDelay: number;
```

- *Type:* number

The number of milliseconds to wait before starting the boot sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#boot_delay VirtualMachine#boot_delay}

---

##### `bootRetryDelay`<sup>Optional</sup> <a name="bootRetryDelay" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryDelay"></a>

```typescript
public readonly bootRetryDelay: number;
```

- *Type:* number

The number of milliseconds to wait before retrying the boot sequence. This only valid if boot_retry_enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#boot_retry_delay VirtualMachine#boot_retry_delay}

---

##### `bootRetryEnabled`<sup>Optional</sup> <a name="bootRetryEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.bootRetryEnabled"></a>

```typescript
public readonly bootRetryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, a virtual machine that fails to boot will try again after the delay defined in boot_retry_delay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#boot_retry_enabled VirtualMachine#boot_retry_enabled}

---

##### `cdrom`<sup>Optional</sup> <a name="cdrom" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cdrom"></a>

```typescript
public readonly cdrom: IResolvable | VirtualMachineCdrom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>[]

cdrom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#cdrom VirtualMachine#cdrom}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.clone"></a>

```typescript
public readonly clone: VirtualMachineClone;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#clone VirtualMachine#clone}

---

##### `cpuHotAddEnabled`<sup>Optional</sup> <a name="cpuHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotAddEnabled"></a>

```typescript
public readonly cpuHotAddEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#cpu_hot_add_enabled VirtualMachine#cpu_hot_add_enabled}

---

##### `cpuHotRemoveEnabled`<sup>Optional</sup> <a name="cpuHotRemoveEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuHotRemoveEnabled"></a>

```typescript
public readonly cpuHotRemoveEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow CPUs to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#cpu_hot_remove_enabled VirtualMachine#cpu_hot_remove_enabled}

---

##### `cpuLimit`<sup>Optional</sup> <a name="cpuLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuLimit"></a>

```typescript
public readonly cpuLimit: number;
```

- *Type:* number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#cpu_limit VirtualMachine#cpu_limit}

---

##### `cpuPerformanceCountersEnabled`<sup>Optional</sup> <a name="cpuPerformanceCountersEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuPerformanceCountersEnabled"></a>

```typescript
public readonly cpuPerformanceCountersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable CPU performance counters on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#cpu_performance_counters_enabled VirtualMachine#cpu_performance_counters_enabled}

---

##### `cpuReservation`<sup>Optional</sup> <a name="cpuReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuReservation"></a>

```typescript
public readonly cpuReservation: number;
```

- *Type:* number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#cpu_reservation VirtualMachine#cpu_reservation}

---

##### `cpuShareCount`<sup>Optional</sup> <a name="cpuShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareCount"></a>

```typescript
public readonly cpuShareCount: number;
```

- *Type:* number

The amount of shares to allocate to cpu for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#cpu_share_count VirtualMachine#cpu_share_count}

---

##### `cpuShareLevel`<sup>Optional</sup> <a name="cpuShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.cpuShareLevel"></a>

```typescript
public readonly cpuShareLevel: string;
```

- *Type:* string

The allocation level for cpu resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#cpu_share_level VirtualMachine#cpu_share_level}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of custom attributes to set on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#custom_attributes VirtualMachine#custom_attributes}

---

##### `datacenterId`<sup>Optional</sup> <a name="datacenterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

The ID of the datacenter where the VM is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#datacenter_id VirtualMachine#datacenter_id}

---

##### `datastoreClusterId`<sup>Optional</sup> <a name="datastoreClusterId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreClusterId"></a>

```typescript
public readonly datastoreClusterId: string;
```

- *Type:* string

The ID of a datastore cluster to put the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#datastore_cluster_id VirtualMachine#datastore_cluster_id}

---

##### `datastoreId`<sup>Optional</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

The ID of the virtual machine's datastore.

The virtual machine configuration is placed here, along with any virtual disks that are created without datastores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.disk"></a>

```typescript
public readonly disk: IResolvable | VirtualMachineDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>[]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#disk VirtualMachine#disk}

---

##### `efiSecureBootEnabled`<sup>Optional</sup> <a name="efiSecureBootEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.efiSecureBootEnabled"></a>

```typescript
public readonly efiSecureBootEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When the boot type set in firmware is efi, this enables EFI secure boot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#efi_secure_boot_enabled VirtualMachine#efi_secure_boot_enabled}

---

##### `enableDiskUuid`<sup>Optional</sup> <a name="enableDiskUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableDiskUuid"></a>

```typescript
public readonly enableDiskUuid: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Expose the UUIDs of attached virtual disks to the virtual machine, allowing access to them in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#enable_disk_uuid VirtualMachine#enable_disk_uuid}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable logging on this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#enable_logging VirtualMachine#enable_logging}

---

##### `eptRviMode`<sup>Optional</sup> <a name="eptRviMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.eptRviMode"></a>

```typescript
public readonly eptRviMode: string;
```

- *Type:* string

The EPT/RVI (hardware memory virtualization) setting for this virtual machine. Can be one of automatic, on, or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ept_rvi_mode VirtualMachine#ept_rvi_mode}

---

##### `extraConfig`<sup>Optional</sup> <a name="extraConfig" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfig"></a>

```typescript
public readonly extraConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Extra configuration data for this virtual machine.

Can be used to supply advanced parameters not normally in configuration, such as instance metadata, or configuration data for OVF images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#extra_config VirtualMachine#extra_config}

---

##### `extraConfigRebootRequired`<sup>Optional</sup> <a name="extraConfigRebootRequired" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.extraConfigRebootRequired"></a>

```typescript
public readonly extraConfigRebootRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow the virtual machine to be rebooted when a change to `extra_config` occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#extra_config_reboot_required VirtualMachine#extra_config_reboot_required}

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.firmware"></a>

```typescript
public readonly firmware: string;
```

- *Type:* string

The firmware interface to use on the virtual machine. Can be one of bios or efi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#firmware VirtualMachine#firmware}

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The name of the folder to locate the virtual machine in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#folder VirtualMachine#folder}

---

##### `forcePowerOff`<sup>Optional</sup> <a name="forcePowerOff" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.forcePowerOff"></a>

```typescript
public readonly forcePowerOff: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to force power-off a virtual machine if a graceful guest shutdown failed for a necessary operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#force_power_off VirtualMachine#force_power_off}

---

##### `guestId`<sup>Optional</sup> <a name="guestId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.guestId"></a>

```typescript
public readonly guestId: string;
```

- *Type:* string

The guest ID for the operating system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#guest_id VirtualMachine#guest_id}

---

##### `hardwareVersion`<sup>Optional</sup> <a name="hardwareVersion" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hardwareVersion"></a>

```typescript
public readonly hardwareVersion: number;
```

- *Type:* number

The hardware version for the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#hardware_version VirtualMachine#hardware_version}

---

##### `hostSystemId`<sup>Optional</sup> <a name="hostSystemId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hostSystemId"></a>

```typescript
public readonly hostSystemId: string;
```

- *Type:* string

The ID of an optional host system to pin the virtual machine to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#host_system_id VirtualMachine#host_system_id}

---

##### `hvMode`<sup>Optional</sup> <a name="hvMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.hvMode"></a>

```typescript
public readonly hvMode: string;
```

- *Type:* string

The (non-nested) hardware virtualization setting for this virtual machine. Can be one of hvAuto, hvOn, or hvOff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#hv_mode VirtualMachine#hv_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#id VirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ideControllerCount`<sup>Optional</sup> <a name="ideControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ideControllerCount"></a>

```typescript
public readonly ideControllerCount: number;
```

- *Type:* number

The number of IDE controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ide_controller_count VirtualMachine#ide_controller_count}

---

##### `ignoredGuestIps`<sup>Optional</sup> <a name="ignoredGuestIps" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ignoredGuestIps"></a>

```typescript
public readonly ignoredGuestIps: string[];
```

- *Type:* string[]

List of IP addresses and CIDR networks to ignore while waiting for an IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ignored_guest_ips VirtualMachine#ignored_guest_ips}

---

##### `latencySensitivity`<sup>Optional</sup> <a name="latencySensitivity" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.latencySensitivity"></a>

```typescript
public readonly latencySensitivity: string;
```

- *Type:* string

Controls the scheduling delay of the virtual machine.

Use a higher sensitivity for applications that require lower latency, such as VOIP, media player applications, or applications that require frequent access to mouse or keyboard devices. Can be one of low, normal, medium, or high.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#latency_sensitivity VirtualMachine#latency_sensitivity}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

The size of the virtual machine's memory, in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#memory VirtualMachine#memory}

---

##### `memoryHotAddEnabled`<sup>Optional</sup> <a name="memoryHotAddEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryHotAddEnabled"></a>

```typescript
public readonly memoryHotAddEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow memory to be added to this virtual machine while it is running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#memory_hot_add_enabled VirtualMachine#memory_hot_add_enabled}

---

##### `memoryLimit`<sup>Optional</sup> <a name="memoryLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryLimit"></a>

```typescript
public readonly memoryLimit: number;
```

- *Type:* number

The maximum amount of memory (in MB) or CPU (in MHz) that this virtual machine can consume, regardless of available resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#memory_limit VirtualMachine#memory_limit}

---

##### `memoryReservation`<sup>Optional</sup> <a name="memoryReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

The amount of memory (in MB) or CPU (in MHz) that this virtual machine is guaranteed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#memory_reservation VirtualMachine#memory_reservation}

---

##### `memoryReservationLockedToMax`<sup>Optional</sup> <a name="memoryReservationLockedToMax" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryReservationLockedToMax"></a>

```typescript
public readonly memoryReservationLockedToMax: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set true, memory resource reservation for this virtual machine will always be equal to the virtual machine's memory size;increases in memory size will be rejected when a corresponding reservation increase is not possible. This feature may only be enabled if it is currently possible to reserve all of the virtual machine's memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#memory_reservation_locked_to_max VirtualMachine#memory_reservation_locked_to_max}

---

##### `memoryShareCount`<sup>Optional</sup> <a name="memoryShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareCount"></a>

```typescript
public readonly memoryShareCount: number;
```

- *Type:* number

The amount of shares to allocate to memory for a custom share level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#memory_share_count VirtualMachine#memory_share_count}

---

##### `memoryShareLevel`<sup>Optional</sup> <a name="memoryShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.memoryShareLevel"></a>

```typescript
public readonly memoryShareLevel: string;
```

- *Type:* string

The allocation level for memory resources. Can be one of high, low, normal, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#memory_share_level VirtualMachine#memory_share_level}

---

##### `migrateWaitTimeout`<sup>Optional</sup> <a name="migrateWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.migrateWaitTimeout"></a>

```typescript
public readonly migrateWaitTimeout: number;
```

- *Type:* number

The amount of time, in minutes, to wait for a vMotion operation to complete before failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#migrate_wait_timeout VirtualMachine#migrate_wait_timeout}

---

##### `nestedHvEnabled`<sup>Optional</sup> <a name="nestedHvEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.nestedHvEnabled"></a>

```typescript
public readonly nestedHvEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable nested hardware virtualization on this virtual machine, facilitating nested virtualization in the guest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#nested_hv_enabled VirtualMachine#nested_hv_enabled}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | VirtualMachineNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#network_interface VirtualMachine#network_interface}

---

##### `numCoresPerSocket`<sup>Optional</sup> <a name="numCoresPerSocket" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCoresPerSocket"></a>

```typescript
public readonly numCoresPerSocket: number;
```

- *Type:* number

The number of cores to distribute amongst the CPUs in this virtual machine.

If specified, the value supplied to num_cpus must be evenly divisible by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#num_cores_per_socket VirtualMachine#num_cores_per_socket}

---

##### `numCpus`<sup>Optional</sup> <a name="numCpus" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.numCpus"></a>

```typescript
public readonly numCpus: number;
```

- *Type:* number

The number of virtual processors to assign to this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#num_cpus VirtualMachine#num_cpus}

---

##### `ovfDeploy`<sup>Optional</sup> <a name="ovfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.ovfDeploy"></a>

```typescript
public readonly ovfDeploy: VirtualMachineOvfDeploy;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

ovf_deploy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ovf_deploy VirtualMachine#ovf_deploy}

---

##### `pciDeviceId`<sup>Optional</sup> <a name="pciDeviceId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.pciDeviceId"></a>

```typescript
public readonly pciDeviceId: string[];
```

- *Type:* string[]

A list of PCI passthrough devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#pci_device_id VirtualMachine#pci_device_id}

---

##### `poweronTimeout`<sup>Optional</sup> <a name="poweronTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.poweronTimeout"></a>

```typescript
public readonly poweronTimeout: number;
```

- *Type:* number

The amount of time, in seconds, that we will be trying to power on a VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#poweron_timeout VirtualMachine#poweron_timeout}

---

##### `replaceTrigger`<sup>Optional</sup> <a name="replaceTrigger" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.replaceTrigger"></a>

```typescript
public readonly replaceTrigger: string;
```

- *Type:* string

Triggers replacement of resource whenever it changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#replace_trigger VirtualMachine#replace_trigger}

---

##### `runToolsScriptsAfterPowerOn`<sup>Optional</sup> <a name="runToolsScriptsAfterPowerOn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterPowerOn"></a>

```typescript
public readonly runToolsScriptsAfterPowerOn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the run of scripts after virtual machine power-on when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#run_tools_scripts_after_power_on VirtualMachine#run_tools_scripts_after_power_on}

---

##### `runToolsScriptsAfterResume`<sup>Optional</sup> <a name="runToolsScriptsAfterResume" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsAfterResume"></a>

```typescript
public readonly runToolsScriptsAfterResume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the run of scripts after virtual machine resume when when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#run_tools_scripts_after_resume VirtualMachine#run_tools_scripts_after_resume}

---

##### `runToolsScriptsBeforeGuestReboot`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestReboot" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestReboot"></a>

```typescript
public readonly runToolsScriptsBeforeGuestReboot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the run of scripts before guest operating system reboot when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_reboot VirtualMachine#run_tools_scripts_before_guest_reboot}

---

##### `runToolsScriptsBeforeGuestShutdown`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestShutdown" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestShutdown"></a>

```typescript
public readonly runToolsScriptsBeforeGuestShutdown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the run of scripts before guest operating system shutdown when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_shutdown VirtualMachine#run_tools_scripts_before_guest_shutdown}

---

##### `runToolsScriptsBeforeGuestStandby`<sup>Optional</sup> <a name="runToolsScriptsBeforeGuestStandby" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.runToolsScriptsBeforeGuestStandby"></a>

```typescript
public readonly runToolsScriptsBeforeGuestStandby: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the run of scripts before guest operating system standby when VMware Tools is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#run_tools_scripts_before_guest_standby VirtualMachine#run_tools_scripts_before_guest_standby}

---

##### `sataControllerCount`<sup>Optional</sup> <a name="sataControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.sataControllerCount"></a>

```typescript
public readonly sataControllerCount: number;
```

- *Type:* number

The number of SATA controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#sata_controller_count VirtualMachine#sata_controller_count}

---

##### `scsiBusSharing`<sup>Optional</sup> <a name="scsiBusSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiBusSharing"></a>

```typescript
public readonly scsiBusSharing: string;
```

- *Type:* string

Mode for sharing the SCSI bus. The modes are physicalSharing, virtualSharing, and noSharing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#scsi_bus_sharing VirtualMachine#scsi_bus_sharing}

---

##### `scsiControllerCount`<sup>Optional</sup> <a name="scsiControllerCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiControllerCount"></a>

```typescript
public readonly scsiControllerCount: number;
```

- *Type:* number

The number of SCSI controllers that Terraform manages on this virtual machine.

This directly affects the amount of disks you can add to the virtual machine and the maximum disk unit number. Note that lowering this value does not remove controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#scsi_controller_count VirtualMachine#scsi_controller_count}

---

##### `scsiType`<sup>Optional</sup> <a name="scsiType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.scsiType"></a>

```typescript
public readonly scsiType: string;
```

- *Type:* string

The type of SCSI bus this virtual machine will have. Can be one of lsilogic, lsilogic-sas or pvscsi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#scsi_type VirtualMachine#scsi_type}

---

##### `shutdownWaitTimeout`<sup>Optional</sup> <a name="shutdownWaitTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.shutdownWaitTimeout"></a>

```typescript
public readonly shutdownWaitTimeout: number;
```

- *Type:* number

The amount of time, in minutes, to wait for shutdown when making necessary updates to the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#shutdown_wait_timeout VirtualMachine#shutdown_wait_timeout}

---

##### `storagePolicyId`<sup>Optional</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.storagePolicyId"></a>

```typescript
public readonly storagePolicyId: string;
```

- *Type:* string

The ID of the storage policy to assign to the virtual machine home directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `swapPlacementPolicy`<sup>Optional</sup> <a name="swapPlacementPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.swapPlacementPolicy"></a>

```typescript
public readonly swapPlacementPolicy: string;
```

- *Type:* string

The swap file placement policy for this virtual machine. Can be one of inherit, hostLocal, or vmDirectory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#swap_placement_policy VirtualMachine#swap_placement_policy}

---

##### `syncTimeWithHost`<sup>Optional</sup> <a name="syncTimeWithHost" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHost"></a>

```typescript
public readonly syncTimeWithHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable guest clock synchronization with the host.

On vSphere 7.0 U1 and above, with only this setting the clock is synchronized on startup and resume. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#sync_time_with_host VirtualMachine#sync_time_with_host}

---

##### `syncTimeWithHostPeriodically`<sup>Optional</sup> <a name="syncTimeWithHostPeriodically" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.syncTimeWithHostPeriodically"></a>

```typescript
public readonly syncTimeWithHostPeriodically: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable periodic clock synchronization with the host.

Supported only on vSphere 7.0 U1 and above. On prior versions setting `sync_time_with_host` is enough for periodic synchronization. Requires VMware Tools to be installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#sync_time_with_host_periodically VirtualMachine#sync_time_with_host_periodically}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A list of tag IDs to apply to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#tags VirtualMachine#tags}

---

##### `toolsUpgradePolicy`<sup>Optional</sup> <a name="toolsUpgradePolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.toolsUpgradePolicy"></a>

```typescript
public readonly toolsUpgradePolicy: string;
```

- *Type:* string

Set the upgrade policy for VMware Tools. Can be one of `manual` or `upgradeAtPowerCycle`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#tools_upgrade_policy VirtualMachine#tools_upgrade_policy}

---

##### `vapp`<sup>Optional</sup> <a name="vapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vapp"></a>

```typescript
public readonly vapp: VirtualMachineVapp;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

vapp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#vapp VirtualMachine#vapp}

---

##### `vbsEnabled`<sup>Optional</sup> <a name="vbsEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vbsEnabled"></a>

```typescript
public readonly vbsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to specify if Virtualization-based security is enabled for this virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#vbs_enabled VirtualMachine#vbs_enabled}

---

##### `vvtdEnabled`<sup>Optional</sup> <a name="vvtdEnabled" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.vvtdEnabled"></a>

```typescript
public readonly vvtdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to specify if I/O MMU virtualization, also called Intel Virtualization Technology for Directed I/O (VT-d) and AMD I/O Virtualization (AMD-Vi or IOMMU), is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#vvtd_enabled VirtualMachine#vvtd_enabled}

---

##### `waitForGuestIpTimeout`<sup>Optional</sup> <a name="waitForGuestIpTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestIpTimeout"></a>

```typescript
public readonly waitForGuestIpTimeout: number;
```

- *Type:* number

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#wait_for_guest_ip_timeout VirtualMachine#wait_for_guest_ip_timeout}

---

##### `waitForGuestNetRoutable`<sup>Optional</sup> <a name="waitForGuestNetRoutable" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetRoutable"></a>

```typescript
public readonly waitForGuestNetRoutable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether or not the guest network waiter waits for a routable address.

When false, the waiter does not wait for a default gateway, nor are IP addresses checked against any discovered default gateways as part of its success criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#wait_for_guest_net_routable VirtualMachine#wait_for_guest_net_routable}

---

##### `waitForGuestNetTimeout`<sup>Optional</sup> <a name="waitForGuestNetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineConfig.property.waitForGuestNetTimeout"></a>

```typescript
public readonly waitForGuestNetTimeout: number;
```

- *Type:* number

The amount of time, in minutes, to wait for an available IP address on this virtual machine.

A value less than 1 disables the waiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#wait_for_guest_net_timeout VirtualMachine#wait_for_guest_net_timeout}

---

### VirtualMachineDisk <a name="VirtualMachineDisk" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineDisk: virtualMachine.VirtualMachineDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.label">label</a></code> | <code>string</code> | A unique label for this disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.attach">attach</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this is true, the disk is attached instead of created. Implies keep_on_remove. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.controllerType">controllerType</a></code> | <code>string</code> | The type of controller the disk should be connected to. Must be 'scsi', 'sata', or 'ide'. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.datastoreId">datastoreId</a></code> | <code>string</code> | The datastore ID for this virtual disk, if different than the virtual machine. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskMode">diskMode</a></code> | <code>string</code> | The mode of this this virtual disk for purposes of writes and snapshotting. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskSharing">diskSharing</a></code> | <code>string</code> | The sharing mode of this virtual disk. Can be one of sharingMultiWriter or sharingNone. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.eagerlyScrub">eagerlyScrub</a></code> | <code>boolean \| cdktf.IResolvable</code> | The virtual disk file zeroing policy when thin_provision is not true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioLimit">ioLimit</a></code> | <code>number</code> | The upper limit of IOPS that this disk can use. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioReservation">ioReservation</a></code> | <code>number</code> | The I/O guarantee that this disk has, in IOPS. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareCount">ioShareCount</a></code> | <code>number</code> | The share count for this disk when the share level is custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareLevel">ioShareLevel</a></code> | <code>string</code> | The share allocation level for this disk. Can be one of low, normal, high, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.keepOnRemove">keepOnRemove</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to keep the underlying VMDK file when removing this virtual disk from configuration. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.path">path</a></code> | <code>string</code> | The full path of the virtual disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.size">size</a></code> | <code>number</code> | The size of the disk, in GB. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.storagePolicyId">storagePolicyId</a></code> | <code>string</code> | The ID of the storage policy to assign to the virtual disk in VM. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.thinProvisioned">thinProvisioned</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, this disk is thin provisioned, with space for the file being allocated on an as-needed basis. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.unitNumber">unitNumber</a></code> | <code>number</code> | The unique device number for this disk. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.writeThrough">writeThrough</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, writes for this disk are sent directly to the filesystem immediately instead of being buffered. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

A unique label for this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#label VirtualMachine#label}

---

##### `attach`<sup>Optional</sup> <a name="attach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.attach"></a>

```typescript
public readonly attach: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this is true, the disk is attached instead of created. Implies keep_on_remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#attach VirtualMachine#attach}

---

##### `controllerType`<sup>Optional</sup> <a name="controllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.controllerType"></a>

```typescript
public readonly controllerType: string;
```

- *Type:* string

The type of controller the disk should be connected to. Must be 'scsi', 'sata', or 'ide'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#controller_type VirtualMachine#controller_type}

---

##### `datastoreId`<sup>Optional</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

The datastore ID for this virtual disk, if different than the virtual machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#datastore_id VirtualMachine#datastore_id}

---

##### `diskMode`<sup>Optional</sup> <a name="diskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskMode"></a>

```typescript
public readonly diskMode: string;
```

- *Type:* string

The mode of this this virtual disk for purposes of writes and snapshotting.

Can be one of append, independent_nonpersistent, independent_persistent, nonpersistent, persistent, or undoable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#disk_mode VirtualMachine#disk_mode}

---

##### `diskSharing`<sup>Optional</sup> <a name="diskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.diskSharing"></a>

```typescript
public readonly diskSharing: string;
```

- *Type:* string

The sharing mode of this virtual disk. Can be one of sharingMultiWriter or sharingNone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#disk_sharing VirtualMachine#disk_sharing}

---

##### `eagerlyScrub`<sup>Optional</sup> <a name="eagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.eagerlyScrub"></a>

```typescript
public readonly eagerlyScrub: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The virtual disk file zeroing policy when thin_provision is not true.

The default is false, which lazily-zeros the disk, speeding up thick-provisioned disk creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#eagerly_scrub VirtualMachine#eagerly_scrub}

---

##### `ioLimit`<sup>Optional</sup> <a name="ioLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioLimit"></a>

```typescript
public readonly ioLimit: number;
```

- *Type:* number

The upper limit of IOPS that this disk can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#io_limit VirtualMachine#io_limit}

---

##### `ioReservation`<sup>Optional</sup> <a name="ioReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioReservation"></a>

```typescript
public readonly ioReservation: number;
```

- *Type:* number

The I/O guarantee that this disk has, in IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#io_reservation VirtualMachine#io_reservation}

---

##### `ioShareCount`<sup>Optional</sup> <a name="ioShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareCount"></a>

```typescript
public readonly ioShareCount: number;
```

- *Type:* number

The share count for this disk when the share level is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#io_share_count VirtualMachine#io_share_count}

---

##### `ioShareLevel`<sup>Optional</sup> <a name="ioShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.ioShareLevel"></a>

```typescript
public readonly ioShareLevel: string;
```

- *Type:* string

The share allocation level for this disk. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#io_share_level VirtualMachine#io_share_level}

---

##### `keepOnRemove`<sup>Optional</sup> <a name="keepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.keepOnRemove"></a>

```typescript
public readonly keepOnRemove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to keep the underlying VMDK file when removing this virtual disk from configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#keep_on_remove VirtualMachine#keep_on_remove}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The full path of the virtual disk.

This can only be provided if attach is set to true, otherwise it is a read-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#path VirtualMachine#path}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

The size of the disk, in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#size VirtualMachine#size}

---

##### `storagePolicyId`<sup>Optional</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.storagePolicyId"></a>

```typescript
public readonly storagePolicyId: string;
```

- *Type:* string

The ID of the storage policy to assign to the virtual disk in VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#storage_policy_id VirtualMachine#storage_policy_id}

---

##### `thinProvisioned`<sup>Optional</sup> <a name="thinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.thinProvisioned"></a>

```typescript
public readonly thinProvisioned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, this disk is thin provisioned, with space for the file being allocated on an as-needed basis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#thin_provisioned VirtualMachine#thin_provisioned}

---

##### `unitNumber`<sup>Optional</sup> <a name="unitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.unitNumber"></a>

```typescript
public readonly unitNumber: number;
```

- *Type:* number

The unique device number for this disk.

This number determines where on the SCSI bus this device will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#unit_number VirtualMachine#unit_number}

---

##### `writeThrough`<sup>Optional</sup> <a name="writeThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk.property.writeThrough"></a>

```typescript
public readonly writeThrough: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, writes for this disk are sent directly to the filesystem immediately instead of being buffered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#write_through VirtualMachine#write_through}

---

### VirtualMachineNetworkInterface <a name="VirtualMachineNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineNetworkInterface: virtualMachine.VirtualMachineNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.networkId">networkId</a></code> | <code>string</code> | The ID of the network to connect this network interface to. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.adapterType">adapterType</a></code> | <code>string</code> | The controller type. Can be one of e1000, e1000e, sriov, vmxnet3, or vrdma. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthLimit">bandwidthLimit</a></code> | <code>number</code> | The upper bandwidth limit of this network interface, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthReservation">bandwidthReservation</a></code> | <code>number</code> | The bandwidth reservation of this network interface, in Mbits/sec. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareCount">bandwidthShareCount</a></code> | <code>number</code> | The share count for this network interface when the share level is custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareLevel">bandwidthShareLevel</a></code> | <code>string</code> | The bandwidth share allocation level for this interface. Can be one of low, normal, high, or custom. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.macAddress">macAddress</a></code> | <code>string</code> | The MAC address of this network interface. Can only be manually set if use_static_mac is true. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.ovfMapping">ovfMapping</a></code> | <code>string</code> | Mapping of network interface to OVF network. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.physicalFunction">physicalFunction</a></code> | <code>string</code> | The ID of the Physical SR-IOV NIC to attach to, e.g. '0000:d8:00.0'. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.useStaticMac">useStaticMac</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the mac_address field is treated as a static MAC address and set accordingly. |

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

The ID of the network to connect this network interface to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#network_id VirtualMachine#network_id}

---

##### `adapterType`<sup>Optional</sup> <a name="adapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.adapterType"></a>

```typescript
public readonly adapterType: string;
```

- *Type:* string

The controller type. Can be one of e1000, e1000e, sriov, vmxnet3, or vrdma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#adapter_type VirtualMachine#adapter_type}

---

##### `bandwidthLimit`<sup>Optional</sup> <a name="bandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthLimit"></a>

```typescript
public readonly bandwidthLimit: number;
```

- *Type:* number

The upper bandwidth limit of this network interface, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#bandwidth_limit VirtualMachine#bandwidth_limit}

---

##### `bandwidthReservation`<sup>Optional</sup> <a name="bandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthReservation"></a>

```typescript
public readonly bandwidthReservation: number;
```

- *Type:* number

The bandwidth reservation of this network interface, in Mbits/sec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#bandwidth_reservation VirtualMachine#bandwidth_reservation}

---

##### `bandwidthShareCount`<sup>Optional</sup> <a name="bandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareCount"></a>

```typescript
public readonly bandwidthShareCount: number;
```

- *Type:* number

The share count for this network interface when the share level is custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#bandwidth_share_count VirtualMachine#bandwidth_share_count}

---

##### `bandwidthShareLevel`<sup>Optional</sup> <a name="bandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.bandwidthShareLevel"></a>

```typescript
public readonly bandwidthShareLevel: string;
```

- *Type:* string

The bandwidth share allocation level for this interface. Can be one of low, normal, high, or custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#bandwidth_share_level VirtualMachine#bandwidth_share_level}

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

The MAC address of this network interface. Can only be manually set if use_static_mac is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#mac_address VirtualMachine#mac_address}

---

##### `ovfMapping`<sup>Optional</sup> <a name="ovfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.ovfMapping"></a>

```typescript
public readonly ovfMapping: string;
```

- *Type:* string

Mapping of network interface to OVF network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ovf_mapping VirtualMachine#ovf_mapping}

---

##### `physicalFunction`<sup>Optional</sup> <a name="physicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.physicalFunction"></a>

```typescript
public readonly physicalFunction: string;
```

- *Type:* string

The ID of the Physical SR-IOV NIC to attach to, e.g. '0000:d8:00.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#physical_function VirtualMachine#physical_function}

---

##### `useStaticMac`<sup>Optional</sup> <a name="useStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface.property.useStaticMac"></a>

```typescript
public readonly useStaticMac: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the mac_address field is treated as a static MAC address and set accordingly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#use_static_mac VirtualMachine#use_static_mac}

---

### VirtualMachineOvfDeploy <a name="VirtualMachineOvfDeploy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineOvfDeploy: virtualMachine.VirtualMachineOvfDeploy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.allowUnverifiedSslCert">allowUnverifiedSslCert</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow unverified ssl certificates while deploying ovf/ova from url. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.deploymentOption">deploymentOption</a></code> | <code>string</code> | The Deployment option to be chosen. If empty, the default option is used. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.diskProvisioning">diskProvisioning</a></code> | <code>string</code> | An optional disk provisioning. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.enableHiddenProperties">enableHiddenProperties</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow properties with ovf:userConfigurable=false to be set. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code>string</code> | The IP allocation policy. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.localOvfPath">localOvfPath</a></code> | <code>string</code> | The absolute path to the ovf/ova file in the local system. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ovfNetworkMap">ovfNetworkMap</a></code> | <code>{[ key: string ]: string}</code> | The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.remoteOvfUrl">remoteOvfUrl</a></code> | <code>string</code> | URL to the remote ovf/ova file to be deployed. |

---

##### `allowUnverifiedSslCert`<sup>Optional</sup> <a name="allowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.allowUnverifiedSslCert"></a>

```typescript
public readonly allowUnverifiedSslCert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow unverified ssl certificates while deploying ovf/ova from url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#allow_unverified_ssl_cert VirtualMachine#allow_unverified_ssl_cert}

---

##### `deploymentOption`<sup>Optional</sup> <a name="deploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.deploymentOption"></a>

```typescript
public readonly deploymentOption: string;
```

- *Type:* string

The Deployment option to be chosen. If empty, the default option is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#deployment_option VirtualMachine#deployment_option}

---

##### `diskProvisioning`<sup>Optional</sup> <a name="diskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.diskProvisioning"></a>

```typescript
public readonly diskProvisioning: string;
```

- *Type:* string

An optional disk provisioning.

If set, all the disks in the deployed ovf will have the same specified disk type (e.g., thin provisioned).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#disk_provisioning VirtualMachine#disk_provisioning}

---

##### `enableHiddenProperties`<sup>Optional</sup> <a name="enableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.enableHiddenProperties"></a>

```typescript
public readonly enableHiddenProperties: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow properties with ovf:userConfigurable=false to be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#enable_hidden_properties VirtualMachine#enable_hidden_properties}

---

##### `ipAllocationPolicy`<sup>Optional</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipAllocationPolicy"></a>

```typescript
public readonly ipAllocationPolicy: string;
```

- *Type:* string

The IP allocation policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ip_allocation_policy VirtualMachine#ip_allocation_policy}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ip_protocol VirtualMachine#ip_protocol}

---

##### `localOvfPath`<sup>Optional</sup> <a name="localOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.localOvfPath"></a>

```typescript
public readonly localOvfPath: string;
```

- *Type:* string

The absolute path to the ovf/ova file in the local system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#local_ovf_path VirtualMachine#local_ovf_path}

---

##### `ovfNetworkMap`<sup>Optional</sup> <a name="ovfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.ovfNetworkMap"></a>

```typescript
public readonly ovfNetworkMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The mapping of name of network identifiers from the ovf descriptor to network UUID in the VI infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#ovf_network_map VirtualMachine#ovf_network_map}

---

##### `remoteOvfUrl`<sup>Optional</sup> <a name="remoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy.property.remoteOvfUrl"></a>

```typescript
public readonly remoteOvfUrl: string;
```

- *Type:* string

URL to the remote ovf/ova file to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#remote_ovf_url VirtualMachine#remote_ovf_url}

---

### VirtualMachineVapp <a name="VirtualMachineVapp" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

const virtualMachineVapp: virtualMachine.VirtualMachineVapp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | A map of customizable vApp properties and their values. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of customizable vApp properties and their values.

Allows customization of VMs cloned from OVF templates which have customizable vApp properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vsphere/2.8.0/docs/resources/virtual_machine#properties VirtualMachine#properties}

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineCdromList <a name="VirtualMachineCdromList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineCdromList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get"></a>

```typescript
public get(index: number): VirtualMachineCdromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineCdrom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>[]

---


### VirtualMachineCdromOutputReference <a name="VirtualMachineCdromOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineCdromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetClientDevice">resetClientDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetDatastoreId">resetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientDevice` <a name="resetClientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetClientDevice"></a>

```typescript
public resetClientDevice(): void
```

##### `resetDatastoreId` <a name="resetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetDatastoreId"></a>

```typescript
public resetDatastoreId(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.deviceAddress">deviceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.key">key</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDeviceInput">clientDeviceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreIdInput">datastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDevice">clientDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreId">datastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceAddress`<sup>Required</sup> <a name="deviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.deviceAddress"></a>

```typescript
public readonly deviceAddress: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.key"></a>

```typescript
public readonly key: number;
```

- *Type:* number

---

##### `clientDeviceInput`<sup>Optional</sup> <a name="clientDeviceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDeviceInput"></a>

```typescript
public readonly clientDeviceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datastoreIdInput`<sup>Optional</sup> <a name="datastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreIdInput"></a>

```typescript
public readonly datastoreIdInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `clientDevice`<sup>Required</sup> <a name="clientDevice" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.clientDevice"></a>

```typescript
public readonly clientDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineCdrom;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCdrom">VirtualMachineCdrom</a>

---


### VirtualMachineCloneCustomizationSpecOutputReference <a name="VirtualMachineCloneCustomizationSpecOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineCloneCustomizationSpec;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---


### VirtualMachineCloneCustomizeLinuxOptionsOutputReference <a name="VirtualMachineCloneCustomizeLinuxOptionsOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetHwClockUtc">resetHwClockUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetScriptText">resetScriptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHwClockUtc` <a name="resetHwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetHwClockUtc"></a>

```typescript
public resetHwClockUtc(): void
```

##### `resetScriptText` <a name="resetScriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetScriptText"></a>

```typescript
public resetScriptText(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtcInput">hwClockUtcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptTextInput">scriptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtc">hwClockUtc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptText">scriptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `hwClockUtcInput`<sup>Optional</sup> <a name="hwClockUtcInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtcInput"></a>

```typescript
public readonly hwClockUtcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scriptTextInput`<sup>Optional</sup> <a name="scriptTextInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptTextInput"></a>

```typescript
public readonly scriptTextInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `hwClockUtc`<sup>Required</sup> <a name="hwClockUtc" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.hwClockUtc"></a>

```typescript
public readonly hwClockUtc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scriptText`<sup>Required</sup> <a name="scriptText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.scriptText"></a>

```typescript
public readonly scriptText: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineCloneCustomizeLinuxOptions;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---


### VirtualMachineCloneCustomizeNetworkInterfaceList <a name="VirtualMachineCloneCustomizeNetworkInterfaceList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get"></a>

```typescript
public get(index: number): VirtualMachineCloneCustomizeNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineCloneCustomizeNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>[]

---


### VirtualMachineCloneCustomizeNetworkInterfaceOutputReference <a name="VirtualMachineCloneCustomizeNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsDomain">resetDnsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsServerList">resetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Address">resetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Netmask">resetIpv4Netmask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Netmask">resetIpv6Netmask</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsDomain` <a name="resetDnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsDomain"></a>

```typescript
public resetDnsDomain(): void
```

##### `resetDnsServerList` <a name="resetDnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetDnsServerList"></a>

```typescript
public resetDnsServerList(): void
```

##### `resetIpv4Address` <a name="resetIpv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Address"></a>

```typescript
public resetIpv4Address(): void
```

##### `resetIpv4Netmask` <a name="resetIpv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv4Netmask"></a>

```typescript
public resetIpv4Netmask(): void
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Address"></a>

```typescript
public resetIpv6Address(): void
```

##### `resetIpv6Netmask` <a name="resetIpv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.resetIpv6Netmask"></a>

```typescript
public resetIpv6Netmask(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomainInput">dnsDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerListInput">dnsServerListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4NetmaskInput">ipv4NetmaskInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6NetmaskInput">ipv6NetmaskInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomain">dnsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerList">dnsServerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Netmask">ipv4Netmask</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Netmask">ipv6Netmask</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsDomainInput`<sup>Optional</sup> <a name="dnsDomainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomainInput"></a>

```typescript
public readonly dnsDomainInput: string;
```

- *Type:* string

---

##### `dnsServerListInput`<sup>Optional</sup> <a name="dnsServerListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerListInput"></a>

```typescript
public readonly dnsServerListInput: string[];
```

- *Type:* string[]

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4AddressInput"></a>

```typescript
public readonly ipv4AddressInput: string;
```

- *Type:* string

---

##### `ipv4NetmaskInput`<sup>Optional</sup> <a name="ipv4NetmaskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4NetmaskInput"></a>

```typescript
public readonly ipv4NetmaskInput: number;
```

- *Type:* number

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```typescript
public readonly ipv6AddressInput: string;
```

- *Type:* string

---

##### `ipv6NetmaskInput`<sup>Optional</sup> <a name="ipv6NetmaskInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6NetmaskInput"></a>

```typescript
public readonly ipv6NetmaskInput: number;
```

- *Type:* number

---

##### `dnsDomain`<sup>Required</sup> <a name="dnsDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsDomain"></a>

```typescript
public readonly dnsDomain: string;
```

- *Type:* string

---

##### `dnsServerList`<sup>Required</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.dnsServerList"></a>

```typescript
public readonly dnsServerList: string[];
```

- *Type:* string[]

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

---

##### `ipv4Netmask`<sup>Required</sup> <a name="ipv4Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv4Netmask"></a>

```typescript
public readonly ipv4Netmask: number;
```

- *Type:* number

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `ipv6Netmask`<sup>Required</sup> <a name="ipv6Netmask" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.ipv6Netmask"></a>

```typescript
public readonly ipv6Netmask: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineCloneCustomizeNetworkInterface;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>

---


### VirtualMachineCloneCustomizeOutputReference <a name="VirtualMachineCloneCustomizeOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineCloneCustomizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions">putLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions">putWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsServerList">resetDnsServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsSuffixList">resetDnsSuffixList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv4Gateway">resetIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv6Gateway">resetIpv6Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetLinuxOptions">resetLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsOptions">resetWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsSysprepText">resetWindowsSysprepText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinuxOptions` <a name="putLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions"></a>

```typescript
public putLinuxOptions(value: VirtualMachineCloneCustomizeLinuxOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putLinuxOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | VirtualMachineCloneCustomizeNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>[]

---

##### `putWindowsOptions` <a name="putWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions"></a>

```typescript
public putWindowsOptions(value: VirtualMachineCloneCustomizeWindowsOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.putWindowsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---

##### `resetDnsServerList` <a name="resetDnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsServerList"></a>

```typescript
public resetDnsServerList(): void
```

##### `resetDnsSuffixList` <a name="resetDnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetDnsSuffixList"></a>

```typescript
public resetDnsSuffixList(): void
```

##### `resetIpv4Gateway` <a name="resetIpv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv4Gateway"></a>

```typescript
public resetIpv4Gateway(): void
```

##### `resetIpv6Gateway` <a name="resetIpv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetIpv6Gateway"></a>

```typescript
public resetIpv6Gateway(): void
```

##### `resetLinuxOptions` <a name="resetLinuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetLinuxOptions"></a>

```typescript
public resetLinuxOptions(): void
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetNetworkInterface"></a>

```typescript
public resetNetworkInterface(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetWindowsOptions` <a name="resetWindowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsOptions"></a>

```typescript
public resetWindowsOptions(): void
```

##### `resetWindowsSysprepText` <a name="resetWindowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.resetWindowsSysprepText"></a>

```typescript
public resetWindowsSysprepText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptions">linuxOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference">VirtualMachineCloneCustomizeLinuxOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList">VirtualMachineCloneCustomizeNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptions">windowsOptions</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference">VirtualMachineCloneCustomizeWindowsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerListInput">dnsServerListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixListInput">dnsSuffixListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4GatewayInput">ipv4GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6GatewayInput">ipv6GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptionsInput">linuxOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptionsInput">windowsOptionsInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepTextInput">windowsSysprepTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerList">dnsServerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixList">dnsSuffixList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4Gateway">ipv4Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6Gateway">ipv6Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepText">windowsSysprepText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linuxOptions`<sup>Required</sup> <a name="linuxOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptions"></a>

```typescript
public readonly linuxOptions: VirtualMachineCloneCustomizeLinuxOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptionsOutputReference">VirtualMachineCloneCustomizeLinuxOptionsOutputReference</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterface"></a>

```typescript
public readonly networkInterface: VirtualMachineCloneCustomizeNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterfaceList">VirtualMachineCloneCustomizeNetworkInterfaceList</a>

---

##### `windowsOptions`<sup>Required</sup> <a name="windowsOptions" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptions"></a>

```typescript
public readonly windowsOptions: VirtualMachineCloneCustomizeWindowsOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference">VirtualMachineCloneCustomizeWindowsOptionsOutputReference</a>

---

##### `dnsServerListInput`<sup>Optional</sup> <a name="dnsServerListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerListInput"></a>

```typescript
public readonly dnsServerListInput: string[];
```

- *Type:* string[]

---

##### `dnsSuffixListInput`<sup>Optional</sup> <a name="dnsSuffixListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixListInput"></a>

```typescript
public readonly dnsSuffixListInput: string[];
```

- *Type:* string[]

---

##### `ipv4GatewayInput`<sup>Optional</sup> <a name="ipv4GatewayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4GatewayInput"></a>

```typescript
public readonly ipv4GatewayInput: string;
```

- *Type:* string

---

##### `ipv6GatewayInput`<sup>Optional</sup> <a name="ipv6GatewayInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6GatewayInput"></a>

```typescript
public readonly ipv6GatewayInput: string;
```

- *Type:* string

---

##### `linuxOptionsInput`<sup>Optional</sup> <a name="linuxOptionsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.linuxOptionsInput"></a>

```typescript
public readonly linuxOptionsInput: VirtualMachineCloneCustomizeLinuxOptions;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeLinuxOptions">VirtualMachineCloneCustomizeLinuxOptions</a>

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | VirtualMachineCloneCustomizeNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeNetworkInterface">VirtualMachineCloneCustomizeNetworkInterface</a>[]

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `windowsOptionsInput`<sup>Optional</sup> <a name="windowsOptionsInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsOptionsInput"></a>

```typescript
public readonly windowsOptionsInput: VirtualMachineCloneCustomizeWindowsOptions;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---

##### `windowsSysprepTextInput`<sup>Optional</sup> <a name="windowsSysprepTextInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepTextInput"></a>

```typescript
public readonly windowsSysprepTextInput: string;
```

- *Type:* string

---

##### `dnsServerList`<sup>Required</sup> <a name="dnsServerList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsServerList"></a>

```typescript
public readonly dnsServerList: string[];
```

- *Type:* string[]

---

##### `dnsSuffixList`<sup>Required</sup> <a name="dnsSuffixList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.dnsSuffixList"></a>

```typescript
public readonly dnsSuffixList: string[];
```

- *Type:* string[]

---

##### `ipv4Gateway`<sup>Required</sup> <a name="ipv4Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv4Gateway"></a>

```typescript
public readonly ipv4Gateway: string;
```

- *Type:* string

---

##### `ipv6Gateway`<sup>Required</sup> <a name="ipv6Gateway" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.ipv6Gateway"></a>

```typescript
public readonly ipv6Gateway: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `windowsSysprepText`<sup>Required</sup> <a name="windowsSysprepText" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.windowsSysprepText"></a>

```typescript
public readonly windowsSysprepText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineCloneCustomize;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---


### VirtualMachineCloneCustomizeWindowsOptionsOutputReference <a name="VirtualMachineCloneCustomizeWindowsOptionsOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogon">resetAutoLogon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogonCount">resetAutoLogonCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminPassword">resetDomainAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminUser">resetDomainAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainOu">resetDomainOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetFullName">resetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetJoinDomain">resetJoinDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetProductKey">resetProductKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetRunOnceCommandList">resetRunOnceCommandList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetWorkgroup">resetWorkgroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAdminPassword"></a>

```typescript
public resetAdminPassword(): void
```

##### `resetAutoLogon` <a name="resetAutoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogon"></a>

```typescript
public resetAutoLogon(): void
```

##### `resetAutoLogonCount` <a name="resetAutoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetAutoLogonCount"></a>

```typescript
public resetAutoLogonCount(): void
```

##### `resetDomainAdminPassword` <a name="resetDomainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminPassword"></a>

```typescript
public resetDomainAdminPassword(): void
```

##### `resetDomainAdminUser` <a name="resetDomainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainAdminUser"></a>

```typescript
public resetDomainAdminUser(): void
```

##### `resetDomainOu` <a name="resetDomainOu" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetDomainOu"></a>

```typescript
public resetDomainOu(): void
```

##### `resetFullName` <a name="resetFullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetFullName"></a>

```typescript
public resetFullName(): void
```

##### `resetJoinDomain` <a name="resetJoinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetJoinDomain"></a>

```typescript
public resetJoinDomain(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
```

##### `resetProductKey` <a name="resetProductKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetProductKey"></a>

```typescript
public resetProductKey(): void
```

##### `resetRunOnceCommandList` <a name="resetRunOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetRunOnceCommandList"></a>

```typescript
public resetRunOnceCommandList(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

##### `resetWorkgroup` <a name="resetWorkgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.resetWorkgroup"></a>

```typescript
public resetWorkgroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCountInput">autoLogonCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonInput">autoLogonInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerNameInput">computerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPasswordInput">domainAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUserInput">domainAdminUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOuInput">domainOuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomainInput">joinDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKeyInput">productKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandListInput">runOnceCommandListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroupInput">workgroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogon">autoLogon</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCount">autoLogonCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerName">computerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPassword">domainAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUser">domainAdminUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOu">domainOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomain">joinDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKey">productKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandList">runOnceCommandList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZone">timeZone</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroup">workgroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `autoLogonCountInput`<sup>Optional</sup> <a name="autoLogonCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCountInput"></a>

```typescript
public readonly autoLogonCountInput: number;
```

- *Type:* number

---

##### `autoLogonInput`<sup>Optional</sup> <a name="autoLogonInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonInput"></a>

```typescript
public readonly autoLogonInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `computerNameInput`<sup>Optional</sup> <a name="computerNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerNameInput"></a>

```typescript
public readonly computerNameInput: string;
```

- *Type:* string

---

##### `domainAdminPasswordInput`<sup>Optional</sup> <a name="domainAdminPasswordInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPasswordInput"></a>

```typescript
public readonly domainAdminPasswordInput: string;
```

- *Type:* string

---

##### `domainAdminUserInput`<sup>Optional</sup> <a name="domainAdminUserInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUserInput"></a>

```typescript
public readonly domainAdminUserInput: string;
```

- *Type:* string

---

##### `domainOuInput`<sup>Optional</sup> <a name="domainOuInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOuInput"></a>

```typescript
public readonly domainOuInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `joinDomainInput`<sup>Optional</sup> <a name="joinDomainInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomainInput"></a>

```typescript
public readonly joinDomainInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `productKeyInput`<sup>Optional</sup> <a name="productKeyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKeyInput"></a>

```typescript
public readonly productKeyInput: string;
```

- *Type:* string

---

##### `runOnceCommandListInput`<sup>Optional</sup> <a name="runOnceCommandListInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandListInput"></a>

```typescript
public readonly runOnceCommandListInput: string[];
```

- *Type:* string[]

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: number;
```

- *Type:* number

---

##### `workgroupInput`<sup>Optional</sup> <a name="workgroupInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroupInput"></a>

```typescript
public readonly workgroupInput: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `autoLogon`<sup>Required</sup> <a name="autoLogon" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogon"></a>

```typescript
public readonly autoLogon: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoLogonCount`<sup>Required</sup> <a name="autoLogonCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.autoLogonCount"></a>

```typescript
public readonly autoLogonCount: number;
```

- *Type:* number

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.computerName"></a>

```typescript
public readonly computerName: string;
```

- *Type:* string

---

##### `domainAdminPassword`<sup>Required</sup> <a name="domainAdminPassword" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminPassword"></a>

```typescript
public readonly domainAdminPassword: string;
```

- *Type:* string

---

##### `domainAdminUser`<sup>Required</sup> <a name="domainAdminUser" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainAdminUser"></a>

```typescript
public readonly domainAdminUser: string;
```

- *Type:* string

---

##### `domainOu`<sup>Required</sup> <a name="domainOu" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.domainOu"></a>

```typescript
public readonly domainOu: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `joinDomain`<sup>Required</sup> <a name="joinDomain" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.joinDomain"></a>

```typescript
public readonly joinDomain: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `productKey`<sup>Required</sup> <a name="productKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.productKey"></a>

```typescript
public readonly productKey: string;
```

- *Type:* string

---

##### `runOnceCommandList`<sup>Required</sup> <a name="runOnceCommandList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.runOnceCommandList"></a>

```typescript
public readonly runOnceCommandList: string[];
```

- *Type:* string[]

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: number;
```

- *Type:* number

---

##### `workgroup`<sup>Required</sup> <a name="workgroup" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.workgroup"></a>

```typescript
public readonly workgroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineCloneCustomizeWindowsOptions;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeWindowsOptions">VirtualMachineCloneCustomizeWindowsOptions</a>

---


### VirtualMachineCloneOutputReference <a name="VirtualMachineCloneOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineCloneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec">putCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize">putCustomize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomizationSpec">resetCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomize">resetCustomize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetLinkedClone">resetLinkedClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfNetworkMap">resetOvfNetworkMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfStorageMap">resetOvfStorageMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomizationSpec` <a name="putCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec"></a>

```typescript
public putCustomizationSpec(value: VirtualMachineCloneCustomizationSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomizationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---

##### `putCustomize` <a name="putCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize"></a>

```typescript
public putCustomize(value: VirtualMachineCloneCustomize): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.putCustomize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---

##### `resetCustomizationSpec` <a name="resetCustomizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomizationSpec"></a>

```typescript
public resetCustomizationSpec(): void
```

##### `resetCustomize` <a name="resetCustomize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetCustomize"></a>

```typescript
public resetCustomize(): void
```

##### `resetLinkedClone` <a name="resetLinkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetLinkedClone"></a>

```typescript
public resetLinkedClone(): void
```

##### `resetOvfNetworkMap` <a name="resetOvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfNetworkMap"></a>

```typescript
public resetOvfNetworkMap(): void
```

##### `resetOvfStorageMap` <a name="resetOvfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetOvfStorageMap"></a>

```typescript
public resetOvfStorageMap(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpec">customizationSpec</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference">VirtualMachineCloneCustomizationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customize">customize</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference">VirtualMachineCloneCustomizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpecInput">customizationSpecInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizeInput">customizeInput</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedCloneInput">linkedCloneInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMapInput">ovfNetworkMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMapInput">ovfStorageMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuidInput">templateUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedClone">linkedClone</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMap">ovfNetworkMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMap">ovfStorageMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuid">templateUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customizationSpec`<sup>Required</sup> <a name="customizationSpec" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpec"></a>

```typescript
public readonly customizationSpec: VirtualMachineCloneCustomizationSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpecOutputReference">VirtualMachineCloneCustomizationSpecOutputReference</a>

---

##### `customize`<sup>Required</sup> <a name="customize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customize"></a>

```typescript
public readonly customize: VirtualMachineCloneCustomizeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizeOutputReference">VirtualMachineCloneCustomizeOutputReference</a>

---

##### `customizationSpecInput`<sup>Optional</sup> <a name="customizationSpecInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizationSpecInput"></a>

```typescript
public readonly customizationSpecInput: VirtualMachineCloneCustomizationSpec;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomizationSpec">VirtualMachineCloneCustomizationSpec</a>

---

##### `customizeInput`<sup>Optional</sup> <a name="customizeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.customizeInput"></a>

```typescript
public readonly customizeInput: VirtualMachineCloneCustomize;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneCustomize">VirtualMachineCloneCustomize</a>

---

##### `linkedCloneInput`<sup>Optional</sup> <a name="linkedCloneInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedCloneInput"></a>

```typescript
public readonly linkedCloneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ovfNetworkMapInput`<sup>Optional</sup> <a name="ovfNetworkMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMapInput"></a>

```typescript
public readonly ovfNetworkMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ovfStorageMapInput`<sup>Optional</sup> <a name="ovfStorageMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMapInput"></a>

```typescript
public readonly ovfStorageMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateUuidInput`<sup>Optional</sup> <a name="templateUuidInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuidInput"></a>

```typescript
public readonly templateUuidInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `linkedClone`<sup>Required</sup> <a name="linkedClone" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.linkedClone"></a>

```typescript
public readonly linkedClone: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ovfNetworkMap`<sup>Required</sup> <a name="ovfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfNetworkMap"></a>

```typescript
public readonly ovfNetworkMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ovfStorageMap`<sup>Required</sup> <a name="ovfStorageMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.ovfStorageMap"></a>

```typescript
public readonly ovfStorageMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateUuid`<sup>Required</sup> <a name="templateUuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.templateUuid"></a>

```typescript
public readonly templateUuid: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineCloneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineClone;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineClone">VirtualMachineClone</a>

---


### VirtualMachineDiskList <a name="VirtualMachineDiskList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get"></a>

```typescript
public get(index: number): VirtualMachineDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>[]

---


### VirtualMachineDiskOutputReference <a name="VirtualMachineDiskOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetAttach">resetAttach</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetControllerType">resetControllerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDatastoreId">resetDatastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskMode">resetDiskMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskSharing">resetDiskSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetEagerlyScrub">resetEagerlyScrub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoLimit">resetIoLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoReservation">resetIoReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareCount">resetIoShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareLevel">resetIoShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetKeepOnRemove">resetKeepOnRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetStoragePolicyId">resetStoragePolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetThinProvisioned">resetThinProvisioned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetUnitNumber">resetUnitNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetWriteThrough">resetWriteThrough</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttach` <a name="resetAttach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetAttach"></a>

```typescript
public resetAttach(): void
```

##### `resetControllerType` <a name="resetControllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetControllerType"></a>

```typescript
public resetControllerType(): void
```

##### `resetDatastoreId` <a name="resetDatastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDatastoreId"></a>

```typescript
public resetDatastoreId(): void
```

##### `resetDiskMode` <a name="resetDiskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskMode"></a>

```typescript
public resetDiskMode(): void
```

##### `resetDiskSharing` <a name="resetDiskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetDiskSharing"></a>

```typescript
public resetDiskSharing(): void
```

##### `resetEagerlyScrub` <a name="resetEagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetEagerlyScrub"></a>

```typescript
public resetEagerlyScrub(): void
```

##### `resetIoLimit` <a name="resetIoLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoLimit"></a>

```typescript
public resetIoLimit(): void
```

##### `resetIoReservation` <a name="resetIoReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoReservation"></a>

```typescript
public resetIoReservation(): void
```

##### `resetIoShareCount` <a name="resetIoShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareCount"></a>

```typescript
public resetIoShareCount(): void
```

##### `resetIoShareLevel` <a name="resetIoShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetIoShareLevel"></a>

```typescript
public resetIoShareLevel(): void
```

##### `resetKeepOnRemove` <a name="resetKeepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetKeepOnRemove"></a>

```typescript
public resetKeepOnRemove(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetStoragePolicyId` <a name="resetStoragePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetStoragePolicyId"></a>

```typescript
public resetStoragePolicyId(): void
```

##### `resetThinProvisioned` <a name="resetThinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetThinProvisioned"></a>

```typescript
public resetThinProvisioned(): void
```

##### `resetUnitNumber` <a name="resetUnitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetUnitNumber"></a>

```typescript
public resetUnitNumber(): void
```

##### `resetWriteThrough` <a name="resetWriteThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.resetWriteThrough"></a>

```typescript
public resetWriteThrough(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.deviceAddress">deviceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.key">key</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attachInput">attachInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerTypeInput">controllerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreIdInput">datastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskModeInput">diskModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharingInput">diskSharingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrubInput">eagerlyScrubInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimitInput">ioLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservationInput">ioReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCountInput">ioShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevelInput">ioShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemoveInput">keepOnRemoveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyIdInput">storagePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisionedInput">thinProvisionedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumberInput">unitNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThroughInput">writeThroughInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attach">attach</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerType">controllerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreId">datastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskMode">diskMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharing">diskSharing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrub">eagerlyScrub</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimit">ioLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservation">ioReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCount">ioShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevel">ioShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemove">keepOnRemove</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyId">storagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisioned">thinProvisioned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumber">unitNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThrough">writeThrough</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceAddress`<sup>Required</sup> <a name="deviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.deviceAddress"></a>

```typescript
public readonly deviceAddress: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.key"></a>

```typescript
public readonly key: number;
```

- *Type:* number

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `attachInput`<sup>Optional</sup> <a name="attachInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attachInput"></a>

```typescript
public readonly attachInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `controllerTypeInput`<sup>Optional</sup> <a name="controllerTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerTypeInput"></a>

```typescript
public readonly controllerTypeInput: string;
```

- *Type:* string

---

##### `datastoreIdInput`<sup>Optional</sup> <a name="datastoreIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreIdInput"></a>

```typescript
public readonly datastoreIdInput: string;
```

- *Type:* string

---

##### `diskModeInput`<sup>Optional</sup> <a name="diskModeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskModeInput"></a>

```typescript
public readonly diskModeInput: string;
```

- *Type:* string

---

##### `diskSharingInput`<sup>Optional</sup> <a name="diskSharingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharingInput"></a>

```typescript
public readonly diskSharingInput: string;
```

- *Type:* string

---

##### `eagerlyScrubInput`<sup>Optional</sup> <a name="eagerlyScrubInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrubInput"></a>

```typescript
public readonly eagerlyScrubInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ioLimitInput`<sup>Optional</sup> <a name="ioLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimitInput"></a>

```typescript
public readonly ioLimitInput: number;
```

- *Type:* number

---

##### `ioReservationInput`<sup>Optional</sup> <a name="ioReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservationInput"></a>

```typescript
public readonly ioReservationInput: number;
```

- *Type:* number

---

##### `ioShareCountInput`<sup>Optional</sup> <a name="ioShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCountInput"></a>

```typescript
public readonly ioShareCountInput: number;
```

- *Type:* number

---

##### `ioShareLevelInput`<sup>Optional</sup> <a name="ioShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevelInput"></a>

```typescript
public readonly ioShareLevelInput: string;
```

- *Type:* string

---

##### `keepOnRemoveInput`<sup>Optional</sup> <a name="keepOnRemoveInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemoveInput"></a>

```typescript
public readonly keepOnRemoveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `storagePolicyIdInput`<sup>Optional</sup> <a name="storagePolicyIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyIdInput"></a>

```typescript
public readonly storagePolicyIdInput: string;
```

- *Type:* string

---

##### `thinProvisionedInput`<sup>Optional</sup> <a name="thinProvisionedInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisionedInput"></a>

```typescript
public readonly thinProvisionedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unitNumberInput`<sup>Optional</sup> <a name="unitNumberInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumberInput"></a>

```typescript
public readonly unitNumberInput: number;
```

- *Type:* number

---

##### `writeThroughInput`<sup>Optional</sup> <a name="writeThroughInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThroughInput"></a>

```typescript
public readonly writeThroughInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `attach`<sup>Required</sup> <a name="attach" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.attach"></a>

```typescript
public readonly attach: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `controllerType`<sup>Required</sup> <a name="controllerType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.controllerType"></a>

```typescript
public readonly controllerType: string;
```

- *Type:* string

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

---

##### `diskMode`<sup>Required</sup> <a name="diskMode" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskMode"></a>

```typescript
public readonly diskMode: string;
```

- *Type:* string

---

##### `diskSharing`<sup>Required</sup> <a name="diskSharing" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.diskSharing"></a>

```typescript
public readonly diskSharing: string;
```

- *Type:* string

---

##### `eagerlyScrub`<sup>Required</sup> <a name="eagerlyScrub" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.eagerlyScrub"></a>

```typescript
public readonly eagerlyScrub: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ioLimit`<sup>Required</sup> <a name="ioLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioLimit"></a>

```typescript
public readonly ioLimit: number;
```

- *Type:* number

---

##### `ioReservation`<sup>Required</sup> <a name="ioReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioReservation"></a>

```typescript
public readonly ioReservation: number;
```

- *Type:* number

---

##### `ioShareCount`<sup>Required</sup> <a name="ioShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareCount"></a>

```typescript
public readonly ioShareCount: number;
```

- *Type:* number

---

##### `ioShareLevel`<sup>Required</sup> <a name="ioShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.ioShareLevel"></a>

```typescript
public readonly ioShareLevel: string;
```

- *Type:* string

---

##### `keepOnRemove`<sup>Required</sup> <a name="keepOnRemove" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.keepOnRemove"></a>

```typescript
public readonly keepOnRemove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `storagePolicyId`<sup>Required</sup> <a name="storagePolicyId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.storagePolicyId"></a>

```typescript
public readonly storagePolicyId: string;
```

- *Type:* string

---

##### `thinProvisioned`<sup>Required</sup> <a name="thinProvisioned" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.thinProvisioned"></a>

```typescript
public readonly thinProvisioned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.unitNumber"></a>

```typescript
public readonly unitNumber: number;
```

- *Type:* number

---

##### `writeThrough`<sup>Required</sup> <a name="writeThrough" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.writeThrough"></a>

```typescript
public readonly writeThrough: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineDisk">VirtualMachineDisk</a>

---


### VirtualMachineNetworkInterfaceList <a name="VirtualMachineNetworkInterfaceList" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get"></a>

```typescript
public get(index: number): VirtualMachineNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>[]

---


### VirtualMachineNetworkInterfaceOutputReference <a name="VirtualMachineNetworkInterfaceOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetAdapterType">resetAdapterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthLimit">resetBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthReservation">resetBandwidthReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareCount">resetBandwidthShareCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareLevel">resetBandwidthShareLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetMacAddress">resetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetOvfMapping">resetOvfMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetPhysicalFunction">resetPhysicalFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetUseStaticMac">resetUseStaticMac</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdapterType` <a name="resetAdapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetAdapterType"></a>

```typescript
public resetAdapterType(): void
```

##### `resetBandwidthLimit` <a name="resetBandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthLimit"></a>

```typescript
public resetBandwidthLimit(): void
```

##### `resetBandwidthReservation` <a name="resetBandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthReservation"></a>

```typescript
public resetBandwidthReservation(): void
```

##### `resetBandwidthShareCount` <a name="resetBandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareCount"></a>

```typescript
public resetBandwidthShareCount(): void
```

##### `resetBandwidthShareLevel` <a name="resetBandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetBandwidthShareLevel"></a>

```typescript
public resetBandwidthShareLevel(): void
```

##### `resetMacAddress` <a name="resetMacAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetMacAddress"></a>

```typescript
public resetMacAddress(): void
```

##### `resetOvfMapping` <a name="resetOvfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetOvfMapping"></a>

```typescript
public resetOvfMapping(): void
```

##### `resetPhysicalFunction` <a name="resetPhysicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetPhysicalFunction"></a>

```typescript
public resetPhysicalFunction(): void
```

##### `resetUseStaticMac` <a name="resetUseStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.resetUseStaticMac"></a>

```typescript
public resetUseStaticMac(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.deviceAddress">deviceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.key">key</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterTypeInput">adapterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimitInput">bandwidthLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservationInput">bandwidthReservationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCountInput">bandwidthShareCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevelInput">bandwidthShareLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddressInput">macAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMappingInput">ovfMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunctionInput">physicalFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMacInput">useStaticMacInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterType">adapterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimit">bandwidthLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservation">bandwidthReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCount">bandwidthShareCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevel">bandwidthShareLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMapping">ovfMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunction">physicalFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMac">useStaticMac</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceAddress`<sup>Required</sup> <a name="deviceAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.deviceAddress"></a>

```typescript
public readonly deviceAddress: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.key"></a>

```typescript
public readonly key: number;
```

- *Type:* number

---

##### `adapterTypeInput`<sup>Optional</sup> <a name="adapterTypeInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterTypeInput"></a>

```typescript
public readonly adapterTypeInput: string;
```

- *Type:* string

---

##### `bandwidthLimitInput`<sup>Optional</sup> <a name="bandwidthLimitInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimitInput"></a>

```typescript
public readonly bandwidthLimitInput: number;
```

- *Type:* number

---

##### `bandwidthReservationInput`<sup>Optional</sup> <a name="bandwidthReservationInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservationInput"></a>

```typescript
public readonly bandwidthReservationInput: number;
```

- *Type:* number

---

##### `bandwidthShareCountInput`<sup>Optional</sup> <a name="bandwidthShareCountInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCountInput"></a>

```typescript
public readonly bandwidthShareCountInput: number;
```

- *Type:* number

---

##### `bandwidthShareLevelInput`<sup>Optional</sup> <a name="bandwidthShareLevelInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevelInput"></a>

```typescript
public readonly bandwidthShareLevelInput: string;
```

- *Type:* string

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddressInput"></a>

```typescript
public readonly macAddressInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `ovfMappingInput`<sup>Optional</sup> <a name="ovfMappingInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMappingInput"></a>

```typescript
public readonly ovfMappingInput: string;
```

- *Type:* string

---

##### `physicalFunctionInput`<sup>Optional</sup> <a name="physicalFunctionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunctionInput"></a>

```typescript
public readonly physicalFunctionInput: string;
```

- *Type:* string

---

##### `useStaticMacInput`<sup>Optional</sup> <a name="useStaticMacInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMacInput"></a>

```typescript
public readonly useStaticMacInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `adapterType`<sup>Required</sup> <a name="adapterType" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.adapterType"></a>

```typescript
public readonly adapterType: string;
```

- *Type:* string

---

##### `bandwidthLimit`<sup>Required</sup> <a name="bandwidthLimit" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthLimit"></a>

```typescript
public readonly bandwidthLimit: number;
```

- *Type:* number

---

##### `bandwidthReservation`<sup>Required</sup> <a name="bandwidthReservation" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthReservation"></a>

```typescript
public readonly bandwidthReservation: number;
```

- *Type:* number

---

##### `bandwidthShareCount`<sup>Required</sup> <a name="bandwidthShareCount" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareCount"></a>

```typescript
public readonly bandwidthShareCount: number;
```

- *Type:* number

---

##### `bandwidthShareLevel`<sup>Required</sup> <a name="bandwidthShareLevel" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.bandwidthShareLevel"></a>

```typescript
public readonly bandwidthShareLevel: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `ovfMapping`<sup>Required</sup> <a name="ovfMapping" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.ovfMapping"></a>

```typescript
public readonly ovfMapping: string;
```

- *Type:* string

---

##### `physicalFunction`<sup>Required</sup> <a name="physicalFunction" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.physicalFunction"></a>

```typescript
public readonly physicalFunction: string;
```

- *Type:* string

---

##### `useStaticMac`<sup>Required</sup> <a name="useStaticMac" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.useStaticMac"></a>

```typescript
public readonly useStaticMac: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VirtualMachineNetworkInterface;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineNetworkInterface">VirtualMachineNetworkInterface</a>

---


### VirtualMachineOvfDeployOutputReference <a name="VirtualMachineOvfDeployOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineOvfDeployOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetAllowUnverifiedSslCert">resetAllowUnverifiedSslCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDeploymentOption">resetDeploymentOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDiskProvisioning">resetDiskProvisioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetEnableHiddenProperties">resetEnableHiddenProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpAllocationPolicy">resetIpAllocationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetLocalOvfPath">resetLocalOvfPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetOvfNetworkMap">resetOvfNetworkMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetRemoteOvfUrl">resetRemoteOvfUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowUnverifiedSslCert` <a name="resetAllowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetAllowUnverifiedSslCert"></a>

```typescript
public resetAllowUnverifiedSslCert(): void
```

##### `resetDeploymentOption` <a name="resetDeploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDeploymentOption"></a>

```typescript
public resetDeploymentOption(): void
```

##### `resetDiskProvisioning` <a name="resetDiskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetDiskProvisioning"></a>

```typescript
public resetDiskProvisioning(): void
```

##### `resetEnableHiddenProperties` <a name="resetEnableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetEnableHiddenProperties"></a>

```typescript
public resetEnableHiddenProperties(): void
```

##### `resetIpAllocationPolicy` <a name="resetIpAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpAllocationPolicy"></a>

```typescript
public resetIpAllocationPolicy(): void
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetIpProtocol"></a>

```typescript
public resetIpProtocol(): void
```

##### `resetLocalOvfPath` <a name="resetLocalOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetLocalOvfPath"></a>

```typescript
public resetLocalOvfPath(): void
```

##### `resetOvfNetworkMap` <a name="resetOvfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetOvfNetworkMap"></a>

```typescript
public resetOvfNetworkMap(): void
```

##### `resetRemoteOvfUrl` <a name="resetRemoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.resetRemoteOvfUrl"></a>

```typescript
public resetRemoteOvfUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCertInput">allowUnverifiedSslCertInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOptionInput">deploymentOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioningInput">diskProvisioningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenPropertiesInput">enableHiddenPropertiesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicyInput">ipAllocationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPathInput">localOvfPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMapInput">ovfNetworkMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrlInput">remoteOvfUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCert">allowUnverifiedSslCert</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOption">deploymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioning">diskProvisioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenProperties">enableHiddenProperties</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicy">ipAllocationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPath">localOvfPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMap">ovfNetworkMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrl">remoteOvfUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowUnverifiedSslCertInput`<sup>Optional</sup> <a name="allowUnverifiedSslCertInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCertInput"></a>

```typescript
public readonly allowUnverifiedSslCertInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deploymentOptionInput`<sup>Optional</sup> <a name="deploymentOptionInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOptionInput"></a>

```typescript
public readonly deploymentOptionInput: string;
```

- *Type:* string

---

##### `diskProvisioningInput`<sup>Optional</sup> <a name="diskProvisioningInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioningInput"></a>

```typescript
public readonly diskProvisioningInput: string;
```

- *Type:* string

---

##### `enableHiddenPropertiesInput`<sup>Optional</sup> <a name="enableHiddenPropertiesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenPropertiesInput"></a>

```typescript
public readonly enableHiddenPropertiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAllocationPolicyInput`<sup>Optional</sup> <a name="ipAllocationPolicyInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicyInput"></a>

```typescript
public readonly ipAllocationPolicyInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `localOvfPathInput`<sup>Optional</sup> <a name="localOvfPathInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPathInput"></a>

```typescript
public readonly localOvfPathInput: string;
```

- *Type:* string

---

##### `ovfNetworkMapInput`<sup>Optional</sup> <a name="ovfNetworkMapInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMapInput"></a>

```typescript
public readonly ovfNetworkMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remoteOvfUrlInput`<sup>Optional</sup> <a name="remoteOvfUrlInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrlInput"></a>

```typescript
public readonly remoteOvfUrlInput: string;
```

- *Type:* string

---

##### `allowUnverifiedSslCert`<sup>Required</sup> <a name="allowUnverifiedSslCert" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.allowUnverifiedSslCert"></a>

```typescript
public readonly allowUnverifiedSslCert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deploymentOption`<sup>Required</sup> <a name="deploymentOption" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.deploymentOption"></a>

```typescript
public readonly deploymentOption: string;
```

- *Type:* string

---

##### `diskProvisioning`<sup>Required</sup> <a name="diskProvisioning" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.diskProvisioning"></a>

```typescript
public readonly diskProvisioning: string;
```

- *Type:* string

---

##### `enableHiddenProperties`<sup>Required</sup> <a name="enableHiddenProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.enableHiddenProperties"></a>

```typescript
public readonly enableHiddenProperties: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAllocationPolicy`<sup>Required</sup> <a name="ipAllocationPolicy" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipAllocationPolicy"></a>

```typescript
public readonly ipAllocationPolicy: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `localOvfPath`<sup>Required</sup> <a name="localOvfPath" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.localOvfPath"></a>

```typescript
public readonly localOvfPath: string;
```

- *Type:* string

---

##### `ovfNetworkMap`<sup>Required</sup> <a name="ovfNetworkMap" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.ovfNetworkMap"></a>

```typescript
public readonly ovfNetworkMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `remoteOvfUrl`<sup>Required</sup> <a name="remoteOvfUrl" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.remoteOvfUrl"></a>

```typescript
public readonly remoteOvfUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeployOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineOvfDeploy;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineOvfDeploy">VirtualMachineOvfDeploy</a>

---


### VirtualMachineVappOutputReference <a name="VirtualMachineVappOutputReference" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer"></a>

```typescript
import { virtualMachine } from '@cdktf/provider-vsphere'

new virtualMachine.VirtualMachineVappOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vsphere.virtualMachine.VirtualMachineVappOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VirtualMachineVapp;
```

- *Type:* <a href="#@cdktf/provider-vsphere.virtualMachine.VirtualMachineVapp">VirtualMachineVapp</a>

---



